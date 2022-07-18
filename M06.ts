// Definición de genéricos en TypeScript

// Los genéricos son plantillas de código que puede definir y reutilizar en todo el código base. Proporcionan una manera de indicar a las funciones, clases o interfaces qué tipo quiere usar al llamarlas. Esto es similar a los argumentos que se pasan a una función, salvo en que un genérico le permite indicar al componente qué tipo debe esperar en el momento en que se llama.

// Cree funciones genéricas cuando el código sea una función o una clase que:
/*
    Funcione con varios tipos de datos.
    Use ese tipo de datos en varios lugares.
*/

// Los genéricos pueden:
/* 
    Proporcionar más flexibilidad a la hora de trabajar con tipos.
    Permitir la reutilización de código.
    Reducir la necesidad de usar el tipo any.
*/


// Pero dado que se usa el tipo any, no hay nada que impida que el código inserte una cadena (string) en numberArray o un número (number) en stringArray.

function getArray(items: any[]): any[] {
    return new Array().concat(items);
}

let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);

numberArray.push(25);                       // OK
stringArray.push('Rabbits');                // OK
numberArray.push('This is not a number');   // OK
stringArray.push(30);                       // OK

console.log(numberArray);                   // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray);                   // ["Cats", "Dogs", "Birds", "Rabbits", 30]

// Ahora con genericos seari asi:

function getArray2<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

// Al generico se le asigna el nombre de T pero puede ser otro
// Los genéricos definen una o varias variables de tipo entre corchetes angulares (< >)

let numberArray2 = getArray2<number>([5, 10, 15, 20]);
numberArray2.push(25);                      // OK
// numberArray2.push('This is not a number');  // Generates a compile time type check error

let stringArray2 = getArray2<string>(['Cats', 'Dogs', 'Birds']);
stringArray2.push('Rabbits');               // OK
// stringArray2.push(30);                      // Generates a compile time type check error

// Uso de mas de un generico

function identity<T, U>(value: T, message: U): T {
    console.log(message);
    return value
}

let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!');
let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

returnNumber = returnNumber * 100;   // OK
// returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
// returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'


// Uso de restricciones genéricas para limitar los tipos

// Restriccion generica - se restrinjen los tipos

type ValidTypes = string | number;

function identitys<T extends ValidTypes, U>(value: T, message: U): T {
    /// ...
    return value
}

/* 
    También puede restringir un tipo a la propiedad de otro objeto. En este ejemplo se usa extends con el operador keyof, que toma un tipo de objeto y genera una unión literal de cadena o de valores numéricos de sus claves. Aquí se usa K extends keyof T para garantizar que el parámetro de clave es del tipo correcto para el tipo asignado a pet.
*/

function getPets<T, K extends keyof T>(pet: T, key: K) {
    return pet[key];
}

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" }

console.log(getPets(pets1, "fish"));  // Returns 6
// console.log(getPets(pets2, "3"));     // Error

// Uso de restricciones de tipos con genéricos

// Solo se puede usar una restricción de tipos typeof para comprobar los tipos primitivos string, number, bigint, function, boolean, symbol, object y sin definir. Para comprobar el tipo de una clase, use una restricción de tipos instanceof.

type ValidTypes2 = string | number

function identity2<T extends ValidTypes, U>(value: T, message: U) {
    let result: ValidTypes = ''
    let typeValue: string = typeof value

    if (typeof value === 'number') {
        result = value + value;
    } else if (typeof value === 'string') {
        result = value + value;
    }

    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

    return result
}

let numberValue = identity<number, string>(100, 'Hello')
let stringValue = identity<string, string>('100', 'Hello')

console.log(numberValue)       // Returns 200
console.log(stringValue)       // Returns 100100

/* Implementación de genéricos con interfaces y clases */

// Declaración de una interfaz genérica
// Puede usar genéricos en una declaración de interfaz reemplazando las anotaciones de tipo por variables de tipo.

{
    interface Identity<T, U> {
        value: T;
        message: U;
    }

    let returnNumber: Identity<number, string> = {
        value: 25,
        message: 'Hello!'
    }

    let returnString: Identity<string, number> = {
        value: 'Hello!',
        message: 25
    }
}

// Declaración de una interfaz genérica como un tipo de función

{
    interface ProcessIdentity<T, U> {
        (value: T, message: U): T
    }

    function processIdentity<T, U>(value: T, message: U): T {
        console.log(message)
        return value
    }

    let processor: ProcessIdentity<number, string> = processIdentity

    let returnNumber1 = processor(100, 'Hello!')   // OK
    // let returnString1 = processor('Hello!', 100);   // Type check error
}

// Definición de una clase genérica

{
    class processIdentity<T, U> {
        private _value: T;
        private _message: U;
        
        constructor(value: T, message: U) {
            this._value = value;
            this._message = message;
        }

        getIdentity() : T {
            console.log(this._message);
            return this._value
        }
    }

    let processor = new processIdentity<number, string>(100, 'Hello');
    processor.getIdentity();      // Displays 'Hello'
}

// Declaración de una interfaz genérica como un tipo de clase

{
    interface ProcessIdentity<T, U> {
        value: T
        message: U
        process(): T
    }

    class processIdentity<X, Y> implements ProcessIdentity<X, Y> {
        value: X
        message: Y

        constructor(val: X, msg: Y) {
            this.value = val;
            this.message = msg;
        }

        process(): X {
            console.log(this.message);
            return this.value
        }
    }

    let processor = new processIdentity<number, string>(100, 'Hello');
    processor.process();           // Displays 'Hello'
    // processor.value = '100';       // Type check error
}

// Implementación de genéricos con tipos y clases personalizados.

// El uso de genericos  es mas eficas con tipos y clases personalizados.

// La función accelerate acepta una instancia genérica de Car y, después, la devuelve. Al indicar a la función accelerate que T debe extender Car, TypeScript sabe a qué funciones y propiedades se puede llamar dentro de la función. El genérico también devuelve el tipo específico del objeto "Car" (ElectricCar o Truck) que se pasa a la función, en lugar de un objeto Car no específico.

{
    class Car {
        make: string = 'Generic Car'
        doors: number = 4;
    }

    class ElectricCar extends Car {
        make = 'Electric Car';
        doors = 4
    }

    class Truck extends Car {
        make = 'Truck';
        doors = 2
    }

    // Se acepta un generico que extienda da Car, el mismo se usa como parametro y tambien como retorno.


    function accelerate<T extends Car> (car: T): T {
        console.log(`All ${car.doors} doors are closed.`)
        console.log(`The ${car.make} is now accelerating!`)
        return car
    }
    
    let myElectricCar = new ElectricCar
    accelerate<ElectricCar>(myElectricCar)

    let myTruck = new Truck
    accelerate<Truck>(myTruck)
}

// Uso de restricciones genéricas con tipos y clases personalizados

// Anteriormente en el módulo, ha aprendido a usar restricciones genéricas para limitar los tipos. Las restricciones genéricas no solo se pueden aplicar a tipos nativos, sino también a clases.

// Para ello, puede definir una interfaz y usar la palabra clave extend con la variable de tipo para extenderla. En el ejemplo anterior se restringe el tipo T adjuntándole una restricción: T debe extender Car.

