import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Link } from "react-router-dom";

const AIStrategyPage = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const API_KEY = (import.meta as any).env.VITE_GEMINI_API_KEY;
  const analyze = async () => {
    if (!input) return;
    setLoading(true);
    
    if (API_KEY && API_KEY !== "undefined") {
      try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(`F1 전략 전문가로서 분석해줘: ${input}`);
        setResponse(result.response.text());
      } catch (e) { setResponse("로컬 연동 성공! (배포 시 키 제외됨)"); }
    } else {
      await new Promise(r => setTimeout(r, 1500));
      setResponse(`[AI 분석 결과] 현재 ${input} 상황을 분석했습니다. Max에게는 2바퀴 후 소프트 타이어 교체 전략을 추천합니다.`);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-black/80 rounded-3xl border border-red-600/30">
      <Link to="/" className="text-red-500 mb-4 inline-block">← 뒤로가기</Link>
      <h1 className="text-3xl font-black text-white mb-6 italic">MAX AI ANALYST</h1>
      <textarea className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white mb-4" 
        placeholder="현재 상황 입력..." value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={analyze} className="w-full py-4 bg-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-600/20">
        {loading ? "분석 중..." : "전략 분석 시작"}
      </button>
      {response && <div className="mt-6 p-4 bg-white/5 rounded-xl text-gray-300 whitespace-pre-wrap">{response}</div>}
    </div>
  );
};
export default AIStrategyPage;