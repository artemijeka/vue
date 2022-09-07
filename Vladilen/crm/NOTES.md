Владилен делал на vue 2 + vuex
  я переписываю на vue3 + pinia

Остановился
  https://youtu.be/Jimf6cunaY4?t=324

Дополнительно установил
  npm i register-service-worker
  и скопировал из Vladilen/crm/crm-vue-cli
    import './registerServiceWorker'
    Vladilen/crm/crm-vue-vite/src/registerServiceWorker.js

Статья по стилю организации кода и папок
  https://habr.com/ru/company/otus/blog/571272/

Firebase
  Docs:
    https://firebase.google.com/docs/web/setup?authuser=0&hl=en
    https://firebase.google.com/docs/auth/web/start?authuser=0
    https://firebase.google.com/docs/reference/js?hl=en&authuser=0

  You can deploy now or [later](https://firebase.google.com/docs/hosting/quickstart?authuser=0&hl=en). To deploy now, open a terminal window, then navigate to or create a root directory for your web app.

  Sign in to Google
  `firebase login`
  Initiate your project
  Run this command from your app’s root directory:

  `firebase init`
  When you’re ready, deploy your web app
  Put your static files (e.g., HTML, CSS, JS) in your app’s deploy directory (the default is “public”). Then, run this command from your app’s root directory:

  `firebase deploy`
  After deploying, view your app at crm-vue-vladilen.web.app

  Need help? Check out the [Hosting docs](https://firebase.google.com/docs/hosting/quickstart?authuser=0&hl=en)