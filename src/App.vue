<template>
  <div>
    <AppHeader1 />
    <div id="inicio">
      <AppInicio />
    </div>
    <div id="about">
      <AboutMe />
    </div>
    <div id="experiencia">
      <MiExperiencia />
    </div>
    <div id="habilidades">
      <MisSkills />
    </div>
    <div id="portafolio">
      <portFolio />
    </div>
    <div id="contacto">
      <ContactaMe />
    </div>
  </div>
</template>
<script>
import AppHeader1 from "./components/header1.vue";
import AppInicio from "./components/inicio.vue";
import AboutMe from "./components/about.vue";
import MiExperiencia from "./components/experiencia.vue";
import MisSkills from "./components/habilidades.vue";
import ContactaMe from "./components/contacto.vue";
import portFolio from "./components/portafolio.vue";

export default {
  components: {
    AppHeader1,
    AppInicio,
    AboutMe,
    MiExperiencia,
    MisSkills,
    ContactaMe,
    portFolio,
  },
};
</script>
