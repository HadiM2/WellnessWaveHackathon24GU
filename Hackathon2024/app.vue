<template>
  <NuxtLayout>
    <title>Wellness Wave</title>
    <v-app  class="animated-background">
      <v-app-bar         
        flat
        app
        height="80"
        color="transparent"
        dark
        class="custom-app-bar"
        elevate-on-scroll>
        <v-list-item class="title-font" @click="router.push('/')">Wellness Wave 🌊</v-list-item>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click="menu = !menu"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer color="transparent" v-model="menu" location="right">
        <v-list>
          <v-list-item @click="router.push('/')">
            <v-list-item-title class="font"
              >Home&nbsp;<v-icon size="x-small"
                >mdi-home</v-icon
              ></v-list-item-title
            >
          </v-list-item>
          <br />
          <v-list-item @click="router.push('/fitTrack')">
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
  <footer class="footer">
    <div class="footer-content">
      <p class="text-center">
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

.custom-app-bar {
  backdrop-filter: blur(10px); /* Transparent glass effect */
  background-color: rgba(0, 0, 0, 0.7); /* Dark semi-transparent bar */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3); /* Adds some depth with shadow */
  border-bottom: 2px solid transparent; /* Sharp accent line */
}
.custom-nav-button {
  font-family: "Poiret One", sans-serif;
  font-size: 16px;
  color: #ffcc00; /* Yellow accent for buttons */
  text-transform: uppercase;
}
.custom-hamburger {
  font-size: 16px;
  color: #ffcc00; /* Yellow accent for buttons */
}
.animated-background {
  background: radial-gradient(#a1d0e2, #669dee, #ffffff, #9ccce8, #d3ecf9);
  background-size: 400% 400%;
  animation: gradientAnimation 45s ease infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}

.title-font {
  font-family: "Poiret One", sans-serif;
  font-size: 45px;
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
  color: #ffcc00;
  font-family: "Poiret One";

}
</style>
