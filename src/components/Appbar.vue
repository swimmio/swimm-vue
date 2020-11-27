<template>
  <v-app-bar class="blue">
      <v-btn text to="/">
        <v-icon class="ma-2">mdi-home</v-icon>
        Home
      </v-btn>
      <v-btn text to="/about">
        <v-icon class="ma-2">mdi-information-outline</v-icon>
        About
      </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Appbar",
};
</script>
