# relke-qa-respuesta

Desafío Técnico - QA Engineer Junior (Solución)
Este repositorio contiene la solución al desafío técnico para el rol de QA Engineer Junior en Relke. El objetivo fue desarrollar un script de automatización End-to-End (E2E) para el flujo de creación de una Nota de Venta utilizando Playwright con TypeScript.

🚀 Cómo Ejecutar la Prueba
Para ejecutar el test, sigue estos pasos desde tu terminal:

Clonar el repositorio:

git clone https://github.com/valentinaairene/relke-qa-respuesta.git
cd relke-qa-respuesta

Instalar dependencias:
Asegúrate de tener Node.js instalado.

npm install

Instalar los navegadores de Playwright:
Este comando descarga los navegadores necesarios (Chromium, Firefox, WebKit).

npx playwright install

Ejecutar la prueba:

Para ver la ejecución en una ventana de navegador (modo headed):
npx playwright test --headed

Para ejecutarla en segundo plano (modo headless):
npx playwright test

Para abrir la interfaz de usuario de Playwright y depurar paso a paso:
npx playwright test --ui

Claro, aquí tienes el README.md adaptado con la URL de tu repositorio.

Desafío Técnico - QA Engineer Junior (Solución)
Este repositorio contiene la solución al desafío técnico para el rol de QA Engineer Junior en Relke. El objetivo fue desarrollar un script de automatización End-to-End (E2E) para el flujo de creación de una Nota de Venta utilizando Playwright con TypeScript.

🚀 Cómo Ejecutar la Prueba
Para ejecutar el test, sigue estos pasos desde tu terminal:

Clonar el repositorio:

git clone https://github.com/valentinaairene/relke-qa-respuesta.git
cd relke-qa-respuesta

Instalar dependencias:
Asegúrate de tener Node.js instalado.
npm install

Instalar los navegadores de Playwright:
Este comando descarga los navegadores necesarios (Chromium, Firefox, WebKit).
npx playwright install

Ejecutar la prueba:

Para ver la ejecución en una ventana de navegador (modo headed):
npx playwright test --headed

Para ejecutarla en segundo plano (modo headless):
npx playwright test

Para abrir la interfaz de usuario de Playwright y depurar paso a paso:
npx playwright test --ui

✅ Validaciones Implementadas

El script realiza las siguientes validaciones clave para asegurar el correcto funcionamiento del flujo:

Autenticación Exitosa: Se verifica que, tras ingresar las credenciales correctas, el usuario es redirigido al dashboard principal, esperando por el mensaje de "Te damos la bienvenida".

Navegación Correcta: Se valida que cada paso de la navegación (Menú Ventas -> Notas de Venta -> Formulario de Creación) lleve a la URL esperada (/dtes/notas-venta/new).

Carga de Datos Dependientes: Después de seleccionar un producto, el script implementa una espera inteligente para confirmar que la aplicación carga automáticamente el precio del producto antes de continuar.

Cálculo de Total: Se verifica que, tras ingresar la cantidad, el campo "Total" se actualiza y su valor es diferente de "$0".

Creación Exitosa: Al enviar el formulario, se valida la aparición de la notificación de éxito (Nota de venta creada correctamente).

Persistencia de Datos: Finalmente, el script vuelve a la página del listado y verifica que la nueva nota de venta aparece correctamente en la tabla, utilizando un identificador único (el número de la nota) para asegurar que se está validando el registro correcto.

🧠 Desafíos y Decisiones Técnicas
Como estoy dando mis primeros pasos en el mundo de la automatización, este desafío fue una gran oportunidad para aprender. Para resolver los problemas que surgieron, como los selectores dinámicos y los tiempos de carga de la página, me apoyé en herramientas de investigación (incluyendo IA) para guiar mi análisis.

Aunque fue un proceso que me hizo "cranear" bastante, resultó ser muy entretenido y me ayudó a entender a fondo cada línea de código. La solución final es el reflejo de ese proceso de investigación, prueba y, sobre todo, aprendizaje.
