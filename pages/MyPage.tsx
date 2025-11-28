// src/pages/MyPage.tsx
import React from 'react';

const MyPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        
        {/* 1. 상단 프로필 영역 */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
          <div className="px-8 pb-8">
            <div className="relative -mt-16 mb-4">
              <img 
                src="https://picsum.photos/seed/me/200/200" 
                alt="프로필" 
                className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-800 shadow-lg object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              방온유 (자신의 이름)
            </h1>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
              프론트엔드 개발자 지망생
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              안녕하세요! 코딩을 배우고 있는 열정적인 개발자입니다. <br/>
              이곳은 제가 만든 웹사이트들을 모아놓은 공간입니다.
            </p>
          </div>
        </div>

        {/* 2. 스킬 목록 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 dark:text-white">🛠️ 사용 기술</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Git'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 dark:text-white">📬 연락처</h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li>📧 email@example.com</li>
              <li>🐙 github.com/username</li>
              <li>📷 instagram.com/id</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MyPage;