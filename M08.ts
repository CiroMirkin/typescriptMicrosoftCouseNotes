// Organización del código mediante los espacios de nombres de TypeScript

// Los espacios de nombres (denominados "módulos internos" en versiones anteriores de TypeScript) son una forma específica de TypeScript de organizar y categorizar el código, lo que le permite agrupar el código relacionado. Los espacios de nombres permiten agrupar variables, funciones, interfaces o clases relacionadas con las reglas de negocio en un espacio de nombres y la seguridad en otro.

// El código dentro de un espacio de nombres se extrae del ámbito global y entra en el ámbito del espacio de nombres. Esta colocación puede ayudarle a evitar conflictos de nomenclatura entre los componentes del espacio de nombres global y puede ser beneficioso al trabajar con equipos de desarrollo distribuidos que pueden utilizar nombres de componentes similares.

// Los espacios de nombres se pueden usar para:
/* 
    * Reducir la cantidad de código en el ámbito global, limitando la "contaminación del ámbito global".
    * Proporcionar un contexto para los nombres, lo que ayuda a reducir los conflictos de nomenclatura.
    * Mejorar la reutilización.
*/

/* Organizar el código mediante espacios de nombres de un solo archivo */

// Defina un nuevo espacio de nombres con la palabra clave namespace seguida del nombre del espacio de nombres. 
// Puede definir tantos espacios de nombres como sea necesario en un solo archivo TypeScript.

// Si desea que una función o una clase estén disponibles para el código fuera del espacio de nombres, agregue la palabra clave export antes de su nombre. Si se omite la palabra clave export, el componente solo está disponible dentro del espacio de nombres.

namespace Greetings {
    export function returnGreeting(greeting: string) {
        console.log(`The message from namespace Greetings is ${greeting}.`);
    }
}

namespace GreetingsWithLength {
    export function returnGreeting(greeting: string) {
        let greetingLength = getLength(greeting);

        console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
    }

    function getLength(message: string): number {
        return message.length
    }
}

// returnGreeting('Hello');                     // Returns error
Greetings.returnGreeting('Bonjour');         // OK
GreetingsWithLength.returnGreeting('Hola');  // OK


// Organización del código mediante espacios de nombres anidados

namespace AllGreetings {
    export namespace Greetings {
        export function returnGreeting(greeting: string) {
            console.log(`The message from namespace Greetings is ${greeting}.`);
        }
    }

    export namespace GreetingsWithLength {
        export function returnGreeting(greeting: string) {
            let greetingLength = getLength(greeting);

            console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
        }

        function getLength(message: string): number {
            return message.length
        }
    }
}

AllGreetings.Greetings.returnGreeting('Bonjour');        // OK
AllGreetings.GreetingsWithLength.returnGreeting('Hola');  // OK

// Definicion de un alias para un espacio de nombres

import greet = AllGreetings.Greetings
greet.returnGreeting('Bonjour')


// Compilación de espacios de nombres de un solo archivo

// Los espacios de nombres de un solo archivo se compilan de la misma manera que cualquier otro archivo TypeScript. Dado que los espacios de nombres son una construcción solo de TypeScript, se quitan del código de JavaScript resultante y se convierten en variables que se anidan según sea necesario para formar objetos similares a los espacios de nombres.

/* Organización del código mediante espacios de nombres de varios archivos */

// el comando tsc --outFile main.js main.ts indica al compilador que genere un único archivo de JavaScript denominado main.js.


/* Consideraciones de diseño */

/* 
Aunque los espacios de nombres son fáciles de usar para implementaciones sencillas y no dependen de un cargador de módulos, los módulos ofrecen algunas ventajas adicionales que los espacios de nombres no proporcionan. Módulos:

    Declare sus dependencias.
    Proporcionan una mejor reutilización del código.
    Ofrecen un aislamiento fuerte.
    Ocultan las instrucciones internas de las definiciones de módulo y muestran solo los métodos y parámetros asociados al componente declarado.
    Proporcionan una mejor compatibilidad con las herramientas para la unión.
    Se recomiendan sobre los espacios de nombres para las aplicaciones Node.js porque los módulos son los predeterminados.
    Pueden resolver los problemas de flujo de JavaScript de nivel superior porque se crea una instancia de una referencia a un método o una clase externos solo en la invocación del método.
*/

// No es aconsejable combinar espacios de nombres y módulos en el mismo proyecto.

