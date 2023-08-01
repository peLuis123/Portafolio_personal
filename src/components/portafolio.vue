<template>
  <div class="portafolio-container">
    <h1>Mis Proyectos</h1>

    <div class="proyectos-container">
      <div class="proyecto-card">
        <img
          src="../assets/images/apidatos.png"
          alt="Proyecto 1"
          @mouseover="showDescripcion(1)"
          @mouseleave="hideDescripcion"
        />
        <div v-if="showingDescripcion === 1" class="descripcion-mask">
          <h3 class="proyecto-titulo">{{ proyectos[0].Title }}</h3>
          <p>{{ proyectos[0].descripcion }}</p>
          <button
            @click="
              verRepositorio('https://github.com/peLuis123/api_analisis_datos')
            "
            @mouseover="detenerPropagacion"
          >
            Ver código fuente
          </button>
        </div>
      </div>

      <div class="proyecto-card">
        <img
          src="../assets/images/scraplink.jpg"
          alt="Proyecto 2"
          @mouseover="showDescripcion(2)"
          @mouseleave="hideDescripcion"
        />
        <div v-if="showingDescripcion === 2" class="descripcion-mask">
          <h3 class="proyecto-titulo">{{ proyectos[1].Title }}</h3>
          <p>{{ proyectos[1].descripcion }}</p>
          <button
            @click="
              verRepositorio(
                'https://github.com/peLuis123/scraping-linkedin-puppeteer'
              )
            "
            @mouseover="detenerPropagacion"
          >
            Ver código fuente
          </button>
        </div>
      </div>

      <div class="proyecto-card">
        <img
          src="../assets/images/sonyvegas.jpg"
          alt="Proyecto 3"
          @mouseover="showDescripcion(3)"
          @mouseleave="hideDescripcion"
        />
        <div v-if="showingDescripcion === 3" class="descripcion-mask">
          <h3 class="proyecto-titulo">{{ proyectos[2].Title }}</h3>
          <p>{{ proyectos[2].descripcion }}</p>
          <button
            @click="
              verRepositorio('https://github.com/peLuis123/Video_Editor_FFMPEG')
            "
            @mouseover="detenerPropagacion"
          >
            Ver código fuente
          </button>
        </div>
      </div>

      <div class="proyecto-card">
        <img
          src="../assets/images/api2datos.jpg"
          alt="Proyecto 4"
          @mouseover="showDescripcion(4)"
          @mouseleave="hideDescripcion"
        />
        <div v-if="showingDescripcion === 4" class="descripcion-mask">
          <h3 class="proyecto-titulo">{{ proyectos[3].Title }}</h3>
          <p>{{ proyectos[3].descripcion }}</p>
          <button
            @click="verRepositorio('https://github.com/peLuis123/VeriAPI')"
            @mouseover="detenerPropagacion"
          >
            Ver código fuente
          </button>
        </div>
      </div>

      <div class="proyecto-card">
        <img
          src="../assets/images/stripe.png"
          alt="Proyecto 5"
          @mouseover="showDescripcion(5)"
          @mouseleave="hideDescripcion"
        />
        <div v-if="showingDescripcion === 5" class="descripcion-mask">
          <h3 class="proyecto-titulo">{{ proyectos[4].Title }}</h3>
          <p>{{ proyectos[4].descripcion }}</p>
          <button
            @click="verRepositorio('https://github.com/peLuis123/Stripe_Back')"
            @mouseover="detenerPropagacion"
          >
            Ver código fuente
          </button>
        </div>
      </div>

      <div class="proyecto-card">
        <img
          src="../assets/images/agua.jpg"
          alt="Proyecto 2"
          @mouseover="showDescripcion(6)"
          @mouseleave="hideDescripcion"
        />
        <div v-if="showingDescripcion === 6" class="descripcion-mask">
          <h3 class="proyecto-titulo">{{ proyectos[5].Title }}</h3>
          <p>{{ proyectos[5].descripcion }}</p>
          <button
            @click="
              verRepositorio(
                'https://github.com/peLuis123/WaterQualityAnalysisML'
              )
            "
            @mouseover="detenerPropagacion"
          >
            Ver código fuente
          </button>
        </div>
      </div>
    </div>

    <div v-if="proyectos.length === 0">
      <p>No hay proyectos para mostrar.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "portFolio",
  data() {
    return {
      proyectos: [
        {
          id: 1,
          Title: "API de Análisis de Datos",
          descripcion:
            "Esta es una API que permite realizar análisis de datos a partir de archivos Excel y generar gráficos circulares basados en los datos almacenados en Firebase Firestore.",
        },
        {
          id: 2,
          Title: "Proyecto de Web Scraping en LinkedIn con Puppeteer",
          descripcion:
            "Este proyecto consiste en un script desarrollado en Node.js utilizando la biblioteca Puppeteer para realizar web scraping en LinkedIn.",
        },
        {
          id: 3,
          Title: "Automatizador de Video con FFMPEG y YouTube-DL",
          descripcion:
            "Este proyecto es un automatizador de edición de video desarrollado en TypeScript. Permite a los usuarios realizar diversas operaciones de edición, como cortar, unir y aplicar filtros a clips de video.",
        },
        {
          id: 4,
          Title: "API de Verificación",
          descripcion:
            "La API de Verificación es una aplicación que permite enviar y verificar códigos de verificación por SMS y correo electrónico. Esta API utiliza servicios de Twilio para enviar mensajes de texto y nodemailer para enviar correos electrónicos.",
        },
        {
          id: 5,
          Title: "API para Pasarela de Pago con Stripe",
          descripcion:
            " La API permite a los usuarios gestionar clientes, agregar fuentes de pago (tarjetas), crear y confirmar intenciones de pago, y realizar otras operaciones relacionadas con pagos.",
        },
        {
          id: 6,
          Title: "Análisis de Calidad del Agua",
          descripcion:
            "Este proyecto realiza un análisis de calidad del agua utilizando técnicas de análisis de datos y aprendizaje automático.",
        },
      ],
      showingDescripcion: 0,
    };
  },
  methods: {
    showDescripcion(id) {
      this.showingDescripcion = id;
    },
    hideDescripcion() {
      setTimeout(() => {
        this.showingDescripcion = 0;
      }, 300);
    },
    verRepositorio(url) {
      window.open(url, "_blank"); // Abre el enlace en una nueva pestaña
    },
    detenerPropagacion(event) {
      event.stopPropagation();
    },
  },
};
</script>

