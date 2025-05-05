
function onClick(event){
    const notifica = event.currentTarget; //l'svg che vado a cliccare
    const div_aperto = document.querySelector('#hidden_notification'); //seleziono il mio div che deve apparire al click
    document.body.classList.add('noScroll'); //classe richiamata direttamente dal body per non scrollare (ez);
    // vado ad alternare la visibilità del mio div
    /*if(div_aperto.style.display === 'none' || div_aperto.style.display === ''){
        div_aperto.style.display = 'flex'; // mostriamo il div
    } else{
        div_aperto.style.display = 'none'; // rimane nascosto
    }*/ //funzionava ma senza attributi classList

    div_aperto.classList.remove('hidden'); //più semplificato; con questo rimuovo la condizone hidden al mio div che deve apparire per poi ricomparire con la funzione chiusura!
}

const notifica = document.querySelector('a svg#notification'); //selezioniamo l'svg dentro la variabile notifica
notifica.addEventListener('click' , onClick); //gli diamo l'evento click richiamando la funzione

// per chiudere il mio div con l'svg X:
function chiusura(event){
    const closeButton = event.currentTarget;
    const div_aperto = document.querySelector('#hidden_notification');

    //div_aperto.style.display = 'none'; // mi interessa solo chiudere il div
    div_aperto.classList.add('hidden'); // nasconde il div tornando nella condizione iniziale!
    document.body.classList.remove('noScroll');
}

const closeButton = document.querySelector('#close_notification');
closeButton.addEventListener('click' , chiusura);

// variabili globali che rappresentato le due foto che si devono alternare;
const first = 'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltcf4837ed50307468/67bfde986bdc801877691c40/EN-AJ1_High_Union_LA_Chicago_ShadowPrimary_Desktop-Small.jpg?auto=webp&format=pjpg&width=1246&dpr=1&quality=80 1x, https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltcf4837ed50307468/67bfde986bdc801877691c40/EN-AJ1_High_Union_LA_Chicago_ShadowPrimary_Desktop-Small.jpg?auto=webp&format=pjpg&width=1246&dpr=2&quality=75 2x, https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltcf4837ed50307468/67bfde986bdc801877691c40/EN-AJ1_High_Union_LA_Chicago_ShadowPrimary_Desktop-Small.jpg?auto=webp&format=pjpg&width=1246&dpr=3&quality=50 3x';
const second = 'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt19d2b6effefccff4/67f42bd806f6daf0312a3b17/Nike_ReactX_Rejuven8_-_EN_-_Primary_Desktop-Small.jpg?auto=webp&format=pjpg&width=1246&dpr=1&quality=80 1x, https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt19d2b6effefccff4/67f42bd806f6daf0312a3b17/Nike_ReactX_Rejuven8_-_EN_-_Primary_Desktop-Small.jpg?auto=webp&format=pjpg&width=1246&dpr=2&quality=75 2x, https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt19d2b6effefccff4/67f42bd806f6daf0312a3b17/Nike_ReactX_Rejuven8_-_EN_-_Primary_Desktop-Small.jpg?auto=webp&format=pjpg&width=1246&dpr=3&quality=50 3x';
function changeImage(){

    const image = document.querySelector('#start #contenitore_start a img');

    if(image.srcset === first){ // se la mia immagine è uguale alla prima, al click del bottone cambia alla seconda
        image.srcset = second;
    }else{ // se no l'ooposto, ritorna alla prima
        image.srcset = first;
    }
}

// stessa funzione per entrambi i bottoni, risultato: continuano ad alternarsi le foto sia a sinistra che a destra!
const bottone = document.querySelector('#start #right');
const bottone2 = document.querySelector('#start #left');
bottone.addEventListener('click' , changeImage);
bottone2.addEventListener('click' , changeImage);

function dropDown (event){
    const parola = event.currentTarget;
    const menu_aperto = document.querySelector('#menu_comparsa');

    menu_aperto.classList.remove('hidden');
}

const parola = document.querySelector('[data-index="1"]');
parola.addEventListener('mouseover' , dropDown);
const menu_aperto = document.querySelector('#menu_comparsa');
menu_aperto.addEventListener('mouseover' , dropDown);


function dropUp (event){
    const parola = event.currentTarget;
    const menu_aperto = document.querySelector('#menu_comparsa');

    menu_aperto.classList.add('hidden');
}


parola.addEventListener('mouseleave' , dropUp);
menu_aperto.addEventListener('mouseleave' , dropUp);


