module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'nuxt-demo',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  router: {
    middleware: 'auth'
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    analyze: true,
    analyze: {
      analyzerMode: 'static'
    },
    vendor: ['axios', 'iview'],
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.entry['polyfill'] = ['babel-polyfill'];
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [{
    src: '~/plugins/iview',
    ssr: true
  }],
  css: [{
      src: 'iview/dist/styles/iview.css'
    }, {
      src: '~/assets/styles/global.less',
      lang: 'less'
    },
    {
      src: '~/assets/styles/theme/theme.less',
      lang: 'less'
    },
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true,
    prefix: '/api/', // it only work when proxy is enabled
    credentials: true,
  },
  proxy: {
    '/api/': {
      target: 'http://192.168.18.19:1100/api-a/',
      changeOrigin: true,
      pathRewrite: {
        '^/api/': '/'
      },
    }
  },
  render: {
    resourceHints: false,
  },
}
