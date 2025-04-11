import { defineConfig } from 'vite'; // 引入 defineConfig

export default defineConfig({
  server: {
    host: '0.0.0.0', // 允许局域网访问
    cors: true, // 启用 CORS
    allowedHosts: [
      '8dde-219-76-134-117.ngrok-free.app', // 允许来自 ngrok 的请求
    ],
  },
});
