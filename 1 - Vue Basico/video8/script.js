const app = new Vue({
  el: "#app",
  data: {
    password: null,
    estado: "Introduce una contrasena...",
    noValidos: [
      "admin",
      "12345",
      "password"
    ],
  },
  watch: {
    password(nuevo, antiguo) {
      if (this.noValidos.indexOf(nuevo) > -1) {
        this.estado = "Contrasena NO valida!";
        return false;
      }
      if (nuevo.length < 5) {
        this.estado = "La contrasena debe tener al menos 5 caracteres";
        return false;
      }
      this.estado = "Contrasena correcta";
    }
  }
});