function change(event){
    const intestazione = event.currentTarget;
    
    const new_image = document.createElement('img');
    new_image.srcset = 'https://images.stockx.com/images/Air-Jordan-12-Retro-Flu-Game-2025-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1740684335 1x,https://images.stockx.com/images/Air-Jordan-12-Retro-Flu-Game-2025-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1740684335 2x,https://images.stockx.com/images/Air-Jordan-12-Retro-Flu-Game-2025-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=41&dpr=3&trim=color&updated_at=1740684335 3x';
    //const new_p = document.createElement('p');
    //new_p.textContent = 'Jordan 12 Retro Flu Game (2025)';

    const container = document.querySelector('[data-immagine="1"]');
    container.innerHTML = ''; //rimuovo tutti i figli del container in modo da sostituirli con quelli nuovi
    container.appendChild(new_image);
    const container2 = document.querySelector('[data-testo="1"]');
    container2.innerHTML = '';
    //container2.appendChild(new_p);
    container2.textContent = 'Jordan 12 Retro Flu Game (2025)'; //utilizzando questa sintassi me lo modifica direttamente invece di definire una nuova variabile e inserirle nell'html
}

const intestazione = document.querySelector('#section #contenitore #intestazione');
intestazione.addEventListener('click' , change);


function openChat(event){
    const button = event.currentTarget;

    const nuovo_div = document.querySelector('#hidden_chat');
    nuovo_div.classList.remove('hidden');
}

const button = document.querySelector('#chat');
button.addEventListener('click' , openChat);

function closeChat(event){
    const close = event.currentTarget;

    const nuovo_div = document.querySelector('#hidden_chat');
    nuovo_div.classList.add('hidden');
}

const close = document.querySelector('#hidden_chat header svg');
close.addEventListener('click' , closeChat);


function startChat(event){
    const chat_now = event.currentTarget;
    chat_now.classList.add('hidden');

    const chat = document.querySelector('#text_container');
    chat.classList.remove('hidden');
}

const chat_now = document.querySelector('#hidden_chat #contenitore_chat button');
chat_now.addEventListener('click', startChat);

// API YOUTUBE

// variabili globali
const key = 'secret' // chiave per API
const playlistID = 'UU8i2VloWFKMugidh9rCUAoA'; // id del canale
const endPoint = 'https://www.googleapis.com/youtube/v3/playlistItems'; // link dell'API
const API_URL = endPoint + '?key=' + key + '&playlistId=' + playlistID + '&part=snippet&maxResults=1'; // bisogna separare le variabili con & e l'endpoint col ?
// snippet ritorna sola la parte snippet del json mentre maxResults solo un valore impostato

function onResponse(response){
    return response.json(); // gli chiamo il parametro json
}

function onJsonYT(json){
    const videoId = json.items[0].snippet.resourceId.videoId;
    // .items[0] = primo elemento da cui prendo lo snippet, poi il resourceId per prendere infine il videoID
    const videoURL = 'https://www.youtube.com/embed/' + videoId; //aggiungo al link il link del video che mi interessa
    document.querySelector('#video').src = videoURL;
}

// fetch per API youtube
fetch(API_URL).then(onResponse).then(onJsonYT); // mettere sempre dopo le funzioni


// API VERIFICA EMAIL

// variabili globali
const key_verify = 'secret';
const endPoint_verify = 'https://verifyright.co/verify/'

function controllo(status){
    const messaggio = document.createElement('h1');

    if(status === true){
        messaggio.innerText = 'Email valida!'
        messaggio.style.color = 'white';
    } else {
        messaggio.innerText = 'Errore!'
        messaggio.style.color = 'white';
    }

    const container = document.querySelector('#newsLetter');
    container.innerHTML = '';
    container.appendChild(messaggio); // il mio onJson
}

function onJsonEmail(json){
    controllo(json.status);
}

function invioEmail(event){
    event.preventDefault(); //evito che si ricarica la pagina

    const input = document.querySelector('#newsLetter form #contenitore_input input');
    const email = input.value; // quello che scriviamo dentro la barra dell'input viene messo in questa variabile
    console.log(email); //debug

    const verify_API_URL = endPoint_verify + encodeURIComponent(email) + '?token=' + key_verify;
    //fetch(verify_API_URL).then(onResponse).then(onJsonEmail);
    controllo(true);
}

const emailSubmit = document.querySelector('#newsLetter form #iscrizione');
emailSubmit.addEventListener('click' , invioEmail);