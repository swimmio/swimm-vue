<template>
  <div>
    <v-container class="text-center">
      <v-toolbar-title>Home</v-toolbar-title>
      <v-btn icon @click="addEntrie"><v-icon>mdi-plus</v-icon></v-btn>
    </v-container>
    <v-treeview open-on-click :items="items">
      <template slot="label" slot-scope="{ item }">
        <v-text-field
          class="text-field"
          v-model="item.name"
          @input="updateInput"
          :append-icon="`mdi-trash-can-outline`"
          @click:append="deleteItem(item.id)"
        >
        </v-text-field>
      </template>
      <template open slot="prepend" slot-scope="{ item }">
        <v-btn icon> <v-icon dark> mdi-circle-medium </v-icon></v-btn>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" icon @click="addChild(item)">
              <v-icon dark> mdi-plus </v-icon></v-btn
            >
          </template>

          <span>add</span>
        </v-tooltip>
      </template>
    </v-treeview>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "TreeView",
  props: {
    items: Array,
  },
  computed: {
    ...mapState(['nextId'])
  },
  methods: {
    ...mapActions(['saveNextIdToLocalStorage']),
    deleteItem(id, items = null, found = false) {
      if (!found) {
        if (!items) {
          items = this.items;
        }

        items.forEach((child, index) => {
          if (child.id == id) {
            items.splice(index, 1);
            found = true;
            this.updateItems();
          }
          if (child.children) {
            this.deleteItem(id, child.children);
          }
        });
      }
    },
    addChild(item) {
      if (!item.children) {
        this.$set(item, "children", []);
      }

      const name = "";
      const id = this.nextId;

      item.children.push({
        id,
        name,
      });
      this.saveNextIdToLocalStorage(id+1);
      this.updateItems();
    },
    updateItems() {
      console.log("fire event", this.items);
      this.$emit("updateItems", this.items);
    },
    updateInput() {
      // triggered on input, should only update the local storage only when user finished typing (debouncing)
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        console.log("update debounce", this.items, this.itemId);
        this.updateItems();
      }, 1000);
    },
    addEntrie() {
      this.items.push({
        id: this.nextId,
        name: "",
      });
      this.saveNextIdToLocalStorage(this.nextId+1);
      this.updateItems();
    },
  },
};
</script>

<style scoped>
.v-text-field .v-input__append-inner .v-input__icon {
  visibility: hidden;
}
</style>
