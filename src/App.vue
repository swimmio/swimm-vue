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

export default {
  name: "App",

  components: {
    Navdrawer,
    Breadcrumbs,
    TreeView,
  },

  data: () => ({
    menuItems: [],
    nextId: 9,
    items: [
      {
        id: 1,
        name: "firstChild",
        children: [
          { id: 2, name: "1 AAA" },
          { id: 3, name: "1 BBB " },
          { id: 4, name: "1 CCC" },
        ],
      },
      {
        id: 5,
        name: "secondChild",
        children: [
          { id: 6, name: "2 AAA" },
          { id: 7, name: "2 BBB" },
          { id: 8, name: "2 CCC" },
        ],
      },
    ],
  }),
  mounted() {
    if (localStorage.getItem("items")) {
      try {
        this.items = JSON.parse(localStorage.getItem("items"));
      } catch (e) {
        localStorage.removeItem("items");
      }
    }
    this.setMenuItems();
  },
  methods: {
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
      this.saveToLocalStorage();
      this.setMenuItems();
    },

    saveToLocalStorage() {
      console.log("save to local storage");
      const parsed = JSON.stringify(this.items);
      localStorage.setItem("items", parsed);
    },
    setMenuItems() {
      this.menuItems = [];
      this.menuItems.push({ title: "Home", icon: "mdi-home", route: "/" });
      this.menuItems.push(
        ...this.items.map((rootItem) => {
          return {
            title: rootItem.name,
            icon: "mdi-format-list-bulleted",
            route: `/${rootItem.id}`
          };
        })
      );
      this.menuItems.push({ title: "About", icon: "mdi-help-box", route: "/about" });
    },
  },
};
</script>
