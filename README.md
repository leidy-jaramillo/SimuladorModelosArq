# Simulador de modelos de arquitectura

Simulador de sustentación oral de Diseño Detallado de Software. El docente elige el modelo C4 o 4+1 vistas; dos ruletas independientes sortean el diagrama o vista y la habilidad. Incluye 40 preguntas, la rúbrica del Parcial 2 y el cálculo de nota final con un peso del 50 % por modelo.

## Uso

Abrir `index.html` en un navegador. No requiere instalación, dependencias ni conexión a internet. Las notas permanecen durante la sesión de la página y se pueden limpiar para otro estudiante; no se envían a ningún servidor.

## Publicación en GitHub Pages

En Settings → Pages, seleccionar Deploy from a branch, la rama principal y la carpeta `/ (root)`, y guardar. El archivo `.nojekyll` permite servir los archivos estáticos directamente.

## Archivos

- `index.html`: interfaz, instrucciones y rúbrica.
- `styles.css`: diseño adaptable.
- `app.js`: ruletas, copia de preguntas y cálculo de notas.
- `preguntas.js`: banco de 40 preguntas del documento suministrado.

La rúbrica conserva los rangos invertidos del documento original y los señala para revisión del docente.
