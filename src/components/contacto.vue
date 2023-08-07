<template>
  <div class="contact-container">
    <h1 class="contact-title">Contáctanos</h1>
    <form @submit.prevent="enviarFormulario">
      <div class="form-row">
        <div class="form-group">
          <input type="text" placeholder="Nombre" v-model="nombre" required />
        </div>
        <div class="form-group">
          <input
            type="email"
            placeholder="Correo Electrónico"
            v-model="email"
            required
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <div class="phone-input">
            <select v-model="lada" class="lada-select">
              <option
                v-for="ladaOption in ladas"
                :value="ladaOption.value"
                :key="ladaOption.value"
              >
                {{ ladaOption.name }}
              </option>
            </select>
            <input
              type="tel"
              placeholder="Teléfono Celular"
              v-model="telefono"
              required
              @input="validarNumeroTelefono"
            />
          </div>
        </div>
        <div class="form-group">
          <input type="text" placeholder="Asunto" v-model="asunto" />
        </div>
      </div>

      <div class="form-group">
        <textarea
          class="messaje"
          placeholder="Mensaje"
          v-model="mensaje"
          required
        ></textarea>
      </div>
      <button type="submit" class="submit-button">Enviar Mensaje</button>
      <p v-if="enviadoExitosamente" class="success-message">
        ¡Correo electrónico enviado con éxito!
      </p>
    </form>
  </div>
</template>
<script>
import emailjs from "emailjs-com";
export default {
  name: "ContactaMe",
  data() {
    return {
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: "",
      enviadoExitosamente: false,
      lada: "+51",
      ladas: [
        { value: "+1", name: "+1" },
        { value: "+34", name: "+34" },
        { value: "+51", name: "+51" },
        { value: "+52", name: "+52" },
        { value: "+54", name: "+54" },
        { value: "+55", name: "+55" },
        { value: "+56", name: "+56" },
        { value: "+57", name: "+57" },
        { value: "+58", name: "+58" },
        { value: "+591", name: "+591" },
        { value: "+593", name: "+593" },
        { value: "+595", name: "+595" },
        { value: "+596", name: "+596" },
        { value: "+597", name: "+597" },
        { value: "+598", name: "+598" },
        { value: "+599", name: "+599" },
        { value: "+502", name: "+502" },
        { value: "+503", name: "+503" },
        { value: "+504", name: "+504" },
        { value: "+505", name: "+505" },
        { value: "+506", name: "+506" },
        { value: "+507", name: "+507" },
        { value: "+509", name: "+509" },
        { value: "+592", name: "+592" },
        { value: "+594", name: "+594" },
        { value: "+501", name: "+501" },
        { value: "+590", name: "+590" },
      ],
    };
  },
  methods: {
    validarNumeroTelefono() {
      this.telefono = this.telefono.replace(/\D/g, ""); // Eliminar caracteres no numéricos
    },
    limpiarCampos() {
      this.nombre = "";
      this.email = "";
      this.telefono = "";
      this.asunto = "";
      this.mensaje = "";
    },
    enviarFormulario() {
      const telefonoCompleto = this.lada + this.telefono;
      const templateParams = {
        correo_electronico: this.email,
        nombre: this.nombre,
        mensaje: this.mensaje,
        telefono: telefonoCompleto,
        asunto: this.asunto,
      };

      emailjs
        .send(
          process.env.VUE_APP_EMAILJS_SERVICE_ID,
          process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
          templateParams,
          process.env.VUE_APP_EMAILJS_USER_ID
        )
        .then((response) => {
          console.log("Correo electrónico enviado:", response);
          this.enviadoExitosamente = true;
          this.limpiarCampos();
        })
        .catch((error) => {
          alert(error.message);
          console.error("Error al enviar el correo electrónico:", error);
        });
    },
  },
};
</script>

<style>
.form-group input {
  width: 343px;
  height: 55px;
  border-radius: 10px;
  margin: 7px;
}
.messaje {
  width: 700px;
  height: 280px;
  border-radius: 10px;
}
.contact-container {
  max-height: 1200px;
  background-color: #1f242a;
  margin: 0;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-title {
  color: #f18a4b;
  margin-bottom: 30px;
}

.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.form-group {
  flex: 1;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  background-color: #323946;
  border: none;
  border-radius: 10px;
  color: #fff;
}

textarea {
  resize: none;
}

.submit-button {
  width: 200px;
  padding: 10px;
  background-color: #f18a4b;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  margin-top: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.submit-button:hover {
  background-color: #e07738;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
}
@media screen and (max-width: 720px) {
  .form-group input {
    width: 175px;
    height: 55px;
    border-radius: 10px;
    margin: 7px;
  }
  .messaje {
    width: 364px;
    height: 180px;
    border-radius: 10px;
  }
}
@media screen and (max-width: 480px) {
  .form-row {
    margin: 0px 0px 0px 2px;
    flex-direction: column;
  }
  .contact-container {
    padding: 30px 0px 0px 8%;
  }
  .form-group {
    margin-bottom: 2px;
  }
  .form-group input {
    width: 300px;
  }
  .messaje {
    width: 300px;
    height: 180px;
    border-radius: 10px;
    margin: 7px;
    margin-bottom: 2px;
  }
  .submit-button {
    margin: 0px 0px 20px 0px;
  }
}

.success-message {
  color: #4caf50;
  font-size: 18px;
  margin-top: 10px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.enviadoExitosamente {
  opacity: 1;
}
.phone-input {
  display: flex;
  align-items: center;
}

.phone-input input {
  width: 80%;
  border-radius: 0 10px 10px 0;
  margin-left: 0;
}

.phone-input select {
  width: 20%;
  border-radius: 10px 0px 0px 10px;
  background-color: #323946;
  color: #fff;
  border: none;
  padding: 16px 0 16px 0;
}
</style>
