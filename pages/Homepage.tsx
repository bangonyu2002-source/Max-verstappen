import React, { useState, useEffect, useCallback } from 'react';
import type { Website } from '../types';
import WebsiteList from '../components/WebsiteList';
import NavigationBar from '../components/NavigationBar';
import AddWebsiteModal from '../components/AddWebsiteModal';
// Header 컴포넌트는 이제 필요 없어서 삭제했습니다.

const Homepage: React.FC = () => {
    const [websites, setWebsites] = useState<Website[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('전체');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const initialWebsites: Website[] = [
             {
                id: 'f1-movie-card',
                title: 'Movie Card',
                description: '영화카드와 간단한 리뷰를 볼 수 있는 페이지입니다.',
                thumbnailUrl: '/main poster.jpg',
                createdAt: '2025-06-27',
                category: '영화',
                path: '/f1-movie'
            },
            {
                id: 'video-card',
                title: '유튜브 영상 보기',
                description: '내 사이트 안에서 영상을 재생합니다.',
                thumbnailUrl: '/music.jpg',
                createdAt: '2024-11-27',
                category: '기타',
                path: '/video'
            },
        ];
        setWebsites(initialWebsites);
    }, []);

    const handleAddWebsite = useCallback((title: string, description: string) => {
        const newWebsite: Website = {
            id: new Date().toISOString(),
            title,
            description,
            thumbnailUrl: `https://picsum.photos/seed/${new Date().getTime()}/500/300`,
            createdAt: new Date().toLocaleDateString('ko-KR'),
            category: (websites.length + 1) % 2 === 0 ? 'MBTI' : '게임',
        };
        setWebsites(prevWebsites => [newWebsite, ...prevWebsites]);
        setIsModalOpen(false);
    }, [websites]);

    const handleDeleteWebsite = useCallback((id: string) => {
        setWebsites(prevWebsites => prevWebsites.filter(site => site.id !== id));
    }, []);

    const categories = ['전체', '영화' , '기타'];

    const filteredWebsites =
        selectedCategory === '전체'
            ? websites
            : websites.filter(site => site.category === selectedCategory);

    return (
        <div className="min-h-screen flex flex-col text-slate-800 dark:text-slate-200">
            {/* Header 컴포넌트 삭제됨 */}
            
            <main className="flex-grow p-4 sm:p-6 md:p-8 max-w-7xl mx-auto w-full">
                {/* 버튼을 카테고리 탭과 같은 줄에 배치 */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                    <NavigationBar
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                    />
                    
                    {/* ▼ 버튼만 따로 살려서 여기로 옮겼습니다! */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-md flex items-center gap-2"
                    >
                        <span>+</span> 새 사이트 만들기
                    </button>
                </div>

                <WebsiteList websites={filteredWebsites} onDeleteWebsite={handleDeleteWebsite} />
            </main>

            <AddWebsiteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddWebsite}
            />
        </div>
    );
};

export default Homepage;