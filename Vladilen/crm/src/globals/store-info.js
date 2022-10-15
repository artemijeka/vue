import { useInfoStore } from "@/stores/info.js";

export default {
  install(app, options) {
    app.config.globalProperties.$storeInfo = useInfoStore();
  },
};
