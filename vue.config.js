module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/shoppy-list/'
    : '/',

    transpileDependencies: [
      'vuetify'
    ]
}

