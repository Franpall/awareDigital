<script setup>
import { ref } from 'vue';

let premios = [
    {
        nombre: "Honor Magic V3",
        descripcion: "Telefono Honor Magic V3", 
        imagen: "https://www.honor.com/content/dam/honor/common/product-list/product-series/honor-magic-v3/honor-magic-v3-id-green.png"
    },
    {
        nombre: "VISA 200$ Gift Card",
        descripcion: "200 dolares en tarjeta de regalo VISA",
        imagen: "https://i5.walmartimages.com/asr/a0aeb484-b76b-4bf0-ac40-59bc095278ee.0ae81abcd0985217b8414982a40043d2.png"
    },
    {
        nombre: "TV Samsung 43''",
        descripcion: "Televisor Samsung 43 pulgadas",
        imagen: "https://images.samsung.com/is/image/samsung/p6pim/in/ua43t5450akxxl/gallery/in-fhd-t5310-428860-ua43t5450akxxl-532972981?$650_519_PNG$"
    },
    {
        nombre: "Iphone 15",
        descripcion: "Apple Iphone 15",
        imagen: "https://www.ais.th/content/dam/ais/consumer/store/devices/apple/iphone/iphone-15-series/iphone-15-pro/iphone-15-pro-natural-titanium.png"
    }
];

let selectedGift = ref(null);
let box = ref(null);
let step = ref(1)
let progress = ref(0); 
const pathValue = window.location.pathname.split('/').filter(Boolean).pop();

function selectGift(index) {
    if (selectedGift.value === null) {
        selectedGift.value = Math.floor(Math.random() * premios.length);
        box.value = index;
    }
}

function nextStep(){
    step.value = step.value + 1;
}

function share(){
    if (progress.value >= 80) {
        nextStep();
        return;
    }
    progress.value += 20;
}
</script>

<template>
    <section>
        <article v-if="step == 1 && !pathValue">
            <h2>Participa Gratis por Múltiples Premios</h2>
            <p>Selecciona 1 de las cajas sorpresa</p>
            <div class="boxes">
                <button 
                    v-for="(premio, index) in premios" 
                    :key="index" 
                    class="box"
                    @click="selectGift(index)">
                    <div v-if="selectedGift !== null && box === index" class="button_content">
                        <img :src="premios[selectedGift].imagen" alt="gift" class="gift_image">
                        <p>{{ premios[selectedGift].nombre }}</p>
                        <button class="claim_button" @click="nextStep()">
                            Reclamar Premio
                        </button>
                    </div>
                </button>
            </div>
        </article>
        <article v-if="step == 2 && !pathValue">
            <div class="gratula_card">
                <img :src="premios[selectedGift].imagen" alt="gift" class="gift_image">
                <p>Felicidades por tu {{ premios[selectedGift].nombre }} 🎉🎈🥂</p>
            </div>
            <h2>Paso 1</h2>
            <p>Comparte el enlace con tus conocidos en WhatsApp para que participen</p>
            <div class="share_card">
                <div class="progress_bar">
                    <div class="progress" :style="{ width: progress + '%' }"></div>
                </div>
                <p>https://awaredigital.netlify.app/</p>
                <a @click="share()" href="https://api.whatsapp.com/send?text=Participa%20por%20premios%20gratis%20https://awaredigital.netlify.app" target="_blank">Compartir</a>
            </div>
        </article>
        <article v-if="step == 3 && !pathValue">
            <div class="gratula_card">
                <img :src="premios[selectedGift].imagen" alt="gift" class="gift_image">
                <p>Felicidades por tu {{ premios[selectedGift].nombre }} 🎉🎈🥂</p>
            </div>
            <h2>Paso 2</h2>
            <p>Comprueba que no eres un robot, entra al enlace, espera 10 segundos y haz click en "continuar"</p>
            <div class="share_card">
                <a @click="nextStep()" href="https://ouo.io/4ujm4a" target="_blank">🧑 No Soy Un Robot</a>
            </div>
        </article>
        <article v-if="step == 4 && !pathValue">
            <div class="gratula_card">
                <img :src="premios[selectedGift].imagen" alt="gift" class="gift_image">
                <p>Felicidades por tu {{ premios[selectedGift].nombre }} 🎉🎈🥂</p>
            </div>
            <h2>Inténtalo de nuevo</h2>
            <p>para reclamar tu premio debes esperar los segundos que se indican y luego hacer click en "continuar"</p>
            <div class="share_card">
                <a href="https://ouo.io/4ujm4a" target="_blank">🧑 No Soy Un Robot</a>
            </div>
        </article>
        <article v-if="pathValue">
            <div class="warning_card">
                <p>Así no funciona la vida, abre los ojos! 👀👀</p>
            </div>
            <h2>Más cuidado la Próxima!!</h2>
            <p>No te creas todo lo que ves en internet, nadie te regala nada gratis, nunca ingreses datos personales en ningún anuncio como este!</p>
            <p>No te dejes engañar, tuviste suerte de que esto fue un programa de concientización social y no una estafa o <a href="https://es.wikipedia.org/wiki/Phishing">Phishing</a></p>
            <div class="share_card">
                <a href="https://api.whatsapp.com/send?text=Participa%20por%20premios%20gratis%20https://awaredigital.netlify.app/1" target="_blank">Compartir la Reflexión</a>
            </div>
        </article>
    </section>
