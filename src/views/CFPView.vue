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
                  Call for Presentations
                </p>
                <p class="my-0 mb-8 h1-subheading">
                  Communities from each chapter, all over the India have
                  gathered together to make India DevFest a success. Locate your
                  nearest google developer group and join the event as a Speaker
                  right here!
                </p>

                <v-card outlined>
                  <v-card-title>
                    CFPs
                    <v-spacer></v-spacer>
                    <v-text-field
                      v-model="search"
                      append-icon="mdi-magnify"
                      label="Search"
                      single-line
                      hide-details
                    ></v-text-field>
                  </v-card-title>
                  <v-data-table
                    :headers="headers"
                    :items="data"
                    :search="search"
                    mobile-breakpoint="0"
                  >
                    <template v-slot:[`item.CommunityName`]="{ item }">
                      <a :href="item.CommunityPage" target="_black">{{
                        item.CommunityName
                      }}</a>
                    </template>
                    <template v-slot:[`item.DevFestName`]="{ item }">
                      <a :href="item.EventLink" target="_black">{{
                        item.DevFestName
                      }}</a>
                    </template>
                    <template v-slot:[`item.StartingDate`]="{ item }">
                      {{ getDate(item.StartingDate) }}
                    </template>
                    <template v-slot:[`item.custom`]="{ item }">
                      <a
                        v-if="new Date(item.CFP.LastDate) >= new Date().setHours(0,0,0,0)"
                        color="red"
                        style="font-size: 14px; text-decoration: underline"
                        :href="item.CFP.Link"
                        target="_black"
                        >Apply now
                     </a>
                      <a
                        v-else
                        class="disabled"
                      >Applications closed
                      </a>
                      <!-- <a :href="item.CFP.Link" target="_black">Apply now</a> -->
                    </template>

                    <template v-slot:[`item.deadline`]="{ item }">
                      {{ getDate(item.CFP.LastDate) }}
                    </template>
                  </v-data-table>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
    
  <script>
import devfestData from "../assets/data/devfests.json";

export default {
  name: "CFPComponent",
  components: {},
  data: () => ({
    data: devfestData,
    search: "",
    headers: [
      { text: "Community", value: "CommunityName" },
      { text: "City", value: "City" },
      { text: "DevFest", value: "DevFestName" },
      { text: "DevFest Date", value: "StartingDate" },
      { text: "CFP Link", value: "custom" },
      { text: "CFP Deadline", value: "deadline" },
    ],
  }),
  created() {
    document.title = "Call for Presentations | DevFest Jalandhar 2022";

    this.data = this.data.filter((e) => e.CFP.Status == 1);
  },
  methods: {
    getDate(d) {
      var date = new Date(d).toString().split("GMT");
      date = date[0].split(" ");
      return date[1] + " " + date[2] + ", " + date[3];
    },
  },
};
</script>
    
    <style scoped></style>
    