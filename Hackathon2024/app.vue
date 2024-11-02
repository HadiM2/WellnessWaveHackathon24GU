<template>
  <NuxtLayout>
    <title class="font">Wellness Wave</title>
    <v-app>
      <v-app-bar>
        <v-list-item class="title-font">Wellness Wave 🌊</v-list-item>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon
          @click="menu = !menu"
          class="custom-hamburger"
        ></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer v-model="menu" location="right">
        <v-list>
          <v-list-item @click="router.push('/')">
              <v-list-item-title class="font">Fit Tracker&nbsp;<v-icon size="x-small">mdi-weight-lifter</v-icon></v-list-item-title>
          </v-list-item>
          <br />
          <v-list-item @click="router.push('/journal')">

              <v-list-item-title class="font">Journal&nbsp;<v-icon size="x-small">mdi-notebook</v-icon></v-list-item-title>
          </v-list-item>
          <br />
          <v-list-item @click="router.push('/articleHub')">
            
              <v-list-item-title class="font">Articles &nbsp;<v-icon size="x-small">mdi-book-open-page-variant-outline</v-icon></v-list-item-title>
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
  <footer class="footer">
    <div class="footer-content">
      <p class="font text-center">
        &copy; 2024 Team Sugar. All rights reserved.
      </p>
    </div>
  </footer>
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
  font-weight:bolder;
}

.font {
  font-family: "Poiret One", sans-serif;
  font-size: 18px;
  font-weight:bold;
}

/* Responsive styles */
@media (max-width: 600px) {
  .custom-nav-button {
    font-size: 14px; 
  }
}

.footer {
  background-color: rgba(0, 0, 0, 0.8); /* Dark semi-transparent background */
  padding: 20px 0; /* Top and bottom padding */
  color: #ffcc00; /* Yellow text for contrast */
  text-align: center; /* Center text */
  position: relative; /* Ensure it stays at the bottom */
  width: 100%; /* Full width */
  margin: 20px 0;
  font-weight: 300;
}

.footer-content {
  max-width: 1200px; /* Limit the width of the content */
  margin: 0 auto; /* Center the content */
}
</style>
