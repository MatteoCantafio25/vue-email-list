// CONTROLLO SE HO COLLEGATO VUE TRAMITE CONSOLE
console.log("Vue ok", Vue);

// FACCIO IL DESTRUCTURING DEL METODO CREATEAPP DA VUE
const { createApp } = Vue;

// INDICO L'ENDPOINT TRAMITE UNA COSTANTE
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

// CREO L'APPLICAZIONE
const app = createApp({
    // DO IL NOME ALL'APPLICAZIONE
    name: "Vue Email list",
    // USO LA FUNZIONE (DATA) PER FARMI RESTITUIRE L'OGGETTO
    data: () => ({
        // CREO UN ARRAY VUOTO
        emails: [],

        // DECIDO IL NUMERO DI EMAIL CHE SERVIRANNO
        numberOfEmails: 10,
    }),


    // CREATED
    created() {
        // USO UN CICLO FOR PER FARE TOT VOLTE QUALCOSA, IN QUESTO CASO PUSHARE IN UN ARRAY
        for (let i = 0; i < this.numberOfEmails; i++) {
            // USO AXIOS PER RICAVARE QUELLO CHE VOGLIO DALLE API IN ENDPOINT
            axios.get(endpoint).then((res) => {
                // PUSHO NELL'ARRAY VUOTO IL RISULTATO DELLA CHIAMATA
                this.emails.push(res.data.response)
                // STAMPO IN CONSOLE
                console.log(this.emails)
            })
        }
    }
})

// MONTO L'APPLICAZIONE NELL'ELEMENTO SELEZIONATO TRA PARENTESI
app.mount("#root");