<template>
  <!-- App.vue -->
  <v-app>
    <navdrawer :menu-items="menuItems" />
    <v-main>
      <v-container fluid>
        <router-view @updateItems="updateItems"></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <darkmode-switch />
    </v-footer>
  </v-app>
</template>

<script>
import Navdrawer from "./components/Navdrawer.vue";
import { mapState } from "vuex";
import DarkmodeSwitch from './components/DarkmodeSwitch.vue';

export default {
  name: "App",
  components: {
    Navdrawer,
    DarkmodeSwitch
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
