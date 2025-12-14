import React, { useState, useEffect } from 'react';
import type { Website } from '../types';
import WebsiteList from '../components/WebsiteList';
import NavigationBar from '../components/NavigationBar';
// ▼ [추가] 유저 정보를 가져오기 위해 import
import { useAuth } from '../contexts/AuthContext';

const Homepage: React.FC = () => {
    // ▼ [추가] 로그인한 유저의 프로필 정보 가져오기
    const { profile } = useAuth();
    
    const [websites, setWebsites] = useState<Website[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('전체');

    useEffect(() => {
        // 기존 데이터 그대로 유지
        const initialWebsites: Website[] = [
            {
                id: 'Ayrton Senna',
                title: '아일톤 세나', 
                description: '아일톤 세나 풀스토리',
                thumbnailUrl: './senna.jpg',
                createdAt: '2024-11-27',
                category: 'F1',
                path: './video?id=pMfOcNZOfvc'
            },
            {
                id: 'Michael Schumacher',
                title: '미하엘 슈마허',
                description: '미하엘 슈마허 풀스토리',
                thumbnailUrl: './Michael.jpg',
                createdAt: '2024-11-27',
                category: 'F1',
                path: './video?id=CelApFIyy8A'
            },
            {
                id: 'Lewis Hamilton',
                title: '루이스 해밀턴', 
                description: '루이스 해밀턴 풀스토리',
                thumbnailUrl: './Hamilton.jpg',
                createdAt: '2024-11-27',
                category: 'F1',
                path: './video?id=ehBkzd0cpb4'
            },
            {
                id: 'Max verstappn',
                title: '막스 베르스타펜',
                description: '막스베르스타펜 풀스토리.',
                thumbnailUrl: './verstappen.jpg',
                createdAt: '2024-11-27',
                category: 'F1',
                path: './video?id=ZIsjp5cZ4N4'
            },
              {
                id: 'f1-movie-card',
                title: 'F1 the movie',
                description: '영화 예고편과 리뷰를 볼 수 있는 페이지입니다.',
                thumbnailUrl: './main poster.jpg',
                createdAt: '2025-06-27',
                category: '영화',
                path: './f1-movie' 
            },
        ];
        setWebsites(initialWebsites);
    }, []);

    const categories = ['전체', '영화' , 'F1' ];

    const filteredWebsites =
        selectedCategory === '전체'
            ? websites
            : websites.filter(site => site.category === selectedCategory);

    return (
        <div className="max-w-7xl mx-auto w-full animate-in fade-in duration-700">
            
            {/* 1. Hero Title (환영 문구) */}
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                    Welcome back, <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        {/* ▼ [수정] 닉네임이 있으면 닉네임을, 없으면 'Driver'를 보여줌 */}
                        {profile?.nickname || 'Driver'}.
                    </span>
                </h1>
                <p className="text-gray-400 text-lg max-w-xl">
                    당신의 모든 미디어 컬렉션을 한 곳에서 관리하세요.
                </p>
            </div>

            {/* 2. 필터 메뉴 */}
            <div className="sticky top-24 z-40 bg-[#050505]/80 backdrop-blur-md py-4 mb-8 -mx-4 px-4 md:mx-0 md:px-0">
                <NavigationBar
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
            </div>

            {/* 3. 콘텐츠 리스트 */}
            <div className="min-h-[500px]">
                {filteredWebsites.length > 0 ? (
                    <WebsiteList websites={filteredWebsites} />
                ) : (
                    <div className="text-center py-20 text-gray-500">
                        이 카테고리에는 콘텐츠가 없습니다.
                    </div>
                )}
            </div>

        </div>
    );
};

export default Homepage;