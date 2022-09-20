import { defineConfig } from 'vite';
import { resolve, basename } from 'path';

export default defineConfig({
    server: {
        port: 9090
    },
    build: {
        outDir: './dist'
    },  
    publicDir: 'src',  
})