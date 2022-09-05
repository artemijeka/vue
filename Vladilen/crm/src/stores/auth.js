import { defineStore } from 'pinia'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCmZb9pg68mI12DEX0PvfTwug1lU84DbWI",
  authDomain: "crm-vue-vladilen.firebaseapp.com",
  projectId: "crm-vue-vladilen",
  storageBucket: "crm-vue-vladilen.appspot.com",
  messagingSenderId: "173651020409",
  appId: "1:173651020409:web:8e88678e3b8ddc2fb422a8",
  databaseURL: "https://crm-vue-vladilen-default-rtdb.asia-southeast1.firebasedatabase.app"
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
    },
    async register() {
      await createUserWithEmailAndPassword(auth, email, password, name)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('user')
          console.log(user)//впринципе можно здесь сделать get id вместо action getUId
          this.writeUserData(email, password, name)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode)
          console.error(errorMessage)
          throw error
        });
    },
    // getUId() {
    //   onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       // User is signed in, see docs for a list of available properties
    //       // https://firebase.google.com/docs/reference/js/firebase.User
    //       return user.uid
    //     } else {
    //       return null
    //     }
    //   });
    // },
    writeUserData(userId, email, password, name) {
      const db = getDatabase(firebaseApp);
      console.log('db')
      console.log(db)
      set(ref(db, 'users/' + userId), {
        email: email,
        password: password,
        name : name
      });
    }
  }
})
