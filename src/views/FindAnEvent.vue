<template>
  <v-main>
    <v-container fluid class="">
      <v-row justify="center" align="center">
        <v-col md="12" sm="12" cols="12" lg="10" class="google-font my-10">
          <v-container fluid>
            <v-row align="start" justify="start">
              <v-col md="11" lg="11">
                <p
                  class="google-font gdg-heading mb-0 grey--text text--darken-2"
                >
                  DevFests in India
                </p>
                <p class="my-0 mb-8 h1-subheading">
                  Communities from each chapter, all over the India have gathered together to make India DevFest a success. Locate your nearest google developer group and join the event right here!
                </p>
                <v-container fluid class="ma-0 pa-0">
                  <v-row align="start" justify="start">
                    <v-col md="3" sm="6" v-for="(item,index) in data" :key="index">
                        <DevFestDialogeVue :item="item"/>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
  
<script>
import devfestData from '../assets/data/devfests.json'
import DevFestDialogeVue from "../components/Common/DevFestDialoge.vue";

export default {
  name: "CoCComponent",
  components: {
    DevFestDialogeVue,
  },
  data: () => ({
    data: devfestData
  }),
  created() {
    document.title = "DevFests in India | DevFest India 2022";
  },
};
</script>
  
  <style scoped></style>
  