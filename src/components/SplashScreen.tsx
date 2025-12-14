// components/SplashScreen.tsx

import React from 'react';

// App.tsx에서 보내주는 'isFading' 신호를 받을 준비를 합니다.
interface SplashScreenProps {
  isFading: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isFading }) => {
  return (
    <div
      // 배경색, 위치, Z-Index, 페이드 아웃 애니메이션 설정
      className={`fixed inset-0 bg-white z-[9999] flex items-center justify-center transition-opacity duration-1000 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* 로고 애니메이션 컨테이너 */}
      <div className="animate-bounce">
        <img
          // public 폴더 내에 있는 logo.svg 파일을 사용합니다.
          src="./logo.svg" 
          alt="My Website Logo"
          // 🚨 크기를 두 배(w-64 h-64, 256px x 256px)로 변경했습니다.
          className="w-64 h-64 object-contain filter shadow-blue-500/50" 
        />
      </div>
    </div>
  );
};

export default SplashScreen;