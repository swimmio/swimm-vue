<template>
  <v-navigation-drawer permanent app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title"> Application </v-list-item-title>
        <v-list-item-subtitle> subtext </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in menuItems" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navdrawer",
  data() {
    return {
      menuItems: [],
      right: null,
    };
  },
  mounted() {
    this.menuItems.push({ title: "Home", icon: "mdi-home" });

    if (localStorage.getItem("items")) {
      try {
        const items = JSON.parse(localStorage.getItem("items"));
        this.menuItems.push(
          ...items.map((rootItems) => {
            return {
              title: rootItems.name,
              icon: "mdi-format-list-bulleted",
            };
          })
        );
      } catch (e) {
        localStorage.removeItem("items");
      }
    }
    this.menuItems.push({ title: "About", icon: "mdi-help-box" });
  },
};
</script>

