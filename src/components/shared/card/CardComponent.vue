<template>
  <div class="container mt-4">
    <!-- Loading state -->
    <div v-if="loading" class="text-center">
      <div class="spinner-border text-primary" role="status"></div>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="alert alert-danger" role="alert">
      <h4 class="alert-heading">Error al cargar los héroes</h4>
      <p>{{ error }}</p>
      <button @click="loadHeroes" class="btn btn-outline-danger"><i class="fas fa-sync-alt"></i> Reintentar</button>
    </div>

    <!-- Heroes grid -->
    <div v-else class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
      <div class="col p-1" v-for="heroe in filteredHeroes" :key="heroe._id">
        <div class="card h-100 shadow animated fadeIn slow m-2">
          <img
            :src="heroe.img ? heroe.img : '/assets/img/no-image.jpg'"
            :alt="heroe.nombre"
            class="card-img-top img-fluid" />
          <div class="card-body">
            <h5 class="card-title">{{ heroe.nombre }}</h5>
            <p class="card-text">{{ truncateText(heroe.bio, 100) }}</p>
            <small class="text-muted"> <strong>Año:</strong> {{ formatDate(heroe.aparicion) }} </small>
            <br />
            <small class="text-muted">
              <strong>Casa:</strong>
              <span :class="getCasaClass(heroe.casa)">{{ heroe.casa }}</span>
            </small>
          </div>
          <div class="card-footer">
            <router-link :to="'/heroe/' + heroe.nombre" class="btn btn-4 mt-2 w-100"> Ver más... </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty state -->
    <div v-if="!loading && !error && filteredHeroes.length === 0 && heroes.length > 0" class="text-center text-white">
      <div class="no-results-container py-5">
        <i class="fas fa-search fa-3x text-white-50 mb-3"></i>
        <h3>No se encontraron resultados</h3>
        <p class="text-white-50">
          {{ searchTerm ? `No hay héroes que coincidan con "${searchTerm}"` : 'No hay héroes en esta categoría' }}
          {{ casaFilter !== 'all' ? ` en ${casaFilter}` : '' }}
        </p>
        <button @click="clearFilters" class="btn btn-outline-light mt-3">
          <i class="fas fa-refresh me-2"></i>Limpiar filtros
        </button>
      </div>
    </div>

    <!-- No heroes loaded -->
    <div v-if="!loading && !error && heroes.length === 0" class="text-center text-white">
      <h3>No se encontraron héroes</h3>
      <p>No hay héroes disponibles en este momento.</p>
    </div>
  </div>
</template>

<script>
import { heroesService } from '../../../services/heroesService.js';

export default {
  name: 'CardComponent',
  props: {
    searchTerm: {
      type: String,
      default: '',
    },
    casaFilter: {
      type: String,
      default: 'all',
    },
  },
  data() {
    return {
      heroes: [],
      loading: false,
      error: null,
    };
  },
  computed: {
    filteredHeroes() {
      let filtered = this.heroes;

      // Filtrar por término de búsqueda
      if (this.searchTerm) {
        const searchLower = this.searchTerm.toLowerCase();
        filtered = filtered.filter(hero => {
          return (
            hero.nombre.toLowerCase().includes(searchLower) ||
            hero.bio.toLowerCase().includes(searchLower) ||
            hero.casa.toLowerCase().includes(searchLower)
          );
        });
      }

      // Filtrar por casa
      if (this.casaFilter && this.casaFilter !== 'all') {
        filtered = filtered.filter(hero => hero.casa === this.casaFilter);
      }

      // Emitir el conteo actualizado
      this.$emit('update-count', filtered.length);

      return filtered;
    },
  },
  async mounted() {
    await this.loadHeroes();
  },
  methods: {
    async loadHeroes() {
      this.loading = true;
      this.error = null;

      try {
        this.heroes = await heroesService.getAllHeroes();
        console.log('Heroes cargados:', this.heroes);
      } catch (error) {
        this.error = `Error al cargar los héroes: ${error.message}`;
        console.error('Error loading heroes:', error);
      } finally {
        this.loading = false;
      }
    },

    getImageUrl(imagePath) {
      // Si la imagen ya es una URL completa, la devolvemos tal como está
      if (imagePath && imagePath.startsWith('http')) {
        return imagePath;
      }
      // Si es una ruta relativa, la convertimos en una URL completa
      return imagePath ? `https://spa-heroes-service.vercel.app/${imagePath}` : '/assets/img/placeholder.svg';
    },

    handleImageError(event) {
      // Imagen de fallback si no se puede cargar la original
      event.target.src = '/assets/img/placeholder.svg';
    },

    truncateText(text, maxLength) {
      if (!text) return '';
      return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    },

    formatDate(dateString) {
      if (!dateString) return 'N/A';
      const date = new Date(dateString);
      return date.getFullYear();
    },

    getCasaClass(casa) {
      return {
        'text-primary': casa === 'DC',
        'text-danger': casa === 'Marvel',
      };
    },

    clearFilters() {
      this.$emit('clear-filters');
    },
  },
};
</script>

<style scoped>
.spinner-border {
  width: 3rem;
  height: 3rem;
}

.no-results-container {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.7) !important;
}
</style>