<style>
h1 {
  color: white;
  padding-bottom: 25px;
}
.portafolio-container {
  height: 1426px;
  background-color: #323946;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 190px;
}

.proyectos-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.proyecto-card {
  position: relative;
  margin: 10px;
  width: 600px;
  height: 375px;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.proyecto-card:hover {
  transform: scale(1.05);
}

.proyecto-card img {
  width: 100%;
  height: 100%;
}

.descripcion-mask {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
  font-size: 16px;
  opacity: 0;
  transition: opacity 0.3s;

  text-align: center;
}

.descripcion-mask button {
  padding: 10px 20px;
  background-color: #ff8000;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.proyecto-card:hover .descripcion-mask {
  opacity: 1;
}
.descripcion-mask button:hover {
  background-color: #e67e00;
}
.proyecto-titulo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.proyecto-descripcion {
  text-align: center;
}

@media (max-width: 1650px) {
  .portafolio-container {
    padding: 30px;
  }
}
@media (max-width: 1355px) {
  .proyecto-card {
    width: 235px;
    height: 400px;
  }
}
@media (max-width: 570px) {
  .descripcion-mask > p {
    display: none;
  }
  .proyecto-card {
    width: 200px; /* Hacer que las tarjetas ocupen todo el ancho cuando el ancho sea de 720px o menos */
    height: 200px; /* Ajustar automáticamente la altura según el contenido */
  }
}
</style>
