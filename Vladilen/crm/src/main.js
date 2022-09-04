import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import router from './router'

import showMessage from '@/helpers/show-message'
import globals from '@/globals'

// import 'materialize-css/dist/css/materialize.min.css'
// import './assets/main.scss'
// import 'materialize-css/dist/js/materialize.min.js'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Initialize Firebase
const firebaseApp = initializeApp({
  apiKey: "AIzaSyCmZb9pg68mI12DEX0PvfTwug1lU84DbWI",
  authDomain: "crm-vue-vladilen.firebaseapp.com",
  projectId: "crm-vue-vladilen",
  storageBucket: "crm-vue-vladilen.appspot.com",
  messagingSenderId: "173651020409",
  appId: "1:173651020409:web:8e88678e3b8ddc2fb422a8"
});

const auth = getAuth(firebaseApp);
console.log(auth)

let vueApp = null

onAuthStateChanged(auth, (user) => {
  console.log('user')
  console.log(user)

  if (!vueApp) {
    vueApp = createApp(App)

    vueApp.use(createPinia())
    vueApp.use(router)
    vueApp.use(showMessage)
    vueApp.use(globals)

    vueApp.mount('#app')
  }

  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});