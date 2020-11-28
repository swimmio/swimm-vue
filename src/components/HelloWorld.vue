<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/pexels-miles-hardacre-2404370.jpg')"
          class="my-3"
          contain
          height="600"
        />
      </v-col>

      <v-col class="mb-4">
        <p class="subheading font-weight-regular">
          This project been created in the purpose of knowlage transffer via
          swimm platform
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Links</h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    importantLinks: [
      {
        text: "Swimm.io",
        href: "https://swimm.io/",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "Vue Documentation",
        href: "https://vuejs.org/",
      },
      {
        text: "Vuetify Documentation",
        href: "https://vuetifyjs.com",
      },
    ],
  }),
};
</script>
