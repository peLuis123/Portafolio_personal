<template>
  <div class="about-container">
    <div class="about-background"></div>

    <div class="about-content-left">
      <div class="profile-image">
        <img
          src="https://media.licdn.com/dms/image/D4E03AQEyGicX-Fbf6Q/profile-displayphoto-shrink_200_200/0/1684232652966?e=1695859200&v=beta&t=ducQ4fP7Mrk-XLS__55OyLXSeENWharsSzQV0KrgHFE"
          alt="Perfil"
          class="img-perfil"
        />
      </div>
    </div>

    <!-- Contenedor derecho -->
    <div class="about-content-right">
      <h1 class="title">Acerca de <a class="title-link">Mi</a></h1>
      <h2 class="subtitle">Desarrollador Backend</h2>
      <p class="description">
        Me gusta estar al día sobre los nuevos desarrollos tecnológicos. Además,
        me veo como una persona abierta a aprender de los errores de
        programación. Soy una persona abierta a la crítica porque creo que ese
        es el mejor enfoque para mejorar.
      </p>

      <h2 class="hobbies-title">Hobbies</h2>
      <div class="hobbies-icons">
        <div class="icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 640 512"
          >
            <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
            />
          </svg>
          <div class="tooltip">Aprender nuevas tecnologías</div>
        </div>
        <div class="icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 512 512"
          >
            <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z"
            />
          </svg>
          <div class="tooltip">mirar peliculas</div>
        </div>
        <div class="icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 640 512"
          >
            <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"
            />
          </svg>
          <div class="tooltip">jugar videojuegos</div>
        </div>
        <div class="icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 512 512"
          >
            <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
            />
          </svg>
          <div class="tooltip">salir de viaje</div>
        </div>
      </div>
      <div class="info">
        <div class="info-item">
          <span class="label">Email:</span> pedrorc2018@gmail.com
        </div>
        <div class="info-item">
          <span class="label">Celular:</span> +51 958 104 634
        </div>
        <div class="info-item">
          <span class="label">Fecha de cumpleaños:</span> 21/21/1999
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
.about-container {
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: relative;
}

.about-background {
  background-color: #1f242a;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -5;
}

.about-content-left {
  width: 30%;
  color: #fff;
  height: 100%;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-content-right {
  width: 70%;
  height: 100%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.img-perfil {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
}

.profile-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  color: #fff;
  font-size: 32px;
  margin-bottom: 10px;
}

.title-link {
  color: #f18a4b;
  text-decoration: none;
}

.subtitle {
  color: #fff;
  font-size: 24px;
  margin-bottom: 20px;
}

.description {
  color: #fff;
  font-size: 20px;
  margin-bottom: 20px;
}

.hobbies-title {
  color: #f18a4b;
  font-size: 24px;
  margin-bottom: 10px;
}

.hobbies-icons {
  display: flex;
  gap: 1rem;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #f18a4b;
  transition: background-color 0.3s;
}

.icon-container svg {
  width: 10px;
  height: 10px;
  fill: #f18a4b;
  transition: fill 0.3s;
}

.icon-container:hover {
  background-color: #f18a4b;
}

.icon-container:hover svg {
  fill: black;
}

.hobbies-icons svg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  transition: background-color 0.3s, color 0.3s;
}

.hobbies-icons svg:hover {
  background-color: #f18a4b;
  color: white;
  cursor: pointer;
}

.hobbies-icons svg:hover::after {
  content: attr(title);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f18a4b;
  color: white;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}

.hobbies-icons svg:hover::after {
  opacity: 1;
  visibility: visible;
}

.tooltip {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f18a4b;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  white-space: nowrap;
  z-index: 1;
  transition: opacity 0.3s, visibility 0.3s;
}

.icon-container:hover .tooltip {
  opacity: 1;
  visibility: visible;
}
.info {
  margin-top: 20px;
}

.info-item {
  color: #f18a4b;
  font-size: 20px;
  margin-bottom: 5px;
}

.label {
  color: #fff;
  font-weight: bold;
  margin-right: 5px;
}

@media screen and (max-width: 1280px) {
  .title {
    font-size: 28px;
  }
  .subtitle {
    font-size: 20px;
  }
  .description {
    font-size: 18px;
  }
  .hobbies-title {
    font-size: 20px;
  }
  .img-perfil {
    width: 300px;
    height: 300px;
  }
}

@media screen and (max-width: 720px) {
  .title {
    font-size: 25px;
  }
  .subtitle {
    font-size: 17px;
  }
  .description {
    font-size: 15px;
  }
  .hobbies-title {
    font-size: 17px;
  }
  .about-container {
    flex-direction: column;
  }
  .about-content-left {
    order: 2;
  }

  .about-content-right {
    order: 1;
  }
  .img-perfil {
    margin-top: 20px;
  }
  .about-content-left {
    padding: 0;
  }
}
@media screen and (max-width: 420px) {
  .about-content-left {
    display: none;
  }
}
</style>
