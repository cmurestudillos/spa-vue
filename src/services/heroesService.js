const API_BASE_URL = 'https://spa-heroes-service.vercel.app/api';

export const heroesService = {
  // Obtener todos los superhéroes
  async getAllHeroes() {
    try {
      const response = await fetch(`${API_BASE_URL}/superheroes`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.superheroes || data; // Adaptarse a la estructura de respuesta
    } catch (error) {
      console.error('Error fetching heroes:', error);
      throw error;
    }
  },

  // Obtener un superhéroe por ID
  async getHeroById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/superheroes/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching hero by ID:', error);
      throw error;
    }
  },

  // Buscar héroe por nombre (ya que tu ruta usa nombre como parámetro)
  async getHeroByName(name) {
    try {
      const heroes = await this.getAllHeroes();
      return heroes.find(hero => hero.nombre === name);
    } catch (error) {
      console.error('Error finding hero by name:', error);
      throw error;
    }
  },
};
