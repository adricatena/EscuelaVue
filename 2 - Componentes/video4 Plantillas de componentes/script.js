const pizza = {
  props: ["nombre", "imagen", "cantidad"],
  template: "#pizza-template",
  methods: {
    masPizza() {
      this.cantidad++;
    },
    menosPizza() {
      this.cantidad > 0 && this.cantidad--;
    },
  },
};

const app = new Vue({
  el: "#app",
  data: {
    pizzas: [
      {
        nombre: "Pizza de carne",
        imagen:
          "https://cocina-casera.com/wp-content/uploads/2011/12/pizaa-carne-receta.jpg",
        cantidad: 0,
      },
      {
        nombre: "Mini Pizza",
        imagen: "https://i.ytimg.com/vi/4wg09Xms_wo/sddefault.jpg",
        cantidad: 0,
      },
      {
        nombre: "Pizza Pepperoni",
        imagen:
          "https://placeralplato.com/files/2016/01/Pizza-con-pepperoni-640x480.jpg",
        cantidad: 0,
      },
    ],
  },
  components: {
    pizza,
  },
  // methods: {
  //   masPizza(indice) {
  //     this.pizzas[indice].cantidad++;
  //   },
  //   menosPizza(indice) {
  //     this.pizzas[indice].cantidad--;
  //   },
  // },
});
