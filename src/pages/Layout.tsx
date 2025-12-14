import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
// ▼ [추가] 로그인 정보를 가져오기 위해 import
import { useAuth } from '../contexts/AuthContext';

const Layout = () => {
  const location = useLocation();
  // ▼ [추가] 현재 로그인한 유저(user)와 프로필(profile) 정보 가져오기
  const { user, profile } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-gray-100 font-sans selection:bg-white/20">
      
      <header className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-gray-300 transition-colors">
                MY DASHBOARD
              </span>
            </Link>

            <nav className="flex items-center gap-6 text-sm font-medium">
               <Link to="/" className={`transition-colors ${location.pathname === '/' ? 'text-white' : 'text-gray-500 hover:text-white'}`}>Home</Link>
               
               {/* 
                  ▼ [수정됨] 로그인 상태에 따라 다른 것을 보여줍니다.
                  - user가 있다(로그인 됨) 👉 프로필 동그라미 표시
                  - user가 없다(로그인 안됨) 👉 Login 버튼 표시
               */}
               {user ? (
                 <Link 
                   to="/mypage" 
                   className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[2px] hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                   title="마이페이지로 이동"
                 >
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                       {/* 프로필 사진이 있으면 보여주고, 없으면 F1 아이콘 보여줌 */}
                       {profile?.avatar_url ? (
                          <img src={profile.avatar_url} alt="Profile" className="w-full h-full object-cover" />
                       ) : (
                          <span className="text-lg">🏎️</span>
                       )}
                    </div>
                 </Link>
               ) : (
                 <Link to="/login" className="px-5 py-2 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                   Login
                 </Link>
               )}

            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-32 pb-20 px-6">
        <Outlet />
      </main>

      <div className="border-t border-white/5 mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;