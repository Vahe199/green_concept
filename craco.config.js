const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#3AB994",
              "@secondary-color": "#ADB3B8",
              "@border-radius-base": "4px",
              "@border-color-base": "#D6D9DC",
              "@select-item-selected-bg": "#3AB994",
              "@select-item-selected-color": "#FFFFFF",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
