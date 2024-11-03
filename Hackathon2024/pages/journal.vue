<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title class="title-font">
            Journal Entries
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item
                v-for="(entry, index) in entries"
                :key="index"
                class="journal-entry"
              >
                <v-list-item-content>
                  <v-list-item-title class="font" >{{ entry.title }}</v-list-item-title>
                  <v-list-item-subtitle class="font">{{ entry.date }}</v-list-item-subtitle>
                  <v-list-item-text class="font">{{ entry.content }}</v-list-item-text>
                </v-list-item-content>
                
                <v-list-item-action>
                    <v-spacer></v-spacer>
                  <v-btn icon @click="editEntry(index)">
                    <v-icon size=small>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn icon @click="deleteEntry(index)">
                    <v-icon color="red" size=small>mdi-delete</v-icon>                  
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-btn class="font" @click="openEntryForm()">Add Entry</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Entry Form Dialog -->
    <v-dialog v-model="showEntryForm" max-width="600">
      <v-card>
        <v-card-title class="title-font">{{ isEditing ? 'Edit' : 'Add' }} Journal Entry</v-card-title>
        <v-card-text>
          <v-text-field class="font" label="Title" v-model="currentEntry.title" required></v-text-field>
          <v-textarea  class="font" label="Content" v-model="currentEntry.content" rows="5" required></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn class="font" color="primary" @click="saveEntry">{{ isEditing ? 'Update' : 'Save' }}</v-btn>
          <v-btn class="font" text @click="cancelEntry">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import nuxtStorage from 'nuxt-storage'

const entries = ref([])
const showEntryForm = ref(false)
const currentEntry = ref({ title: '', content: '' })
const isEditing = ref(false)
let editingIndex = null

// Load entries from local storage on mount
onMounted(() => {
  entries.value = nuxtStorage.localStorage.getData('journal-entries', []) || []
})

// Open form to add a new entry
function openEntryForm() {
  currentEntry.value = { title: '', content: '' }
  isEditing.value = false
  showEntryForm.value = true
}

// Save or update the entry
function saveEntry() {
  console.log('Save button clicked') // Debugging line to confirm button click

  if (currentEntry.value.title && currentEntry.value.content) {
    const date = new Date().toLocaleDateString()
    const newEntry = { ...currentEntry.value, date }

    if (isEditing.value && editingIndex !== null) {
      entries.value[editingIndex] = newEntry // Update entry
    } else {
      entries.value.push(newEntry) // Add new entry
    }

    // Save updated entries to local storage
    nuxtStorage.localStorage.setData('journal-entries', entries.value)
    resetForm()
  }
}

// Edit an existing entry
function editEntry(index) {
  currentEntry.value = { ...entries.value[index] }
  isEditing.value = true
  editingIndex = index
  showEntryForm.value = true
}

// Cancel form action
function cancelEntry() {
  resetForm()
}

// Delete an entry
function deleteEntry(index) {
  entries.value.splice(index, 1)
  // Update local storage after deletion
  nuxtStorage.localStorage.setData('journal-entries', entries.value)
}

// Reset the form
function resetForm() {
  currentEntry.value = { title: '', content: '' }
  isEditing.value = false
  editingIndex = null
  showEntryForm.value = false
}
</script>

<style scoped>
.journal-entry {
  margin-bottom: 16px;
  padding: 16px;
  border-bottom: 1px solid #eee;
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
