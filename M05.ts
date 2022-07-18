// Declaración de clases en TypeScript y creación de una instancia de estas

class Car {
    // Properties
    make: string
    color: string
    doors: number

    // Constructor
    constructor(make: string, color: string, doors = 4) {
        this.make = make;
        this.color = color;
        this.doors = doors;
    }

    // Methods
    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }

    brake(): string {
        return `${this.worker()} is braking with the standard braking system.`
    }

    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
    }

    worker(): string {
        return this.make;
    }
}

let myCar1 = new Car('Cool Car Company', 'blue', 2)
let myCar2 = new Car('Cool Car Company', 'blue')

/* Modificadores de acceso */

// public - por defecto
// private - solo accesible desde dentro de la clase y solo accesible por el padre si es que hay herencia
// protected - Solo accesible desde de la clase (tanto padre como hijo si hay herencia)
// readonly - solo lectura, uso unico en el constructor

class Carr {
    // Properties
    public make: string
    private color: string
    private doors: number

    // Constructor
    constructor(make: string, color: string, doors = 4) {
        this.make = make;
        this.color = color;
        this.doors = doors;
    }
}

/* Definición de propiedades estáticas */
// Todas las instancias de una clase comparten las propiedades y los métodos estáticos

class Carrr {
    private static numberOfCars: number = 0
    private _make: string

    constructor(make: string) {
        this._make = make

        Carrr.numberOfCars++ // El valor se incrementa cada vez que se crea una instancia
    }

    public static getNumberOfCars(): number {
        // Permite obtener el numero de instancias
        return Carrr.numberOfCars;
    }
}

let myCar4 = new Carrr('Cool Car Company')
let myCar5 = new Carrr('Galaxy Motors')
console.log(Carrr.getNumberOfCars())

// Invalidación de un método
// Cuando una clase derivada tiene una definición diferente para una de las funciones miembro de la clase base, se dice que la función base está invalidada. La invalidación es lo que sucede cuando se crea una función en una subclase con el mismo nombre que la función de la clase base, pero con una funcionalidad diferente.

/* Declaración de una interfaz para asegurar la forma de la clase */
// se puede utilizar una interfaz para asegurar la forma de la instancia de una clase


// contiene los parametros de constructor y los metodos publicos.
interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}

class Carro implements Vehicle {
    // Properties
    make: string
    color: string
    doors: number

    // Constructor
    constructor(make: string, color: string, doors = 4) {
        this.make = make;
        this.color = color;
        this.doors = doors;
    }
    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }

    brake(): string {
        return `${this.worker()} is braking with the standard braking system.`
    }

    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
    }
    worker(): string {
        return this.make;
    }
}

/* Diseño */

// Ejemplo del uso de interfaces

interface Dog {
    id?: number;
    name: string;
    age: number;
    description: string;
}

// la estructura de datos es la misma en ambos lados, cliente y servidor.

// async loadDog(id: number): Dog {
//     return await (await fetch('demoUrl')).json() as Dog;
// }

// Cuando usar clases
// Las clases permiten definir los detalles de la implementación. 
// Las interfaces definen únicamente cómo se estructuran los datos.


// usamos la interfaz Dog definida anteriormente para asegurarnos de que tenemos las mismas propiedades y la misma estructura, al tiempo que agregamos el código necesario para realizar las operaciones.
class DogRecord implements Dog {
    id: number;
    name: string;
    age: number;
    description: string;


    constructor({ name, age, description, id = 0 }: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }

    // static load(id: number): DogRecord {
    //     // code to load dog from database
    //     return dog
    // }

    save() {
        // code to save dog to database
    }
}