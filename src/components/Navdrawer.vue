<template>
  <v-navigation-drawer permanent app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title custom-class">{{title}}</v-list-item-title>
        <v-list-item-subtitle> Learn how to swimm in Vue.js </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item link v-for="item in menuItems" :key="item.title" :to="item.route">
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
  props: {
    menuItems: Array
  },
  data() {
    return {
      title: "Lists Pool",
    };
  },

};
</script>

<style scoped>
.custom-class {
  color: deepskyblue;
}
</style>