const BANK = [
  {
    "model": "c4",
    "view": "Diagrama de contexto",
    "skill": "Explicación técnica",
    "question": "Explica cuáles son los sistemas externos que interactúan con tu solución y qué información intercambian."
  },
  {
    "model": "c4",
    "view": "Diagrama de contexto",
    "skill": "Cambio en los requisitos",
    "question": "Si tu sistema debe integrarse con un nuevo servicio externo (tu docente nombrará alguno), ¿cómo modificarías el diagrama de contexto?"
  },
  {
    "model": "c4",
    "view": "Diagrama de contexto",
    "skill": "Justificación de decisiones",
    "question": "¿Por qué representaste estos elementos como sistemas externos y no como parte de tu solución?"
  },
  {
    "model": "c4",
    "view": "Diagrama de contexto",
    "skill": "Identificación de errores",
    "question": "Revisa las relaciones de tu diagrama. ¿Hay alguna interacción que no corresponda al nivel de contexto o que esté incorrectamente representada?"
  },
  {
    "model": "c4",
    "view": "Diagrama de contexto",
    "skill": "Coherencia entre modelos",
    "question": "Selecciona una interacción con un sistema externo. ¿Cómo se refleja esta integración en la vista lógica o de procesos del modelo 4+1?"
  },
  {
    "model": "c4",
    "view": "Diagrama de contenedores",
    "skill": "Explicación técnica",
    "question": "Explica la responsabilidad de cada contenedor y cómo se comunican para ejecutar una funcionalidad del sistema."
  },
  {
    "model": "c4",
    "view": "Diagrama de contenedores",
    "skill": "Cambio en los requisitos",
    "question": "Si tu solución debe incorporar una aplicación móvil adicional, ¿qué cambios realizarías en el diagrama de contenedores?"
  },
  {
    "model": "c4",
    "view": "Diagrama de contenedores",
    "skill": "Justificación de decisiones",
    "question": "¿Por qué dividiste tu solución en estos contenedores? ¿Qué criterios técnicos justifican esa separación?"
  },
  {
    "model": "c4",
    "view": "Diagrama de contenedores",
    "skill": "Identificación de errores",
    "question": "Revisa las comunicaciones entre contenedores. ¿Todas son necesarias y técnicamente válidas? Identifica una que podría mejorarse."
  },
  {
    "model": "c4",
    "view": "Diagrama de contenedores",
    "skill": "Coherencia entre modelos",
    "question": "¿Cómo se relacionan los contenedores de tu solución con los elementos representados en la vista física del modelo 4+1?"
  },
  {
    "model": "c4",
    "view": "Diagrama de componentes del backend",
    "skill": "Explicación técnica",
    "question": "Selecciona una funcionalidad y explica qué componentes del backend intervienen, cuáles son sus responsabilidades y cómo interactúan."
  },
  {
    "model": "c4",
    "view": "Diagrama de componentes del backend",
    "skill": "Cambio en los requisitos",
    "question": "Si debes incorporar una nueva funcionalidad (tu docente nombrará una) que requiere consultar información de un servicio externo, ¿qué componentes agregarías o modificarías?"
  },
  {
    "model": "c4",
    "view": "Diagrama de componentes del backend",
    "skill": "Justificación de decisiones",
    "question": "¿Por qué distribuiste las responsabilidades del backend entre estos componentes? ¿Qué ventajas tiene esta organización?"
  },
  {
    "model": "c4",
    "view": "Diagrama de componentes del backend",
    "skill": "Identificación de errores",
    "question": "¿Existe algún componente que tenga responsabilidades que no le corresponden o alguna dependencia que debería modificarse? Justifica tu respuesta."
  },
  {
    "model": "c4",
    "view": "Diagrama de componentes del backend",
    "skill": "Coherencia entre modelos",
    "question": "¿Cómo se relacionan los componentes del sistema con los módulos representados en la vista de desarrollo del modelo 4+1?"
  },
  {
    "model": "vistas",
    "view": "Vista lógica",
    "skill": "Explicación técnica",
    "question": "Explica 3 elementos de la vista lógica y las responsabilidades tienen dentro de la estructura lógica del sistema."
  },
  {
    "model": "vistas",
    "view": "Vista lógica",
    "skill": "Cambio en los requisitos",
    "question": "Si se incorpora una nueva funcionalidad, ¿cómo se vería reflejada en tu vista lógica?"
  },
  {
    "model": "vistas",
    "view": "Vista lógica",
    "skill": "Justificación de decisiones",
    "question": "¿Por qué agrupaste las funcionalidades en estas entidades o clases? ¿Qué criterio de diseño utilizaste?"
  },
  {
    "model": "vistas",
    "view": "Vista lógica",
    "skill": "Identificación de errores",
    "question": "¿Identificas responsabilidades duplicadas o dependencias innecesarias entre los elementos de tu vista lógica?"
  },
  {
    "model": "vistas",
    "view": "Vista lógica",
    "skill": "Coherencia entre modelos",
    "question": "¿Cómo se relacionan los elementos de tu vista lógica con los componentes representados en el modelo C4?"
  },
  {
    "model": "vistas",
    "view": "Vista de procesos",
    "skill": "Explicación técnica",
    "question": "Selecciona un proceso importante del sistema y explica la secuencia de interacciones que permite ejecutarlo."
  },
  {
    "model": "vistas",
    "view": "Vista de procesos",
    "skill": "Cambio en los requisitos",
    "question": "Si dos usuarios ejecutan simultáneamente una operación que modifica la misma información, ¿qué cambios o mecanismos considerarías en tu diseño?"
  },
  {
    "model": "vistas",
    "view": "Vista de procesos",
    "skill": "Justificación de decisiones",
    "question": "¿Por qué definiste esta secuencia de interacciones? ¿Podría realizarse de otra manera?"
  },
  {
    "model": "vistas",
    "view": "Vista de procesos",
    "skill": "Identificación de errores",
    "question": "¿Qué ocurriría si uno de los elementos que participa en el proceso no responde? ¿Tu diseño contempla esta situación?"
  },
  {
    "model": "vistas",
    "view": "Vista de procesos",
    "skill": "Coherencia entre modelos",
    "question": "¿Cómo se relacionan los elementos participantes de este proceso con los componentes representados en C4?"
  },
  {
    "model": "vistas",
    "view": "Vista de desarrollo",
    "skill": "Explicación técnica",
    "question": "Explica cómo propones organizar el código fuente de tu solución: en módulos, paquetes o proyectos y qué responsabilidad tiene cada uno."
  },
  {
    "model": "vistas",
    "view": "Vista de desarrollo",
    "skill": "Cambio en los requisitos",
    "question": "Si un equipo diferente debe encargarse de desarrollar una nueva funcionalidad, ¿cómo organizarías los módulos para facilitar su implementación?"
  },
  {
    "model": "vistas",
    "view": "Vista de desarrollo",
    "skill": "Justificación de decisiones",
    "question": "¿Por qué elegiste esta organización de módulos y dependencias? ¿Cómo facilita el mantenimiento del software?"
  },
  {
    "model": "vistas",
    "view": "Vista de desarrollo",
    "skill": "Identificación de errores",
    "question": "¿Existen dependencias circulares o módulos con responsabilidades que deberían separarse?"
  },
  {
    "model": "vistas",
    "view": "Vista de desarrollo",
    "skill": "Coherencia entre modelos",
    "question": "Selecciona un componente del modelo C4 y explica en qué módulo o paquete de tu vista de desarrollo estaría implementado."
  },
  {
    "model": "vistas",
    "view": "Vista física",
    "skill": "Explicación técnica",
    "question": "Explica dónde se ejecutan los elementos de tu solución y cómo se comunican los dispositivos, servidores o servicios representados."
  },
  {
    "model": "vistas",
    "view": "Vista física",
    "skill": "Cambio en los requisitos",
    "question": "Si el sistema debe soportar una cantidad de usuarios mucho mayor, ¿qué cambios propondrías en la infraestructura?"
  },
  {
    "model": "vistas",
    "view": "Vista física",
    "skill": "Justificación de decisiones",
    "question": "¿Por qué decidiste desplegar los elementos de tu sistema de esta manera? ¿Qué ventajas ofrece tu propuesta?"
  },
  {
    "model": "vistas",
    "view": "Vista física",
    "skill": "Identificación de errores",
    "question": "¿Existe algún elemento de tu arquitectura que no tenga definido dónde se ejecuta o alguna comunicación que no sea viable?"
  },
  {
    "model": "vistas",
    "view": "Vista física",
    "skill": "Coherencia entre modelos",
    "question": "¿Dónde se despliegan los contenedores de tu modelo C4 dentro de la infraestructura representada en esta vista?"
  },
  {
    "model": "vistas",
    "view": "Vista de escenarios (+1)",
    "skill": "Explicación técnica",
    "question": "Selecciona un escenario funcional y explica cómo interactúan los elementos del sistema para cumplirlo."
  },
  {
    "model": "vistas",
    "view": "Vista de escenarios (+1)",
    "skill": "Cambio en los requisitos",
    "question": "Si se agrega una condición excepcional al escenario, por ejemplo, que un servicio externo no esté disponible, ¿cómo modificarías su comportamiento?"
  },
  {
    "model": "vistas",
    "view": "Vista de escenarios (+1)",
    "skill": "Justificación de decisiones",
    "question": "¿Por qué seleccionaste este escenario para representar y validar tu arquitectura?"
  },
  {
    "model": "vistas",
    "view": "Vista de escenarios (+1)",
    "skill": "Identificación de errores",
    "question": "¿El escenario representado puede ejecutarse correctamente con los componentes y relaciones definidos en tu arquitectura? Identifica posibles inconsistencias."
  },
  {
    "model": "vistas",
    "view": "Vista de escenarios (+1)",
    "skill": "Coherencia entre modelos",
    "question": "¿Cómo puedes verificar que el escenario seleccionado está soportado por los contenedores y componentes definidos en C4?"
  }
];