<template>
  <v-container class="home">
        <tree-view :items="items" @updateItems="updateItems" />
  </v-container>
</template>

<script>
// @ is an alias to /src
import TreeView from "@/components/TreeView.vue";


export default {
  name: 'Home',
  components: {
    TreeView,
  },
}
</script>
