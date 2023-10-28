/*1.- Hacer una función que reciba como parámetros una pila, y un número. La función debe retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’].*/

// function Funcion(pila, numero){

//     return pila.slice(0, numero);
// }

// const pila = ['Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandia', 'Melon'];

// const resultado = Funcion(pila, 4);

// console.log(resultado);


/*2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7]*/ 

// function reemplazar(pila, nuevo, viejo) {
//     let encontrado = false;
//     let resultado = [];
  
//     while (pila.length > 0) {
//       let elemento = pila.pop();
  
//       if (elemento === viejo && !encontrado) {
//         resultado.push(nuevo);
//         encontrado = true;
//       } else {
//         resultado.push(elemento);
//       }
//     }
  
//     return resultado.reverse();
//   }
  
//   const pila = [3, 2, 3, 4, 6, 8, 1, 2, 5, 5];
//   const nuevo = 7;
//   const viejo = 2;
  
//   const resultado = reemplazar(pila, nuevo, viejo);
//   console.log(resultado);


  /*4.- Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de identificación. Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.*/


  class Almacen {
    constructor(capacidad) {
      this.capacidad = capacidad;
      this.pilaPrincipal = [];
      this.pilaAuxiliar = [];
    }
  
    apilar(contenedor) {
      if (this.pilaPrincipal.length < this.capacidad) {
        this.pilaPrincipal.push(contenedor);
        console.log(`Contenedor ${contenedor} apilado correctamente.`);
      } else {
        console.log('El almacén está lleno, no se puede apilar más contenedores.');
      }
    }
  
    retirar(contenedor) {
      let encontrados = 0;
      let contenedorActual;
  
      while (this.pilaPrincipal.length > 0) {
        contenedorActual = this.pilaPrincipal.pop();
  
        if (contenedorActual === contenedor) {
          encontrados++;
          break;
        } else {
          this.pilaAuxiliar.push(contenedorActual);
          encontrados++;
        }
      }
  
      if (encontrados > 0) {
        console.log(`Se retiró el contenedor ${contenedor} correctamente.`);
  
        while (this.pilaAuxiliar.length > 0) {
          contenedorActual = this.pilaAuxiliar.pop();
          this.pilaPrincipal.push(contenedorActual);
        }
      } else {
        console.log(`El contenedor ${contenedor} no se encontró en el almacén.`);
      }
    }
  }
  
  // Ejemplo de uso
  const miAlmacen = new Almacen(5);
  
  miAlmacen.apilar(1);
  miAlmacen.apilar(2);
  miAlmacen.apilar(3);
  miAlmacen.apilar(4);
  miAlmacen.apilar(5);
  
  miAlmacen.retirar(3);
  miAlmacen.retirar(6);
 