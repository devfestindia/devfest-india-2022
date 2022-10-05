<template>
  <!-- style="box-shadow: 0 2px 6px 0 rgba(0,0,0,.12), inset  0 -1px 0 0 #dadce0" -->
  <v-app-bar app fixed color="white" flat>
    <v-app-bar-nav-icon
      aria-label="Hamburger Btn"
      @click="toggleDrawer"
      class="d-md-none d-lg-none"
    ></v-app-bar-nav-icon>
    <v-toolbar-title class="google-font px-0" style="width: 230px"
      ><router-link
        to="/"
        class="google-font grey--text text--darken-2"
        style="text-decoration: none; font-size: 120%; font-weight: 400"
      >
        <p class="google-font my-0 mb-0">DevFest India</p>
      </router-link></v-toolbar-title
    >
    <!-- <v-spacer></v-spacer> -->
    <v-tabs
      color="#4285FA"
      left
      slider-color="#4285FA"
      :hide-slider="getRouteName()"
      class="hidden-sm-and-down google-font"
    >
      <v-tab
        class="google-font"
        aria-label="toolbar links"
        v-for="(link, i) in links.filter((obj) => obj.meta.showToolbar)"
        :key="i"
        :to="link.to"
        @click="onClick($event, link)"
        style="text-transform: capitalize; font-size: 17px; font-weight: 400"
        >{{ link.text }}</v-tab
      >
    </v-tabs>
    <v-spacer></v-spacer>
    <v-btn aria-label="Share Button" icon v-on:click="shareMe">
      <v-icon>mdi-share-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "AppBar",
  data: () => ({
    hideSlidersOn: [
      "CodeofConduct",
      "DevFestCommunityPage"
    ],
    userFound: false,
    userInfo: {},
    loadingUser: true,
  }),
  components: {},
  computed: {
    ...mapGetters(["links"]),
  },
  mounted() {
    // this.checkStatus();
  },
  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    },
    getRouteName() {
      return this.hideSlidersOn.includes(this.$route.name) ? true : false;
    },
    shareMe() {
      if (navigator.share) {
        // console.log(this.$route)
        navigator
          .share({
            title: "DevFest India 2022",
            url: "https://devfestindia.com" + this.$route.path,
          })
          .then(() => {
            console.log("Thanks for sharing");
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        alert("Not supporting in your browser");
      }
    },
  },
};
</script>

<style>
.v-toolbar .v-toolbar__content {
  /* border-bottom: 1px solid #666666; */
  border-bottom: 1px solid rgb(218, 220, 224);
}
@media only screen and (min-width: 600px) {
  .v-toolbar .v-toolbar__content {
    padding-left: 4%;
    padding-right: 4%;
  }
}
</style>