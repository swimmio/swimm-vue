---
id: LQdLZBZD713jOf189eqS
name: <script>
file_version: 1.0.2
app_version: 0.6.5-4
file_blobs:
  src/views/About.vue: ""
  src/views/Home.vue: ""
---

The `<script>` tag contains the component’s JavaScript code. Within this tag, we can do things like import other components, or other packages we need for our component to work. We can also handle the data and logic of the component.

<br/>

We write the javascript code for our components inside the `<script></script>` tags.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/views/About.vue
```vue
⬜ 6        </v-container>
⬜ 7      </template>
⬜ 8      
🟩 9      <script>
🟩 10     import HelloWorld from "@/components/HelloWorld.vue";
🟩 11     
🟩 12     export default {
🟩 13       name: "About",
🟩 14       components: {
🟩 15         HelloWorld,
🟩 16       },
🟩 17       computed: {
🟩 18         aboutPage() {
🟩 19           return `Today is ${(new Date).toString()}`;
🟩 20         },
🟩 21       },
🟩 22     };
🟩 23     </script>
```

<br/>

You can import components and other JS code and models  that you would like to use in the component.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/views/Home.vue
```vue
⬜ 5      </template>
⬜ 6      
⬜ 7      <script>
🟩 8      // @ is an alias to /src
🟩 9      import TreeView from "@/components/TreeView.vue";
🟩 10     import { mapActions, mapState } from "vuex";
⬜ 11     
⬜ 12     export default {
⬜ 13       name: "Home",
```

<br/>

The `export` object allows you to define and export this named component, as well as reuse it across your application.
You can give a name to the component, it is useful for recursive components, debugging (dev tools) and when using `is` attribute in a template.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/views/Home.vue
```vue
⬜ 10     import { mapActions, mapState } from "vuex";
⬜ 11     
⬜ 12     export default {
🟩 13       name: "Home",
⬜ 14       data() {
⬜ 15         return {
⬜ 16           title: 'Home'
```

<br/>

`data` is a function that returns an object with data that can be used in the template and passed to child components (as props), and inside the script with the `this` keyword.
Note that `data` is reactive, that is, the DOM will be rendered again when it changes.
`data` is private, and only for the component itself to use. Other components do not have access to it.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/views/Home.vue
```vue
⬜ 11     
⬜ 12     export default {
⬜ 13       name: "Home",
🟩 14       data() {
🟩 15         return {
🟩 16           title: 'Home'
🟩 17         }
🟩 18       },
⬜ 19       components: {
⬜ 20         TreeView,
⬜ 21       },
```

<br/>

In this step we register the imported component `TreeView` so we can use it in the template.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/views/Home.vue
```vue
⬜ 16           title: 'Home'
⬜ 17         }
⬜ 18       },
🟩 19       components: {
🟩 20         TreeView,
🟩 21       },
⬜ 22       props: {
⬜ 23         itemId: Number,
⬜ 24       },
```

<br/>

Properties are the way that we pass data from a parent component down to its child components (using the `bind` directive).
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/views/Home.vue
```vue
⬜ 19       components: {
⬜ 20         TreeView,
⬜ 21       },
🟩 22       props: {
🟩 23         itemId: Number,
🟩 24       },
⬜ 25       computed: {
⬜ 26         ...mapState(["items", "nextId"]),
⬜ 27         itemToDisplay() {
```

<br/>

`computed`  are functions that return values that can be used in the template.
We use `computed` when the in-template expression is too complex.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/views/Home.vue
```vue
⬜ 22       props: {
⬜ 23         itemId: Number,
⬜ 24       },
🟩 25       computed: {
⬜ 26         ...mapState(["items", "nextId"]),
⬜ 27         itemToDisplay() {
⬜ 28           if (!this.itemId) {
```

<br/>

Methods are incredibly useful for connecting functionality to directives for events, or even just creating a small bit of logic to be reused like any other function. You can call a method within another method. You can also call a method inside a lifecycle hook, they’re very versatile.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/views/Home.vue
```vue
⬜ 43       created() {
⬜ 44         this.updateStore();
⬜ 45       },
🟩 46       methods: {
⬜ 47         ...mapActions(["saveItemsToLocalStorage", "updateStore"]),
⬜ 48         findItem(id, items = null) {
⬜ 49           if (!items) {
```

<br/>

Created is one of the lifecycle's hooks, it will be called once the component is created.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/views/Home.vue
```vue
⬜ 40           return true;
⬜ 41         }
⬜ 42       },
🟩 43       created() {
🟩 44         this.updateStore();
🟩 45       },
⬜ 46       methods: {
⬜ 47         ...mapActions(["saveItemsToLocalStorage", "updateStore"]),
⬜ 48         findItem(id, items = null) {
```

<br/>



<br/>

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/DvJKcoPbOxqDEprL3Lun/docs/LQdLZBZD713jOf189eqS).