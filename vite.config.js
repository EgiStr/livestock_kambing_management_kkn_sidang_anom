import { defineConfig } from "vite";
import laravel, { refreshPaths } from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react(), // React plugin that we installed for vite.js,
        laravel({
            input: [
                "resources/css/app.css",
                "resources/js/app.js",
                "resources/css/filament/admin/theme.css",
                "resources/css/app.css",
                "resources/js/app.jsx",
            ],
            refresh: [...refreshPaths, "app/Livewire/**"],
        }),
    ],
});
