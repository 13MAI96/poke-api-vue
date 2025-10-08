# poke_api_vue

## Supuestos y/o definiciones

### Respecto a los datos obtenidos de la api

Se solicita la lista desde la api y una vez obtenida se trabaja con la misma localmente, dando de esta manera el lugar a usar el store para los cambios.
Los datos obtenidos corresponden a la primer página generada por la paginación de la api, sin considerar modificaciones sobre la paginación para evitar uso innecesario de memoria en el almacenamiento local.

### Respecto a las librerias como Vuex, Tailwind o Pinia

La consigna no especifica el uso de alguna libreria, no solo en la necesidad de utilizarlo sino tampoco da lugar o abren la opcion de utilizar una libreria.
He trabajado en el area bancaria donde la implementacion de alguna libreria deberia primero superar varios procesos de validacion de seguridad, por lo tanto no implemento librerias mas alla de las integradas en Vue, React o Angular a no ser de que esté especificado su uso o la posibilidad de usarla.

### Respecto a cambios o agregados esteticos y funcionales

Se agrega un efecto de movimiento a la Pokeball en el loader para dar la sensacion de carga.
Se utiliza el mismo loader al momento de realizar alguna request a la API.

Al realizar alguna interaccion que genere cambios pero no una navegacion, se agrego un snackbar con un mensaje.

### Respecto a Typescript

Considerando que su funcionamiento y el desarrollo es similar a Javascript, y que el mismo se puede utilizar de forma 'nativa' con Vue, y teniendo en cuenta que su utilizacion da una estructura mas entendible respecto a que esperar en las transacciones entre componentes, tome la decision de utilizar Typescript.

### Respecto al store

Se utilizo un store simple creado con reactive.
Sin embargo toda interaccion con el store es manejada directamente por el servicio correspondiente a la API.

### Respecto a los componentes

Se generaron componentes con la intencion de que realicen la menor cantidad de logica posible, para ello cada componente emite eventos o recibe acciones que debe realizar para cuando el usuario interactua con ellos.
Esto se realiza con el fin de dar la mayor reutilizacion posible a cada componente.
En algunos casos la complejidad de las interacciones que puede realizar un componente puede ser alta debido a la presencia de varios componentes hijos, como ser el caso de Table. Sin embargo mas alla de actualizacion de tipos, esos componentes estan realizados para poder ser facilmente reutilizables.
Para el caso del componente Button, se puede ver el caso de multiple reutilizacion ya que se le dio la funcionalidad de, en base a un input, poder modificar su estructura y presentacion.

## Para el despliegue local

Si bien el comando npm run dev es suficiente para inicializar el proyecto de manera local, se ha generado un archivo .sh para realizar este despliegue sin la necesidad de realizar los pasos previos para estos tipos de proyectos como ser npm install, etc.

## Para el despliegue en demo

Para este caso el despliegue en demo se realiza directamente desde el repositorio publico con la utilizacion de Vercel. El dominio publico para acceder al ambiente es el siguiente: [Pokédex Web](https://poke-api-vue-eta.vercel.app/)
