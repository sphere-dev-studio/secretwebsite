// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'sphere.dev',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'sphere.dev' },
        { hid: 'og:description', property: 'og:description', content: 'sphere.dev is a digital agency that specializes in web development, based in France' },
        { hid: 'og:url', property: 'og:url', content: 'https://spheredev.studio' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'sphere.dev - Web Development Agency' },
      ]
    }
  }
})
