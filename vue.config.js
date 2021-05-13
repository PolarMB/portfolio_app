module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Portfolio App';
        return args;
      });
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
            @import "@/assets/styles/global_variables.scss";
            `
      }
    }
  }
};
