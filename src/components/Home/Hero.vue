<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col md="7">
        <v-img
          class="white--text align-end"
          style=""
          width="60%"
          :src="require('@/assets/img/DF22.png')"
        ></v-img>
        <!-- <p class="google-font gdg-heading mb-0 grey--text text--darken-2">
          DevFest India
        </p> -->
        <p class="google-font mt-3" style="font-size: 19px">
          <v-icon>mdi-calendar-month</v-icon> September - December, 2022
        </p>
        <p
          class="google-font text--secondary"
          style="font-weight: 500; font-size: 20px"
        >
          An annual event hosted by the Google Developers Group across the world
          to bring the technology closer to the developers. It is an all day
          developer conference where we aim to focus on multiple technologies
          through lightning talks, sessions, workshops, etc.
        </p>
        <v-btn
                dark
                depressed
                to="/devfest"
                rounded
                color="#4285F4"
                >Find an Events
              </v-btn>
      </v-col>
      <v-col md="5">
        <iframe width="100%" height="302" src="https://www.youtube.com/embed/K6W9Usve6hI" title="DevFest India 2022 is here!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 12px;border: 2px solid black;"></iframe>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HeroView",
};
</script>

<style>
</style>