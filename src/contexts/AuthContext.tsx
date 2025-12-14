import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabase';

interface Profile {
  nickname: string;
  avatar_url: string;
  email: string;
}

interface AuthContextType {
  user: any;
  profile: Profile | null;
  loading: boolean;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<Profile>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  // 프로필 데이터 가져오기
  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error && error.code !== 'PGRST116') { // 데이터가 없는 에러는 무시
        console.error('Error fetching profile:', error);
      }
      
      setProfile(data); // 데이터가 없으면 null이 들어감 -> 'Unknown Driver' 표시됨
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      if (session?.user) {
        await fetchProfile(session.user.id);
      }
      setLoading(false);
    };
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        await fetchProfile(session.user.id);
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setProfile(null);
    setUser(null);
  };

  // ▼▼▼ [핵심 수정] update -> upsert 로 변경! ▼▼▼
  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) return;

    // "없으면 만들고(Insert), 있으면 수정(Update)해라" 라는 강력한 명령어입니다.
    const { error } = await supabase
      .from('profiles')
      .upsert({
        id: user.id,        // 누구인지(ID)는 필수!
        email: user.email,  // 이메일도 확실하게 넣어줌
        ...updates,         // 닉네임, 사진 변경사항 적용
        updated_at: new Date() // 수정 시간 갱신
      });

    if (error) {
        console.error("업데이트 실패 원인:", error); // 에러 확인용 로그
        throw error;
    }

    // 성공하면 즉시 화면 갱신
    await fetchProfile(user.id);
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, signOut, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);