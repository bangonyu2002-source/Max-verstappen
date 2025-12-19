import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './pages/Layout';
import Homepage from './pages/Homepage';
import MyPage from './pages/MyPage';
import IframePage from './pages/IframePage';
import F1MovieProfile from './pages/F1MovieProfile';
import LoginPage from './pages/LoginPage';
import LocalAppPage from './pages/LocalAppPage';
import SplashScreen from './components/SplashScreen';
import { Analytics } from '@vercel/analytics/react';

// 로그인 안 했으면 튕겨내는 컴포넌트 (흰 화면 방지 수정됨)
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  // ▼ [수정] 로딩 중일 때 null(흰화면) 대신 'Loading...'을 보여줍니다.
  if (loading) {
    return (
        <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center font-bold text-xl animate-pulse">
            Loading...
        </div>
    );
  }
  
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => { setIsFading(true); }, 2000);
    const removeTimer = setTimeout(() => { setShowSplash(false); }, 3000);
    return () => { clearTimeout(fadeTimer); clearTimeout(removeTimer); };
  }, []);

  return (
    <AuthProvider>
      {showSplash && <SplashScreen isFading={isFading} />}
      
      {!showSplash && ( // 스플래시 끝나야 앱 시작
        /* Vercel 배포용 경로 설정 (/) */
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            
            {/* 앱 뷰어 페이지 (전체화면) */}
            <Route path="/app" element={<LocalAppPage />} />
            
            {/* 로그인해야만 접근 가능하도록 감싸기 */}
            <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
              <Route index element={<Homepage />} />
              <Route path="mypage" element={<MyPage />} />
              <Route path="video" element={<IframePage />} />
              <Route path="f1-movie" element={<F1MovieProfile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
      
      <Analytics />
    </AuthProvider>
  );
}

export default App;