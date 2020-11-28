<template>
  <!-- App.vue -->

  <v-app>
    <navdrawer :menuItems="menuItems" />
    <!-- Sizes your content based upon application components -->
    <v-main>
      <breadcrumbs />

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view @updateItems="updateItems"></router-view>
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
//import TreeView from "./components/TreeView.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Navdrawer,
    Breadcrumbs,
  },

  data: () => ({
    menuItems: [],
  }),
  computed: {
    ...mapState(["items", "nextId"]),
  },
  mounted() {
    this.setMenuItems();
  },
  methods: {
    updateItems() {
      this.setMenuItems();
    },
    setMenuItems() {
      this.menuItems = [];
      this.menuItems.push({ title: "Home", icon: "mdi-home", route: "/" });
      this.menuItems.push(
        ...this.items.map((rootItem) => {
          return {
            title: rootItem.name,
            icon: "mdi-format-list-bulleted",
            route: `/${rootItem.id}`,
          };
        })
      );
      this.menuItems.push({
        title: "About",
        icon: "mdi-help-box",
        route: "/about",
      });
    },
  },
};
</script>
