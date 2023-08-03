<template>
  <div class="inicio-container">
    <div class="inicio-background"></div>
    <div class="inicio-content-left">
      <div class="profile-text">
        <h1>Hola, soy</h1>
        <h2>Pedro Luis Ramos Calla</h2>
        <p>
          Como Desarrollador Backend Jr., mi experiencia se fusiona en la
          creación de bases sólidas para aplicaciones. Maestro de Node.js,
          Laravel y PHP, orquesto servicios eficientes. Mi lenguaje son las
          bases de datos: Firebase, MongoDB, MySQL y SQL Server son mi lienzo.
          Con Vue.js, React y HTML, doy vida a interfaces cautivadoras. Mi mente
          analítica modela datos en Power BI, desentraña secretos con Python y
          se adentra en el mundo de la inteligencia artificial. En el horizonte,
          desarrollo móvil con Apphive. Sin embargo, mi pasión ardiente se ancla
          en el backend, donde la lógica fluye y las soluciones florecen.
        </p>
      </div>

      <div class="inicio-icons">
        <a
          href="https://www.linkedin.com/in/pedro-calla-363b04151/"
          target="_blank"
          class="inicio-icon linkedin-icon"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/peLuis123"
          target="_blank"
          class="inicio-icon github-icon"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
      <a
        href="https://drive.google.com/file/d/1aQYHsS8IaIky5S4T0q9byPHKmaaOo4Xr/view?usp=sharing"
        target="_blank"
        download
      >
        <button class="download-button">Descargar hoja de vida</button>
      </a>
      <!-- <button class="download-button" @click="abrirPDF">
        Descargar hoja de vida
      </button> -->
    </div>
    <div class="inicio-content-right">
      <div class="profile-image">
        <img src="../assets/images/perfil.jpg" alt="Perfil" />
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
.inicio-icons {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.inicio-icon {
  color: #f18a4b;
  font-size: 32px;
  transition: transform 0.3s;
}

.linkedin-icon {
  margin-left: 20px;
}

.github-icon {
  margin-left: 20px;
}

.inicio-icon:hover {
  transform: scale(1.1);
}
.inicio-container {
  height: 790px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 20px 0;
  position: relative;
}

.inicio-background {
  background-image: url("../assets/images/portada.jpg");
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -5;
  opacity: 0.9;
  background-color: rgba(0, 0, 0, 0.5);
}

.inicio-content-left,
.inicio-content-right {
  color: #fff;
  padding: 5%;
  height: 100%;
}
.inicio-content-left {
  width: 70%;
}
.inicio-content-right {
  width: 30%;
  margin-top: 20px;
}
p {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 18px;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
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
  color: #f18a4b;
  font-size: 24px;
}

.download-button {
  margin-top: 30px;
  background-color: #f18a4b;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

@media (max-width: 1200px) {
  .nav-link {
    font-size: 0.9rem;
  }
}

@media (max-width: 720px) {
  .inicio-content-right {
    display: none;
  }
  .navbar-nav {
    flex-direction: column;
    align-items: flex-start;
    display: none;
  }

  .navbar-toggler {
    display: block;
  }

  .navbar-nav.show {
    display: flex;
  }

  .nav-link {
    margin: 0.5rem 0;
  }
  .inicio-container {
    flex-direction: column;
  }
  .inicio-content-left,
  .inicio-content-right {
    width: 100%;
    margin-top: 0;
  }
  .profile-image {
    animation: none;
  }
}
</style>
