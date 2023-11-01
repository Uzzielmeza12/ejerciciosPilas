/*1.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra.
Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco]*/ 

const colorOriginal = ["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"];
const cola1 = [];
const cola2 = [];


for (let i = 0; i < colorOriginal.length;  i++){
    if(i % 2 === 0){
        cola1.push(colorOriginal[i]);
    } else {
        cola2.push (colorOriginal[i]);
    }
}

console.log("Cola original:", colorOriginal);
console.log("Cola 1:", cola1);
console.log("Cola 2:", cola2);


/*2.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.*/
