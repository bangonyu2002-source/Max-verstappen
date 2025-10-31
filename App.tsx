import React, { useState, useEffect, useCallback } from 'react';
import type { Website } from './types';
import Header from './components/Header';
import WebsiteList from './components/WebsiteList';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import AddWebsiteModal from './components/AddWebsiteModal';

const App: React.FC = () => {
    const [websites, setWebsites] = useState<Website[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('전체');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // 초기 목업 데이터 설정
        const initialWebsites: Website[] = [
            {
                id: '1',
                title: '내 첫 포트폴리오',
                description: '리액트와 Tailwind로 만든 개인 프로젝트 쇼케이스',
                thumbnailUrl: 'https://picsum.photos/seed/1/500/300',
                createdAt: '2023-10-26',
                category: '게임',
            },
            {
                id: '2',
                title: 'MBTI 심리 테스트',
                description: '나의 진짜 MBTI 유형을 알아보는 심층 테스트',
                thumbnailUrl: 'https://picsum.photos/seed/2/500/300',
                createdAt: '2023-11-15',
                category: 'MBTI',
            },
            {
                id: '3',
                title: '인디 게임 추천',
                description: '숨겨진 명작 인디 게임들을 소개합니다.',
                thumbnailUrl: 'https://picsum.photos/seed/3/500/300',
                createdAt: '2024-01-08',
                category: '게임',
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

    const categories = ['전체', '게임', 'MBTI'];

    const filteredWebsites =
        selectedCategory === '전체'
            ? websites
            : websites.filter(site => site.category === selectedCategory);

    return (
        <div className="min-h-screen flex flex-col text-slate-800 dark:text-slate-200 transition-colors duration-500">
            <Header onAddWebsite={() => setIsModalOpen(true)} />
            <main className="flex-grow p-4 sm:p-6 md:p-8">
                <NavigationBar
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
                <WebsiteList websites={filteredWebsites} onDeleteWebsite={handleDeleteWebsite} />
            </main>
            <Footer />
            <AddWebsiteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddWebsite}
            />
        </div>
    );
};

export default App;