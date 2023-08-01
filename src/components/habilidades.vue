<template>
  <div class="skills-container">
    <div class="icon-container">
      <div class="icon-item">
        <i class="fab fa-python"></i>
        <p class="icon-name">Python</p>
      </div>
      <div class="icon-item">
        <i class="fab fa-cuttlefish"></i>
        <p class="icon-name">C#</p>
      </div>
      <div class="icon-item">
        <i class="fab fa-html5"></i>
        <p class="icon-name">HTML5</p>
      </div>
      <div class="icon-item">
        <i class="fab fa-css3"></i>
        <p class="icon-name">CSS3</p>
      </div>
      <div class="icon-item">
        <i class="fab fa-bootstrap"></i>
        <p class="icon-name">Bootstrap</p>
      </div>
      <div class="icon-item">
        <i class="fab fa-js"></i>
        <p class="icon-name">JavaScript</p>
      </div>
      <div class="icon-item">
        <i class="fab fa-react"></i>
        <p class="icon-name">React</p>
      </div>
      <div class="icon-item">
        <i class="fab fa-vuejs"></i>
        <p class="icon-name">Vue.js</p>
      </div>
      <div class="icon-item">
        <i class="fab fa-node-js"></i>
        <p class="icon-name">Node.js</p>
      </div>
      <div class="icon-item">
        <i class="fab fa-laravel"></i>
        <p class="icon-name">Laravel</p>
      </div>
      <div class="icon-item">
        <i class="fab fa-php"></i>
        <p class="icon-name">PHP</p>
      </div>
      <div class="icon-item">
        <i class="fas fa-database"></i>
        <p class="icon-name">MySQL</p>
      </div>
      <div class="icon-item">
        <i class="fas fa-database"></i>
        <p class="icon-name">SQL Server</p>
      </div>
      <div class="icon-item">
        <i class="fas fa-fire"></i>
        <p class="icon-name">Firebase</p>
      </div>
      <div class="icon-item">
        <i class="fab fa-envira"></i>
        <p class="icon-name">MongoDB</p>
      </div>
      <div class="icon-item">
        <i class="fab fa-git"></i>
        <p class="icon-name">Git</p>
      </div>
      <div class="icon-item">
        <i class="fab fa-linux"></i>
        <p class="icon-name">Linux</p>
      </div>
      <div class="icon-item">
        <i class="fas fa-server"></i>
        <p class="icon-name">VPS</p>
      </div>
      <div class="icon-item">
        <i class="fas fa-mobile-alt"></i>
        <p class="icon-name">AppHive</p>
      </div>

      <div class="icon-item">
        <i class="fab fa-wordpress"></i>
        <p class="icon-name">WordPress</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MisSkills",
  data() {
    return {};
  },
};
</script>

<style>
.skills-container {
  max-height: 1500px;
  background-color: #1f242a;
  margin: 0;
  padding: 100px;
  display: flex;
  justify-content: center;
}

.icon-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1250px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 200px;
}

.icon-item i {
  font-size: 80px;
  width: 100%;
  height: 185px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f18a4b;
}

.icon-name {
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
}
.icon-item:hover {
  transform: scale(1.1);
  box-shadow: 0px 0px 10px rgba(241, 138, 75, 0.5);
}
@media screen and (max-width: 1400px) {
  .icon-item {
    width: 180px;
  }

  .icon-item i {
    font-size: 70px;
    height: 160px;
  }

  .icon-name {
    font-size: 16px;
  }
}
@media screen and (max-width: 1200px) {
  .icon-item {
    width: 150px;
  }

  .icon-item i {
    font-size: 60px;
    height: 140px;
  }

  .icon-name {
    font-size: 14px;
  }
}

@media screen and (max-width: 992px) {
  .icon-item {
    width: 120px;
  }

  .icon-item i {
    font-size: 50px;
    height: 120px;
  }

  .icon-name {
    font-size: 12px;
  }
}
@media screen and (max-width: 620px) {
  .icon-container {
    justify-content: space-between;
  }
  .skills-container {
    max-height: 1900px;
    background-color: #1f242a;
    margin: 0;
    padding: 8%;
    display: flex;
    justify-content: center;
  }
}
</style>
