const pizza = {
  props: ["nombre", "imagen", "cantidad"],
  template: "#pizza-template",
  methods: {
    masPizza() {
      // this.cantidad++;
      this.$emit("mas");
    },
    menosPizza() {
      // this.cantidad > 0 && this.cantidad--;
      if (this.cantidad > 0) this.$emit("menos");
    },
  },
};

const app = new Vue({
  el: "#app",
  data: {
    totalPizzas: 0,
    pizzas: [
      {
        nombre: "Pizza de carne",
        imagen:
          "https://cocina-casera.com/wp-content/uploads/2011/12/pizaa-carne-receta.jpg",
      },
      {
        nombre: "Mini Pizza",
        imagen: "https://i.ytimg.com/vi/4wg09Xms_wo/sddefault.jpg",
      },
      {
        nombre: "Pizza Pepperoni",
        imagen:
          "https://placeralplato.com/files/2016/01/Pizza-con-pepperoni-640x480.jpg",
      },
    ],
  },
  components: {
    pizza,
  },
});
