import { defineStore } from 'pinia'
import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCmZb9pg68mI12DEX0PvfTwug1lU84DbWI",
  authDomain: "crm-vue-vladilen.firebaseapp.com",
  projectId: "crm-vue-vladilen",
  storageBucket: "crm-vue-vladilen.appspot.com",
  messagingSenderId: "173651020409",
  appId: "1:173651020409:web:8e88678e3b8ddc2fb422a8"
});

const auth = getAuth(firebaseApp);

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    auth: null
  }),
  getters: {
  },
  actions: {
    async login({ email, password }) {
      // try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode)
          console.error(errorMessage)
          throw error
        });
      // } catch (error) {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   console.error(errorCode)
      //   console.error(errorMessage)
      //   throw error
      // }
    },
    async logout() {
      await signOut(auth)
    }
  }
})
