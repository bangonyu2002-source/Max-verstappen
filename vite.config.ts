import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // 환경 변수 로드
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // ▼▼▼ [핵심 수정] 배포 시 흰 화면 방지를 위해 무조건 '/' 로 설정 ▼▼▼
    base: '/',

    plugins: [react()],

    server: {
      port: 3000,
      host: '0.0.0.0',
    },

    // 환경 변수 설정 (기존 유지)
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },

    resolve: {
      alias: {
        // @를 쓰면 src 폴더를 가리키도록 설정
        '@': path.resolve(__dirname, './src'),
      }
    }
  };
});