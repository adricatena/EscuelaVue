const app = new Vue({
  mounted(){
    if(window.localStorage.getItem('form'))
      this.form = JSON.parse(window.localStorage.getItem('form'));
  },
  el: "#app",
  data: {
    form:{
      nombre: '',
      apellidos: '',
      mensaje: '',
      contacto: '',
      productos: 'producto1',
      acepta: false,
    }
  },
});
app.$watch('form', (nuevo, antiguo) => {
  window.localStorage.setItem('form', JSON.stringify(nuevo));
  //console.log(nuevo.nombre);
}, {deep: true});
