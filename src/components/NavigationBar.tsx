import React from 'react';

interface NavigationBarProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="flex items-center gap-2 p-1 bg-white/5 rounded-full border border-white/5 overflow-x-auto custom-scrollbar">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`
                        px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
                        ${selectedCategory === category 
                            ? 'bg-white text-black shadow-lg scale-105' // 선택됐을 때: 흰색 배경 + 검은 글씨
                            : 'text-gray-400 hover:text-white hover:bg-white/5' // 평소: 회색 글씨
                        }
                    `}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default NavigationBar;