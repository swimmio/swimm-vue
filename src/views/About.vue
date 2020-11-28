<template>
  <v-container>
    <h1>This is an about page</h1>
    <h2>{{ aboutPage }}</h2>
    <hello-world />
  </v-container>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "About",
  components: {
    HelloWorld,
  },
  computed: {
    aboutPage() {
      return `Today is ${(new Date).toString()}`;
    },
  },
};
</script>