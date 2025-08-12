# Ultima Actividad

## Preguntas

1. ¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras
   con prototype y usar class?

2. ¿Cuáles son las ventajas de usar getters y setters?

3. ¿Qué problemas pueden surgir al modificar prototipos nativos como String?

4. Teniendo en cuenta un objeto personPrototype que contiene un método greet, ¿qué
   diferencias encontrás entre asignar ese método directamente al prototype de una
   función constructora o usar Object.assign?

### Respuesta

#### Primera pregunta

##### Diferencias entre class y prototype

- La diferencia más notable es la sintaxis que tienen ambas dejando a Class
  con una sintaxis mas legible y entendible que prototype.
- En prototype una función puede ser un constructor o una función normal a la vez,
  pero un constructor definido con la sintaxis de clases no puede llamarse como si
  fuera una función.
- Las declaraciones de funciones se "elevan" (hoisting), por lo que se puede usar una
  función constructora antes de declararla. Las class no se elevan se deben declarar
  antes de poder usarlas.

##### Ventajas de Class

- El código es más fácil de leer y organizar. Todo lo relacionado con la clase
  (constructor, métodos, getters, setters) está en un solo lugar.
- Usar una class sin la palabra clave new arroja un error, lo cuale seguro. Con las
  funciones constructoras, olvidarse el new puede causar errores difíciles de entender.
- La herencia con extends y super() es mucho más intuitiva y clara que manipular
  el prototype manualmente.

##### Desventajas de Class

- El azúcar sintáctico puede ser una desventaja ya que no se agrega una función nueva
  sino que es una nueva forma de escribir lo mismo.

##### Ventajas de prototype

- Al usar directamente con prototype, te obliga a entender cómo funciona la
  herencia en JavaScript a un nivel más profundo.
- Podés agregar o quitar métodos del prototype en cualquier momento, y todos
  los objetos ya creados verán cambios instantáneamente.

##### Desventajas de prototype

- La lógica está separada. Las propiedades se definen en la función
  constructora y los métodos se agregan fuera, en el prototype. Esto
  hace que el código sea más difícil de seguir.
- Olvidar la palabra clave new al crear una instancia es un error clásico
  que puede llevar a comportamientos inesperados y difíciles de depurar, ya
  que this podría apuntar al objeto global.

#### Segunda pregunta

##### Ventajas de Getters y Setters

- Ocultan la implementación interna de una propiedad. Podés cambiar cómo se
  almacena un dato internamente sin que el código externo se vea afectado.
- Un setter es perfecto para poner la lógica de validación. Te asegura
  de que una propiedad nunca reciba un valor erroneo (como un saldo negativo)
  Esta regla se aplica en un solo lugar y se reutiliza siempre.
- Disponer de métodos getter y setter ayuda a otros desarrolladores a entender que
  el acceso a los datos es intencionado y puede tener condiciones, en lugar de permitir
  una modificación aleatoria.

#### Tercer pregunta

##### Problemas al modificar prototype nativos

Al agregar métodos a prototipos nativos, puedes entrar en conflicto con bibliotecas
que ya definen métodos con el mismo nombre. Esto puede resultar en comportamientos
inesperados o errores en tiempo de ejecución

Podría también provocar un conflicto con una versión futura del entorno
de JavaScript nativo.

Puedes asegurarte, mediante pruebas, de que las extensiones de tu prototipo no causen
conflictos con las bibliotecas que usas, ya que uno decide que bibliotecas usar. Esto
no ocurre con los objetos nativos, suponiendo que el código se ejecute en un navegador.
Si defino Array.prototype.swizzle(foo, bar) hoy y mañana Google añade algo Array.prototype.swizzle(bar, foo)
a Chrome, es probable que mis compañeros se pregunten por qué .swizzleel no parece coincidir con lo documentado en MDN.

##### Object Assign

Utilizamos Object.assign para poder copiar todas las propiedades al prototipo constructor.
Si lo hacemos directamente asignandole el metodo a la función constructora lo tendriamos
que hacer de uno en uno
