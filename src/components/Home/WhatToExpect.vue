<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col md="12" >
        <v-container fluid class=" pa-8 px-10" style="border:2px solid black;border-radius: 12px;">
          <v-row align="center" justify="center">
            <v-col md="3" cols="12">
              <p class="google-font gdg-h1 mb-4 grey--text text--darken-2">
                What to expect at DevFest India
              </p>
            </v-col>
            <v-col md="9" cols="12" class="text-center">
              <v-container fluid>
                <v-row align="start" justify="start">
                  <v-col
                    md="4"
                    cols="12"
                    class="text-center"
                    v-for="(item, index) in whatWedo"
                    :key="index"
                  >
                    <!-- <v-img
                      :src="item.img"
                      :width="item.size"
                      style="margin: auto"
                    ></v-img> -->
                    <p style="font-size: 18px; font-weight: 600" class="mt-4">
                      {{ item.title }}
                    </p>
                    <p>{{ item.desc }}</p>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    whatWedo: [
      {
        title: "Technical content",
        size: "15%",
        img: "https://developers.google.com/community/devfest/images/conference.svg",
        desc: "Events hosted by the Google Developer Groups community, featuring leading experts on Google technologies in areas like Android, Firebase and so much more!",
      },
      {
        title: "Workshops",
        size: "25%",
        img: "https://developers.google.com/community/devfest/images/workshops.svg",
        desc: "Full-day workshops, hands-on experiences, hacking and debugging events, all centered on your favorite Google technologies.",
      },
      {
        title: "Networking",
        size: "21%",
        img: "https://developers.google.com/community/devfest/images/networking.svg",
        desc: "Meet and connect with other developers in your community.",
      },
    ],
  }),
};
</script>

<style>
</style>