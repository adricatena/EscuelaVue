const app = new Vue({
    el: "#app",
    data: {
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
        urlCompleta() {
            return `${this.baseUrl}/${this.ancho * 3}/${this.alto * 3}`;
        }
    },
    methods: {
        guardarTarea() {
            this.tareas.push(this.nuevaTarea);
            this.nuevaTarea = '';
        }
    }
});
