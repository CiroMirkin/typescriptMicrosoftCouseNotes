// Acceso a bibliotecas externas desde TypeScript


// importación de componentes de módulo

// import { <component name> } from '<module name>'
// import { <component name> as <new name> } from '<module name>'
// import * as <variable name> from '<module name>'

// Agregar extencion .JS cuando se usa en navegadores

// import { foo } from './dep.js';
// var s = "hello world!";
// console.log(s, foo);

// mas info: https://github.com/microsoft/TypeScript/issues/40878

// Compilacion de modulos

/* 
    tsc --module commonjs main.ts
*/

// Ejecución de módulos desde una página web

/* 
    tsc --module es6 main.ts

    <script type="module" src=".\main.js"></script>
*/

/* Acceso a bibliotecas de tipos externas */
// acceso a ellas mediante la instrucción import

// Bibliotecas de tipos

// La escritura estática es un motivo principal para usar TypeScript. Las bibliotecas de tipos externas están disponibles para casi todas las bibliotecas comunes y proporcionan esta información para las bibliotecas que no la contienen (como, por ejemplo, las escritas en JavaScript).

// npm install --save-dev @types/<library-name>

// En este ejercicio, se instalará e implementará una biblioteca de tipos denominada dotenv. Esta biblioteca de uso frecuente carga las variables de entorno de un archivo .env en process.env, lo que permite almacenar los detalles de configuración separados del código y acceder a ellos. Puede usar dotenv para administrar elementos, como cadenas de conexión y otros valores, que pueden necesitar cambiar en función de dónde se ejecute el código.