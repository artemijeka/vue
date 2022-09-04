/**
 * Dependencies: Materialize for M.toast()
 */
export default {
  install(app, options) {
    app.config.globalProperties.$showMessage = function (html, optionsMessage) {
      M.toast({ html, ...optionsMessage })
    }

    app.config.globalProperties.$showError = function (html, optionsMessage) {
      M.toast({ html: `[Ошибка]: ${html}`, ...optionsMessage })
    }
  }
}