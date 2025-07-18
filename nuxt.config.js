import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,

  head: {
    titleTemplate: '%s - John Adrian Galang',
    title: 'QR Code Scanner',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [],

  plugins: [
    '~/plugins/html5-qrcode.js',
  ],


  components: true,

  buildModules: [
    '@nuxtjs/vuetify'
  ],

  axios: {
    baseURL: 'http://localhost:8000' // Make sure this matches your Django or API server  https://oauth2.googleapis.com/token
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  auth: {
    redirect: {
      login: '/auth/signin',         //Redirect user when not connected
      logout: '/auth/signin',       //Redirect user when logout
      callback: '/auth/callback',  // Callback URL after login
      home: '/'                   //After login redirect
    },
    autofetchUser: false,       // Disable auto-fetching user data
    strategies: {
      google: {
        clientId: '601023802499-lh24nb7e387on2btu3eia92244f71vhk.apps.googleusercontent.com',
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://accounts.google.com/o/oauth2/auth',
          userinfo: 'https://www.googleapis.com/oauth2/v3/userinfo',
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 1800, // Token expiration time in seconds (5 hours)
      },
      responseType: "token id_token",
      scope: ['openid', 'profile', 'email'],
      redirectUri: process.env.REDIRECT_URI,
      codeChallengeMethod: "",
    }
  }
},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {}
}
