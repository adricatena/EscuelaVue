const app = new Vue({
    el: "#app",
    data: {
        tiempo: 0,
        busqueda: '',
        usuario: {
            usearname: 'adrianocatena',
            roles: 'admin',
        },
        tareas: [
            {
                nombre: 'Aprender JS moderno',
                tiempo: 3,
            },
            {
                nombre: 'Aprender Vue.js',
                tiempo: 7,
            },
            {
                nombre: 'Reparar auto',
                tiempo: 22,
            },
        ]
    },
    computed: {
        filtroTareas() {
            return this.tareas.filter(tarea => {
                return tarea.tiempo <= this.tiempo && tarea.nombre.includes(this.busqueda);
            });
        }
    },
    methods: {
        guardarTarea() {
            this.tareas.push(this.nuevaTarea);
            this.nuevaTarea = '';
        }
    }
});
