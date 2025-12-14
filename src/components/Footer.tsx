import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-black py-10 border-t border-white/5 mt-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                
                {/* 로고 및 카피라이트 */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-bold text-white tracking-tight mb-2">
                        MY DASHBOARD
                    </h2>
                    <p className="text-sm text-gray-500">
                        © 2025 All Rights Reserved. <br className="md:hidden"/>
                        Designed for Speed & Focus.
                    </p>
                </div>

                {/* 소셜 링크 (디자인용 예시) */}
                <div className="flex gap-6">
                    {['Github', 'Instagram', 'Email'].map((item) => (
                        <button 
                            key={item}
                            className="text-sm font-medium text-gray-500 hover:text-white transition-colors uppercase tracking-wider"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;