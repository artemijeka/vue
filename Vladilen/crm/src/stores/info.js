import { defineStore } from "pinia";

import { useAuthStore } from "./auth";

import firebase from "firebase/compat/app";

export const useInfoStore = defineStore({
  id: "info",
  state: () => ({
    info: {},
    auth: useAuthStore(),
  }),
  actions: {
    async fetchCurrency() {
      console.log('import.meta.env.VITE_SOME_KEY')
      console.log(import.meta.env.VITE_SOME_KEY)//!VITE_ is required!
    },
    async fetchInfo() {
      const uid = await this.auth.getUid();
      console.log("uid");
      console.log(uid);
      const info = (
        await firebase.database().ref(`/users/${uid}/info`).once("value")
      ).val();
      // console.log('info')
      // console.log(info)
      this.setInfo(info);
      // await onAuthStateChanged(auth, (user) => {
      //   if (user) {
      //     try {
      //       // User is signed in, see docs for a list of available properties
      //       // https://firebase.google.com/docs/reference/js/firebase.User
      //       // console.log('user.uid')
      //       // console.log(user.uid)
      //       const starCountRef = ref(db, "users/" + user.uid + "/info/");
      //       onValue(starCountRef, (snapshot) => {
      //         const data = snapshot.val();
      //         console.log("data");
      //         console.log(data);
      //         this.$state.info = data;
      //         // this.setInfo(data)
      //         console.log("this.$state.info");
      //         console.log(this.$state.info);
      //         return data;
      //         // this.setInfo(data)
      //         // updateStarCount(postElement, data);
      //       });
      //     } catch (error) {
      //       console.error(error);
      //     }
      //   } else {
      //     // User is signed out
      //     console.log("User is signed out");
      //   }
      // });
    },
    async setInfo(info) {
      this.$state.info = info;
      // console.log('this.$state')
      // console.log(this.$state)
    },
    clearInfo() {
      this.$state.info = {};
    },
  },
  getters: {
    getInfo: (s) => s.info,
  },
});
