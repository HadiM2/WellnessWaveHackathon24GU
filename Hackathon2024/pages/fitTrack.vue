<template>
<v-container>
<v-row>
<v-col cols="12" md="4" sm="4">
    <h5>Calories</h5>
        <v-number-input control-variant="split"></v-number-input>
        
      </v-col>
      <h5>Workouts</h5>
      <v-col cols="12" md="4" sm="4">
        <v-select
      :items="items"
      label="Default"
    ></v-select>
</v-col>
<v-btn
          class="mt-4"
          color="success"
          block
          @click="saveCalories"
        >
          Save
        </v-btn>
    </v-row>
  </v-container>

  <v-sheet>
      <v-calendar
        ref="calendar"
        v-model="value"
        view="day"

      ></v-calendar>
    </v-sheet>

</template>

<script setup>
import { VNumberInput } from 'vuetify/labs/VNumberInput'
import { VCalendar } from 'vuetify/labs/VCalendar'

function saveCalories(){
    entries.value.push(newEntry) 
    nuxtStorage.localStorage.setData(entries.value)
    resetForm()
}

const items = [
    {title: 'Run',
    props: {subtitle: 'Indoor'} },
    {title: 'Run',
    props: {subtitle: 'Outdoor'} },
    {title: 'Walk',
    props: {subtitle: 'Indoor' }},
    {title: 'Walk', subtitle: 'Outdoor' },
    {title: 'Functional Strength Training'},
    {title: 'Stair Stepper'},
    {title: 'Cycling'},
    {title: 'Hiking'},
    {title: 'Pilates'},
    {title: 'Yoga'},
    {title: 'Jump Rope'},
    {title: 'Swimming'},
    {title: 'Elliptical'},
    {title: 'Dance'},

]
</script>

<style>

</style>