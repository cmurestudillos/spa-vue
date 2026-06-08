<template>
  <div>
    <div class="hero-header text-center">
      <h1 class="text-white display-4">
        <img src="/assets/img/A-64.svg" width="64" height="64" title="Superheroes" alt="Superheroes" />Heroes
        <small class="fs-5">Marvel y DC</small>
      </h1>
    </div>
    <hr class="text-white" />

    <!-- Buscador -->
    <div class="search-container mb-4">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <div class="search-box">
            <div class="input-group">
              <input
                v-model="searchTerm"
                type="text"
                class="form-control form-control-lg border-primary"
                placeholder="Buscar superhéroe por nombre, biografía o casa..."
                @input="onSearch" />
            </div>
          </div>

          <!-- Filtros adicionales -->
          <div class="filters mt-3 d-flex justify-content-center gap-2">
            <button
              :class="['btn', 'btn-sm', selectedCasa === 'all' ? 'btn-primary' : 'btn-outline-light']"
              @click="filterByCasa('all')">
              Todos
            </button>
            <button
              :class="['btn', 'btn-sm', selectedCasa === 'Marvel' ? 'btn-danger' : 'btn-outline-light']"
              @click="filterByCasa('Marvel')">
              Marvel
            </button>
            <button
              :class="['btn', 'btn-sm', selectedCasa === 'DC' ? 'btn-primary' : 'btn-outline-light']"
              @click="filterByCasa('DC')">
              DC
            </button>
          </div>

          <!-- Resultados de búsqueda -->
          <div v-if="searchTerm" class="search-results mt-2 text-center">
            <small class="text-white-50">
              {{ filteredCount }} resultado{{ filteredCount !== 1 ? 's' : '' }}
              {{ searchTerm ? `para "${searchTerm}"` : '' }}
              {{ selectedCasa !== 'all' ? `en ${selectedCasa}` : '' }}
            </small>
          </div>
        </div>
      </div>
    </div>

    <CardComponent
      :search-term="searchTerm"
      :casa-filter="selectedCasa"
      @update-count="updateFilteredCount"
      @clear-filters="clearSearch" />
  </div>
</template>

<script>
import CardComponent from '../shared/card/CardComponent.vue';

export default {
  name: 'HeroesComponent',
  components: {
    CardComponent,
  },
  data() {
    return {
      searchTerm: '',
      selectedCasa: 'all',
      filteredCount: 0,
    };
  },
  methods: {
    onSearch() {
      // La búsqueda se maneja reactivamente a través de las props
    },

    clearSearch() {
      this.searchTerm = '';
      this.selectedCasa = 'all';
    },

    filterByCasa(casa) {
      this.selectedCasa = casa;
    },

    updateFilteredCount(count) {
      this.filteredCount = count;
    },
  },
};
</script>

<style scoped>
.hero-header {
  padding: 2rem 0;
}

.display-4 {
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.7) !important;
}

hr {
  border: none;
  height: 2px;
  background: linear-gradient(to right, transparent, #ffffff, transparent);
  margin: 2rem auto;
}

.search-container {
  padding: 0 15px;
}

.search-box {
  position: relative;
}

.search-box .form-control {
  border-radius: 25px;
  padding: 12px 20px;
  font-size: 16px;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.2);
  transition: all 0.3s ease;
}

.search-box .form-control:focus {
  border-color: #007bff;
  box-shadow: 0 4px 20px rgba(0, 123, 255, 0.4);
}

.search-box .input-group-text {
  border-radius: 25px 0 0 25px;
  border-right: none;
}

.search-box .btn {
  border-radius: 0 25px 25px 0;
  border-left: none;
}

.filters .btn {
  border-radius: 20px;
  padding: 5px 15px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.filters .btn:hover {
  transform: translateY(-2px);
}

.search-results {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .filters {
    flex-wrap: wrap;
    gap: 8px;
  }

  .filters .btn {
    flex: 1;
    min-width: 80px;
  }
}
</style>
