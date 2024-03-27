const { createApp } = Vue;
createApp({
    data(){
        return{
        message: 'ciao',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTEIfwB5-OJNfvKrC6KTay7_0tBd4WikFki2AeqFA9Q&s'
        }
    }
}).mount('#app')