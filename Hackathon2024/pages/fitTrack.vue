<template>
  <v-container>
    <h1 class="title-font">Trackers</h1>
    <v-row>
      <v-col cols="12" md="4">
        <h5 class="font">Calories</h5>
        <v-number-input
          v-model="calories"
          control-variant="split"
          required
        ></v-number-input>
        <v-btn class="mt-4 font" color="success" block @click="saveCalories">
          Save Calories
        </v-btn>
      </v-col>

      <v-col cols="12" md="4">
        <h5 class="font">Exercise Amount (minutes)</h5>
        <v-number-input
          v-model="exerciseMinutes"
          control-variant="split"
          required
        ></v-number-input>
        <v-btn class="mt-4 font" color="success" block @click="saveExercise">
          Save Exercise
        </v-btn>
      </v-col>
      <v-col cols="12" md="4">
        <h5 class="font">Workouts</h5>
        <v-select :items="items" label="Default"></v-select>
        <v-btn class="mt-4 font" color="success" block @click="saveExercise">
          Calculate
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <h3 class="font">Calorie Intake</h3>
        <canvas ref="calorieChartCanvas"></canvas>
      </v-col>
      <v-col cols="12" md="4">
        <h3 class="font">Exercise Minutes</h3>
        <canvas ref="exerciseChartCanvas"></canvas>
      </v-col>
      <v-col cols="12" md="4">
        <h3 class="font">Calories Burned</h3>
        <canvas ref="exerciseCalBurnedCanvas"></canvas>
      </v-col>
    </v-row>
  </v-container>

  <h1 class="title-font">Calculations</h1>
  <br />
  <h4 class="font">Your total calories for today is: {{ calorieCount }}</h4>
  <h4 class="font">You've exercised a total of: {{ minuteCount }} minutes!</h4>
</template>

<script setup>
import { VNumberInput } from "vuetify/labs/VNumberInput";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const calories = ref(0);
const calorieCount = ref(0);
const minuteCount = ref(0);
const exerciseMinutes = ref(0);
const calBurned = ref(0);
const entries = ref([]);
const exerciseEntries = ref([]);
const calorieChartCanvas = ref(null);
const exerciseChartCanvas = ref(null);
const exerciseCalBurnedCanvas = ref(null);
let calorieChart = null;
let exerciseChart = null;
let burned = null;
const items = [
  { title: "Run", props: { subtitle: "Indoor" } },
  { title: "Run", props: { subtitle: "Outdoor" } },
  { title: "Walk", props: { subtitle: "Indoor" } },
  { title: "Walk", subtitle: "Outdoor" },
  { title: "Strength Training" },
  { title: "Stair Stepper" },
  { title: "Cycling" },
  { title: "Hiking" },
  { title: "Pilates" },
  { title: "Yoga" },
  { title: "Jump Rope" },
  { title: "Swimming" },
  { title: "Elliptical" },
  { title: "Dance" },
];

function saveCalories() {
  if (calories.value > 0) {
    const newEntry = {
      date: new Date().toISOString().split("T")[0],
      calories: calories.value,
    };

    calorieCount.value += calories.value;

    entries.value.push(newEntry);
    resetCalories();
    updateCalorieChart();
  }
}

function saveExercise() {
  if (exerciseMinutes.value > 0) {
    const newEntry = {
      date: new Date().toISOString().split("T")[0],
      minutes: exerciseMinutes.value,
    };

    minuteCount.value += exerciseMinutes.value;
    exerciseEntries.value.push(newEntry);
    resetExercise();
    updateExerciseChart();
  }
}

function saveExercises() {
  if (exerciseMinutes.value == "Run") {
    caloriesFit = 11.4 * exerciseMinutes;
  }
  if (exerciseMinutes.value == "Walk") {
    caloriesFit = 4 * exerciseMinutes;
  }
  if (exerciseMinutes.value == "Strength Training") {
    caloriesFit = 5 * exerciseMinutes;
  }
  if (exerciseMinutes.value == "Cycling") {
    caloriesFit = 5 * exerciseMinutes;
  }
  if (exerciseMinutes.value == "Stair Stepper") {
    caloriesFit = 5 * exerciseMinutes;
  }
  resetExerciseCal();
  updateFitCaloriesChart();
}

function resetCalories() {
  calories.value = 0;
}

function resetExercise() {
  exerciseMinutes.value = 0;
}
function resetExerciseCal() {
  burn.value = 0;
}

const updateCalorieChart = () => {
  const chartData = {};
  entries.value.forEach((entry) => {
    const date = entry.date;
    if (!chartData[date]) {
      chartData[date] = 0;
    }
    chartData[date] += entry.calories;
  });

  const dates = Object.keys(chartData);
  const calorieValues = Object.values(chartData);

  const ctx = calorieChartCanvas.value.getContext("2d");

  if (calorieChart) {
    calorieChart.destroy();
  }

  calorieChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Calorie Intake",
          data: calorieValues,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

const updateExerciseChart = () => {
  const chartData = {};
  exerciseEntries.value.forEach((entry) => {
    const date = entry.date;
    if (!chartData[date]) {
      chartData[date] = 0;
    }
    chartData[date] += entry.minutes;
  });

  const dates = Object.keys(chartData);
  const exerciseValues = Object.values(chartData);

  const ctx = exerciseChartCanvas.value.getContext("2d");

  if (exerciseChart) {
    exerciseChart.destroy();
  }

  exerciseChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Exercise Minutes",
          data: exerciseValues,
          backgroundColor: "rgba(153, 102, 255, 0.6)",
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};
const updateFitCaloriesChart = () => {
  const chartData = {};
  exerciseEntries.value.forEach((entry) => {
    const date = entry.date;
    if (!chartData[date]) {
      chartData[date] = 0;
    }
    // Calculate calories burned based on the workout type
    let burnRate = 0;
    if (selectedWorkout.value) {
      switch (selectedWorkout.value.title) {
        case "Run":
          burnRate = 11.4;
          break;
        case "Walk":
          burnRate = 4;
          break;
        case "Strength Training":
        case "Cycling":
        case "Stair Stepper":
          burnRate = 5;
          break;
        // Add other workouts here as necessary
      }
    }
    chartData[date] += burnRate * entry.minutes; // Update based on exercise minutes
  });

  const dates = Object.keys(chartData);
  const exerciseValues = Object.values(chartData);

  const ctx = exerciseCalBurnedCanvas.value.getContext("2d"); // Corrected reference

  if (burned) {
    burned.destroy(); // Corrected chart variable reference
  }

  burned = new Chart(ctx, {
    type: "bar",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Calories Burned",
          data: exerciseValues,
          backgroundColor: "rgba(1234, 102, 255, 0.6)",
          borderColor: "rgba(1234, 102, 255, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

onMounted(() => {
  updateCalorieChart();
  updateExerciseChart();
  updateFitCaloriesChart();
});

onBeforeUnmount(() => {
  if (calorieChart) {
    calorieChart.destroy();
  }
  if (exerciseChart) {
    exerciseChart.destroy();
  }
  if (burned) {
    exerciseChart.destroy();
  }
});
</script>

<style>
canvas {
  max-width: 900px;
  margin: auto;
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
</style>
