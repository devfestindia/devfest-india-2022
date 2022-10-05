<template>
    <v-menu
      v-model="menu"
      :close-on-content-click="true"
      :nudge-width="100"
      :max-width="250"
      offset-y
      transition="slide-y-transition"
      bottom
      left
      rounded
    >
      <template v-slot:activator="{ on:menu }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-avatar size="42" style="cursor: pointer;">
              <img
                v-on="{ ...tooltip, ...menu }"
                :src="userInfo.photoURL?userInfo.photoURL:'https://raw.githubusercontent.com/DevFest-India/website-data/master/defaultavatar.png'"
                alt="John"
                class="circle"
              />
            </v-avatar>
          </template>
          <span>Profile Settings</span>
        </v-tooltip>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
                <img :src="userInfo.photoURL?userInfo.photoURL:'https://raw.githubusercontent.com/DevFest-India/website-data/master/defaultavatar.png'"/>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title class="google-font">{{userInfo.displayName || "User-Name"}}</v-list-item-title>
                <v-list-item-subtitle>{{ userInfo.email || "User-Email"}}</v-list-item-subtitle>
                <!-- <v-list-item-subtitle>Display Profile</v-list-item-subtitle> -->
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/profile" >
            <v-list-item-avatar>
              <v-icon>mdi-account-box-multiple-outline</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title style="font-size:100%" class="google-font">Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-avatar>
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title class="google-font">Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
</template>

<script>
import FDK from "@/Config/firebase";
    export default {
        props:['userInfo'],
        data:()=>({
            menu: false,
        }),
        methods:{
            logout(){
                FDK.firebase.auth().signOut().then(()=>{
                  window.location.reload();
                }).catch(e=>{
                    console.log(e)
                })
            }
        }
    }
</script>

<style>
.circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2.5px solid transparent;
  background-size: 100% 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%;
  background-repeat: no-repeat;
  background-image: linear-gradient(white, white),
    linear-gradient(30deg, #ea4335 36%, #4285f4 30%),
      linear-gradient(120deg, #4285f4 36%, #34a853 30%),
        linear-gradient(300deg, #fbbc04 36%, #ea4335 30%),
          linear-gradient(210deg, #34a853 36%, #fbbc04 30%);
  background-position: center center, left top, right top, left bottom,
    right bottom;
  background-origin: content-box, border-box, border-box, border-box, border-box;
  background-clip: content-box, border-box, border-box, border-box, border-box;
}
</style>