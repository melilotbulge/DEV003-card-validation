# Tarjeta de crédito válida

[Link de la página desplegada](https://melilotbulge.github.io/DEV003-card-validation/)

## Índice

* [1. Descripción del proyecto](#1-Descripción-del-proyecto)
* [2. Objetivos generales](#2-objetivos-generales)
* [3. Consideraciones técnicas](#3-consideraciones-técnicas)
* [4. Descripción de scripts / archivos](#4-Descripción-de-scripts-/-archivos)

***

## 1. Descripción del proyecto

En esta proyecto se ha realizado una pagina Web para la tienda de aceites escenciales 
llamada Bonitas Naturae, dicha pagina Web, permite validar la tarjeta de crédito o debito, 
que se utilizará para realizar el pago del pedido realizado en la pagina Web de la tienda, 
asi como retornar el número de la tarjeta con los digitos enmascarados excepto los ultimos 4
esto como medida de seguridad para el cliente. Para el proceso de validación de la tarjeta se
utlizo el  [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),también llamado 
algoritmo de módulo 10, es un método de suma de verificación, se utiliza para validar números de 
identificación; no solo los numeros de las tarjetas sino tambien datos como el IMEI de los celulares, 
etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que solamente contiene dígitos
[0-9]); a todos los números que ocupan una posición par se les debe multiplicar por dos, si este número
es mayor o igual a 10, debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

## 2. Los objetivos generales

* Se podrá insertar un numero de tarjeta a validar. Usa solo caracteres numéricos
 [0-9], y es necesario que el numero ingresado tenga una longitud minima de 13 numeros y una longitud
 máxima de 18 digitos.  
* Ver si el resultado es válido o no.  
* Ocultar todos los dígitos del número de tarjeta a exepción de los últimos
  4 caracteres.  
* No se puede ingresar un campo vacío.
* Se busco realizar una pagina acorde a la imagen corporativa de la tienda Bonitas Naturae.


## 3. Consideraciones técnicas


La lógica del proyecto se implementó completamente en JavaScript. En este proyecto no se utilizaron librerías 
o frameworks, solo JavaScript puro también conocido como Vanilla JavaScript.

Los tests unitarios cumplieron con el 100% de _statements_, _functions_, _lines_, y e _branches_.


## 4. Descripción de scripts / archivos

* `README.md`: Se explica la información necesaria para el uso de tu la aplicación
  web, así como una introducción a la aplicación y su funcionalidad. 
* `src/index.html`: este es el punto de entrada a la aplicación. Este archivo
 contiene el _markup_ (HTML),  el CSS y JavaScript necesario.
* `src/style.css`: este archivo contiene las reglas de estilo. 
* `src/validator.js`: Aquí se implemento el objeto `validator`, Este objeto (`validator`)contiene dos
  métodos:
  - `validator.isValid(cardNumber)`:  Esta función retorna
     un `boolean` dependiendo si es válida de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).
  - `validator.maskify(cardNumber)`: Esta función retorna en un cuadro de alerta el numero de TARJETA en donde todos menos 
   los últimos cuatro caracteres son reemplazados por un numeral (`#`). Esta función mantiene los últimos cuatro caracteres
  intactos, sea cual sea la longitud del número de tarjeta.

* `src/index.js`: Aqui se invocan los elementos del DOM
  `validator.isValid()` y `validator.maskify()` según sea necesario y
  actualizar el resultado en la UI (interfaz de usuario).
* `test/validator.spec.js`: este archivo contiene algunos tests de ejemplo y aquí implementan los tests para `validator.isValid()` y `validator.maskify()`.


