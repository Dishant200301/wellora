import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const port = Number(process.env.PORT) || 8080;

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    host: "::",
    port,
    strictPort: true,
  },
  preview: {
    host: "::",
    port,
    strictPort: true,
  },
});
