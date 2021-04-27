<template>
  <header>
    <nav :class="{'darkmode-nav': !darkmode}">
      <nuxt-link exact to="/"><img class="logo" src="/logo.png"></nuxt-link>
      <ul>
        <li>
          <nuxt-link exact to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/all">All</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/women">Women</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/men">Men</nuxt-link>
        </li>
      </ul>
      <div class="caart">
        <nuxt-link to="/cart">🛒</nuxt-link>
        <div class="carttotal" v-if="cartCount > 0">{{ cartCount }}</div>
      </div>
          
    </nav>
    <div @click="darkmode = !darkmode" class="s-module--toggler ZIndex-checker toggle">
   <span class="icon-click">💡</span>
  </div>
  <div class="expanded-overlay"></div>
  <a :class="{'expand': !darkmode}" class="s-module--blender blender"></a>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["cartCount"])
  }, 
  data() {
    return {
      darkmode: true
    }
  }
};
</script>

<style lang="scss" scoped>
.logo{
  width: 30px;
  height: 30px;
}
.caart{
  display: flex;
}

h1{
  color: black;
}
.expand {
    transform: translate(-50%, -50%) scale(100);
}
.expand-hover {
    transform: translate(-50%, -50%) scale(10);
}
.blender {
  width: 3rem;
  height: 3rem;
  position: fixed;
  border-radius: 50%;
  top: 90%;
  left: 90%;
  bottom: 1rem;
  pointer-events: none;
  background-color: white;
  transition: all 2.0s cubic-bezier(0.645, 0.045, 0.355, 1);
  mix-blend-mode: difference;
}
.s-module--toggler {
  background: #BEBEBE;
  width: 3rem;
  height: 3rem;
  position: fixed;
  border-radius: 50%;
  top: 90%;
   left: 90%;
  bottom: 1rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.expanded-overlay {
  position: fixed;
  background:white;
  top: 0;
  left: 0;
  height: 100vmax;
  width: 100vmax;
  z-index: -1;
}

header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px 0;
}

nav {
  display: flex;
  width: 80vw;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 8px 0;
  ul {
    padding-left: 0;
    li {
      display: inline;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 13px;
      padding: 0 20px;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;
      position: relative;
      a {
        color: black;
        &:hover {
          color: #c14103;
        }
      }
    }
  }
}
 
.carttotal {
  border-radius: 1000px;
  background: black;
  color: white;
  font-size: 10px;
  padding: 3px;
  top: -18px;
  right: -5px;
  width: 25px;
  text-align: center;
  height: 25px;
  font-size: 10px;
  padding: 6px 10px;
  font-weight: bold;
}

@media screen and (max-width: 850px) {
  h1 {
    margin: 0;
  }
  nav ul li {
    padding: 0 5px !important;
    border-left: none !important;
    border-right: none !important;
  }
}
</style>