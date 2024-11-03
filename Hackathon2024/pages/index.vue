<template>
  <div style="display: flex; align-items: center;">
    <v-card
      class="font cards-right"
      elevation="12"
      style="
        border-radius: 15px;
        text-align: center;
        width: 250px;
        height: 350px;
        display: flex;
        margin-right: 45px;
      "
    >
      <img
        src="\public\AdobeStock_122268757.jpeg"
        class="card-image"
      />
    </v-card>
    <div class="font cards-left" style="margin: 0; border-radius: 15px; border:1px solid black;  padding-top: 30px;">
      <h1>Journal</h1>
      Capture your thoughts, reflections, and experiences in a beautiful,
      user-friendly environment. Whether you're looking to document your daily
      life, track your goals, or explore your creativity, Wellness Wave provides
      the perfect space for you.
    </div>
  </div>
  <br />

  <div style="display: flex; align-items: center; margin-left: 620px;
">
    <div class="font cards-right" style="margin: 0; border-radius: 15px; border:1px solid black;  padding-top: 30px; padding-bottom: 30px;">
      <h1>Fit Tracker</h1>
      Stay on top of your health and fitness goals with Wellness Wave, designed
      to help you monitor your calorie intake and visualize your progress in an
      engaging way. Whether you're aiming to lose weight, build muscle, or
      maintain a healthy lifestyle, our app provides the tools you need to
      succeed.
    </div>
    <v-card
      class="font cards-left"
      elevation="12"
      style="
        border-radius: 15px;
        width: 250px;
        text-align: center;
        height: 350px;
      "
    >
      <img
        src="\public\AdobeStock_250626183.jpeg"
        class="card-image"
      />
    </v-card>
  </div>

  <br />

  <div style="display: flex; align-items: center">
    <v-card
      class="font"
      elevation="12"
      style="
        border-radius: 15px;
        text-align: center;
        width: 250px;
        height: 350px;
        display: flex;
        margin-right: 45px;
      "
    >
      <img
        src="\public\AdobeStock_192369105.jpeg"
        class="card-image"
      />
    </v-card>
    <div class="font cards-left"  style="margin: 0; padding-top: 30px;   border-radius: 15px; border:1px solid black;">
      <h1>Tips and Tricks</h1>

      Dive into Wellness Wave resources designed to empower your wellness
      journey. Whether you're looking for nutritious recipes, insightful
      articles, or practical tips and tricks, our curated content will inspire
      and guide you toward a healthier lifestyle.
    </div>
  </div>
  <br />
</template>

<script setup></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poiret+One&display=swap");

.animated-background {
  background: radial-gradient( #a1d0e2, #669dee, #ffffff, #9ccce8, #d3ecf9);
  background-size: 400% 400%;
  animation: gradientAnimation 45s ease ;
}


@keyframes gradientAnimation {
  0%{
    background-position: 0% 0%;
  }
  50%{
    background-position: 100% 100%;

  }
  100%{
    background-position: 0% 0%;

  }
}

.title-font {
  font-family: "Poiret One", sans-serif;
  font-size: 45px;
  font-weight: bold;
  color: black;
}

.font {
  font-family: "Poiret One";
  font-size: larger;
  color: black;
}

.cards-left {
  text-align: center;
  width: 250px;
  height: 400px;
  margin-left: auto;
}
.cards-right {
  text-align: center;
  width: 250px;
  height: 400px;
  margin-right: auto;
}

.custom-nav-button {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #ffcc00; /* Yellow accent for buttons */
  text-transform: uppercase;
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 15px 15px 0 0;
  object-fit: cover;
  height: 100%;
}

.custom-hamburger {
  font-size: 16px;
  color: #ffcc00; /* Yellow accent for buttons */
}
.custom-app-bar {
  backdrop-filter: blur(
    10px
  ); /* Transparent glass effect /
  background-color: rgba(0, 0, 0, 0.7); / Dark semi-transparent bar /
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3); / Adds some depth with shadow /
  border-bottom: 2px solid #ffcc00; / Sharp accent line */
}
</style>