</template>

<style scoped>
section{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 70px);
  font-family: 'Jost', 'serif';
}

h2{
    font-size: 1.5em;
}

article{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
    transition: all 0.9s ease-in-out;
    animation: fade-in-right-normal 1s ease 0s 1 normal none; 
}

/* Estilos de las cajas de premios */

.boxes{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.box{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 220px;
    margin: 10px;
    background-color: #0e4da0;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.button_content{
    position: relative;
}

.gift_image{
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
    animation: scale-up-center-normal 2s ease 0s 1 normal none; 
}

.claim_button{
    position: absolute;
    top: 50%;
    animation: fade-in-right-normal 1s ease 0s 1 normal none; 
}

.gratula_card{
    width: 92%;
    max-width: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    border-radius: 15px;
    background-color: black;
}

.gratula_card img{
    height: 80px;
    width: 80px;
}

.warning_card{
    width: 92%;
    max-width: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    border-radius: 15px;
    background-color: #c04f03;
    font-size: 1.2em;
    font-weight: bold;
}

.share_card{
    border-radius: 20px;
    background-color: black;
    padding: 30px 20px;
    box-sizing: border-box;
    width: 92%;
    max-width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
}

.share_card p{
    margin-top: 0;
}

.share_card a{
    background-color: #3b9b6e;
    padding: 10px 20px;
    font-size: 1.5em;
    color: white;
    text-decoration: none;
    border-radius: 13px;
    cursor: pointer;
}
.share_card a:hover {
  border-color: #009425;
  background-color: #23a75e;
}

.progress_bar{
    width: 90%;
    max-width: 400px;
    height: 20px;
    background-color: #e0e0e0;
    border-radius: 10px;
}

.progress{
    height: 100%;
    background-color: #3b9b6e;
    border-radius: 10px;
    transition: width 1s ease-in-out;
}

@media (max-width: 650px){
    .boxes{
        flex-direction: column;
    }
}

/* ----------------------------------------------
* Generated by Gradienty on 2025-05-27 01:00
* animation scale-up-center-normal
* ----------------------------------------
*/
@keyframes scale-up-center-normal {0% { transform: scale(0); opacity: 0;} 20% { transform: scale(0); display: none; opacity: 0.7;} 80% { transform: scale(0.5); opacity: 0.8; } 100% { transform: scale(1); opacity: 1;} }

/* ----------------------------------------------
* Generated by Gradienty on 2025-05-26 23:17
* animation fade-in-right-normal
* ----------------------------------------
*/
@keyframes fade-in-right-normal {0% { transform: translateX(50px); opacity: 0; } 100% { transform: translateX(0); opacity: 1;} }
</style>
