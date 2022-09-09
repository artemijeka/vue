import { createApp } from "vue";
import { createPinia } from "pinia";

import Loader from '@/components/Loader.vue'

// https://www.npmjs.com/package/firebase#user-content-compat-packages
// /compat/ в пути это для совместимости чтобы из 9 весии пользоваться версией 8 firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

import App from "./App.vue";

import router from "./router";

import showMessage from "@/helpers/show-message";
import messages from "@/helpers/messages";

firebase.initializeApp({
  apiKey: "AIzaSyCmZb9pg68mI12DEX0PvfTwug1lU84DbWI",
  authDomain: "crm-vue-vladilen.firebaseapp.com",
  projectId: "crm-vue-vladilen",
  storageBucket: "crm-vue-vladilen.appspot.com",
  messagingSenderId: "173651020409",
  appId: "1:173651020409:web:8e88678e3b8ddc2fb422a8",
  databaseURL:
    "https://crm-vue-vladilen-default-rtdb.asia-southeast1.firebasedatabase.app",
});

let vueApp = null;

firebase.auth().onAuthStateChanged(() => {
  if (!vueApp) {
    vueApp = createApp(App);

    vueApp.use(createPinia());
    vueApp.use(router);
    vueApp.use(showMessage);
    vueApp.use(messages);
    vueApp.component('Loader', Loader)

    vueApp.mount("#app");
  }
});
