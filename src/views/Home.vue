<template>
  <v-container class="home">
    <tree-view :readOnly="!isHomePage" :items="itemToDisplay" :title="title" @updateItems="updateItems" />
  </v-container>
</template>

<script>
// @ is an alias to /src
import TreeView from "@/components/TreeView.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      title: 'Home'
    }
  },
  components: {
    TreeView,
  },
  props: {
    itemId: Number,
  },
  computed: {
    ...mapState(["items", "nextId"]),
    itemToDisplay() {
      if (!this.itemId) {
        return this.items;
      }
      const item = this.findItem(this.itemId);
      this.setTitle(item.name);
      return item.children;
    },
    isHomePage(){
      if (this.itemId) {
        return false; 
      }
      return true;
    }
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
    setTitle(newTitle){
      this.title = newTitle;
    },
    updateItems(updateItems) {
      this.saveItemsToLocalStorage(updateItems);
      this.updateStore();
      this.$emit("updateItems");
    },
  },
};
</script>
