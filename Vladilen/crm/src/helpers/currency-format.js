export default {
  install(app, options) {
    app.config.globalProperties.$currencyFormat = function (value, currency) {
      return new Intl.NumberFormat('ru-RU',{
        style: 'currency',
        currency
      }).format(value)
    };
  },
};
