export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'yelpcamp-nuxt2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/axios.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  fontawesome: {
		component: 'fa',
		icons: { 
			solid: true,
			regular: true,
		}
	},

  serverMiddleware: [
    { path: '/api', handler: '~/api' }
  ],

  axios: {
    baseURL: 'https://yelpcamp-nuxt2.onrender.com'
  },

  auth: {
    redirect: {
      login: '/signin',
      logout: '/campgrounds'
    },
    cookie: {
      options: {
        maxAge: 3600, // accepts seconds, 1 hour
        secure: true,
      }
    },
    localStorage: false,
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true, 
        },
        user: {
          property: 'data',
        },
        endpoints: {
          login: { url: 'api/v1/signin', method: 'post' },
          user: { url: 'api/v1/getUserInfo', method: 'get', propertyName: false },
          logout: { url: 'api/v1/logout', method: 'get' }
        }
      }
    }
  },
}
