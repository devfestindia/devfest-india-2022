<template>
  <v-main>
    <v-container fluid class="">
      <v-row justify="center" align="center">
        <v-col md="12" sm="12" cols="12" lg="10" class="google-font my-md-10 my-0">
          <v-container fluid>
            <v-row align="center" justify="center">
              <v-col
                md="4"
                sm="12"
                cols="12"
                class="px-md-7 px-3 mt-3 px-0 mb-md-13 py-0"
              >
                <div class="mb-10">
                  <p class="google-font gdg-h1 mb-0 grey--text text--darken-2">
                    Google Developers Groups Communities across India
                  </p>
                  <p class="google-font" style="font-size: 18px">
                    Communities from each chapter, all over the India have
                    gathered together to make India DevFest a success. Locate
                    your nearest google developer group and join them right
                    here!
                  </p>
                </div>
              </v-col>
              <v-col
                md="8"
                sm="12"
                cols="12"
                class="text-center py-md-10 py-0 "
              >
                <div v-if="loading" class="my-md-15 text-center pa-15">
                  <v-progress-circular
                    indeterminate
                    color="#4184F7"
                    :width="5"
                    :size="50"
                  >
                  </v-progress-circular>
                </div>

                <iframe
                  v-show="!loading"
                  @load="load"
                  src="https://www.google.com/maps/d/embed?mid=1F9Lyn8xgdMJwGUWr-BC1rjKVVeZTlv3A&z=4"
                  width="100%"
                  height="500"
                  style="border-radius: 18px; border: 0"
                ></iframe>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
    
    <script>
export default {
  name: "CommunitiesComponent",
  data: () => ({
    loading: true,
  }),
  created() {
    document.title = "Communities | DevFest India 2022";
  },
  methods: {
    load() {
      this.loading = false;
    },
  },
  mounted() {},
};
</script>
  <style scoped>
</style>
  
    