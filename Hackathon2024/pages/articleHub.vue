<template>
    <v-container>
      <!-- Filter Section -->
      <v-row class="justify-center mb-4">
        <v-col cols="12" md="4">
          <v-select 
          class="font"
            v-model="selectedCategory"
            :items="categories"
            label="Select Category"
            clearable
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-select
            class="font"
            v-model="selectedSubcategory"
            :items="filteredSubcategories"
            label="Select Subcategory"
            clearable
            :disabled="!selectedCategory"
          />
        </v-col>
      </v-row>
  
      <!-- Article Cards -->
      <v-row class="justify-center">
        <v-col cols="12" md="8">
          <v-card v-for="(article, index) in filteredArticles" :key="index" class="mb-4 font">
            <v-card-title class="title-font">{{ article.title }}</v-card-title>
            <v-card-subtitle class="font">{{ article.date }}</v-card-subtitle>
            <v-card-text class="font">{{ article.summary }}</v-card-text>
            <v-card-actions>
              <v-btn class="font" @click="viewArticle(index)">Read More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- Article Dialog -->
      <v-dialog v-model="showArticleDialog" max-width="800">
        <v-card>
          <v-card-title class="title-font">{{ currentArticle.title }}</v-card-title>
          <v-card-subtitle class="font">{{ currentArticle.date }}</v-card-subtitle>
          <v-card-text class="font">{{ currentArticle.content }}</v-card-text>
          <v-card-actions>
            <v-btn class="font" text @click="showArticleDialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue'
  
  const articles = ref([
    {
      title: 'Recipe 1',
      date: '2024-11-02',
      summary: '',
      content: '',
      category: 'Recipes',
      subcategory: 'What We Love'
    },
    {
      title: 'Setting Achievable Goals',
      date: '2024-10-28',
      summary: '',
      content: '',
      category: 'Healthy Life Choices',
      subcategory: 'Goal Setting'
    },
    {
      title: 'Managing Work-Life Balance',
      date: '2024-10-28',
      summary: 'Learn how to use Vuetify to style and build responsive applications.',
      content: 'This article covers Vuetify basics, from setup to creating beautiful UIs...',
      category: 'Healthy Life Choices',
      subcategory: 'Work-Life Balance'
    },
    {
      title: 'Getting Started with Gratitude Journaling',
      date: '2024-10-28',
      summary: '',
      content: '',
      category: 'Healthy Life Choices',
      subcategory: 'Gratitude Journaling'
    },
    {
      title: 'Managing Your Stress',
      date: '2024-10-28',
      summary: '',
      content: '',
      category: 'Stress Management',
      subcategory: 'Meditation'
    },
    // Add more articles here as needed
  ])
  
  const categories = ref([...new Set(articles.value.map(article => article.category))])
  const selectedCategory = ref(null)
  const selectedSubcategory = ref(null)
  const showArticleDialog = ref(false)
  const currentArticle = ref({})
  const filteredArticles = ref([...articles.value])
  
  // Compute subcategories based on selected category
  const filteredSubcategories = computed(() => {
    const subcategories = articles.value
      .filter(article => article.category === selectedCategory.value)
      .map(article => article.subcategory)
    return [...new Set(subcategories)]
  })
  
  // Filter articles based on selected category and subcategory
  function filterArticles() {
    filteredArticles.value = articles.value.filter(article => {
      return (!selectedCategory.value || article.category === selectedCategory.value) &&
             (!selectedSubcategory.value || article.subcategory === selectedSubcategory.value)
    })
  }
  
  // Watchers to reset subcategory and call filterArticles when selectedCategory changes
  watch(selectedCategory, () => {
    selectedSubcategory.value = null  // Clear subcategory when category changes
    filterArticles()                  // Re-filter articles
  }, { immediate: true })
  
  // Watch selectedSubcategory to update articles when it changes
  watch(selectedSubcategory, filterArticles)
  
  // Open the article dialog with full content
  function viewArticle(index) {
    currentArticle.value = filteredArticles.value[index]
    showArticleDialog.value = true
  }
  </script>
  
  <style scoped>
  .mb-4 {
    margin-bottom: 16px;
  }

  .title-font {
  font-family: "Poiret One", sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: black;
}

.font {
  font-family: "Poiret One";
  font-size: 26;
  color: black;
}
  </style>
  