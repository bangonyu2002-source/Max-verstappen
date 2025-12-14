import React, { useState } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState(''); // 닉네임 상태 추가

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        // 1. 닉네임 중복 체크
        const { data: existingNick } = await supabase
          .from('profiles')
          .select('nickname')
          .eq('nickname', nickname)
          .single();

        if (existingNick) {
          alert("이미 존재하는 닉네임입니다! 다른 걸 써주세요.");
          setLoading(false);
          return;
        }

        // 2. 회원가입
        const { data: authData, error: signUpError } = await supabase.auth.signUp({ email, password });
        if (signUpError) throw signUpError;

        if (authData.user) {
          // 3. 프로필 테이블에 닉네임 저장
          const { error: profileError } = await supabase.from('profiles').insert([
            { id: authData.user.id, email, nickname, avatar_url: '' }
          ]);
          if (profileError) throw profileError;

          alert("가입 성공! 환영합니다.");
          // 바로 로그인 처리됨
          navigate('/');
        }
      } else {
        // 로그인
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate('/');
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white p-6 relative overflow-hidden">
      {/* (디자인 코드는 아까와 동일하지만 입력창이 추가됨) */}
      <div className="relative z-10 w-full max-w-md bg-[#111]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
        <h1 className="text-3xl font-black italic text-center mb-8">DRIVER ACCESS</h1>
        
        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-gray-400 ml-1">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} 
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none" />
          </div>

          {/* 회원가입일 때만 닉네임 입력창 보임 */}
          {isSignUp && (
            <div className="animate-in fade-in slide-in-from-top-2">
              <label className="text-xs font-bold text-gray-400 ml-1">Nickname (Unique)</label>
              <input type="text" required value={nickname} onChange={(e) => setNickname(e.target.value)} 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-green-500 outline-none" placeholder="드라이버 닉네임" />
            </div>
          )}

          <div>
            <label className="text-xs font-bold text-gray-400 ml-1">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} 
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none" />
          </div>

          <button type="submit" disabled={loading} className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition">
            {loading ? 'Processing...' : (isSignUp ? 'Join Team' : 'Sign In')}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button onClick={() => setIsSignUp(!isSignUp)} className="text-gray-500 text-sm hover:text-blue-400 underline underline-offset-4">
            {isSignUp ? "계정이 있으신가요? 로그인" : "새 드라이버 등록하기 (회원가입)"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;