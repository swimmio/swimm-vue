<template>
<span>
  <v-switch v-model="$vuetify.theme.dark" :label="text" @change="toggleText"></v-switch>
</span>
</template>

<script>
export default {
  name: "DarkmodeSwitch",
  data() {
    return { text: 'day' };
  },
  created(){
      this.toggleText();
  },
  methods: {
      toggleText() {
          this.text = this.$vuetify.theme.dark ? 'night' : 'day';
      }
  }
};
</script>
