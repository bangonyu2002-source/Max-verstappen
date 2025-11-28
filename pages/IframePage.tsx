// src/pages/IframePage.tsx
import React from 'react';

const IframePage = () => {
  // 유튜브 영상 주소 (반드시 /embed/가 들어가야 합니다!)
  const url = "https://www.youtube.com/embed/jfKfPfyJRdk"; 

  return (
    <div className="w-full h-[calc(100vh-64px)] bg-black">
      <iframe 
        src={url}
        title="Video Viewer"
        className="w-full h-full border-none"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default IframePage;