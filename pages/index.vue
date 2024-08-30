<template>
    <div class="home">
      <Navbar />
      <Banner />
      <div class="search-bar-container">
        <SearchBar @movies-updated="updateMovies" @request-popular-movies="fetchMovies"/>
        <div class="filter-container">
          <select  v-model="sortOrder" @change="sortMovies">
            <option value="asc">Ordenar por nombre (A-Z)</option>
            <option value="desc">Ordenar por nombre (Z-A)</option>
          </select>
        </div>
      </div>
      <Loading v-if="loading"/>
      <div v-else class="container movies">
        <div id="movie-grid" class="movies-grid">
          <div class="movie" v-for="movie in movies" :key="movie.id">
            <div class="movie-img">
              <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="Poster">
              <p class="review">{{ formatVoteAverage(movie.vote_average) }} / 10</p>
              <p class="overview" v-if="movie.overview.length">{{ movie.overview.slice(0, 150) }}<span>...</span></p>
            </div>
            <div class="info">
              <p class="title">{{ movie.title.slice(0, 25) }}<span v-if="movie.title.length > 25">...</span></p>
              <p class="release">Lanzamiento: {{ formatReleaseDate(movie.release_date) }}</p>
              <NuxtLink class="button button-light" :to="`/movies/${movie.id}`">Ver más</NuxtLink> 
            </div>
          </div>
        </div>
      </div>
      <div v-if="!movies.length" class="no-results">
        <i class="pi pi-search"></i>
        <p>No se encontró ningún resultado</p>
      </div>
    </div>
  </template>

<script setup>
import {
    ref,
    onMounted
} from 'vue';
import {
    getPopularMovies
} from '@/services/moviesApi.js';
const movies = ref([]);
const loading = ref(false);
const sortOrder = ref('asc');

const fetchMovies = async () => {
    try {
        loading.value = true;
        const response = await getPopularMovies();
        movies.value = response.data.results;
     
    } catch (error) {
        console.error('Error fetching movies:', error);
    } finally {
        loading.value = false;
    }

}

const formatVoteAverage = (voteAverage) => {
    return voteAverage.toFixed(1);
}
const formatReleaseDate = (releaseDate) => {
  if (!releaseDate) return 'Fecha no disponible';
  try {
    return new Date(releaseDate).toLocaleString('es-mx', { month: 'long', day: '2-digit', year: 'numeric' });
  } catch {
    return 'Fecha no válida';
  }
};

const updateMovies = (newMovies) => {
    movies.value = newMovies;
    sortMovies();
};

const sortMovies = () => {
  if (movies.value.length) {
    movies.value.sort((a, b) => {
      if (sortOrder.value === 'asc') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
  }
};

onMounted(() => {
    fetchMovies();
});

watch(sortOrder, () => {
  sortMovies();
});


</script>

<style lang="scss" scoped>
.home {
    .loading {
        padding-top: 120px;
        align-items: flex-start;
    }

    .search {
        display: flex;
        padding: 32px 12px;

    }
    .search-bar-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10rem;
    
  }

  .search-bar-container select {
    font-size: 16px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    
  }

    .movies {

        padding: 12px 16px;

        .movies-grid {
            display: grid;
            column-gap: 32px;
            row-gap: 64px;
            grid-template-columns: 1fr;

            @media (min-width: 500px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media (min-width: 750px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media (min-width: 1100px) {
                grid-template-columns: repeat(4, 1fr);
            }

            .movie {

                position: relative;
                display: flex;
                flex-direction: column;

                .movie-img {
                    border-radius: 1rem;
                    position: relative;
                    overflow: hidden;

                    &:hover {
                        .overview {
                            transform: translateY(0);
                        }
                    }

                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                        position: relative;
                    }

                    .review {
                        padding: 2px;
                        font-size: 12px;
                        text-align: center;
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 40px;
                        height: 40px;
                        background-color: #554EBE;
                        color: #fff;
                        border-radius: 0 0 16px 0;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                            0 2px 4px -1px rgba(0, 0, 0, 0.06);
                    }

                    .overview {
                        line-height: 1.5;
                        position: absolute;
                        bottom: 0;
                        background-color: #554EBE;
                        padding: 12px;
                        color: #fff;
                        transform: translateY(100%);
                        transition: 0.3s ease-in-out all;
                    }
                }

                .info {
                    margin-top: auto;

                    .title {
                        margin-top: 8px;
                        color: #fff;
                        font-size: 20px;
                    }

                    .release {
                        margin-top: 8px;
                        color: #c9c9c9;
                    }

                    .button {
                        margin-top: 8px;
                    }
                }
            }
        }
    }

    .no-results {
        color: #554EBE;
        text-align: center;

        i {
            font-size: 48px;
            margin: 1rem;
        }

        p {
            font-size: 24px;
        }
    }

}
</style>
