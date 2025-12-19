import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

// ▼ [데이터] 카테고리 정리 (MOVIE, F1 LEGEND, APP)
const CONTENTS = [
  // 1. 영화 (MOVIE)
  {
    id: 'f1-movie-card',
    type: 'MOVIE',
    title: 'F1: THE MOVIE',
    subtitle: 'Brad Pitt • 2025',
    img: './main poster.jpg',
    path: '/f1-movie',
    size: 'large' // 2x2 크기
  },

  // 2. F1 레전드 선수들 (F1 LEGEND로 통일)
  {
    id: 'Max verstappn',
    type: 'F1 LEGEND',
    title: 'MAX VERSTAPPEN',
    subtitle: 'Lion Unleashed',
    img: './verstappen.jpg',
    path: './video?id=ZIsjp5cZ4N4',
    size: 'tall' // 세로로 긴 카드
  },
  {
    id: 'Ayrton Senna',
    type: 'F1 LEGEND',
    title: 'AYRTON SENNA',
    subtitle: 'Forever Champion',
    img: './senna.jpg',
    path: './video?id=pMfOcNZOfvc',
    size: 'normal'
  },
  {
    id: 'Lewis Hamilton',
    type: 'F1 LEGEND',
    title: 'LEWIS HAMILTON',
    subtitle: 'Still We Rise',
    img: './Hamilton.jpg',
    path: './video?id=ehBkzd0cpb4',
    size: 'normal'
  },
  {
    id: 'Michael Schumacher',
    type: 'F1 LEGEND',
    title: 'MICHAEL SCHUMACHER',
    subtitle: 'The Red Baron',
    img: './Michael.jpg',
    path: './video?id=CelApFIyy8A',
    size: 'wide' // 가로로 긴 카드
  },

  // 3. 구글 AI 스튜디오 앱 10개 (APP) - 디자인을 위해 크기를 섞었습니다.
  {
    id: 'ai-app-1',
    type: 'APP',
    title: 'AI CHATBOT',
    subtitle: 'Google Gemini Pro',
    img: 'https://picsum.photos/seed/app1/600/400', // 임시 이미지
    path: '#', // 실제 앱 링크로 바꾸세요
    size: 'wide'
  },
  {
    id: 'ai-app-2',
    type: 'APP',
    title: 'IMAGE GENERATOR',
    subtitle: 'Create Art with AI',
    img: 'https://picsum.photos/seed/app2/400/400',
    path: '#',
    size: 'normal'
  },
  {
    id: 'ai-app-3',
    type: 'APP',
    title: 'CODE ASSISTANT',
    subtitle: 'Smart Coding Tool',
    img: 'https://picsum.photos/seed/app3/400/800',
    path: '#',
    size: 'tall'
  },
  {
    id: 'ai-app-4',
    type: 'APP',
    title: 'DATA ANALYZER',
    subtitle: 'Visualize Insights',
    img: 'https://picsum.photos/seed/app4/400/400',
    path: '#',
    size: 'normal'
  },
  {
    id: 'ai-app-5',
    type: 'APP',
    title: 'TRANSLATOR PRO',
    subtitle: 'Real-time Translation',
    img: 'https://picsum.photos/seed/app5/400/400',
    path: '#',
    size: 'normal'
  },
  {
    id: 'ai-app-6',
    type: 'APP',
    title: 'MUSIC COMPOSER',
    subtitle: 'AI Beat Maker',
    img: 'https://picsum.photos/seed/app6/600/400',
    path: '#',
    size: 'wide'
  },
  {
    id: 'ai-app-7',
    type: 'APP',
    title: 'STORY WRITER',
    subtitle: 'Creative Writing Aid',
    img: 'https://picsum.photos/seed/app7/400/400',
    path: '#',
    size: 'normal'
  },
  {
    id: 'ai-app-8',
    type: 'APP',
    title: 'VOICE CLONING',
    subtitle: 'TTS Technology',
    img: 'https://picsum.photos/seed/app8/400/400',
    path: '#',
    size: 'normal'
  },
  {
    id: 'ai-app-9',
    type: 'APP',
    title: 'VIDEO EDITOR',
    subtitle: 'Auto-Edit Clips',
    img: 'https://picsum.photos/seed/app9/400/800',
    path: '#',
    size: 'tall'
  },
  {
    id: 'ai-app-10',
    type: 'APP',
    title: 'GAME MAKER',
    subtitle: 'No-Code Game Gen',
    img: 'https://picsum.photos/seed/app10/400/400',
    path: '#',
    size: 'normal'
  },
];

