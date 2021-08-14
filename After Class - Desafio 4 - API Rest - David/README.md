# Desafío 4

## Algunos consejos para resolver el Desafío 4 :)

1. Reutilizar la clase Contenedor del Desafío 3 para resolver los métodos GET, POST y DELETE.

2. Usar los métodos de Express (get, post, put, delete) en forma asincrónica para poder usar los métodos de la clase Contenedor con `await`.

3. Para resolver el PUT hay que crear un nuevo método en la clase Contenedor (`updateById`) que busque en qué posición del Array de productos está el producto con el `id` buscado. Para esto se puede usar el método de JavaScript `findIndex`.

4. Para el formulario HTML que carga un nuevo producto recomiendo no usar el tag `form` de HTML sino un botón que dispare una función de JavaScript que procese la información y haga el POST con el método `fetch`.

## Aviso: No subí el código completo, sólo la parte más difícil ;)

## La idea es que lo que falta lo puedan incluir ustedes con lo que ya aprendieron :o
