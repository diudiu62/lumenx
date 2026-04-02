import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
    esbuild: {
        jsx: 'automatic',
    },
    test: {
        environment: 'node',
        include: ['src/**/*.test.ts', 'src/**/*.spec.ts', 'src/**/*.test.tsx', 'src/**/*.spec.tsx'],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
