<template>
  <v-container class="home">
    <tree-view :items="items" @updateItems="updateItems" />
  </v-container>
</template>

<script>
// @ is an alias to /src
import TreeView from "@/components/TreeView.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  components: {
    TreeView,
  },
  props: {
    itemId: Number,
  },
  computed: {
    ...mapState(["items", "nextId"]),
  },
  created() {
    this.updateStore();
  },
  methods: {
    ...mapActions(["saveItemsToLocalStorage", "updateStore"]),
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
    updateItems(updateItems) {
      this.saveItemsToLocalStorage(updateItems);
      this.updateStore();
      this.$emit("updateItems");
    },
  },
};
</script>
