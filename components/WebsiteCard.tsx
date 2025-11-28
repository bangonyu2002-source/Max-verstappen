// src/components/WebsiteCard.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // 페이지 이동 기능
import { Website } from '../types';

interface WebsiteCardProps {
  website: Website;
  onDelete?: (id: string) => void; // 삭제 기능은 선택사항으로 둠
}

const WebsiteCard: React.FC<WebsiteCardProps> = ({ website, onDelete }) => {
  return (
    // div 대신 Link를 사용하여 클릭 시 path로 이동하게 함
    // path가 없으면 그냥 현재 페이지(#)에 머뭄
    <Link 
      to={website.path || '#'}
      className="block bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={website.thumbnailUrl}
          alt={website.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-2 right-2">
          <span className="px-2 py-1 text-xs font-bold text-white bg-black/50 rounded-full backdrop-blur-sm">
            {website.category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">
          {website.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 h-10">
          {website.description}
        </p>
        <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-500">
          <span>{website.createdAt}</span>
          
          {/* 삭제 버튼이 있을 때만 표시 (삭제 버튼 누를 땐 이동 안 하게 막음) */}
          {onDelete && (
            <button
              onClick={(e) => {
                e.preventDefault(); // 이동 막기
                onDelete(website.id);
              }}
              className="text-red-400 hover:text-red-600 px-2 py-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              삭제
            </button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default WebsiteCard;