const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  // publicPath: process.env.NODE_ENV === 'production' ? '/dev-rustudy.sprint.1t.ru/' : '/'

})
