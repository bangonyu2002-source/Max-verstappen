
import React from 'react';
import type { Website } from '../types';
import { TrashIcon } from './icons';

interface WebsiteCardProps {
    website: Website;
    onDelete: (id: string) => void;
}

const WebsiteCard: React.FC<WebsiteCardProps> = ({ website, onDelete }) => {
    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation(); // 카드 전체 클릭 방지
        onDelete(website.id);
    };

    return (
        <div className="group bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="relative">
                <img className="w-full h-40 object-cover" src={website.thumbnailUrl} alt={website.title} />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                <button
                    onClick={handleDelete}
                    className="absolute top-2 right-2 bg-red-500/80 hover:bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100"
                    aria-label="Delete website"
                >
                    <TrashIcon className="w-5 h-5" />
                </button>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate">{website.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 h-10">{website.description}</p>
                <div className="mt-4 text-xs text-slate-400 dark:text-slate-500">
                    생성일: {website.createdAt}
                </div>
            </div>
        </div>
    );
};

export default WebsiteCard;
