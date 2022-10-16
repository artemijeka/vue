import { defineStore } from 'pinia'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

import { useStoreInfo } from '@/stores/info'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCmZb9pg68mI12DEX0PvfTwug1lU84DbWI",
  authDomain: "crm-vue-vladilen.firebaseapp.com",
  projectId: "crm-vue-vladilen",
  storageBucket: "crm-vue-vladilen.appspot.com",
  messagingSenderId: "173651020409",
  appId: "1:173651020409:web:8e88678e3b8ddc2fb422a8",
  databaseURL: "https://crm-vue-vladilen-default-rtdb.asia-southeast1.firebasedatabase.app"
});

export const auth = getAuth(firebaseApp);

export const db = getDatabase(firebaseApp);
// console.log('db')
// console.log(db)

export const useStoreAuth = defineStore({
  id: 'auth',
  state: () => ({
    // auth: null,
    info: useStoreInfo(),
    error: null,
  }),
  getters: {
    error: (state) => (state.error)
  },
  actions: {
    setError(error) {
      this.$state.error = error
    },
    clearError(state) {
      state.error = null
    },
    async login({ email, password }) {
      // try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          this.setError(error.code)
          // console.error(error.code)
          // console.error(error.message)
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
      // console.log('this.info.clearInfo()')
      // this.info.clearInfo()
    },
    async register({ email, password, name, agreeRules }) {
      await createUserWithEmailAndPassword(auth, email, password, name, agreeRules)
        .then((userCredential) => {
          const user = userCredential.user;
          this.writeUserData(user.uid, email, password, name, agreeRules)
        })
        .catch((error) => {
          this.setError(error.code)
          // console.error(error.code)
          // console.error(error.message)
          throw error
        });
    },
    writeUserData(userId, email, password, name, agreeRules) {
      // console.log('db')
      // console.log(db)
      set(ref(db, 'users/' + userId + '/info/'), {
        bill: 10000,
        email,
        password,
        name,
        agreeRules
      });
    },
  }
})
