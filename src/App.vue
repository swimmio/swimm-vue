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
        <tree-view :items="items" @updateItems="updateItems" />
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
import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  components: {
    Navdrawer,
    Breadcrumbs,
    TreeView,
  },

  data: () => ({
    menuItems: [],
  }),
  computed: {
    ...mapState(['items', 'nextId']),
  },
  mounted() {
    this.updateStore();
    this.setMenuItems();
  },
  methods: {
    ...mapActions(['saveToLocalStorage','updateStore']),
    findItem(id, items = null) {
      if (!items) {
        items = this.items;
      }

      return items.reduce((acc, item) => {
        if (acc) {
          return acc;
        }

        if (item.id === id) {
          return item;
        }

        if (item.children) {
          return this.findItem(id, item.children);
        }

        return acc;
      }, null);
    },
    updateItems(itemsToUpdate) {
      this.items = itemsToUpdate;
      this.saveToLocalStorage(this.items, this.nextId);
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
