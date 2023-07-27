<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container d-flex justify-content-between align-items-center">
      <router-link to="/" class="navbar-brand">
        <span class="logo">Luis Calla</span>
      </router-link>
      <div class="collapse navbar-collapse" :class="{ show: !isWideScreen }">
        <ul class="navbar-nav ms-auto" :class="{ 'd-flex': isWideScreen }">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">Acerca de</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/work" class="nav-link"
              >Experiencia Laboral</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/services" class="nav-link">Servicios</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/skills" class="nav-link">Habilidades</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/portfolio" class="nav-link"
              >Portafolio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contacto</router-link>
          </li>
        </ul>
        <button
          v-if="!isWideScreen"
          type="button"
          class="navbar-toggler"
          @click="toggleMenu"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
export default {
  name: "AppHeader",
  setup() {
    const isWideScreen = ref(window.innerWidth > 1200);

    // Agregar evento para verificar el ancho de la pantalla al cambiar el tamaño de la ventana
    window.addEventListener("resize", () => {
      isWideScreen.value = window.innerWidth > 1200;
    });

    function toggleMenu() {
      // Alternar la visibilidad del menú cuando se hace clic en el ícono de hamburguesa
      isWideScreen.value = !isWideScreen.value;
    }

    return {
      isWideScreen,
      toggleMenu,
    };
  },
};
</script>

<style scoped>
/* Estilos del header aquí */
.navbar {
  background-color: #1f242a;
  padding: 10px;
}

.logo {
  color: #f18a4b;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
}

.navbar-nav {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  margin-left: 2rem;
  font-family: sans-serif;
  font-size: 17px; /* Tamaño de fuente reducido para resoluciones más grandes */
}

.nav-link:hover {
  color: #f18a4b;
}

/* Ícono de hamburguesa */
.navbar-toggler {
  border: none;
  background: transparent;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: 2rem;
}

/* Estilos responsivos */
@media (max-width: 1200px) {
  .nav-link {
    font-size: 0.9rem; /* Tamaño de fuente reducido para resoluciones medianas */
  }
}

@media (max-width: 720px) {
  .navbar-nav {
    flex-direction: column;
    align-items: flex-start;
    display: none; /* Ocultar el menú cuando se muestra el ícono de hamburguesa */
  }

  .navbar-toggler {
    display: block; /* Mostrar el ícono de hamburguesa */
  }

  .navbar-nav.show {
    display: flex; /* Mostrar el menú cuando se hace clic en el ícono de hamburguesa */
  }

  .nav-link {
    margin: 0.5rem 0; /* Ajusta el valor según el espaciado deseado */
  }
}
</style>
