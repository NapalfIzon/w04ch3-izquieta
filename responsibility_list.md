# Phone

## components

### App

- Evitará mostrar los botones "call" y "hang" a la vez
- Evitará mostrar más de 9 números en pantalla
- Permitirá la llamada si hay 9 números en pantalla
- Si se realiza la llamada:
  - Lanza orden para mostrar mensaje "Calling..." en pantalla
  - Añadirá la clase "off" a "call" y "on" a "hang"
  - Deshabilitará el uso del teclado
- Si se cuelga la llamada:
  - Lanza orden para ocultar mensaje "Calling..." en pantalla
  - Habilitará el uso del teclado
  - Borrará los números mostrados en pantalla
- Si pasan 5 segundo:
  - Realizará las mismas acciones que si se colgase la llamada

### Info

- Muestra mensaje "Calling..." en pantalla

### Display

- Muestra los números introducidos en pantalla

### Actions

- Mostrará en pantalla el botón "call"
- Mostrará en pantalla el botón "hang"

### Action

- Realiza la llamada si se ha pulsado el botón "call" (anañe clase "active")

### Keyboard

- Muestra los botones en pantalla

### Key

- Si la tecla es numérica, devolverá el valor pulsado
- Si la tecla es "delete", borrará los números mostrados en pantalla

## content

### PhoneContextContainer

### usePhone
