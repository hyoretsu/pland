import tailwindcss from "@tailwindcss/vite";
import tanstackRouter from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const host = process.env.TAURI_DEV_HOST || process.env.VITE_APP_URL || "";

export default defineConfig({
	build: {
		minify: !process.env.TAURI_ENV_DEBUG ? "esbuild" : false, // don't minify for debug builds
		sourcemap: !!process.env.TAURI_ENV_DEBUG, // produce sourcemaps for debug builds
		target: process.env.TAURI_ENV_PLATFORM === "windows" ? "chrome105" : "safari13", // Tauri uses Chromium on Windows and WebKit on macOS and Linux
	},
	clearScreen: false, // Prevent vite from obscuring rust errors
	envPrefix: ["VITE_", "TAURI_ENV_*"],
	plugins: [tailwindcss(), tanstackRouter({ autoCodeSplitting: true, target: "react" }), react({ include: "**/*.tsx" })],
	server: {
		hmr: {
			host,
			port: 1421,
			protocol: "ws",
		},
		host: host || false,
		port: 5173, // Make sure this port matches the devUrl port in tauri.conf.json file
		strictPort: true, // Tauri expects a fixed port, fail if that port is not available
		watch: {
			ignored: ["**/src-tauri/**"],
			usePolling: true,
		},
	},
});
