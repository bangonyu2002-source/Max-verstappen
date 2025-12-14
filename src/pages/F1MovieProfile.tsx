import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const F1MovieProfile = () => {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [currentTrailer, setCurrentTrailer] = useState<any>(null);

  // 페이지 진입 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const movie = {
    title: "F1: THE MOVIE",
    subtitle: "Speed has no limit",
    director: "조셉 코신스키 (Joseph Kosinski)",
    releaseDate: "2025. 06. 27",
    runtime: "132분",
    genre: "액션 / 드라마 / 스포츠",
    poster: "./poster.jpg",
    backdrop: "./bg.jpg",
    plot: "질주하는 F1 레이서들의 숨막히는 경쟁. 전설적인 챔피언과 신예 드라이버의 운명을 건 마지막 레이스가 시작된다. 0.001초의 승부, 그 너머에 있는 영광을 차지하라.",
    
    trailers: [
      { 
        id: 1, 
        title: "1차 공식 예고편 (Teaser)", 
        time: "2:28", 
        videoId: "./trailer1.mp4", 
        img: "./thumb1.jpg", 
        desc: "우리는 코너링으로 승부를 봐야죠. 안전하게 만들 방법은 없습니다."
      },
      { 
        id: 2, 
        title: "2차 메인 예고편 (Main Trailer)", 
        time: "1:45", 
        videoId: "./trailer2.mp4", 
        img: "./thumb2.jpg", 
        desc: "실제 F1 서킷에서 촬영된 압도적인 속도감을 확인하세요."
      },
      { 
        id: 3, 
        title: "3차 파이널 예고편 (Final Trailer)", 
        time: "3:12", 
        videoId: "./trailer3.mp4", 
        img: "./thumb3.jpg", 
        desc: "심장이 멈출 듯한 배기음, 이것이 진짜 포뮬러 1이다."
      }
    ],

    cast: [
      { name: "브래드 피트", role: "소니 헤이즈 역", img: "./brad.jpg" },
      { name: "맥스 베르스타펜", role: "본인 역", img: "./max.jpg" },
      { name: "루이스 해밀턴", role: "본인 역", img: "./lewis.jpg" },
      { name: "담슨 이드리스", role: "조슈아 피어스 역", img: "./damson.jpg" },
    ],
    reviews: [
      { user: "F1찐팬", rating: "⭐⭐⭐⭐⭐", comment: "와... 극장에서 보는데 엔진 소리 때문에 심장 터지는 줄 알았습니다. 꼭 보세요!" },
      { user: "영화평론가A", rating: "⭐⭐⭐⭐", comment: "스토리보다는 연출이 압권이다. 실제 레이싱을 보는 듯한 현장감." },
      { user: "베르스타펜", rating: "⭐⭐⭐⭐⭐", comment: "제가 출연해서 점수 높게 줍니다. 농담이고 진짜 재밌음." },
    ]
  };

  const openTrailerModal = () => {
    if (movie.trailers.length > 0) {
      setCurrentTrailer(movie.trailers[0]); 
      setIsTrailerOpen(true); 
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1014] text-white font-sans selection:bg-pink-500 selection:text-white relative">
      
      {/* 뒤로 가기 버튼 (왼쪽 상단 고정, 배지 스타일) */}
      <Link 
        to="/" 
        className="fixed top-8 left-8 z-50 group flex items-center gap-3 px-5 py-2.5 bg-white/5 hover:bg-white backdrop-blur-xl border border-white/10 hover:border-white rounded-full transition-all duration-500 ease-out"
      >
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-black transition-colors duration-300">
          <svg className="w-3 h-3 text-white group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <span className="text-xs font-bold tracking-[0.2em] text-white/90 group-hover:text-black transition-colors duration-300">
          BACK TO HOME
        </span>
      </Link>

      {/* 1. 상단 배경 */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f1014] z-10" />
        <img src={movie.backdrop} alt="Backdrop" className="w-full h-full object-cover opacity-60 blur-sm" />
      </div>

      {/* 2. 메인 컨텐츠 */}
      <div className="max-w-6xl mx-auto px-6 relative z-20 -mt-32">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          
          {/* 
            ▼ [수정된 부분] 포스터 이미지 컨테이너 
            rotate-2, hover:rotate-0 클래스를 제거하여 반듯하게 만들었습니다.
          */}
          <div className="w-72 shrink-0 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(236,72,153,0.3)] border-4 border-gray-800">
            <img src={movie.poster} alt="Poster" className="w-full h-[450px] object-cover" />
          </div>

          <div className="pt-10 md:pt-32 flex-grow">
            <h4 className="text-pink-500 font-bold tracking-widest text-sm mb-2 uppercase">{movie.subtitle}</h4>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
              {movie.title}
              <span className="text-pink-500">.</span>
            </h1>
            <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-6 items-center">
              <span className="px-3 py-1 border border-gray-700 rounded-full">{movie.releaseDate}</span>
              <span className="px-3 py-1 border border-gray-700 rounded-full">{movie.runtime}</span>
              <span className="px-3 py-1 border border-gray-700 rounded-full">{movie.genre}</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">{movie.plot}</p>

            <div className="flex gap-4">
              <button 
                onClick={openTrailerModal}
                className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg shadow-pink-600/30 flex items-center gap-2"
              >
                ▶ 예고편 재생
              </button>
            </div>
          </div>
        </div>

        {/* 3. 하단 정보 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20 pb-20">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 border-l-4 border-pink-500 pl-4">DIRECTOR</h3>
              <div className="flex items-center gap-5 bg-gray-800/40 p-6 rounded-xl border border-gray-700">
                <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border-2 border-pink-500 shadow-lg">
                  <img src="./director.jpg" alt="Director" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">{movie.director}</h4>
                  <p className="text-pink-400 font-medium text-sm mb-2">대표작: 탑건 매버릭, 오블리비언</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    실제 전투기 촬영으로 극찬을 받았던 그가, 이번엔 실제 F1 머신에 IMAX 카메라를 달았습니다.
                  </p>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-6 border-l-4 border-pink-500 pl-4">CAST</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {movie.cast.map((actor, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-pink-500 transition mb-3">
                    <img src={actor.img} alt={actor.name} className="w-full h-full object-cover" />
                  </div>
                  <h5 className="font-bold text-white">{actor.name}</h5>
                  <p className="text-xs text-gray-400">{actor.role}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 border-l-4 border-purple-500 pl-4">REVIEWS</h3>
            <div className="flex flex-col gap-4">
              {movie.reviews.map((review, idx) => (
                <div key={idx} className="bg-gray-900/50 p-4 rounded-xl border border-gray-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-pink-400">{review.user}</span>
                    <span className="text-xs text-yellow-500">{review.rating}</span>
                  </div>
                  <p className="text-sm text-gray-300">"{review.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. 로컬 비디오 팝업 */}
      {isTrailerOpen && currentTrailer && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
          
          <div className="relative w-full max-w-7xl bg-[#151515] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 flex flex-col lg:flex-row h-[80vh] lg:h-[70vh]">
            
            <button 
              onClick={() => setIsTrailerOpen(false)}
              className="absolute top-4 right-4 z-50 text-white bg-black/50 hover:bg-red-600 px-4 py-2 rounded-full font-bold transition flex items-center gap-2 backdrop-blur-md"
            >
              ✕ 닫기
            </button>

            {/* 비디오 플레이어 */}
            <div className="lg:w-3/4 h-full bg-black flex items-center justify-center relative">
              <video 
                key={currentTrailer.videoId} 
                src={currentTrailer.videoId}
                className="w-full h-full"
                controls 
                autoPlay 
              />
            </div>

            {/* 재생 목록 */}
            <div className="lg:w-1/4 h-full bg-[#1a1a1a] border-l border-gray-800 flex flex-col">
              <div className="p-4 border-b border-gray-800 bg-[#202020]">
                <h3 className="font-bold text-lg text-white">예고편 목록</h3>
                <p className="text-xs text-gray-400">{movie.trailers.length}개의 영상</p>
              </div>
              
              <div className="flex-1 overflow-y-auto p-2 space-y-2">
                {movie.trailers.map((trailer) => (
                  <div 
                    key={trailer.id}
                    onClick={() => setCurrentTrailer(trailer)}
                    className={`flex gap-3 p-3 rounded-lg cursor-pointer transition ${
                      currentTrailer.id === trailer.id 
                        ? 'bg-gray-800 border border-pink-500/50' 
                        : 'hover:bg-gray-800 border border-transparent'
                    }`}
                  >
                    {/* 썸네일 */}
                    <div className="relative w-24 h-16 shrink-0 rounded overflow-hidden bg-black">
                      <img 
                        src={trailer.img}
                        alt="Thumbnail" 
                        className="w-full h-full object-cover opacity-80"
                      />
                      {currentTrailer.id === trailer.id && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <span className="text-pink-500 font-bold text-xs">재생중</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col justify-center min-w-0">
                      <h4 className={`text-sm font-bold mb-1 truncate ${currentTrailer.id === trailer.id ? 'text-pink-400' : 'text-gray-300'}`}>
                        {trailer.title}
                      </h4>
                      <p className="text-xs text-gray-500">{trailer.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default F1MovieProfile;