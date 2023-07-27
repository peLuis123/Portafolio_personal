<template>
  <div class="inicio-container">
    <!-- Fondo semi-transparente -->
    <div class="inicio-background"></div>

    <!-- Contenedor izquierdo -->
    <div class="inicio-content-left">
      <div class="profile-text">
        <h1>Hola, soy</h1>
        <h2>Pedro Luis Ramos Calla</h2>
        <p>
          Soy un programador backend jr con conocimientos en Node.js, Laravel y
          PHP, con bases de datos como Firebase, MongoDB, MySQL y SQL Server.
          Además, conozco frameworks de frontend como Vue.js, React y HTML, y he
          trabajado con modelamiento de datos en Power BI y análisis, modelado y
          entrenamiento de datos con Python e inteligencia artificial.
          Últimamente, he estado aprendiendo desarrollo móvil con Apphive, pero
          de todos los temas que he tocado, lo que más me apasiona es el
          desarrollo backend.
        </p>
      </div>

      <div class="inicio-icons">
        <a href="https://www.linkedin.com/" target="_blank"
          ><font-awesome-icon
            :icon="['fab', 'linkedin']"
            class="inicio-icon linkedin-icon"
            size="2x"
          ></font-awesome-icon
        ></a>
        <a href="https://github.com/" target="_blank"
          ><font-awesome-icon
            :icon="['fab', 'github']"
            class="inicio-icon github-icon"
            size="2x"
          ></font-awesome-icon
        ></a>
      </div>

      <button class="download-button">Descargar hoja de vida</button>
    </div>

    <!-- Contenedor derecho con la imagen -->
    <div class="inicio-content-right">
      <div class="profile-image">
        <img
          src="https://media.licdn.com/dms/image/D4E03AQEyGicX-Fbf6Q/profile-displayphoto-shrink_200_200/0/1684232652966?e=1695859200&v=beta&t=ducQ4fP7Mrk-XLS__55OyLXSeENWharsSzQV0KrgHFE"
          alt="Perfil"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppInicio",
};
</script>

<style scoped>
/* Estilos del componente aquí */
.inicio-icon {
  color: #f18a4b; /* Color anaranjado */
  /* opacity: 0.7; Transparencia del 70% */
  transition: opacity 0.3s;
}
.linkedin-icon {
  margin-right: 10px; /* Separación entre los iconos */
}

/* Estilos para el icono de GitHub */
.github-icon {
  margin-left: 15; /* Separación entre los iconos */
}
.inicio-icon:hover {
  opacity: 1;
}
.inicio-container {
  height: 790px; /* Altura del contenedor */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: relative;
}

.inicio-background {
  background-image: url("https://wallpapercave.com/wp/wp8778419.png");
  background-size: cover;
  background-position: center; /* Centrar la imagen verticalmente */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -5;
  opacity: 0.7;
  background-color: rgba(0, 0, 0, 0.5); /* Color semi-transparente */
}

.inicio-content-left {
  width: 70%; /* Contenedor izquierdo ocupa el 70% */
  color: #fff;
  height: 100%;
  padding: 5%; /* Padding del 5% */
}
.inicio-content-right {
  width: 30%; /* Contenedor izquierdo ocupa el 70% */
  color: #fff;
  padding: 5%;
  height: 100%;
}
p {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.profile-image {
  width: 200px; /* Ajusta el tamaño de la imagen a tu preferencia */
  height: 200px; /* Ajusta el tamaño de la imagen a tu preferencia */
  border-radius: 50%; /* Hace que la imagen tenga forma circular */
  overflow: hidden; /* Evita que la imagen se desborde del círculo */
  margin: 0 auto; /* Centra la imagen horizontalmente */
  align-items: center;
  display: flex;
  align-items: center; /* Centra verticalmente la imagen */
  justify-content: center; /* Centra horizontalmente la imagen */
  animation: moveUpDown 3s infinite alternate;
}
@keyframes moveUpDown {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(20%);
  }
}

.social-icons {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.social-icon {
  color: #f18a4b; /* Color anaranjado */
  font-size: 24px;
}

.download-button {
  margin-top: 30px;
  background-color: #f18a4b; /* Color anaranjado */
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
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
  .inicio-container {
    flex-direction: column;
  }
  .inicio-content-left {
    width: 100%;
  }
  .inicio-content-right {
    width: 100%;
    margin-top: 20px; /* Separación entre los contenedores */
  }
}
@keyframes moveUpDown {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(20%);
  }
}

/* Estilos responsivos */
@media (max-width: 720px) {
  .inicio-container {
    flex-direction: column;
  }
  .inicio-content-left {
    width: 100%;
  }
  .inicio-content-right {
    width: 100%;
    margin-top: 0px; /* Separación entre los contenedores */
  }
  .profile-image {
    /* Eliminar la animación de arriba a abajo */
    animation: none;
  }
}
@media screen and (max-width: 390px) {
  .inicio-content-right {
    display: none;
  }
}
</style>
