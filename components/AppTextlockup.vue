<template>
  <div class="textlockup">
    <div class="img">
      <slot name="img">
        <img src="/matcha-te-2.jpg" alt="shoe" />
      </slot>
    </div>
    <div class="new">
      <slot name="new"></slot>
    </div>
    <div class="sale">
      <slot v-if="jannicksCave" name="sale">{{jannicksCave.acf.headertitle}}</slot>
    </div>
    <div class="collection">
      <slot v-if="jannicksCave" name="collection">{{jannicksCave.acf.headerdescription}}</slot>
    </div>
    <div class="details">
      <slot name="details"></slot>
    </div>
  </div>
</template>

<script>

export default {

computed: {
    jannicksCave() {
      return this.$store.getters.jannicksCave;
    }
  },
mounted() {
    this.$store.dispatch("createTestDataIntent");

  },
  };

</script>

<style lang="scss" scoped>
.textlockup {
  display: grid;
  grid-template-columns: 50px 100px 1fr;
  grid-template-rows: 50px 50px 100px 20px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  isolation: isolate;
  .new {
    grid-area: 1 / 1 / 5 / 4;
    font-size: 23vmin;
    color: #efefef;
    text-transform: uppercase;
  }
  .sale {
    grid-area: 2 / 2 / 3 / 4;
    font-size: 6.5vmin;
    color: #d96528;
    font-family: "PT Serif", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
  }
  .collection {
    grid-area: 3 / 3 / 4 / 4;
    font-size: 8.5vmin;
    font-family: "PT Serif", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
      color:white;
  }
  .details {
    grid-area: 4 / 2 / 5 / 4;
    font-size: 2vmin;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  .img {
    max-width: 950px;
    grid-area: 1 / 3 / 6 / 4;
    img {
      width: 95%;
    }
  }
}

@media screen and (max-width: 650px) {
  .textlockup {
    grid-template-columns: 25px 25px 1fr !important;
    grid-template-rows: 6vmin 5.5vmin 10vmin 20px 1fr !important;
  }
}
</style>