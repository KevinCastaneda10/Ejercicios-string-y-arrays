// Algunos métodos de string

    // Método slice()

        // Este método permite extraer una sección de una cadena generando una nueva cadena sin necesidad de modificar la cadena original. Este método recibe dos argumentos, inicialmente desde donde se quiere extraer la cadena y el segundo que sería en el cual se quiere finalizar la cadena, este últomo es opcional.

        //  Ejemplo:

            /*let cadena = "Esto es un ejemplo de extracción de una sección de una cadena.";

            let subcadena = cadena.slice(40, 62)

            console.log(subcadena)  // extracción de una sección*/

            
    // Médoto substring()

        // Al igual que slice, este método funciona para extraer una sección de una cadena generando una cadena nueva. A diferencia de slice, este método no acepta indices negativos.

        //  Ejemplo:

            /*let cadena = "Ejemplo de utilización de el método substring"

            let subcadena = cadena.substring(7, 0)

            console.log (subcadena) // Ejemplo*/


    // Método substr()

        // si bien es pareido a slice y substring, este método va a extraer una sección de una cadena nueva, generando una nueva, a diferencia que la va a extraer desde índice 0 hasta alguna longitod de la cadena, extrayendo cierta cantidad de caracteres de un texto.

        // Ejemplo:

            /*let cadena = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

            let subcadena = cadena.substr(0, 11)

            console.log(subcadena) // Lorem Ipsum*/

    

    // Método toUpperCase()

        // Este método va a devolver el valor de la cadena convertida en mayusculas, este no afecta el valor de la cadena en sí mismo.

        //  Ejemplo:

            /*let texto = "estoy programando"

            let textoMayusculas = texto.toUpperCase()
        
            console.log(textoMayusculas) // ESTOY PROGRAMANDO*/


    // Método toLowerCase()

        // Este mpetodo, a diferencia de toUpperCase(), devuelve a la cadena convertida en minúsculas. No afecta el valor en la cadena llamada.

        //  Ejemplo:

            /*let texto = "ESTOY PROGRAMANDO"

            let textoMinusculas = texto.toLowerCase();

            console.log(textoMinusculas); // estoy programando*/


    // Método concat()

        // Este método se utuliza para concatenar dos o más cadenas y obtener una nueva cadena que tiene toda la concatenación proporsionadas como argumentos.

        //  Ejemplo:

            /*let saludo = "Hola, "
            let sujeto = "amigos. "
            let mensaje = "Estoy programando."

            let todo = saludo.concat(sujeto, mensaje)

            console.log(todo); // Hola, amigos. Estoy programando.*/


    // Método trim()

        // Este método elimina los espacios en blanco al inicio y al final del string.

        //  Ejemplo:

            /*let texto = "  contenido  "

            let nuevoTexto = texto.trim();

            console.log(nuevoTexto); // contenido*/


    // Método repeat()

        //  Este método crea y devuelve una nueva cadena que consiste en la concatenación de la cadena original repetida en un número de veces.

        //  Ejemplo: 

            /*let risa = "ja"

            let siRisa = risa.repeat(5); 

            console.log(siRisa);// jajajaja*/


    // Método replace()

        // Este método se utiliza para buscar una subcadena dentro de una cadena y reemplazarlo por otra subcadena. Es muy útil cuando se tiene que realizar algunas modificaciones a alguna subcadena.

        // Ejemplo:

            /*let nombre = "Kevin Adolfo"

            let nombreCorrecto = nombre.replace("Adolfo", "Castañeda")

            console.log(nombreCorrecto); // Kevin Castañeda*/


    // Método replaceAll()

        // Este método se utiliza para buscar todas las ocurrencias iguales de una subcadena dentro de una cadena y reemplazarlas por otra subcadena.

        // Ejemplo:

            /*let frase = "Santa Fe es el mejor equipo de Bogotá. Bogotá Albi-Roja"

            let nuevaFrase = frase.replaceAll("Bogotá", "Colombia")

            console.log(nuevaFrase);// Santa Fe es el mejor equipo de Colombia. Colombia Albi-Roja*/


    // Método split()

        // Este método se utiliza para dividir una cadena de texto en un array de subcadenas basándose en un separador especificado.

        // Ejemplo:

            /*let text = "Hola, familia. Me encuentro programando"

            let nuevoText = text.split(" ");

            console.log(nuevoText);*/

    
    // Método indexOf()

        //  Se utiliza para encontrar la primera ocurrencia de una subcadena dentro de una cadena de texto, devolviendo el índice de la primera aparición de la subcadena dentro de la cadena, si no encuentra la subcadena, retorna -1.

        // Ejemplo:

            /*let cadena = "Este es un ejemplo para demostrar el método indexOf() en JavaScript"

            let subCadena = cadena.indexOf("indexOf()")

            console.log(subCadena); //44*/


    // Método lastIndexOf()

        // Este método es similar a indexOf(), pero en lugar de buscar la primera ocurrencia de una subcadena dentro de una cadena, busca la última ocurrencia de la subcadena, devolviendo el índice de la última aparición de la subcadena dentro de la cadena. Si la subcadena no se encuentra, retorna -1.

        // Ejemplo:

            /*let texto = "Aprender a programar es genial, saber programar es magnífico."

            let ubicacion = texto.lastIndexOf("programar")

            console.log(ubicacion); // 38*/


    // Método search()

        // Se utiliza para buscar una subcadena dentro de una cadena de texto y devuelve el índice de la primera ocurrencia de la subcadena, si la subcadena no se encuentra, retorna -1. Puede aceptar expresiones regulares como argumento de búsqueda.

        // Ejemplo:

            /*let texto = "La programación es util para las tecnologías del futuro."
            
            let ubicacion =texto.search("futuro")

            console.log(ubicacion); //49 */


    // Método includes()

        // Este método se utiliza para determinar si una cadena de texto contiene otra cadena de texto como subcadena. Este método devuelve "true" si la subcadena está presente en la cadena de texto y "false" si no lo está.

        // Ejemplo:

            /*let texto = "La programación es util para las tecnologías del futuro."
            
            let ubicacion =texto.includes("programación")

            console.log(ubicacion); // true*/


    // Template Strings

        // También conocidas como "template literals", son una caracteristica que permite la creación de cadenas de texto de una manera más flexible y legible. En lugar de utilizar comillas simples o dobles para delimitar una cadena de texto, los Template Strings se encierran entre backticks ( ). Esto se logra colocando las expresiones de la variable dentro "${} dentro del Template String"

        // Ejemplo:

            /*let nombre = "Kevin";
            let club = "Santa Fe";

            let mensaje = `Hola, soy ${nombre} y soy hincha de ${club}.`;

            console.log(mensaje);*/


