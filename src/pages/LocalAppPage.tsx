import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const LocalAppPage = () => {
  const [searchParams] = useSearchParams();
  const appName = searchParams.get('name');

  if (!appName) {
    return <div className="text-white text-center pt-20">앱 이름을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      
      {/* 나가기 버튼 */}
      <Link 
        to="/"
        className="fixed top-8 left-8 z-50 group flex items-center gap-3 px-5 py-2.5 bg-black/50 hover:bg-black backdrop-blur-xl border border-white/10 hover:border-white rounded-full transition-all duration-500 ease-out"
      >
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
          <svg className="w-3 h-3 text-white group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <span className="text-xs font-bold tracking-[0.2em] text-white/90 group-hover:text-white transition-colors duration-300">
          EXIT APP
        </span>
      </Link>

      {/* 앱 실행 화면 (public 폴더 연결) */}
      <iframe
        src={`/apps/${appName}/index.html`}
        title="Local App"
        className="w-full h-full border-none bg-white"
        allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write;"
      ></iframe>
    </div>
  );
};

export default LocalAppPage;