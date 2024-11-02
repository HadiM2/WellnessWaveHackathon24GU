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

          },
        },
        dark: {
          dark: true,
          colors: {
  
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