// Algunos metodos de los arrays

    // Método push()

        // Este método añade uno o dos elementos al final de un array y a su vez retorna la nueva longitud del array.

        // Ejemplo:

            /*const equipos = ["Santa Fe", "Millonarios", "Nacional"];

            const liguilla = equipos.push("América", "Cali");

            console.log(liguilla);
            console.log(equipos);*/

    // Método pop()

        // Este método elimina el último elemento del array y lo retorna. A su vez, cambia la longitud del array.

        // Ejemplo:

            /*const equipos = ["Santa Fe", "Millonarios", "Nacional"];
            const equipoEliminado = equipos.pop();

            console.log(equipoEliminado);
            console.log(equipos);*/

    // Método unshift()

        // Este método agrega uno o más elementos al inicio del array retornando la nueva longitud del array.

        // Ejemplo:

            /*const equipos = ["Santa Fe", "Millonarios", "Nacional"];
            const nuevoEquipo = equipos.unshift("América");

            console.log(nuevoEquipo);
            console.log(equipos);*/

    // Método filter()

        // Este método crea un nuevo array con todos los elementos que cumplan con la condición implementada por la función dada.

        // Ejemplo:

            /*const equipos = ["Santa Fe", "Millonarios", "Nacional"]
            const resultado = equipos.filter((equipo) => equipo.length <9);

            console.log(resultado);*/

    // Método find()

        // Este método devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

        // Ejemplo:

            /*const num = [10, 15, 20, 25, 30, 35];
            const array = num.find((number) => number > 12)

            console.log(array);*/

    // Método map()

        // Este método se utiliza para crear un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

        // Ejemplo: 

            /*const num = [1, 2, 3, 4, 5];
            const numDupli = num.map(function(numero){
                return numero *2;
            })

            console.log(numDupli);*/

    // Método forEach()

        // Este método se utiliza para ejecutar la función indicada una vez por cada elemento del array

        // Ejemplo:

            /*const equipos = ["Santa Fe", "Millonarios", "Nacional"]
            equipos.forEach(function(equipo){
                console.log(equipo);
            })*/

    // Método indexOf()
        
        // Este método retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.

        // Ejemplo:
            
            /*const equipos = ["Santa Fe", "Millonarios", "Nacional", "América"]

            const indiceSantaFe = equipos.indexOf("Santa Fe")
            const indiceCali = equipos.indexOf("Cali")

            console.log(indiceSantaFe);
            console.log(indiceCali);*/

    // Método includes

        // Este método determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.

        // Ejemplo:

            /*const equipos = ["Santa Fe", "Millonarios", "Nacional"];

            console.log(equipos.includes("Santa Fe"));
            console.log(equipos.includes("Cali"));*/

    // Método slice

        // Este método se utiliza para extraer una porción de un array y devolverla como un nuevo array, sin modificar el array original.

        // Eemplo:

            /*const equipos = ["Santa Fe", "Millonarios", "Nacional", "Amética"]
            const clasico = equipos.slice(0, 2);

            console.log(clasico);*/

    // Métoodo splice

        // Este método se utiliza para cambiar el contenido de un array, eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar.

        //Ejemplo:

            /*const equipos = ["Santa Fe", "Millonarios", "Nacional", "América"]
            const eliminados = equipos.splice(2, 1, "Cali")

            console.log(eliminados);
            console.log(equipos);*/

    // Método sort 

        // Este método se utiliza para ordenar los elementos de un array alfabéticamente (por defecto) o según algún criterio específico proporcionado a través de una función de comparación. Este método modifica el array original y devuelve el array ordenado.

        // Ejemplo:
            
            /*const ciudades = ["Bogotá", "Medellín", "Cali", "Cartagena"]
            const ordenCiudades = ciudades.sort()
            
            console.log(ordenCiudades);*/
        
