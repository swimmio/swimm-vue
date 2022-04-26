<template>
  <v-container>
  <HelloWorld/>
    <h1>This is an about page</h1>
  </v-container>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "About",
  components: {
    HelloWorld
  },
  computed: {
  },
};
</script>