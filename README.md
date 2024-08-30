# Nuxt 3 Minimal Starter

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

<Navbar />: Barra de navegación en la parte superior de la página.
<Banner />: Componente que muestra un banner destacado.
<SearchBar />: Componente para realizar búsquedas de películas y emitir eventos para actualizar la lista de películas.
<Loading />: Componente que muestra un indicador de carga mientras se obtienen los datos.
<Movie />: Componente que representa una película individual en la interfaz de usuario.
