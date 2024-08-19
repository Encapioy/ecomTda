// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: [
    '~/assets/css/main.css',        
    '~/assets/css/style.css'        
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        { 
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap", 
          rel: "stylesheet" 
        }
      ],
      script: [
        { type: "module", src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" },
        { type: "nomodule", src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" }
      ]
    }
  },
})
