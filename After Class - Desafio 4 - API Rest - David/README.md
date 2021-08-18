# Desafío 4: Express Avanzado

## Algunos consejos para resolver el Desafío 4 :)

1. Reutilizar la clase Contenedor del Desafío 3 para resolver GET, POST y DELETE.

2. Para poder usar los métodos de la clase Contenedor dentro de los métodos de Express recuerden que deben usar `async` y `await`.

3. En el caso de PUT una solución posible es crear un nuevo método en la clase Contenedor (`updateById`) que busque en qué posición del Array de productos está el producto con el `id` buscado. Para esto se puede usar el método de JavaScript `findIndex`.

## AVISO: No subí el código completo, sólo la parte más difícil. La idea es que lo que falta lo puedan completar con lo que ya aprendieron. Pero recuerden que esta es sólo una forma posible de resolver el desafío, no la única. La idea es que les sirva como guía para resolverlo y lo adapten a su propio código, pero por favor no lo copien exactamente igual :o
