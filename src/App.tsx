import React, { useState, useEffect, JSX } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext'; // 방금 만든 파일
import Layout from './pages/Layout';
import Homepage from './pages/Homepage';
import MyPage from './pages/MyPage';
import IframePage from './pages/IframePage';
import F1MovieProfile from './pages/F1MovieProfile';
import LoginPage from './pages/LoginPage';
import SplashScreen from './components/SplashScreen';
import { Analytics } from '@vercel/analytics/react';

// 로그인 안 했으면 튕겨내는 컴포넌트
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();
  if (loading) return null; // 로딩 중엔 아무것도 안 보여줌
  if (!user) return <Navigate to="/login" replace />;
  return children;
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
        <BrowserRouter basename="/Max-verstappen/">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            
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