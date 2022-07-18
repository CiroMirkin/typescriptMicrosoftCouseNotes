// Desarrollo de funciones con tipo

/* Parametros */

// Parametros obligatorios
function addNumbers1(x: number, y: number): number {
    return x + y;
}

// Parametros opcionales
function addNumbers2(x: number, y?: number): number {
    if (y === undefined) {
        return x;
    } else {
        return x + y;
    }
}

// Predeterminados
function addNumbers3(x: number, y = 25): number {
    return x + y;
}

// Parametro REST
const addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
    return 5
}

addAllNumbers(1, 2, 3, 4, 5, 6, 7)  // returns 28
addAllNumbers(2)

// Parámetros de objeto desconstruido
// Los parámetros de función son posicionales y deben pasarse en el orden en el que se definen en la función. Esto puede provocar que el código sea menos legible al llamar a una función con varios parámetros que son opcionales o el mismo tipo de datos.
// Para habilitar los parámetros con nombre, puede usar una técnica denominada "parámetros de objeto desconstruido". Esto permite usar una interfaz para definir parámetros con nombre, en lugar de posicionales, en las funciones.

// Usamos nombre no posiciones para identificar los parametros, el orden deja de importar


interface Message {
    text: string;
    sender: string;
}

function displayMessage({ text, sender }: Message) {
    return `Message from ${sender}: ${text}`
}

displayMessage({ sender: 'Christopher', text: 'hello, world' })


/* Definición de tipos de funciones */
// no es necesario que los nombres de los parámetros de la función coincidan con los del tipo de función

// alias de tipo
type calculator = (x: number, y: number) => number
// interfaz
interface Calculator {
    (x: number, y: number): number
}

let addNumberss: calculator = (x: number, y: number): number => x + y
let subtractNumbers: Calculator = (x: number, y: number): number => x - y

console.log(addNumberss(1, 2))
console.log(subtractNumbers(1, 2))

// Como retorno
let doCalculation = (operation: 'add' | 'subtract'): calculator => {
    if (operation === 'add') {
        return addNumbers
    } 
    return subtractNumbers
}

console.log(doCalculation('add')(1, 2))