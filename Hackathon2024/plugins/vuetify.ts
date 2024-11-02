// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#ff6b6b",
            secondary: "#f7f7f7",
            background: "#6bff6b",
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: "#ff6b6b",
            secondary: "",
            background: "#6bff6b",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
