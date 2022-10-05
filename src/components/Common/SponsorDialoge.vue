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
        class="text-center py-2 ma-0"
      >
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-card
              size="130"
              outlined
              class="pa-3"
              style="
                display: flex;
                justify-content: center;
                border-radius: 8px;
                margin-left: auto;
                margin-right: auto;
              "
              height="70"
              v-bind="attrs"
              v-on="on"
              width="310"
              v-ripple
            >
              <!-- getImgUrl(speakerData.image)
            getImgUrl(speakerData.image) -->
              <v-img
                :src="item.img"
                contain
                :lazy-src="item.img"
                :alt="item.name"
              ></v-img>
            </v-card>
          </template>
          <span>{{ item.name }}</span>
        </v-tooltip>
      </div>
    </template>
    <v-card class="white google-font" v-if="dialog" style="border-radius: 12px">
      <v-card-text class="pa-0">
        <v-container fluid class="py-8">
          <!-- <v-row>
            <v-col md="12" cols="12" class="px-md-10 px-3">
              <v-container fluid class="pa-0 ma-0">
                <v-row class="pa-0 ma-0">
                  <v-col md="12" class="pa-0 ma-0">
                    <p style="font-size:22px">{{ item.name }}</p>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row> -->
          <v-row>
            <v-col md="12" cols="12" class="px-md-10 px-5">
              <p>Our Sponsor</p>
              <v-card
                size="130"
                outlined
                class="pa-3"
                style="
                  display: flex;
                  justify-content: center;
                  border-radius: 8px;
                "
                height="70"
                v-bind="attrs"
                v-on="on"
                width="300"
                v-ripple
              >
                <!-- getImgUrl(speakerData.image)
            getImgUrl(speakerData.image) -->
                <v-img
                  :src="item.img"
                  contain
                  :lazy-src="item.img"
                  :alt="item.name"
                ></v-img>
              </v-card>
              <p class="mt-4" style="font-size: 17px" v-html="item.desc"></p>

              <v-btn
                :href="item.link"
                target="_blank"
                color="#4285F4"
                dark
                depressed
                >Website</v-btn
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
};
</script>

<style>
</style>