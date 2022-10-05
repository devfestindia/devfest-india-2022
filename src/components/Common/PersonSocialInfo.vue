<template>
  <v-container fluid class="py-0 my-0">
    <v-row class="py-0 my-0" justify="start" align="start">
      <v-col md="12" lg="12" sm="12" cols="12" class="py-0 my-0">
        <v-btn
          aria-label="social media btn"
          class="ml-0 mt-0 mx-0"
          icon
          v-if="checkExistance(socialInfo.twitter, 0)"
          :href="socialInfo.twitter"
          target="_blank"
        >
          <v-icon color="#1da1f2">mdi-twitter</v-icon>
        </v-btn>

        <v-btn
          aria-label="social media btn"
        
          class="mt-0 mx-0"
          icon
          v-if="checkExistance(socialInfo.linkedin, 0)"
          :href="socialInfo.linkedin"
          target="_blank"
        >
          <v-icon color="#0077b5">mdi-linkedin</v-icon>
        </v-btn>
        <v-btn
          aria-label="social media btn"
        
          class="ml-0 mt-0 mx-0"
          icon
          v-if="checkExistance(socialInfo.github, 0)"
          :href="socialInfo.github"
          target="_blank"
        >
          <v-icon color="black">mdi-github</v-icon>
        </v-btn>
        <v-btn
          aria-label="social media btn"
        
          class="mt-0 mx-0"
          icon
          v-if="checkExistance(socialInfo.website, 0)"
          :href="socialInfo.website"
          target="_blank"
        >
          <v-icon color="#333333">mdi-link-variant</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PersonSocialhandel",
  props: ["socialInfo"],
  methods: {
    checkExistance(link, size) {
      return link && link.length > size;
    },
  },
};
</script>