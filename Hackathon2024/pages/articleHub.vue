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
      title: 'Flavorful Chicken Fajitas',
      date: '2024-11-02',
      summary: 'Click Read More for the recipe',
      content: '* Ingerdients: Chicken: Boneless, Peppers, Onions, Spices, Flour Tortillas' + ' * Directions: Marinate the meat, Saute the vegetables, Cook the chicken, Serve in tortillas with toppings',
      category: 'Recipes',
      subcategory: 'Chicken'
    },
    {
      title: 'Skillet Beef Tamales',
      date: '2024-11-02',
      summary: 'Click Read More for the recipe',
      content: '* Ingredients: Lean ground beef, corn tortillas, salsa, corn' + ' * Directions: Cook the meat, Saute the vegetables, Drain and stir in corn and salsa, Add in tortillas strips and cheese and let it melt',
      category: 'Recipes',
      subcategory: 'Beef'
    },
    {
      title: 'Slow Cooker Vegetable Lasagne',
      date: '2024-11-02',
      summary: 'Click Read More for the recipe',
      content: '* Sauté 2 sliced onions and 2 chopped garlic cloves in 1 tbsp rapeseed oil, add 2 diced courgettes and 1 each of sliced red and yellow peppers, stir in 400g chopped tomatoes, 2 tbsp tomato purée, 2 tsp vegetable bouillon, and 15g chopped basil; layer in slow cooker with sliced aubergine and 6 wholewheat lasagne sheets, top with 125g chopped vegetarian buffalo mozzarella, cover, and cook on low for 2.5-3 hours; garnish with basil before serving.',
      category: 'Recipes',
      subcategory: 'Vegitarian'
    },
    {
      title: 'Setting Achievable Goals',
      date: '2024-10-28',
      summary: 'Ways to set achievable goals',
      content: 'https://hbr.org/2022/08/5-ways-to-set-more-achievable-goals',
      category: 'Healthy Life Choices',
      subcategory: 'Goal Setting'
    },
    {
      title: 'Managing Work-Life Balance',
      date: '2024-10-28',
      summary: '17 tips to improve your work life balance',
      content: 'https://www.smartsheet.com/content/how-to-improve-work-life-balance',
      category: 'Healthy Life Choices',
      subcategory: 'Work-Life Balance'
    },
    {
      title: 'Getting Started with Gratitude Journaling',
      date: '2024-10-28',
      summary: 'Tips to help you start journaling',
      content: 'https://positivepsychology.com/journaling-for-mindfulness/',
      category: 'Healthy Life Choices',
      subcategory: 'Gratitude Journaling'
    },
    {
      title: 'Managing Your Stress',
      date: '2024-10-28',
      summary: 'A couple of tips to help you mange your stress',
      content: 'https://www.apa.org/topics/stress/tips',
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
  