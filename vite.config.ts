import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      "@components": "/src/components",
      "@constants": "/src/constants.ts",
      "@web-types": "/src/web-types",
      "@api": "/src/api",
      "@context": "/src/context",
      "@hooks": "/src/hooks",
    },
  },
});
