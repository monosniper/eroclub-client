// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@vant/nuxt', 'nuxt-icons', '@pinia/nuxt'],
    css: [
        '~/assets/css/main.css'
    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap'
                }
            ]
        }
    }
})
