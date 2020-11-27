<template>
  <!-- App.vue -->

  <v-app>
    <navdrawer />
    <!-- Sizes your content based upon application components -->
    <v-main>
      <breadcrumbs />

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <tree-view />
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Breadcrumbs from "./components/Breadcrumbs.vue";
import Navdrawer from "./components/Navdrawer.vue";
import TreeView from "./components/TreeView.vue";

export default {
  name: "App",

  components: {
    Navdrawer,
    Breadcrumbs,
    TreeView,
  },

  data: () => ({
    //
  }),
};
</script>
