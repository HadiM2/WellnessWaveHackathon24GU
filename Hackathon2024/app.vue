<template>
  <NuxtLayout>
    <title class="font">Wellness Wave</title>
    <v-app>
      <v-app-bar>
        <v-list-item class="title-font">Wellness Wave 🌊</v-list-item>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click="menu = !menu"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer v-model="menu" location="right">
        <v-list>
          <v-list-item @click="router.push('/')">
            <v-list-item-title class="font"
              >Fit Tracker&nbsp;<v-icon size="x-small"
                >mdi-weight-lifter</v-icon
              ></v-list-item-title
            >
          </v-list-item>
          <br />
          <v-list-item @click="router.push('/journal')">
            <v-list-item-title class="font"
              >Journal&nbsp;<v-icon size="x-small"
                >mdi-notebook</v-icon
              ></v-list-item-title
            >
          </v-list-item>
          <br />
          <v-list-item @click="router.push('/articleHub')">
            <v-list-item-title class="font"
              >Articles &nbsp;<v-icon size="x-small"
                >mdi-book-open-page-variant-outline</v-icon
              ></v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <v-container>
          <NuxtPage />
        </v-container>
      </v-main>
    </v-app>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const modelValue = ref(false);

const menu = ref(false);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poiret+One&display=swap");

.title-font {
  font-family: "Poiret One", sans-serif;
  font-size: 18px;
  font-weight: bolder;
  color: black;
}

.font {
  font-family: "Poiret One", sans-serif;
  font-size: 18px;
  font-weight: bold;
}

/* Responsive styles */
@media (max-width: 600px) {
  .custom-nav-button {
    font-size: 14px;
  }
}
</style>
