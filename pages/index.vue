<template>
  <div>
    <app-textlockup />
    <app-sales-boxes />
    <app-textlockup>
      <template v-slot:img>
        <img  src="/Test_matcha_te_drik.jpg" />
      </template>
      <template v-slot:new></template>
      <template v-slot:sale>Newly</template>
      <template v-slot:collection>Opened</template>
      <template v-slot:details>Tea Shop</template>
    </app-textlockup>
    <app-featured-products />
  </div>
</template>

<script>
import AppTextlockup from "~/components/AppTextlockup.vue";
import AppSalesBoxes from "~/components/AppSalesBoxes.vue";
import AppFeaturedProducts from "~/components/AppFeaturedProducts.vue";

export default {
  components: {
    AppTextlockup,
    AppSalesBoxes,
    AppFeaturedProducts
  }
};
</script>

<style>
.carousel-image {
  display: block;
  height: 300px;
  /* set min-width, allow images to set cell width */
  min-width: 150px;
  max-width: 100%;
  margin-right: 10px;
  /* vertically center */
  top: 50%;
  transform: translateY(-50%)
}

.carousel.is-fullscreen .carousel-image {
  height: auto;
  max-height: 100%;
}
.test {
  margin: 3vh;
}

main {
  width: 75vw;
}
</style>
