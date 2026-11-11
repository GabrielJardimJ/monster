import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist-library",
    lib: { entry: "src/index.ts", formats: ["es"], fileName: "index" },
    rolldownOptions: {
      external: (id) => !id.startsWith(".") && !id.startsWith("/"),
    },
  },
})
