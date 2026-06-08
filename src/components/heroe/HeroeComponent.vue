<template>
  <div class="bg-white shadow-lg p-3 mb-5 bg-white rounded">
    <!-- Loading state -->
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status"></div>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="alert alert-danger" role="alert">
      <h4 class="alert-heading">Error al cargar el héroe</h4>
      <p>{{ error }}</p>
      <button class="btn btn-outline-danger me-2" @click="getHeroe"><i class="fas fa-sync-alt"></i> Reintentar</button>
      <button class="btn btn-secondary" @click="volver"><i class="fas fa-arrow-left"></i> Volver</button>
    </div>

    <!-- Hero not found -->
    <div v-else-if="!heroe && !loading" class="alert alert-warning" role="alert">
      <h4 class="alert-heading">Héroe no encontrado</h4>
      <p>No se encontró un héroe con el nombre "{{ $route.params.nombre }}".</p>
      <button class="btn btn-primary" @click="volver"><i class="fas fa-arrow-left"></i> Volver a la lista</button>
    </div>

    <!-- Hero details -->
    <div v-else-if="heroe">
      <h1 class="animated fadeIn slow">
        {{ heroe.nombre }}
        <small class="text-muted">({{ formatDate(heroe.aparicion) }})</small>
      </h1>
      <hr />

      <div class="row animated fadeIn slow">
        <div class="col-md-4">
          <img
            :src="'/' + (heroe.img ? heroe.img : '/assets/img/no-image.svg')"
            :title="heroe.nombre"
            class="img-fluid shadow rounded"
            :alt="heroe.nombre" />
          <br /><br />
          <button type="button" class="btn btn-4 btn-block w-100" @click="volver()">
            <i class="fas fa-arrow-left me-2"></i>Volver
          </button>
        </div>

        <div class="col-md-8">
          <h3>{{ heroe.nombre }}</h3>
          <hr />
          <p class="lead">{{ heroe.bio }}</p>
          <div class="mt-4">
            <ul class="list-unstyled">
              <li><strong>Primera aparición:</strong> {{ formatDate(heroe.aparicion) }}</li>
            </ul>
          </div>
          <div class="mt-4">
            <div class="d-flex align-items-center">
              <img
                v-if="heroe.casa === 'DC'"
                src="/assets/img/dc.svg"
                :title="heroe.casa"
                class="img-fluid me-3"
                width="92"
                height="92"
                :alt="heroe.casa" />
              <img
                v-else-if="heroe.casa === 'Marvel'"
                src="/assets/img/marvel.svg"
                :title="heroe.casa"
                class="img-fluid me-3"
                width="92"
                height="92"
                :alt="heroe.casa" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { heroesService } from '../../services/heroesService.js';

export default {
  name: 'HeroeComponent',
  data() {
    return {
      heroe: null,
      loading: false,
      error: null,
    };
  },
  watch: {
    // Recargar si cambia la ruta
    '$route.params.nombre': {
      handler: 'getHeroe',
      immediate: false,
    },
  },
  async mounted() {
    await this.getHeroe();
  },
  methods: {
    async getHeroe() {
      this.loading = true;
      this.error = null;
      this.heroe = null;

      try {
        const heroeNombre = this.$route.params.nombre;
        const hero = await heroesService.getHeroByName(heroeNombre);

        if (hero) {
          this.heroe = hero;
        } else {
          this.error = `No se encontró el héroe "${heroeNombre}"`;
        }
      } catch (error) {
        this.error = `Error al cargar el héroe: ${error.message}`;
        console.error('Error loading hero:', error);
      } finally {
        this.loading = false;
      }
    },

    volver() {
      this.$router.push('/heroes');
    },

    formatDate(dateString) {
      if (!dateString) return 'N/A';
      const date = new Date(dateString);
      return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },
};
</script>

<style scoped>
.spinner-border {
  width: 3rem;
  height: 3rem;
}

.shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.rounded {
  border-radius: 10px;
}

.lead {
  text-align: justify;
  line-height: 1.6;
}
</style>
