// Usuario individual
const usuario = {
  props: ["info"],
  template: "#usuario-template",
  computed: {
    nombreCompleto() {
      return `${this.info.name.title}: ${this.info.name.first} ${this.info.name.last}`;
    }
  },
  methods: {
    modificarSeleccion() {
      this.$emit('seleccion', this.info.username);
    }
  }
};

// Wrapper de usuarios
const usuarios = {
  props: ['listado', 'moverA'],
  template: '#usuarios-template',
  methods: {
    alterarSeleccion(username) {
      var indice = this.listado.findIndex(elemento => {
        return elemento.username === username;
      });

      if (indice > -1) {
        this.$root[this.moverA].unshift(this.listado.splice(indice, 1)[0]);
      }
    }
  },
  components: {
    usuario,
  }
}

const vm = new Vue({
  created() {
    fetch('https://randomuser.me/api/?results=50')
      .then(respuesta => respuesta.json())
      .then(respuesta => this.usuariosDisponibles = respuesta.results.map(usuario => {
        return {
          username: usuario.login.username,
          name: usuario.name,
          email: usuario.email,
          picture: usuario.picture,
        }
      }));
  },
  el: "#app",
  data: {
    usuariosDisponibles: [],
    usuariosSeleccionados: [],
  },
  components: {
    usuarios,
  }
});



/* // Usuario individual
const usuario = {
  props: ["info"],
  template: "#usuario-template",
  computed: {
    nombreCompleto() {
      return `${this.info.name.title}: ${this.info.name.first} ${this.info.name.last}`;
    }
  },
};

// Wrapper de usuarios
const usuarios = {
  props: ['listado'],
  template: '#usuarios-template',
  components: {
    usuario,
  }
}

const app = new Vue({
  created() {
    fetch('https://randomuser.me/api/?results=50').then(respuesta => respuesta.json()).then(respuesta => this.usuariosDisponibles = respuesta.results.map(usuario => {
      return {
        username: usuario.login.username,
        name: usuario.name,
        email: usuario.email,
        picture: usuario.picture,
      }
    }));
  },
  el: "#app",
  data: {
    usuariosDisponibles: [],
  },
  components: {
    usuarios,
  },
}); */
