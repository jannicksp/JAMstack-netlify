import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2cbe8dff = () => interopDefault(import('..\\pages\\all.vue' /* webpackChunkName: "pages/all" */))
const _02e7cc32 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _c898d098 = () => interopDefault(import('..\\pages\\men.vue' /* webpackChunkName: "pages/men" */))
const _7f082c5c = () => interopDefault(import('..\\pages\\women.vue' /* webpackChunkName: "pages/women" */))
const _21a5203d = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _1fddc330 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/all",
    component: _2cbe8dff,
    name: "all"
  }, {
    path: "/cart",
    component: _02e7cc32,
    name: "cart"
  }, {
    path: "/men",
    component: _c898d098,
    name: "men"
  }, {
    path: "/women",
    component: _7f082c5c,
    name: "women"
  }, {
    path: "/product/:id?",
    component: _21a5203d,
    name: "product-id"
  }, {
    path: "/",
    component: _1fddc330,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
