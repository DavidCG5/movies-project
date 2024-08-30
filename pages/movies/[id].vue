<template>
  
  <Loading v-if="loading" />

  <div v-else class="single-movie container">
    <NuxtLink class="button pi pi-arrow-left" :to="{ name: 'index' }">  </NuxtLink>
    
    <div class="movie-info">
      <div class="movie-img">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          alt=""
        />
      </div>
      <div class="movie-content">
        <h1>{{ movie.title }}</h1>
        <p class="movie-fact tagline">
          <span>Tagline:</span> "{{ movie.tagline }}"
        </p>
        <p class="movie-fact"> <span>Voto:</span> {{ movie.vote_average }}</p>
        <p class="movie-fact">
          <span>Lanzamiento:</span>
          {{
            new Date(movie.release_date).toLocaleString('es-MX', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })
          }}
        </p>
        <p class="movie-fact">
          <span>Duración:</span> {{ movie.runtime }} minutes
        </p>
        <p class="movie-fact">
          <span>Recaudo:</span>
          {{
            movie.revenue
          }}
        </p>
        <p class="movie-fact"> {{ movie.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
    ref,
    onMounted
} from 'vue';
import {
    getSingleMovie
} from '@/services/moviesApi.js';
const route = useRoute();
const id = route.params.id;
const loading = ref(false);
const movie = ref({});

const fetchMovie = async () => {
    try {
        loading.value = true;
        const response= await getSingleMovie(id);
        movie.value = response.data;
        console.log(response);
        
    } catch (error) {
        console.error('Error fetching movie:', error);
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    fetchMovie();
});
</script>

<style lang="scss">
.single-movie {
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 16px;

  .button {
    align-self: flex-start;
    margin-bottom: 32px;
  }

  .movie-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    color: #fff;
    @media (min-width: 800px) {
      flex-direction: row;
      align-items: flex-start;
    }
    .movie-img {
      img {
        max-height: 500px;
        width: 100%;
        border-radius: 5%;
       
         
    
        @media (min-width: 800px) {
          max-height: 700px;
          width: initial;
        }
      }

     
        
        
          
    }

    .movie-content {
      h1 {
        font-size: 56px;
        font-weight: 400;
        color: #7e78cf ;
      }

      .movie-fact {
        margin-top: 12px;
        font-size: 20px;
        line-height: 1.5;

        span {
          font-weight: 600;
          ;
        }
      }

      .tagline {
        font-style: italic;
        span {
          font-style: normal;
        }
      }
    }
  }
}
</style>