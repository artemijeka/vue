<template>
  <main>
    <div>
      <div class="page-title">
        <h3>Счет</h3>

        <button class="btn waves-effect waves-light btn-small">
          <i class="material-icons">refresh</i>
        </button>
      </div>

      <Loader v-if="loading" />

      <div v-else class="row">
        <HomeBill />

        <HomeCurrency />
      </div>
    </div>
  </main>
</template>

<script setup>
import HomeBill from "@/components/HomeBill.vue";
import HomeCurrency from "@/components/HomeCurrency.vue";
import { ref, onMounted } from "vue";
import Loader from "../components/Loader.vue";
import { useStoreInfo } from "@/stores/info.js";

let loading = ref(true),
  currency = ref(null),
  storeInfo = ref(useStoreInfo());

onMounted(() => {
  console.log('storeInfo')
  console.log(storeInfo)
});
</script>