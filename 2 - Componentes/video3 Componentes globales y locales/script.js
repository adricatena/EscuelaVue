const destino = {
  template: `<span>Destino</span>`,
};

const boton = {
  props: {
    color: String,
    enlace: {
      type: String,
      default: "http://www.escuelavue.es",
    },
    anchorText: String,
  },
  // template: `<a class="boton" :style="'background-color: ' + color" :href="enlace">{{anchorText}}</a>`,
  template: `<a class="boton" :style="'background-color: ' + color" :href="enlace">destino</a>`,
  components: {
    destino,
  },
};

const app = new Vue({
  el: "#app",
  data: {
    botones: [
      { enlace: "http://www.wmedia.es", anchorText: "Wmedia", color: "red" },
      {
        enlace: "http://www.escuelavue.es",
        anchorText: "Escuela Vue",
        color: "blue",
      },
      { enlace: "http://www.vuejs.org", anchorText: "Vue.js", color: "purple" },
    ],
  },
  components: {
    destino,
    boton,
  },
});
