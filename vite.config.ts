/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./_vitest_/setup.js"]
  },
  resolve: {
    alias: {
      find: "@",
      replacement: path.resolve(__dirname, "src"),
    },
  }
})