import React from 'react';
import { Link } from 'react-router-dom';
import type { Website } from '../types';

interface WebsiteListProps {
    websites: Website[];
}

const WebsiteList: React.FC<WebsiteListProps> = ({ websites }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {websites.map((site) => (
                <Link 
                    to={site.path || '#'} 
                    key={site.id} 
                    className="group relative flex flex-col bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                >
                    {/* 이미지 영역 */}
                    <div className="relative aspect-video overflow-hidden">
                        <img 
                            src={site.thumbnailUrl} 
                            alt={site.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                        />
                        
                        {/* 카테고리 뱃지 */}
                        <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-md text-[10px] font-bold text-white uppercase tracking-wider">
                            {site.category}
                        </div>

                        {/* 플레이 아이콘 */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300">
                                <svg className="w-5 h-5 text-black ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                        </div>
                    </div>

                    {/* 텍스트 영역 (ID 표시 부분 삭제함) */}
                    <div className="p-5 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-blue-400 transition-colors">
                            {site.title}
                        </h3>
                        <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
                            {site.description}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default WebsiteList;