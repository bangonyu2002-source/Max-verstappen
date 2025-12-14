import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const IframePage = () => {
  // 1. 주소창에서 '?id=...' 부분을 자동으로 읽어옵니다.
  // 예: /video?id=pMfOcNZOfvc 라고 들어오면 -> pMfOcNZOfvc를 가져옴
  const [searchParams] = useSearchParams();
  
  // 2. 읽어온 ID를 변수에 넣습니다. 
  // (만약 주소에 ID가 없으면, 뒤에 적힌 "jfKfPfyJRdk"(Lofi Girl)를 기본으로 틉니다.)
  const videoId = searchParams.get('id') || "jfKfPfyJRdk"; 

  return (
    <div className="relative w-full h-[calc(100vh-64px)] bg-black">
      
      {/* 뒤로 가기 버튼 (요청하신 최신 디자인 유지) */}
      <Link 
        to="/"
        className="fixed top-8 left-8 z-50 group flex items-center gap-3 px-5 py-2.5 bg-white/5 hover:bg-white backdrop-blur-xl border border-white/10 hover:border-white rounded-full transition-all duration-500 ease-out"
      >
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-black transition-colors duration-300">
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <span className="text-xs font-bold tracking-[0.2em] text-white/90 group-hover:text-black transition-colors duration-300">
          BACK TO HOME
        </span>
      </Link>

      {/* 3. 위에서 구한 videoId를 iframe 주소에 끼워 넣습니다. */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="Video Player"
        className="w-full h-full border-none"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default IframePage;