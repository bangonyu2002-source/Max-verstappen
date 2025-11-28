// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Homepage from './pages/Homepage';
import MyPage from './pages/MyPage';
import IframePage from './pages/IframePage';
import SplashScreen from './components/SplashScreen';
import F1MovieProfile from './pages/F1MovieProfile';

function App() {
  // 1. 스플래시 화면을 보여줄지 말지 결정하는 상태
  const [showSplash, setShowSplash] = useState(true);
  // 2. 스플래시 화면을 서서히 사라지게 할지 결정하는 상태
  const [isFading, setIsFading] = useState(false);

  // 주소 설정 (기존 유지)
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const basename = isLocal ? '/' : '/Max-verstappen/';

  useEffect(() => {
    // 1단계: 2초 뒤에 "사라지기 시작해라(Fade Out)" 신호 보냄
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2000);

    // 2단계: 총 3초(2초 대기 + 1초 사라짐) 뒤에 스플래시 화면을 아예 없앰
    const removeTimer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {/* 스플래시 화면 (showSplash가 true일 때만 보임) */}
      {showSplash && <SplashScreen isFading={isFading} />}

      {/* 메인 앱 (스플래시 화면 뒤에 미리 그려져 있음) */}
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="video" element={<IframePage />} />
            <Route path="f1-movie" element={<F1MovieProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;