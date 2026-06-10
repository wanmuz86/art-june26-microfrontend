import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { name } from './package.json';

export default defineConfig({
 plugins: [react()],
 // configuration for staging and production
 // for staging the url will be /micro-app (for mapping purposes to the host app)
 base: process.env.NODE_ENV === 'production' ? `/${name}/` : '/',
  build: {
   target: 'esnext',
   outDir: 'dist',

 },
 server: {
   port:  4173, // set the port to 4173 to map the mapping on the host app
   cors: true,
   headers: {
     'Access-Control-Allow-Origin': '*',
   },
 },
 define: {
   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
 },
});
