import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteImagemin } from "vite-plugin-imagemin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Otimização de imagens apenas em produção
    process.env.NODE_ENV === "production" &&
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        mozjpeg: {
          quality: 90,
          progressive: true,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: "removeViewBox",
              active: false,
            },
            {
              name: "removeEmptyAttrs",
              active: false,
            },
          ],
        },
      }),
  ].filter(Boolean),
  build: {
    // Otimizações para produção
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Configurações para otimização de assets
    assetsInlineLimit: 4096, // Inline assets menores que 4KB
    rollupOptions: {
      output: {
        // Otimização de chunks
        manualChunks: {
          vendor: ["react", "react-dom"],
          icons: ["lucide-react"],
        },
        // Nomes de arquivos otimizados
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
  // Configurações específicas para imagens
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.svg", "**/*.webp"],
});
