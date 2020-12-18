const app = new Vue({
  el: "#app",
  mounted(){
    axios.get(this.url)
      .then(respuesta => this.tareas = respuesta.data)
      .catch(error => console.error(error));
  },
  data: {
    nuevaTarea: '',
    url: 'https://jsonplaceholder.typicode.com/todos',
    tareas: [],
  },
  methods: {
    guardarTarea(){
      axios.post(this.url, {
        title: this.nuevaTarea,
        userId: Math.floor(Math.random()*10)+1,
      })
      .then(respuesta=>{
        console.log(respuesta);
        this.tareas.unshift({
          title: this.nuevaTarea,
        });
        this.nuevaTarea = '';
      })
      .catch(error => console.error(error));
    }
  }
});

// // Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

// axios.post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
