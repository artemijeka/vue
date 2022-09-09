import { defineStore } from "pinia";

// import { useAuthStore } from './auth'
import { getAuth, onAuthStateChanged } from "firebase/auth";
// const auth = getAuth();
import { auth, db } from "@/stores/auth";

import { getDatabase, ref, set, onValue } from "firebase/database";
// const db = getDatabase();

export const useInfoStore = defineStore({
  id: "info",
  state: () => ({
    info: {},
    // auth: useAuthStore()
  }),
  actions: {
    async fetchInfo() {
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          try {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // console.log('user.uid')
            // console.log(user.uid)
            const starCountRef = ref(db, "users/" + user.uid + "/info/");
            onValue(starCountRef, (snapshot) => {
              const data = snapshot.val();
              console.log("data");
              console.log(data);
              this.$state.info = data;
              // this.setInfo(data)
              console.log("this.$state.info");
              console.log(this.$state.info);
              return data;
              // this.setInfo(data)
              // updateStarCount(postElement, data);
            });
          } catch (error) {
            console.error(error);
          }
        } else {
          // User is signed out
          console.log("User is signed out");
        }
      });
    },
    // async setInfo(data) {
    // this.$state.info = data
    // },
    // clearInfo() {
    //   // this.info = {}
    // },
  },
  getters: {
    info: (state) => state.info,
  },
});
