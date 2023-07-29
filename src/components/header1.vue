<template>
  <div id="app">
    <header class="header">
      <div class="header-left">
        <span class="name">Pedro Luis Ramos Calla</span>
      </div>
      <div class="header-right">
        <nav class="menu" :class="{ 'show-menu': showMenu }">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre mi</a></li>
            <li><a href="#">Experiencia laboral</a></li>

            <li><a href="#">Habilidades</a></li>
            <li><a href="#">Portafolio</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
        <button class="hamburger-btn" @click="toggleMenu">&#9776;</button>
      </div>
    </header>
    <!-- Resto de tu contenido aquí -->
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style>
.header {
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8%;
  height: 100px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}

.header-left {
  display: flex;
  align-items: center;
}

.header-right {
  display: flex;
  align-items: center;
}

.name {
  font-size: 28px;
  color: white;
  margin-right: 20px;
}

.menu {
  display: flex;
}

.menu ul {
  font-size: 20px;
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.menu li {
  margin-right: 20px;
}

.menu li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.menu li a:hover {
  color: orange;
}

.hamburger-btn {
  font-size: 24px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: none;
}

.show-menu .menu {
  display: block;
}
@media screen and (max-width: 1400px) {
  .menu ul {
    font-size: 15px;
  }
  .name {
    font-size: 25px;
  }
}
@media screen and (max-width: 866px) {
  .hamburger-btn {
    display: block;
  }

  .menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 10px;
    background-color: black;
    padding: 10px;
    border-radius: 5px;
    z-index: 999;
  }
  .menu.show-menu {
    display: flex;
  }
  .menu ul {
    list-style: none;
    display: flex;
    flex-direction: column;
  }
}
</style>
