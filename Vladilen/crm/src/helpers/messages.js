export default {
  install(app, options) {
    app.config.globalProperties.$messages = {
      logout: 'Вы вышли из приложения!',
      'auth/user-not-found': 'Пользователь не найден!',
      'auth/wrong-password': 'Неверный пароль!',
      'auth/email-already-in-use': 'Пользователь с таким email уже существует!',
      'default': 'Что-то пошло не так.'
    }
  }
}