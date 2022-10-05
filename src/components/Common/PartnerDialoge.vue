<template>
  <v-dialog v-model="dialog" width="600" scrollable>
    <template v-slot:activator="{ on, attrs }">
      <div
        v-on="on"
        v-bind="attrs"
        style="
          cursor: pointer;
          background: white;
          margin-left: auto;
          margin-right: auto;
        "
        class="py-n5 ma-0"
      >
        <v-card
          flat
          outlined
          class="d-flex px-2 py-2 community-card"
          rounded="lg"
        >
          <v-row justify="center" align="center" class="py-2">
            <v-col cols="3" class="pl-md-6 pl-5 community-image">
              <v-avatar>
                <v-img
                  width="50px"
                  height="50px"
                  :src="getCommunityImage(item.img)"
                  :lazy-src="getCommunityImage(item.img)"
                  :alt="item.title"
                />
              </v-avatar>
            </v-col>
            <v-col cols="9">
              <p style="font-size: 18px; font-weight: 600" class="mb-0">
                {{ item.name }}
              </p>
              <p class="mx-0 my-0 caption text--secondary" v-if="item.link">
                View community
                <v-icon size="15px">mdi-chevron-right</v-icon>
              </p>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </template>
    <v-card class="white google-font" v-if="dialog" style="border-radius: 12px">
      <v-card-text class="pa-0">
        <v-container fluid class="py-8">
          <v-row>
            <v-col md="12" cols="12" class="px-md-10 px-5">
              <p>Our Community Partner</p>
              
              <p style="font-size:200%">{{item.name}}</p>

              <p class="mt-4" style="font-size: 17px" v-html="item.desc"></p>

              <v-btn
                :href="item.link"
                target="_blank"
                color="#4285F4"
                dark
                depressed
                right
                >
               
                View Community
                <v-icon right>mdi-open-in-new</v-icon></v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <!-- <v-divider></v-divider> -->

      <v-card-actions class="white">
        <v-spacer></v-spacer>
        <v-btn aria-label="close" class="px-10" text @click="dialog = false"
          >Close</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
  
  <script>
export default {
  props: ["item"],
  data: () => ({
    dialog: false,
  }),
  methods: {
    getCommunityImage: (name) => {
      return require("@/assets/img/partners/" + name);
    },
  },
};
</script>
  
  <style>
</style>