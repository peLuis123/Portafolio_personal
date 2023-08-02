// import { createRouter, createWebHashHistory } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import AppInicio from "../components/inicio.vue";
import AboutMe from "../components/about.vue";
import MiExperiencia from "../components/experiencia.vue";
import MisSkills from "../components/habilidades.vue";
import portFolio from "../components/portafolio.vue";
import ContactaMe from "@/components/contacto.vue";

const routes = [
  { path: "/", component: AppInicio },
  { path: "/about", component: AboutMe },
  { path: "/experiencialaboral", component: MiExperiencia },
  { path: "/habilidades", component: MisSkills },
  { path: "/portafolio", component: portFolio },
  { path: "/contacto", component: ContactaMe },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
