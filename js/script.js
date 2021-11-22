//1. Creo un'array vuoto
//2. Pusho dentro l'array 10 email
//3. Stampo con un ciclo gli elementi dell'array in pagina
var app = new Vue({
    el: '#container',
    data: {
        emails: [],
    },
    mounted() {
        const self = this;
        for(let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(result){
                self.emails.push(result.data.response);
            });
        }  
    }

})
