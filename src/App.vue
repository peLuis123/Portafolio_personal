<template>
  <div>
    <!-- <AppHeader /> -->
    <AppHeader1 />
    <AppInicio />
    <AboutMe />
    <MiExperiencia />
    <MisSkills />
    <ContactaMe />
  </div>
</template>
<script>
import AppInicio from "./components/inicio.vue";
import AboutMe from "./components/about.vue";
import AppHeader1 from "./components/header1.vue";
import MiExperiencia from "./components/experiencia.vue";
import MisSkills from "./components/habilidades.vue";
import ContactaMe from "./components/contacto.vue";

export default {
  components: {
    // AppHeader,
    AppInicio,
    AboutMe,
    AppHeader1,
    MiExperiencia,
    MisSkills,
    ContactaMe,
  },
};
</script>
