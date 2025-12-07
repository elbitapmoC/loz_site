
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      'figma:asset/cmsa.png': path.resolve(__dirname, './src/assets/cmsa.png'),
      'figma:asset/cmsa.webp': path.resolve(__dirname, './src/assets/cmsa.webp'),
      'figma:asset/tribeFamilyData.png': path.resolve(__dirname, './src/assets/tribeFamilyData.png'),
      'figma:asset/tribeFamilyData.webp': path.resolve(__dirname, './src/assets/tribeFamilyData.webp'),
      'figma:asset/emm.png': path.resolve(__dirname, './src/assets/emm.png'),
      'figma:asset/emm.webp': path.resolve(__dirname, './src/assets/emm.webp'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
          radix: [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-aspect-ratio',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-context-menu',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-hover-card',
            '@radix-ui/react-label',
            '@radix-ui/react-menubar',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-progress',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slider',
            '@radix-ui/react-slot',
            '@radix-ui/react-switch',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toggle',
            '@radix-ui/react-toggle-group',
            '@radix-ui/react-tooltip',
          ],
          ui: ['lucide-react', 'class-variance-authority', 'cmdk'],
          charts: ['recharts'],
          date: ['date-fns'],
        },
      },
    },
  },
  esbuild: {
    drop: ['console', 'debugger'],
    legalComments: 'none',
    minifyIdentifiers: true,
    minifyWhitespace: true,
    minifySyntax: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
