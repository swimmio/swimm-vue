<template>
  <v-container>
    <h1>This is an about page</h1>
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
};
</script>