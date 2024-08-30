<template>
    <div class="container search flex items-center gap-2">
      <InputText
        placeholder="Buscar"
        type="text"
        class="w-32 sm:w-auto"
        v-model="searchInput"
        @keydown.enter="search"
      />
      <Button 
        v-if="!searchInput"
        icon="pi pi-search"
        class="p-button-rounded p-button-text p-button-plain"
        :loading="loading"
        @click="search"
      />
      <Button 
        v-if="searchInput"
        icon="pi pi-times"
        class="p-button-rounded p-button-text p-button-plain"
        @click="clearSearch"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import { searchMovies } from '@/services/moviesApi.js';
  
  const searchInput = ref('');
  const loading = ref(false);
  const emit = defineEmits(['movies-updated', 'request-popular-movies']);
  
  const normalizeString = (string) => {
    return string
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/g, '');
  };
  
  const search = async () => {
    if (searchInput.value) {
      try {
        loading.value = true;
        const normalizedQuery = normalizeString(searchInput.value);
        const response = await searchMovies(normalizedQuery);
        const normalizedResults = response.data.results.filter(movie =>
          normalizeString(movie.title).includes(normalizedQuery)
        );
        emit('movies-updated', normalizedResults);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        loading.value = false;
      }
    }
  };
  
  const clearSearch = () => {
    searchInput.value = ''; 
    emit('request-popular-movies'); 
  };
  
  watch(searchInput, (newValue) => {
    if (newValue.trim() && searchInput.value.length > 0) {
      search();
    }else {
      emit('request-popular-movies');
    }
  });
  </script>

    
<style lang="scss" scoped>
.search {
    display: flex;

    input {
        color: #9295ff;
        max-width: 350px;
        width: 100%;
        padding: 12px 6px;
        font-size: 16px;
        border: none;

        &:focus {
            outline: none;
        }
    }

    .button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
}
</style>
