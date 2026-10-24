# Betoneta Tours

[Repository](https://github.com/Betozaurio/betoneta-tours)

## English

### Project overview

Betoneta Tours is a learning and QA Automation portfolio project for a web concept that presents cycling routes in Tolima, Colombia. The static website introduces the Betoneta brand, shows a catalog of demonstration routes, and describes a proposed transport service for cyclists and their bicycles.

The project communicates that the service is still a concept. It does not provide booking, payment, or operational transport services. Route information is presented as preliminary reference data and has not been independently verified.

### Technologies used

- HTML, CSS, and JavaScript for the static website.
- TypeScript and Playwright Test for browser automation.
- Node.js and npm for test dependencies and scripts.
- Python's built-in HTTP server, started by Playwright, to serve the local site.
- GitHub Actions workflow configured to run the Playwright suite on pushes and pull requests targeting main or master.

Playwright is configured for Chromium, Firefox, and WebKit. This is browser configuration, not evidence that the current suite has passed in all three browsers.

### Testing scope and current automated coverage

The application tests in tests/betoneta.spec.ts currently cover:

- TC-001: homepage brand and introductory content.
- TC-002: navigation to the route catalog.
- TC-003: route-card names, descriptions, reference distances, and duration text.
- TC-004: opening Cañón del Combeima details while the other cards remain closed.
- TC-005: opening and closing route details.
- TC-006: opening Las Amarillas after Cañón del Combeima closes the previous details.
- TC-007: each route's test identifier and a route-specific detail.
- TC-012: a temporary route-catalog heading highlight after link navigation; loading #rutas directly does not trigger it.

The current test directory also contains tests/example.spec.ts, the default Playwright sample. Those two tests visit playwright.dev and do not test Betoneta Tours; they require network access and are included by the current testDir configuration.

The test-case document contains historical manual observations and records previous automated runs for some cases. Its automation-status entries do not all match the current test files. In particular, TC-004, TC-005, TC-007, and TC-012 have implementations in the suite while parts of docs/test-cases.md still describe them as not planned or without confirmed automation. Reconcile that document before using it as the authoritative coverage report.

No tests were run while preparing this README. It makes no claim that the current suite passes, and it reports no coverage percentage.

### Repository structure

~~~text
betoneta-tours/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── docs/
│   ├── commands.md
│   ├── requirements.md
│   └── test-cases.md
├── images/
│   └── application and route images
├── tests/
│   ├── betoneta.spec.ts
│   └── example.spec.ts
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
~~~

### Installation and execution

Prerequisites: Node.js with npm, Python available as py on Windows or python3 on other platforms, and Playwright browser binaries.

Install the locked project dependencies:

~~~sh
npm ci
~~~

Install the browsers configured for local runs:

~~~sh
npx playwright install
~~~

Run the complete suite:

~~~sh
npm test
~~~

The package also defines npm run order-66 as an alias for the same Playwright command. The Playwright configuration starts a local server at 127.0.0.1:3000 automatically; it uses py -m http.server on Windows and python3 -m http.server on other platforms.

Run one test in Chromium, for example:

~~~sh
npx playwright test tests/betoneta.spec.ts --project=chromium --grep "TC-007"
~~~

The GitHub Actions workflow installs dependencies and browsers, runs npx playwright test, and uploads the HTML report as an artifact. A configured workflow does not by itself indicate a successful run.

### Current project status and planned next steps

This is an evolving learning and portfolio project. The route catalog and detail interactions are implemented in the static page; requirements, manual cases, and automation are being developed alongside it.

Planned next steps:

1. Run the current suite and record the date, browser projects, product revision, and results.
2. Align docs/test-cases.md with the current test implementations and verified run evidence.
3. Decide whether to remove or replace the default Playwright sample tests that visit playwright.dev.
4. Expand automation for development-status messaging, external navigation, image loading, responsive behavior, and accessibility where appropriate.
5. Continue reviewing route information and clearly mark details that have not been independently verified.

## Español

### Descripción del proyecto

Betoneta Tours es un proyecto de aprendizaje y portafolio de QA Automation para un concepto web que presenta rutas de ciclismo en el Tolima, Colombia. El sitio estático presenta la marca Betoneta, muestra un catálogo de rutas demostrativas y describe una propuesta de transporte para ciclistas y sus bicicletas.

El proyecto comunica que el servicio sigue siendo un concepto. No ofrece reservas, pagos ni transporte operativo. La información de las rutas se presenta como referencia preliminar y no ha sido verificada de manera independiente.

### Tecnologías utilizadas

- HTML, CSS y JavaScript para el sitio estático.
- TypeScript y Playwright Test para la automatización del navegador.
- Node.js y npm para las dependencias y los scripts de pruebas.
- El servidor HTTP integrado de Python, iniciado por Playwright, para servir el sitio local.
- Flujo de GitHub Actions configurado para ejecutar Playwright ante pushes y pull requests dirigidos a main o master.

Playwright está configurado para Chromium, Firefox y WebKit. Esa configuración no demuestra que la suite actual haya pasado en los tres navegadores.

### Alcance de pruebas y cobertura automatizada actual

Los tests de la aplicación en tests/betoneta.spec.ts cubren actualmente:

- TC-001: marca y contenido introductorio de la página principal.
- TC-002: navegación al catálogo de rutas.
- TC-003: nombres, descripciones, distancias de referencia y duración de las tarjetas.
- TC-004: abrir los detalles de Cañón del Combeima mientras las otras tarjetas siguen cerradas.
- TC-005: abrir y cerrar los detalles de una ruta.
- TC-006: al abrir Las Amarillas después de Cañón del Combeima, se cierran los detalles anteriores.
- TC-007: identificador de prueba y un dato distintivo de cada ruta.
- TC-012: resaltado temporal del encabezado al navegar mediante el enlace; abrir #rutas directamente no lo activa.

La carpeta de tests también contiene tests/example.spec.ts, el ejemplo predeterminado de Playwright. Esos dos tests visitan playwright.dev y no prueban Betoneta Tours; requieren acceso a Internet y se incluyen por la configuración actual de testDir.

El documento de casos de prueba contiene observaciones manuales históricas y registra ejecuciones automatizadas anteriores para algunos casos. Sus estados de automatización no coinciden por completo con los archivos de tests. En particular, la suite ya implementa TC-004, TC-005, TC-007 y TC-012, aunque partes de docs/test-cases.md todavía los describen como no planificados o sin automatización confirmada. Conviene actualizar ese documento antes de usarlo como registro definitivo de cobertura.

No ejecuté tests al preparar este README. No afirmo que la suite actual pase ni reporto porcentajes de cobertura.

### Estructura del repositorio

~~~text
betoneta-tours/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── docs/
│   ├── commands.md
│   ├── requirements.md
│   └── test-cases.md
├── images/
│   └── imágenes del sitio y las rutas
├── tests/
│   ├── betoneta.spec.ts
│   └── example.spec.ts
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
~~~

### Instalación y ejecución

Requisitos previos: Node.js con npm, Python disponible como py en Windows o python3 en otras plataformas, y los navegadores de Playwright instalados.

Instala las dependencias fijadas en el lockfile:

~~~sh
npm ci
~~~

Instala los navegadores configurados para la ejecución local:

~~~sh
npx playwright install
~~~

Ejecuta toda la suite:

~~~sh
npm test
~~~

El paquete también define npm run order-66 como alias del mismo comando de Playwright. La configuración de Playwright inicia automáticamente un servidor local en 127.0.0.1:3000; usa py -m http.server en Windows y python3 -m http.server en otras plataformas.

Ejecuta un test en Chromium, por ejemplo:

~~~sh
npx playwright test tests/betoneta.spec.ts --project=chromium --grep "TC-007"
~~~

El flujo de GitHub Actions instala dependencias y navegadores, ejecuta npx playwright test y carga el reporte HTML como artefacto. Tener el flujo configurado no significa que una ejecución haya terminado correctamente.

### Estado actual y próximos pasos

Este es un proyecto de aprendizaje y portafolio en evolución. El catálogo y las interacciones con los detalles de rutas están implementados en la página estática; los requisitos, casos manuales y automatización se desarrollan junto con ella.

Próximos pasos:

1. Ejecutar la suite actual y registrar fecha, navegadores, revisión del producto y resultados.
2. Alinear docs/test-cases.md con los tests existentes y la evidencia de ejecución verificada.
3. Decidir si se eliminan o reemplazan los tests de ejemplo que visitan playwright.dev.
4. Ampliar la automatización para el aviso de estado del proyecto, navegación externa, carga de imágenes, diseño adaptable y accesibilidad cuando corresponda.
5. Seguir revisando la información de las rutas y marcar claramente los datos que no se hayan verificado de forma independiente.
