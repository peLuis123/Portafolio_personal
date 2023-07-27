<template>
  <div>
    <AppHeader />
    <AppInicio />
    <AboutMe />
  </div>
</template>
<script>
import AppHeader from "./components/header.vue";
import AppInicio from "./components/inicio.vue";
import AboutMe from "./components/about.vue";

export default {
  components: {
    AppHeader,
    AppInicio,
    AboutMe,
  },
};
</script>
