<template>
  <div>
    <v-container class="text-center">
      <v-toolbar-title class="custom-class">{{ title }}</v-toolbar-title>
      <v-btn v-if="!readOnly" icon @click="addEntry"
        ><v-icon>mdi-plus</v-icon></v-btn
      >
    </v-container>
    <v-treeview open-all :items="items">
      <template slot="label" slot-scope="{ item }">
        <v-text-field
          v-if="!readOnly"
          class="text-field"
          v-model="item.name"
          @input="updateInput"
          :append-icon="`mdi-trash-can-outline`"
          @click:append="deleteItem(item.id)"
        >
        </v-text-field>
        <div v-else>{{ item.name }}</div>
      </template>
      <template v-if="!readOnly" slot="prepend" slot-scope="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" icon @click="addChild(item)">
              <v-icon dark> mdi-plus </v-icon></v-btn
            >
          </template>
          <span>add child</span>
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
    title: String,
    readOnly: Boolean,
  },
  computed: {
    ...mapState(["nextId"]),
  },
  methods: {
    ...mapActions(["saveNextIdToLocalStorage"]),
    deleteItem(id, items = null, found = false) {
      if (!found) {
        if (!items) {
          items = this.items;
        }

        items.forEach((child, index) => {
          if (child.id == id) {
            items.splice(index, 1);
            found = true;
            this.updateItems(items);
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
      this.saveNextIdToLocalStorage(id + 1);
      this.updateItems();
    },
    updateItems(updatedItems = this.items) {
      this.$emit("updateItems", updatedItems);
    },
    updateInput() {
      // triggered on input, should only update the local storage only when user finished typing (debouncing)
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.updateItems();
      }, 1000);
    },
    addEntry() {
      const updatedItems = this.items;
      updatedItems.push({
        id: this.nextId,
        name: "",
      });
      this.saveNextIdToLocalStorage(this.nextId + 1);
      this.updateItems(updatedItems);
    },
  },
};
</script>

<style scoped>
.custom-class {
  color: deepskyblue;
}
</style>
