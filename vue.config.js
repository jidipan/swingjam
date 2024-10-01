const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  // 配置开发服务器
  devServer: {
    port: 8080,  // 设置本地开发端口为 8080
    open: true   // 启动服务器后自动在浏览器中打开页面
  }
});
