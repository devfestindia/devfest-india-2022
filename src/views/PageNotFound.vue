<template>
    <v-main>
      <v-container fluid class="">
        <v-row justify="center" align="center">
          <v-col md="12" sm="12" cols="12" lg="10" class="google-font my-10">
            <v-container fluid>
              <v-row align="start" justify="start">
                <v-col md="11" lg="11">
                  <p class="google-font gdg-h1 mb-0 grey--text text--darken-2">
                    Page not found
                  </p>
                <p style="font-size: 110%" class="mt-3 mb-0">
                  The requested URL was not found on this server.
                </p>
                <p>That's all we know.</p>
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
    name: "NOTComponent",
    data: () => ({
    }),
    created() {
      document.title = "Page Not Found | DevFest Jalandhar 2022";
    },
  };
  </script>
    
    <style scoped></style>
    