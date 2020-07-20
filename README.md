# Tarjeta de crédito válida

## Índice

* [1. Objetivo](#1-Objetivo)
* [2. Prototipo](#2-Prototipo)

***

## 1. Objetivo

Una aplicación web donde se podra adquirir una fotografia mediante un pago.
Al realizar el pago se inicia la validación de la tarjeta, cuando se ingresen
los datos correctamente permitirá ladescarga de la imagen en alta calidad.

Para la validación se utilizará el Algoritmo de Luhn,también llamado algoritmo
de módulo 10, es un método de suma de verificación, se utiliza para validar números de identificación; tales como el IMEI de los celulares, tarjetas de crédito, etc.

  1. A todos los números que ocupan una posición par se les debe multiplicar por dos,
  2. Si este número es mayor o igual a 10, debemos sumar los dígitos del resultado;
  3. El número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.


## 2. Prototipo

  1. Pantalla Inicial:
! [](img/Iniciar.jpg)