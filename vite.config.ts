import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const PRODUCT_API_PREFIX = '/api/econverse';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      [PRODUCT_API_PREFIX]: {
        target: 'https://app.econverse.com.br',
        changeOrigin: true,
        secure: true,
        rewrite: (path) =>
          path.replace(
            /^\/api\/econverse/,
            '/teste-front-end/junior/tecnologia/lista-produtos',
          ),
      },
    },
  },
});
