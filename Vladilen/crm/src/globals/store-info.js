import {useStoreInfo} from '@/stores/info';

export default {
  install(app, options) {
    app.config.globalProperties.$storeInfo = useStoreInfo()
  }
}