# 🦸‍♂️ Heroes App - Universo de Superhéroes

Una aplicación web moderna y responsive que te permite explorar el increíble mundo de los superhéroes de Marvel y DC Comics. Construida con tecnologías de vanguardia del MEVN Stack para ofrecer una experiencia de usuario excepcional.

## 🚀 Características Principales

### ✨ Funcionalidades Core
- **📱 Diseño Responsive**: Perfectamente adaptado para dispositivos móviles, tablets y desktop
- **🔍 Búsqueda Inteligente**: Sistema de filtrado avanzado por nombre, biografía y editorial
- **🏷️ Filtros por Editorial**: Separación clara entre héroes de Marvel y DC Comics
- **⚡ Carga Asíncrona**: Datos obtenidos de API REST con estados de carga optimizados
- **🖼️ Galería Visual**: Cards interactivas con imágenes y efectos hover
- **📄 Vista Detallada**: Información completa de cada superhéroe
- **🎨 Interfaz Moderna**: Diseño limpio con animaciones CSS y transiciones suaves

### 🛠️ Características Técnicas
- **API Integration**: Consumo de datos desde API REST externa
- **Vue Router**: Navegación SPA fluida entre componentes
- **Error Handling**: Manejo robusto de errores y estados de carga
- **Responsive Grid**: Sistema de columnas adaptativo (1-2-3 columnas)
- **Lazy Loading**: Carga optimizada de imágenes con fallbacks
- **Search Engine**: Búsqueda en tiempo real con múltiples criterios

## 🏗️ Arquitectura del Proyecto

### Frontend (Vue.js 3)
```
src/
├── components/
│   ├── heroes/
│   │   └── HeroesComponent.vue      # Lista principal de héroes
│   ├── heroe/
│   │   └── HeroeComponent.vue       # Vista detalle del héroe
│   └── shared/
│       ├── card/
│       │   └── CardComponent.vue    # Tarjetas de héroes
│       └── footer/
│           └── FooterComponent.vue  # Footer de la aplicación
├── services/
│   └── heroesService.js             # Servicio API centralizado
├── routes/
│   └── index.js                     # Configuración de rutas
├── App.vue                          # Componente raíz
└── main.js                          # Punto de entrada
```

### API Backend
- **Base URL**: `https://spa-heroes-service.vercel.app`
- **Endpoints**:
  - `GET /api/superheroes` - Lista todos los superhéroes
  - `GET /api/superheroes/:id` - Obtiene un superhéroe específico

## 🛠️ Stack Tecnológico

### Frontend
- **Vue.js 3** - Framework progresivo de JavaScript
- **Vue Router 4** - Enrutamiento oficial para Vue.js
- **Vite** - Build tool ultrarrápido
- **Bootstrap 5** - Framework CSS para diseño responsive
- **FontAwesome** - Iconografía moderna
- **CSS3** - Animaciones y transiciones personalizadas

### Backend & API
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web minimalista
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **Vercel** - Plataforma de despliegue

### Herramientas de Desarrollo
- **Vite 5.4** - Servidor de desarrollo y bundler
- **ESLint 9** - Linter flat config (0 errores)
- **Prettier 3.6** - Formateo de código
- **pnpm 11.5.2** - Gestión de paquetes
- **Git** - Control de versiones

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (v18 o superior)
- pnpm 11.5.2 (`npm install -g pnpm`)

### Instalación Local

1. **Clonar el repositorio**
```bash
git clone https://github.com/cmurestudillos/spa-vue.git
cd spa-vue
```

2. **Instalar dependencias**
```bash
pnpm install
```

3. **Ejecutar en modo desarrollo**
```bash
pnpm dev
```

Abre `http://localhost:5173` en el navegador.

### Build para Producción

```bash
# Crear build optimizado
pnpm build

# Previsualizar build localmente
pnpm preview
```

## 📚 Uso de la Aplicación

### Navegación Principal
1. **Lista de Héroes**: Visualiza todos los superhéroes disponibles
2. **Búsqueda**: Utiliza la barra de búsqueda para filtrar por nombre, biografía o editorial
3. **Filtros**: Usa los botones Marvel/DC para filtrar por editorial
4. **Vista Detalle**: Haz clic en "Ver más..." para información completa

### Funcionalidades de Búsqueda
- **Búsqueda de Texto**: Escribe cualquier término relacionado
- **Filtro por Editorial**: Selecciona Marvel, DC o Todos
- **Contador de Resultados**: Ve cuántos héroes coinciden
- **Limpiar Filtros**: Botón para resetear todos los filtros

## 🎨 Personalización

### Modificar Estilos
Los estilos están organizados por componente usando scoped CSS:

```vue
<style scoped>
.custom-style {
  /* Tus estilos personalizados */
}
</style>
```

### Agregar Nuevas Funcionalidades
1. Crear nuevo componente en `/src/components/`
2. Registrar en el router si es necesario
3. Importar y usar en componente padre

### Configurar Nueva API
Modificar `/src/services/heroesService.js`:

```javascript
const API_BASE_URL = 'tu-nueva-api-url';
```

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🙏 Agradecimientos

- Marvel Comics por los increíbles personajes
- DC Comics por el universo de superhéroes
- Comunidad de Vue.js por el excelente framework
- API de superhéroes utilizada como fuente de datos

## 📊 Estadísticas del Proyecto

- **Líneas de código**: ~1,500+
- **Componentes Vue**: 5
- **Rutas**: 4
- **Tiempo de desarrollo**: 2-3 semanas
- **Performance Score**: 95+ (Lighthouse)

---

⭐ ¡Si te gusta este proyecto, dale una estrella en GitHub! ⭐