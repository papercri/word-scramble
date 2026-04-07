# Word Scramble Game

Un divertido y sencillo juego de adivinar palabras desordenadas construido con HTML, CSS y JavaScript. El objetivo del juego es descifrar las letras mezcladas para formar palabras válidas (en este caso, ciudades).

**Enlace al juego:** [http://word-scramble-gamma.vercel.app](http://word-scramble-gamma.vercel.app)

---

## Cómo jugar

1. **Inicia el juego**: Abre el archivo `index.html` en tu navegador web local o visita el enlace del proyecto.
2. **Observa la palabra mezclada**: Verás una palabra con sus letras totalmente desordenadas en la pantalla.
3. **Escribe tu respuesta**: Haz clic en el campo de texto y teclea la palabra que crees que está oculta.
4. **Comprueba tu palabra**: Haz clic en el botón **"Check Word"** para validar tu respuesta.
   - Si es **correcta**, sumarás un punto en tu marcador, recibirás una alerta de victoria y aparecerá una palabra nueva automáticamente.
   - Si es **incorrecta**, el juego te avisará para que lo vuelvas a intentar.
5. **Pide otra palabra**: Si te quedas atascado, siempre puedes pulsar **"Refresh Word"** para generar una palabra desordenada diferente.

---

## Características

* **Selección aleatoria**: Las palabras se escogen al azar de un array predefinido en cada ronda.
* **Sistema de puntuación**: El juego incluye un contador que registra en tiempo real el número de respuestas correctas.
* **Feedback instantáneo**: Alertas interactivas que informan al usuario del resultado de su intento al instante.
* **Diseño moderno**: Interfaz limpia, centrada y atractiva utilizando Flexbox y la fuente *Poppins*.

---

## Tecnologías utilizadas

Este proyecto es un ejemplo fantástico de desarrollo frontend clásico, sin frameworks pesados:

* **HTML5**: Estructura del contenido de la web.
* **CSS3**: Diseño, estilos y animaciones de interacción en los botones.
* **Vanilla JavaScript**: Toda la lógica del juego (mezcla de letras, validación, contador y manipulación del DOM).

---

## Instalación y uso local

El juego no requiere la instalación de Node.js, NPM ni bases de datos. Para ejecutarlo en tu máquina:

1. Clona este repositorio en tu ordenador:
   ```bash
   git clone [https://github.com/papercri/word-scramble.git](https://github.com/papercri/word-scramble.git)

2. Accede a la carpeta del proyecto.

3. Haz doble clic sobre el archivo index.html para abrirlo directamente en tu navegador favorito. ¡Y a jugar!