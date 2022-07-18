// Implementacion de interfaces
// puede usar interfaces igual que en la programación tradicional orientada a objetos. También puede emplear interfaces para definir tipos de objetos

// Las interfaces no tienen ninguna representación en tiempo de ejecución; son únicamente una construcción en tiempo de compilación. 

// Puede usar interfaces para describir un objeto, una interfaz descrive.
// Una interfaz es solo un contrato y quien en lo cumple es una clase u objeto.

interface Cat {
    name: string
    age: number
    sleeping(): string
}

let hisCat: Cat = {
    name: 'Night',
    age: 4,
    sleeping(): string {
        return 'The cat is sleeping now.'
    }
}

// Un alias de tipo a diferencia de una interfaz esta no es extensible ni puede usar uniones/tuplas.
type CatType = {
    name: string
    age: number
    sleeping(): string
}

// Tipos de propidades

interface Cat1 {
    name: string // Obligatoria (por defecto)
    age?: number // Opcional
    readonly color: string // De lecura
}

/* Extensión de una interfaz */
// Permite copiar los mienbros de una en otra.

//*  Al extender las propiedades de mismo nombre tienen que tener mismo tipo
//* Al usar una interfaz extendia hay que usar todas las propiedades obligatorias (del padre y del hijo)


interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string
}

interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string;
}

// Del padre
let myIceCream00: IceCream = {
    flavor: 'Chocolat',
    scoops: 3
}

// Del hijo
let myIceCream: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true 
}

// del espiritu santo
console.log(myIceCream.flavor)

/* Creacion de tipos indexbles */

// La interfaz define que se indexara un arreglo mediante un indice numerico
// Y luego de ser indexado este devolvera un string.
interface CatNamesArray {
    [index: number]: string;
}

let catNames: CatNamesArray;
catNames = ['chocolate', 'vanilla', 'strawberry'];

let ourCat: string = catNames[0];
console.log('our cat name: ', ourCat);