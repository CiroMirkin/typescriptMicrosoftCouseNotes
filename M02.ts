// Inferencia de tipo en TypeScript

let x: number;   //* Declaracion explicita de x como tipo numerico
let y = 1;       //* Declaracion implicita de y como tipo numerico
let z;           //* Declaracion de z sin inicializacion de ningun tipo (any)


/* Primitivos */

let flag: boolean = false
let lastName: string = "Torrance"
let n: number = 15
let big: bigint;

/* Enumeraciones (enums) */
// Forma sencilla de trabajar con conjuntos de constantes relacionadas.

// Permiten definir un conjunto de constantes con nombre

// Por defecto los valores de un enum empiezan desde el 0.

enum ColorCat {
    white = 1,
    Grey,
    Orange
}

let userCat: ColorCat = ColorCat.Orange

console.log(userCat) // Muestra un indice
console.log(ColorCat[userCat]) // Muestra el valor del indice


/* Tipos any y unknown */

// Hay ocasiones en las que necesitará trabajar con valores que son desconocidos en el momento de desarrollar el código o que son de un rango posible reducido de tipos de valor.

let randomValue: any = 10 // any permite usar cualquier tipo de dato sin restricciones.
randomValue = 'Mateo'
randomValue = true

// El problema que podria precentar any es en tiempo de ejecucion, errores como este:
console.log(randomValue.name) // Undefined

// cualquier valor se puede asignar al tipo unknown. Sin embargo, no se puede acceder a las propiedades de un tipo unknown; tampoco se pueden llamar ni construir.

let randomValue2: unknown = 10;
randomValue2 = true;
randomValue2 = 'Mateo';

// Con el tipo unknown esta parte de codigo da error al compilarce.
// console.log(randomValue2.name)

// No se puede interactuar con una variable unknown mas alla de su asignacion.
// console.log(randomValue.toUpperCase())  // Por eso esto da error despues de compilar un archivo.

/* Aserción de tipos */

// Podria definirce como "conversion de tipos"

// Asi usando "as"
// (randomValue2 as string).toUpperCase();
// O con "corchetes angulares"
// (<string>randomValue).toUpperCase();

let newRandomValue = randomValue2 as string;
console.log(newRandomValue.toUpperCase())

/* Tipos de unión e intersección en TypeScript */

// Un tipo de unión describe un valor que puede ser uno de entre varios tipos
let id: number | string // Aun existe restriccion

function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }

    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }

    throw new Error('Parameters must be numbers or strings');
}

console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
// console.log(add('one', 2));      //* Returns error

// Un tipo de intersección combina dos o más tipos para crear uno que tiene todas las propiedades de los tipos existentes

interface Employee {
    employeeID: number;
    age: number;
}

interface Manager {
    stockPlan: boolean;
}

type ManagementEmployee = Employee & Manager  // En la interseccion se combinan ambas interfaces (sus propiedades).

let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
}

// Una restriccion literal restrije los valores de una variable.
type CatNames = 'Pelu' | 'Night' | 'Atun'

let myCat: CatNames = 'Pelu'
myCat = 'Atun'
// myCat = 'tita' // No se permite la asignacion

/* Tipos de coleccion */

// Arreglos o matrices
// let list: number[] = [1, 2, 3]
let list: Array<number> = [1, 2, 3]

// Tuplas
let person1: [string, number] = ['Marcia', 35]
// let person1: [string, number] = [35, 'Marcia'] // Error, el orden no coincide

/*  */