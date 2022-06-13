module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/style/_variables.sass"; @import "~@/assets/style/reset.sass"`,
      },
    },
  },
};