const Homepage: React.FC = () => {
  const { profile } = useAuth();
  
  // 검색어 & 필터 상태 관리
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('ALL');

  // 필터링 로직
  const filteredContents = CONTENTS.filter((content) => {
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          content.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
    // ALL이면 다 보여주고, 아니면 해당 타입만 보여줌
    const matchesFilter = activeFilter === 'ALL' || content.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  // 카테고리 목록 (순서 고정을 위해 직접 지정)
  const categories = ['ALL', 'MOVIE', 'F1 LEGEND', 'APP'];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-red-600 selection:text-white pb-32 cursor-default">
      
      {/* 배경 조명 효과 */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
         <div className="w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      </div>
      {/* 노이즈 효과 (index.css에 .bg-noise가 있어야 함) */}
      <div className="bg-noise pointer-events-none fixed inset-0 z-50"></div>

      {/* Hero Section */}
      <section className="relative px-6 pt-40 pb-10 max-w-[1600px] mx-auto z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
             <div>
                <h2 className="text-red-500 font-bold tracking-widest text-sm uppercase flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  Welcome back, {profile?.nickname || 'Driver'}
                </h2>
                <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.9]">
                  PUSH THE <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-800">
                    LIMITS.
                  </span>
                </h1>
             </div>
            
            {/* 검색창 */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-3 backdrop-blur-md focus-within:border-red-500 transition-colors w-full md:w-80">
                <span className="text-gray-400 mr-3">🔍</span>
                <input 
                    type="text" 
                    placeholder="Search contents..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-transparent border-none outline-none text-base text-white w-full placeholder-gray-500"
                />
            </div>
          </div>

          {/* 카테고리 필터 탭 */}
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-6 py-2 rounded-full text-xs font-bold tracking-wider border transition-all duration-300
                        ${activeFilter === cat 
                            ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                            : 'bg-transparent text-gray-500 border-white/10 hover:border-white/50 hover:text-white'}
                    `}
                >
                    {cat}
                </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="px-6 max-w-[1600px] mx-auto z-10 relative">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[350px]">
          
          <AnimatePresence>
            {filteredContents.map((content) => (
                <motion.div
                layout
                key={content.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`relative group rounded-3xl overflow-hidden cursor-pointer bg-[#111] border border-white/5 shadow-2xl
                    ${content.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                    ${content.size === 'wide' ? 'md:col-span-2' : ''}
                    ${content.size === 'tall' ? 'md:row-span-2' : ''}
                `}
                >
                <Link to={content.path} className="block w-full h-full">
                    
                    {/* 이미지 */}
                    <div className="absolute inset-0 overflow-hidden">
                    <img 
                        src={content.img} 
                        alt={content.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-500" />
                    </div>

                    {/* 텍스트 내용 */}
                    <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
                    <div className="mb-auto">
                        <span className={`px-3 py-1 border border-white/20 rounded-full text-[10px] font-bold tracking-widest backdrop-blur-md uppercase 
                            ${content.type === 'APP' ? 'text-blue-300 border-blue-500/30' : 'text-white/80'}
                        `}>
                        {content.type}
                        </span>
                    </div>

                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-3xl md:text-4xl font-black italic tracking-tighter mb-2 leading-none text-white mix-blend-overlay group-hover:mix-blend-normal transition-all">
                        {content.title}
                        </h3>
                        <p className="text-gray-300 font-medium text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <span className={`w-6 h-[2px] ${content.type === 'APP' ? 'bg-blue-500' : 'bg-red-600'}`}></span>
                        {content.subtitle}
                        </p>
                    </div>

                    {/* 화살표 아이콘 */}
                    <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200 shadow-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                    </div>
                </Link>
                </motion.div>
            ))}
          </AnimatePresence>

          {/* 검색 결과 없음 처리 */}
          {filteredContents.length === 0 && (
             <div className="col-span-full text-center py-20 text-gray-500 font-mono">
                No contents found matching "{searchTerm}"
             </div>
          )}

        </motion.div>
      </section>
    </div>
  );
};

export default Homepage;