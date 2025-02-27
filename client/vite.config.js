import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
   server:{
     host:"0.0.0.0",
     allowedHosts: ["blogger-1-9ra8.onrender.com"],
     proxy:{
      "/api":{
         target:"https://blogger-egfo.onrender.com",
         changeOrigin:true,
         secure:false
      }
     }
   }
})
