import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import AvatarUpload from '../components/AvatarUpload'; // 방금 만든 컴포넌트

const MyPage = () => {
  const { user, profile, signOut, updateProfile } = useAuth();
  const navigate = useNavigate();

  // 편집 모드 상태 (false: 보기 모드, true: 수정 모드)
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // 입력값 관리
  const [nickname, setNickname] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  // 페이지 들어오면 기존 정보 채워넣기
  useEffect(() => {
    if (profile) {
        setNickname(profile.nickname || '');
        setAvatarUrl(profile.avatar_url || '');
    }
  }, [profile]);

  const handleLogout = async () => {
    if (window.confirm('정말 로그아웃 하시겠습니까?')) {
        await signOut();
        navigate('/login');
    }
  };

  // 저장 버튼 눌렀을 때
  const handleSave = async () => {
      try {
          setLoading(true);
          // 수파베이스 업데이트
          await updateProfile({
              nickname,
              avatar_url: avatarUrl
          });
          setIsEditing(false); // 다시 보기 모드로
          alert("프로필이 업데이트 되었습니다! 🏁");
      } catch (error: any) {
          alert("업데이트 실패: " + error.message);
      } finally {
          setLoading(false);
      }
  };

  return (
    <div className="max-w-4xl mx-auto w-full animate-in fade-in duration-700">
        
        {/* 1. 프로필 카드 영역 */}
        <div className="relative mb-8 group">
            <div className="h-40 w-full bg-gradient-to-r from-blue-900 via-indigo-900 to-[#111] rounded-t-3xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="bg-[#111] border border-white/5 border-t-0 rounded-b-3xl p-6 md:p-8 relative">
                
                {/* 프로필 사진 (편집 모드일 땐 업로드 기능 활성화) */}
                <div className="absolute -top-16 left-6 md:left-10">
                    {isEditing && user ? (
                        <AvatarUpload 
                            uid={user.id}
                            url={avatarUrl}
                            onUpload={(url) => setAvatarUrl(url)}
                        />
                    ) : (
                        // 보기 모드일 때
                        <div className="w-32 h-32 rounded-full p-1 bg-[#111]"> 
                            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden border-4 border-[#222] shadow-2xl">
                                {avatarUrl ? (
                                    <img src={avatarUrl} alt="Profile" className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-4xl">🏎️</span>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* 텍스트 정보 */}
                <div className="mt-16 md:mt-0 md:ml-40">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div className="flex-grow">
                            {isEditing ? (
                                // [수정 모드] 닉네임 입력창
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs text-gray-500 font-bold uppercase">Nickname</label>
                                    <input 
                                        type="text" 
                                        value={nickname}
                                        onChange={(e) => setNickname(e.target.value)}
                                        className="bg-black/50 border border-white/20 rounded-lg px-3 py-2 text-white font-bold text-2xl focus:border-blue-500 outline-none w-full max-w-xs"
                                    />
                                </div>
                            ) : (
                                // [보기 모드] 닉네임 표시
                                <>
                                    <h1 className="text-3xl font-black text-white tracking-tight mb-1">
                                        {profile?.nickname || 'Unknown Driver'}
                                    </h1>
                                    <p className="text-blue-400 font-bold text-sm tracking-wide uppercase">
                                        {user?.email}
                                    </p>
                                </>
                            )}
                        </div>
                        
                        {/* 버튼들 */}
                        <div className="flex gap-3">
                             {isEditing ? (
                                 <>
                                    <button 
                                        onClick={() => setIsEditing(false)}
                                        className="px-4 py-2 bg-[#333] text-gray-300 text-sm font-bold rounded-full hover:bg-[#444] transition"
                                        disabled={loading}
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        onClick={handleSave}
                                        className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-500 transition shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                                        disabled={loading}
                                    >
                                        {loading ? 'Saving...' : 'Save Changes'}
                                    </button>
                                 </>
                             ) : (
                                <button 
                                    onClick={() => setIsEditing(true)}
                                    className="px-4 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition"
                                >
                                    Edit Profile
                                </button>
                             )}
                            
                            {!isEditing && (
                                <button 
                                    onClick={handleLogout}
                                    className="px-4 py-2 bg-red-500/10 border border-red-500/50 text-red-500 text-sm font-bold rounded-full hover:bg-red-500 hover:text-white transition"
                                >
                                    Sign Out
                                </button>
                            )}
                        </div>
                    </div>

                    <p className="text-gray-400 leading-relaxed text-sm border-t border-white/5 pt-4">
                        안녕하세요! <br/>
                        F1과 코딩을 사랑하는 개발자입니다. <br/>
                        오늘도 최고의 랩타임을 위해 달립니다.
                    </p>
                </div>
            </div>
        </div>

        {/* 2. 하단 정보 (기존 유지) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#111] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition duration-300">
            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vite'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/5 text-gray-300 rounded-xl text-sm font-medium hover:bg-white/10 hover:text-white transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#111] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition duration-300">
            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-gray-300 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-lg group-hover:bg-white/10 transition">✉️</div>
                <span className="text-sm font-medium group-hover:text-white transition">{user?.email}</span>
              </li>
              <li className="flex items-center gap-4 text-gray-300 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-lg group-hover:bg-white/10 transition">🐙</div>
                <span className="text-sm font-medium group-hover:text-white transition">github.com/my-repo</span>
              </li>
            </ul>
          </div>
        </div>

    </div>
  );
};

export default MyPage;