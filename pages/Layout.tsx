// src/pages/Layout.tsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors">
      
      {/* ▼ [NEW] 여기에 공통 헤더를 추가했습니다! */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur text-white shadow-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* 로고를 누르면 항상 홈으로 돌아갑니다 */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              ✨ 나만의 웹사이트
            </span>
          </Link>

          {/* 오른쪽에 추가 메뉴를 넣을 수도 있습니다 */}
          <nav className="flex gap-4">
             <Link to="/" className="text-sm font-medium hover:text-blue-400">홈</Link>
             <Link to="/mypage" className="text-sm font-medium hover:text-purple-400">마이페이지</Link>
          </nav>
        </div>
      </header>

      {/* 본문 (페이지마다 바뀌는 곳) */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* 푸터 */}
      <Footer />
    </div>
  );
};

export default Layout;