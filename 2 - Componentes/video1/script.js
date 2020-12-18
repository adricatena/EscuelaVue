Vue.component('gato', {
    template: `<img :src="urlCompleta"></img>`,
    data(){
        return{
            ancho: Math.floor(Math.random()*600) + 100,
            alto: Math.floor(Math.random()*600) + 100,
        }
    },
    computed: {
        urlCompleta(){
            return `https://placekitten.com/${this.ancho}/${this.alto}`;
        },
    },
});

const app = new Vue({
    el: '#app',
});