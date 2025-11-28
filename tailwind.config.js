/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",           // (추가됨) 바깥에 있는 App.tsx, index.tsx 찾기
    "./pages/**/*.{js,ts,jsx,tsx}",  // (추가됨) 바깥에 있는 pages 폴더 찾기
    "./components/**/*.{js,ts,jsx,tsx}", // (추가됨) 바깥에 있는 components 폴더 찾기
    "./src/**/*.{js,ts,jsx,tsx}",    // 혹시 src 안에 있는 것도 찾기
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}