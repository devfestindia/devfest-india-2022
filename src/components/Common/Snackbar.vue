<template>
  <v-snackbar :timeout="timeout" v-model="showS" bottom style="margin-bottom:10px">
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn :color="color" v-bind="attrs" text @click="showS = false"
        >Close</v-btn
      >
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "CustomSnackbar",
  props: ["message", "isShow", "color", "timeout"],
  computed: {
    showS: {
      get: function() {
        return this.isShow;
      },
      set: function(value) {
        this.$emit("update:isShow", value);
      },
    },
  },
};
</script>
