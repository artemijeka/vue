import { defineStore } from "pinia";

import firebase from "firebase/compat/app";

// import { useInfoStore } from '@/stores/info'

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // auth: null,
    // info: useInfoStore(),
    error: null,
  }),
  getters: {
    error: (s) => s.error,
  },
  actions: {
    setError(error) {
      this.$state.error = error;
    },
    clearError() {
      this.$state.error = null;
    },
    async login({ email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        this.setError(error);
        console.log("error");
        console.log(error);
        throw error; //прокидывается ошибка чтобы завершить с ошибкой
      }
    },
    async logout() {
      await firebase.auth().signOut();
      this.info.clearInfo();
    },
    async register({ email, password, name, bill, agreeRules }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await this.getUid();
        await firebase.database().ref(`/users/${uid}/info`).set({
          email,
          password,//это в незашифрованном виде неправильно записывать в БД так не делается!
          name,
          bill,
          agreeRules,
        });
      } catch (error) {
        this.setError(error);
        console.log("error");
        console.log(error);
        throw error; //прокидывается ошибка чтобы завершить с ошибкой
      }
    },
    async getUid() {
      const user = await firebase.auth().currentUser;
      return user ? user.uid : null;
    },
  },
});
