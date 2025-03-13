// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// inizializzare la variabile contenente API di Boolean
const endPoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

for (let i = 0; i < 10; i++) {
    // fare la chiamata API
    axios.get(endPoint)
        .then((response) => {

            // salvare in una variabile l'email randomica
            const emailData = response.data.response;
            console.log(emailData);
            // prendere elemento html e salvarlo in una variabile 
            const listContainerElement = document.getElementById('list-container');

            listContainerElement.innerHTML += `<li class="list">${emailData}</li>`;
        })
        .catch(error => {
            console.log('Errore!');
        })

}
