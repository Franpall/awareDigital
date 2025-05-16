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
    }
];

let selectedGift = ref(null);
let box = ref(null);
let step = ref(1)
let progress = ref(0); 

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
    progress.value += 20;
}
</script>

<template>
    <section>
        <article v-if="step == 1">
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
        <article v-if="step == 2">
            <div class="gratula_card">
                <img :src="premios[selectedGift].imagen" alt="gift" class="gift_image">
                <p>Felicidades por tu {{ premios[selectedGift].nombre }} 🎉🎈🥂</p>
            </div>
            <h2>Paso 1</h2>
            <p>Comparte el enlace con tus conocidos en WhatsApp</p>
            <div class="share_card">
                <div class="progress_bar">
                    <div class="progress" :style="{ width: progress + '%' }"></div>
                </div>
                <p>https://franpaldev.netlify.app/</p>
                <a @click="share()">Compartir</a>
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
}

.claim_button{
    position: absolute;
    top: 50%;
}

.gratula_card{
    width: 100%;
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

.share_card{
    border-radius: 20px;
    background-color: black;
    padding: 30px 20px;
    width: 90%;
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
</style>
