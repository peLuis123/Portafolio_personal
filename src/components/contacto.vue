<template>
  <div class="contact-container">
    <h1 class="contact-title">Contáctanos</h1>
    <div class="form-row">
      <div class="form-group">
        <input type="text" placeholder="Nombre" />
      </div>
      <div class="form-group">
        <input type="email" placeholder="Correo Electrónico" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <input type="tel" placeholder="Teléfono Celular" />
      </div>
      <div class="form-group">
        <input type="text" placeholder="Asunto" />
      </div>
    </div>
    <div class="form-group">
      <textarea class="messaje" placeholder="Mensaje"></textarea>
    </div>
    <button class="submit-button">Enviar Mensaje</button>
  </div>
</template>

<script>
export default {
  name: "ContactaMe",
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
</style>
