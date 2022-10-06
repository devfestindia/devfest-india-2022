import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [
      {
        text: "Home",
        to: "/",
        icon: "mdi-home-outline",
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      {
        text: "Communities",
        to: "/communities",
        icon: "mdi-code-tags",
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      {
        text: "Find an Event",
        to: "/devfest",
        icon: "mdi-format-list-group",
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      {
        text: "CFP",
        to: "/cfp",
        icon: "mdi-account-group-outline",
        meta: {
          showToolbar: true,
          showBottomNav: true,
        },
      },
      // {
      //   text: "Badges",
      //   to: "/badges",
      //   icon: "mdi-newspaper-variant-outline",
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: true,
      //   },
      // },
      {
        text: "FAQ",
        to: "/faq",
        icon: "mdi-star-outline",
        meta: {
          showToolbar: true,
          showBottomNav: false,
        },
      }
    ]
  },
  getters:{
    links: (state) => state.items,
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: (state) => (state.drawer = !state.drawer),
  },
  actions: {
  },
  modules: {
  }
})