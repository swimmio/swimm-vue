<template>
  <div>
    <v-container class="text-center">
      <v-toolbar-title>title</v-toolbar-title>
      <v-btn icon @click="addEntrie"><v-icon>mdi-plus</v-icon></v-btn>
    </v-container>
    <v-treeview open-on-click :items="items">
      <template slot="label" slot-scope="{ item }">
        <v-text-field
          class="text-field"
          v-model="item.name"
          @input="updateStorageOnInput"
          :append-icon="`mdi-trash-can-outline`"
          @click:append="removeItem(item)"
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
export default {
  name: "TreeView",
  data: () => ({
    nextId: 5,
    items: [
      {
        id: 1,
        name: "Welcome!! start add items :",
        children: [
          { id: 2, name: "You can nest as deep as you need" },
          { id: 3, name: "Chrome : app" },
          { id: 4, name: "Webstorm : app" },
        ],
      },
    ],
  }),
  computed: {
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
  },
  mounted() {
    if (localStorage.getItem("items")) {
      try {
        this.items = JSON.parse(localStorage.getItem("items"));
      } catch (e) {
        localStorage.removeItem("items");
      }
      if (localStorage.getItem("nextId")) {
        try {
          this.nextId = Number(localStorage.getItem("nextId"));
        } catch (e) {
          localStorage.removeItem("nextId");
        }
      }
    }
  },
  methods: {
    deleteItem(id, items = null, found = false) {
      if (!found) {
        if (!items) {
          items = this.items;
        }

        items.forEach((child, index) => {
          if (child.id == id) {
            items.splice(index, 1);
            found = true;
          }
          if (child.children) {
            this.deleteItem(id, child.children);
          }
        });
      }
    },
    saveToLocalStorage() {
      console.log("save to local storage");
      localStorage.setItem("nextId", this.nextId);
      const parsed = JSON.stringify(this.items);
      localStorage.setItem("items", parsed);
    },
    updateStorageOnInput() {
      // triggered on input, should only update the local storage only when user finished typing (debouncing)
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.saveToLocalStorage();
      }, 1000);
    },
    addEntrie() {
      this.items.push({
        id: this.nextId,
        name: "",
      });
      this.nextId += 1;
    },
    removeItem(item) {
      console.log("remove");
      this.deleteItem(item.id);
      this.saveToLocalStorage();
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
      this.nextId += 1;
      this.saveToLocalStorage();
    },
  },
};
</script>

<style scoped>
.v-text-field .v-input__append-inner .v-input__icon {
  visibility: hidden ;
}
</style>
