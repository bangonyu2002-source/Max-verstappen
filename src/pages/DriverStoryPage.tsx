import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DRIVERS } from '../data/drivers';

const DriverStoryPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const driver = id ? DRIVERS[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 드라이버 데이터가 없을 경우 에러 화면
  if (!driver) {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center flex-col gap-4">
            <h2 className="text-2xl font-bold">Driver Not Found</h2>
            <p className="text-gray-400">데이터를 찾을 수 없습니다. (ID: {id})</p>
            <Link to="/" className="px-4 py-2 bg-white text-black rounded-full font-bold">홈으로 돌아가기</Link>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* 1. Hero Section (초대형 이미지와 이름) */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        {/* 배경 이미지 */}
        <motion.div 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            className="absolute inset-0 z-0"
        >
            <img 
                src={driver.heroImage} 
                alt={driver.name} 
                className="w-full h-full object-cover opacity-50 grayscale" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
        </motion.div>

        {/* 텍스트 애니메이션 */}
        <div className="relative z-10 text-center px-6">
            <motion.p 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={`text-2xl font-bold tracking-[0.5em] mb-4 uppercase ${driver.color}`}
            >
                {driver.nickname}
            </motion.p>
            <motion.h1 
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-9xl font-black italic tracking-tighter mb-6"
            >
                {driver.name}
            </motion.h1>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="animate-bounce mt-20 text-sm font-bold tracking-widest"
            >
                ↓ SCROLL TO EXPLORE
            </motion.div>
        </div>
      </section>

      {/* 2. Quote Section (명언) */}
      <section className="py-40 px-6 max-w-4xl mx-auto text-center">
        <motion.blockquote 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-serif italic leading-tight text-gray-300"
        >
            "{driver.quote}"
        </motion.blockquote>
      </section>

      {/* 3. Stats Grid (통계) */}
      <section className="py-20 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
                { label: 'Championships', value: driver.stats.championships },
                { label: 'Race Wins', value: driver.stats.wins },
                { label: 'Podiums', value: driver.stats.podiums },
            ].map((stat, idx) => (
                <motion.div 
                    key={stat.label}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.2 }}
                >
                    <h3 className={`text-7xl md:text-8xl font-black mb-2 ${driver.color}`}>
                        {stat.value}
                    </h3>
                    <p className="text-gray-500 uppercase tracking-widest font-bold">{stat.label}</p>
                </motion.div>
            ))}
        </div>
      </section>

      {/* 4. Biography & Timeline (역사) */}
      <section className="py-40 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* 왼쪽: 설명글 */}
        <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-4xl font-bold mb-8 text-white border-l-4 border-white pl-6">THE LEGACY</h2>
            <p 
                className="text-lg text-gray-400 leading-loose" 
                dangerouslySetInnerHTML={{ __html: driver.description }} 
            />
        </motion.div>

        {/* 오른쪽: 타임라인 */}
        <div className="relative border-l border-white/10 pl-10 space-y-12">
            {driver.timeline.map((item, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.2 }}
                    className="relative"
                >
                    {/* 타임라인 점 */}
                    <span className={`absolute -left-[45px] top-1 w-3 h-3 rounded-full ${idx === driver.timeline.length-1 ? 'bg-red-500 animate-pulse' : 'bg-gray-600'}`}></span>
                    
                    {/* 연도 */}
                    <span className={`text-xl font-bold block mb-1 ${driver.color}`}>
                        {item.year}
                    </span>
                    
                    {/* 사건 내용 */}
                    <span className="text-gray-300">
                        {item.event}
                    </span>
                </motion.div>
            ))}
        </div>
      </section>

      {/* 5. Video Highlight (영상) */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">RACE HIGHLIGHTS</h2>
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
                src={`https://www.youtube.com/embed/${driver.videoId}`}
                title="Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
      </section>

      {/* 뒤로 가기 버튼 (여기가 수정되었습니다) */}
      <Link 
        to="/" 
        className="fixed top-8 left-8 z-50 group flex items-center gap-3 px-5 py-2.5 bg-black/50 hover:bg-white backdrop-blur-xl border border-white/10 hover:border-white rounded-full transition-all duration-500 ease-out"
      >
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-black transition-colors duration-300">
          <svg className="w-3 h-3 text-white group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <span className="text-xs font-bold tracking-[0.2em] text-white/90 group-hover:text-black transition-colors duration-300">
          BACK
        </span>
      </Link>

    </div>
  );
};

export default DriverStoryPage;