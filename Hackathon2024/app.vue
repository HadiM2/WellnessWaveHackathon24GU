<template>
  <NuxtLayout>
    <title class="font">Wellness Wave</title>
    <v-app>
      <v-app-bar>
        <v-list-item title="Wellness Wave 🌊" class="font"></v-list-item>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon
          @click="menu = !menu"
          class="custom-hamburger"
        ></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer v-model="menu" app class="custom-app-bar">
        <v-list>
          <v-list-item @click="router.push('/')">
            <v-list-item-icon class="custom-nav-button">
              <v-icon>mdi-weight</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="custom-nav-button">
              <v-list-item-title>Fit Tracker</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <br />
          <v-list-item @click="router.push('/journal')">
            <v-list-item-icon class="custom-nav-button">
              <v-icon>mdi-shark</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="custom-nav-button">
              <v-list-item-title>Journal</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <br />
          <v-list-item @click="router.push('/articleHub')">
            <v-list-item-icon class="custom-nav-button">
              <v-icon>mdi-dog</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="custom-nav-button">
              <v-list-item-title>Articles</v-list-item-title>
            </v-list-item-content>
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
const modelValue = ref(false); // Change this to false to keep dialog closed initially
const email = "aboudmal@gmail.com";
const phone = "(509) 270-8172";
const linkedinUrl = "https://www.linkedin.com/in/abdulhadi-mallah/";
const githubUrl = "https://github.com/HadiM2";

function toggleDialog() {
  modelValue.value = !modelValue.value;
}

const menu = ref(false); // Track menu visibility
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poiret+One&display=swap");
:root {
  --deep-blue: #283593;
  --sky-blue: #1976d2;
  --coral-red: #ef5350;
  --soft-gray: #f5f5f5;
  --dark-gray: #424242;
  --muted-yellow: #ffeb3b;
  --teal: #009688;
  --charcoal: #333333;
}
.animated-background {
  /* background: linear-gradient(45deg, #3a3a3a, #1f8a70, #ffcc00, #ff5733); */
  background: linear-gradient(45deg, #283593, #1976d2, #ef5350, #ffffff);
  /* background: linear-gradient(45deg, var(--deep-blue), var(--sky-blue), var(--coral-red), var(--soft-gray)); */
  /* height: 100vh; */
  background-size: 500% 500%; /* Slower movement for dramatic effect */
  animation: gradientAnimation 12s ease infinite;
  padding: 20px;
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

.custom-app-bar {
  backdrop-filter: blur(10px); /* Transparent glass effect */
  background-color: rgba(0, 0, 0, 0.7); /* Dark semi-transparent bar */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3); /* Adds some depth with shadow */
  border-bottom: 2px solid #ffcc00; /* Sharp accent line */
}

.font {
  font-family: "Poiret One", sans-serif;
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

.v-app-bar {
  border-bottom: 3px solid #ffcc00; /* Adds a stylish bottom border */
  background-color: #333333 !important; /* Darker background */
}

.v-list-item {
  color: white;
}

/* Responsive styles */
@media (max-width: 600px) {
  .custom-nav-button {
    font-size: 14px; /* Smaller font size on small screens */
  }
}
</style>
