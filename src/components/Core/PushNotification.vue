<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn icon text v-on="on" aria-label="Push Notification">
          <v-icon v-if="!isAllowed">mdi-bell-outline</v-icon>
          <v-icon v-else>mdi-bell-check-outline</v-icon>
        </v-btn>
      </template>

      <v-card style="border-radius:12px" >
        <v-card-title class="google-font px-md-10 pt-md-10" style="font-size:25px;font-weight:600">Allow us to send Notification</v-card-title>

        <v-card-text class="px-md-10">
          <p style="font-size:16px">We never spam you by sending unnecessary Notification.</p>
          <p class="google-font" style="font-size:18px">
            <span class="font-weight-bold text--primary">Status:</span>
            {{ token }}
          </p>
        </v-card-text>

        <!-- <v-divider></v-divider> -->

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            :loading="isLoading"
            :disabled="buttonText == 'Allowed'"
            @click="requestPermission"
            >{{ buttonText }}</v-btn
          >
          <v-btn color="error" text @click="dialog = false">close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import FDK from "@/Config/firebase";
// import { mapState } from "vuex";
import generalConfig from "@/Config/ServerKeys";
export default {
  name: "PushNotification",
  data() {
    return {
      dialog: false,
      isLoading: false,
      token: "Not Granted Yet",
      buttonText: "Allow",
      isAllowed: false
    };
  },
  methods: {
    requestPermission() {
      try {
        if (FDK.notificationSupported && Notification) {
          FDK.messaging.usePublicVapidKey(`${generalConfig.vapidKey}`);
          this.isLoading = true;
          this.token = "Please wait...";
          Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
              let token = localStorage.getItem("pushNotificationToken");
              if (token == null || token.length <= 0) {
                FDK.messaging
                  .getToken({vapidKey:"BOZ5MCkf_8qsX_c7bZVKZR5m3vtq6dSy_IwaN4MYD2wnVF94ysxnsQHUkX3qKmhy_V7oGqVfxmjGSrFZH6GsvKw"})
                  .then((currentToken) => {
                    if (currentToken) {
                      FDK.firestore
                        .collection("pushNotificationTokens")
                        .add({
                          token: currentToken,
                        })
                        .then(() => {
                          this.token = "Successfully Subscribed";
                          this.displayNotificaion();
                          localStorage.setItem(
                            "pushNotificationToken",
                            currentToken
                          );
                          this.isLoading = false;
                          this.buttonText = "Allowed";
                        })
                        .catch((err) => {
                          this.token = err;
                          this.isLoading = false;
                        });
                    } else {
                      this.isLoading = false;
                      this.token =
                        "No Instance ID token available. Request permission to generate one.";
                    }
                  })
                  .catch((err) => {
                    this.isLoading = false;
                    this.token = err;
                  });
              } else {
                this.token = "Already Subscribed";
                this.isLoading = false;
                this.buttonText = "Allowed";
              }
            } else {
              this.isLoading = false;
              this.token = "Unable to get permission to notify.";
            }
          });
        } else {
          this.isLoading = false;
          this.token = "We Don't Support your browser";
        }
      } catch (err) {
        // alert(err);
        this.isLoading = false;
        this.token = err;
      }
    },
    displayNotificaion() {
      if ("serviceWorker" in navigator) {
        var options = {
          body: "You Successfully Subscribed to Push Notifications",
          icon: "img/icons/favicon-32x32.png",
          dir: "ltr",
          badge: "img/icons/favicon-32x32.png",
          tag: "NewSubscription",
          renotify: true,
          actions: [
            {
              action: "open",
              title: "Visit Site",
            },
          ],
        };
        navigator.serviceWorker.ready.then(function (swreg) {
          swreg.showNotification("Successfully Subscribed", options);
        });
      }
    },
  },
  mounted() {
    let token = localStorage.getItem("pushNotificationToken");
    this.isAllowed = false
    if (token && token.length > 0) {
      this.token = "Already Subscribed";
      this.buttonText == "Allowed";
      this.isAllowed = true
    }
  },
};
</script>