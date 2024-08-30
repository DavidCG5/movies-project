# Peliculas TMDB

Esta aplicación web en Nuxt.vue está diseñada para buscar y mostrar películas utilizando la API gratuita de TMDb. Se ha integrado PrimeVue para mejorar la interfaz de usuario con componentes estilizados y funcionales.

## Instalar dependencias

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Despliegue en local

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Estructura del Proyecto
- Componentes Principales:

1. <Navbar /> Barra de navegación en la parte superior de la página.
2. <Banner /> Componente que muestra un banner destacado.
3. <SearchBar /> Componente para realizar búsquedas de películas y emitir eventos para actualizar la lista de películas.
4. <Loading /> Componente que muestra un indicador de carga mientras se obtienen los datos.
5. <Movie /> Componente que representa una película individual en la interfaz de usuario.

## PrimeVue
- PrimeVue es una biblioteca de componentes UI para Vue.js que proporciona una amplia variedad de componentes visuales y estilizados.
- <select> Se utiliza en el componente para ordenar las películas. PrimeVue ofrece componentes como dropdowns que pueden ser utilizados en lugar del componente nativo para una mayor personalización.
