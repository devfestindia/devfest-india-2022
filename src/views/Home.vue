<template>
  <v-main >
    <v-container fluid class="" style="background: rgb(245,245,245);
background: linear-gradient(183deg, rgba(245,245,245,1) 0%, rgba(255,255,255,1) 35%);">
      <v-row justify="center" align="center">
        <v-col md="12" sm="12" cols="12" lg="10" class="google-font">
          <HeroVue class="my-10" />
          <WhatToExpectVue/>
          <TechFocusedVue class="my-10" />
          <!-- <JoinCommunityVue class="my-10" /> -->
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import HeroVue from "../components/Home/Hero.vue";
// import JoinCommunityVue from '../components/Home/JoinCommunity.vue';
import TechFocusedVue from '../components/Home/TechFocused.vue';
import WhatToExpectVue from '../components/Home/WhatToExpect.vue';




export default {
  name: "HomeComponent",
  components: {
    HeroVue,
    WhatToExpectVue,
    TechFocusedVue,
    // JoinCommunityVue,
  },
  data: () => ({}),
  created() {
    document.title = "DevFest India 2022 | Home Page";
  },
};
</script>

<style scoped></style>
