<template>
  <div class="experience-container">
    <div class="title-container">
      <h1 class="experience-title">Mi Experiencia Laboral</h1>
    </div>
    <div class="content-container">
      <div class="experience-content">
        <div class="date-box">
          <h3 class="experience-date">Enero 2023 - Abril 2023</h3>
          <p class="experience-detail">
            Practicante Desarrollador Backend - DevITM
          </p>
          <p class="experience-exp">
            - Desarrollo de aplicaciones moviles en APPHIVE
          </p>
          <p class="experience-exp">
            - Desarrollo de una API REST para pasarella de pagos con stripe y
            nodejs
          </p>
          <p class="experience-exp">- Documentacion de API REST con swagger</p>
          <p class="experience-exp">
            - Integracion de API REST en sistema frontend con vue y Fetch
          </p>
        </div>
        <div class="date-box">
          <h3 class="experience-date">Abril 2023 - Actualidad</h3>
          <p class="experience-detail">Desarrollador Backend - DevITM</p>
          <p class="experience-exp">
            - despliegue de API REST con nodejs en servidor VPS con NGINX
          </p>
          <p class="experience-exp">- Manejo de webhooks con nodejs</p>
          <p class="experience-exp">- CRUD con Firebase y nodejs</p>
          <p class="experience-exp">
            - Desarrollo de una API REST para confirmacion de dos pasos
            verificacion de correo y celular
          </p>
          <p class="experience-exp">
            - Conexion de aplicaciones moviles con APPHIVE y desarrollo web con
            VUE mediante webhooks con nodejs
          </p>
          <p class="experience-exp">
            - Capacitacion y desarrollo de una aplicacion tipo ubereats en
            apphive
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiExperiencia",
};
</script>

<style>
.experience-container {
  max-height: 1300px;
  background-color: #323946;
  margin: 0;
  padding: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-container {
  margin-bottom: 20px;
}

.experience-title {
  color: #f18a4b;
  margin: 0;
}

.content-container {
  flex: 2;
  border-left: 2px solid#1685b8;
  padding-left: 20px;
}

.experience-content h3 {
  color: #fff !important;
  margin: 0;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
}
.experience-detail {
  color: #1685b8;
}
.experience-content p {
  margin: 0;
  margin-bottom: 10px;
}

.date-box {
  position: relative;
}

.experience-date {
  background-color: #1685b8 !important;
  color: white !important;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 10px;
}

.experience-date::before {
  content: "";
  position: absolute;
  left: -28px;
  top: 12px;
  width: 12px;
  height: 12px;
  background-color: #34ace0;
  border-radius: 50%;
}

.experience-date:last-child::after {
  content: "";
  position: absolute;
  left: -12px;
  top: 3px;
  width: 12px;
  height: 12px;
  background-color: #1685b8;
  border-radius: 50%;
}

.experience-detail,
.experience-exp {
  font-weight: bold;
  font-size: 18px;
  margin-left: 20px !important;
}

.experience-exp {
  margin-left: 25px !important;
  color: #fff;
}
@media screen and (max-width: 720px) {
  .experience-container {
    padding: 90px;
  }

  .experience-content p {
    font-size: 14px;
  }
}
@media screen and (max-width: 490px) {
  .experience-container {
    padding: 30px;
  }

  .experience-content p {
    font-size: 12px;
  }
}
</style>
