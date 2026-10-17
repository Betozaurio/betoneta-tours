
# Betoneta Tours
## Software Requirements Specification (SRS)

**Document ID:** BET-SRS-001  
**Version:** 1.0  
**Status:** Draft — Pending review  
**Project type:** Web application and QA Automation portfolio project

---

# PART I — ENGLISH

## 1. Purpose

Betoneta Tours is a web application concept designed to present cycling experiences in the Tolima region of Colombia.

The application will introduce the Betoneta brand, display a catalog of cycling routes, and communicate a proposed service for transporting cyclists and their bicycles to a route's starting point and picking them up after they complete the ride.

Betoneta Tours is a concept in development. The website shall not represent the proposed transportation service as operational or available for booking.

The project will also serve as a practical learning environment for requirements engineering, manual testing, application development, and automated testing with Playwright and TypeScript.

## 2. Project Scope

### 2.1 In Scope

Version 1.0 will include:

- A homepage presenting the Betoneta brand and its value proposition.
- Navigation between the homepage content and the route catalog.
- A catalog displaying selected cycling route cards.
- Route names, descriptions, reference distances, and total experience duration.
- Expandable and collapsible route details.
- Clear communication of the concept's development status.
- Explicit handling of unknown or unverified information.
- A responsive interface for desktop and mobile devices.
- Documented requirements and manual test cases.
- Manual test execution records and defect investigation.
- Automated functional tests using Playwright and TypeScript.
- Project documentation suitable for a public GitHub portfolio.

### 2.2 Out of Scope

The following features are excluded from Version 1.0:

- Online reservations or booking management.
- Online payments.
- User registration, login, or personal accounts.
- An administrative dashboard or content management system.
- A production backend or database.
- Real-time route tracking or GPS navigation.
- Operational scheduling or guaranteed transportation availability.
- Claims that the proposed service is commercially operational.
- Claims that route conditions, distances, elevations, or transportation feasibility have been independently verified.

These features may be considered for future versions.

## 3. Intended Users

- **Website visitors:** People interested in discovering cycling routes and learning about the Betoneta concept.
- **Cyclists:** Visitors looking for route information, including distance, elevation gain, and difficulty when known.
- **Portfolio reviewers and recruiters:** People evaluating the project's requirements, testing strategy, implementation, and automation practices.

## 4. Functional Requirements

### FR-001 — Homepage Presentation

The application shall display the Betoneta brand name, the tagline "Más rutas, menos límites," and a clear explanation of the proposed transportation concept.

The homepage shall provide a visible way to access the route catalog.

**Acceptance criteria:**
- The brand name is visible.
- The tagline is displayed correctly.
- The proposed transportation concept is explained.
- A navigation link to the route catalog is available.
- The content does not imply that the proposed service is currently operational.

### FR-002 — Route Catalog and Total Experience Duration

The application shall display a catalog of cycling route cards.

Each route card shall display:
- Route name.
- Short description.
- Reference distance, when available.
- Total estimated experience duration.

Total experience duration shall account for transportation to the route starting point, the cycling activity, and pickup after the ride.

If the total duration has not been established, the interface shall display "To be determined" rather than an invented estimate.

**Acceptance criteria:**
- Each displayed route has a name and description.
- Available reference distances are presented with appropriate units.
- Duration is explicitly identified as an estimate.
- The estimated duration represents the complete experience, not cycling time alone.
- Unknown durations are clearly marked as "To be determined."
- Demonstration routes are not presented as confirmed commercial offerings.

### FR-003 — Route Details

Each route card shall provide a control to reveal additional information about that route.

When available, the additional information shall include:
- Reference distance.
- Positive elevation gain.
- Difficulty level.
- Route description or relevant characteristics.
- Information about the proposed transportation concept.

Unknown or unverified values shall not be presented as confirmed facts.

**Acceptance criteria:**
- The details control reveals the corresponding route information.
- The information belongs to the selected route.
- Unavailable values are omitted or explicitly identified as undetermined.
- The interface does not imply that unverified information is confirmed.

### FR-004 — Expand and Collapse Route Details

The user shall be able to expand and collapse route details using the corresponding control.

**Acceptance criteria:**
- Route details are initially hidden.
- Activating the control reveals the details.
- Activating the control again hides the details.
- The control's visible label or accessible name communicates its current action, where implemented.

### FR-005 — Independent Route Cards

Each route card shall control its own details without accidentally displaying information belonging to another route.

At most one route card shall remain expanded at a time.

**Acceptance criteria:**
- Opening a route displays its own details.
- Opening another route closes the previously expanded route.
- The second route displays its own information.
- Closing the active route hides its details.

### FR-006 — Navigation

The application shall provide navigation between the homepage content and the route catalog.

**Acceptance criteria:**
- The route catalog can be reached using the provided navigation links.
- Navigation targets correspond to the intended page sections.
- The user can return to the homepage content through the available navigation.

### FR-007 — Concept Status and Information Transparency

The application shall clearly identify Betoneta Tours as a concept in development.

The proposed transportation service shall not be represented as operational, guaranteed, or available for booking.

**Acceptance criteria:**
- The development status is communicated clearly.
- Demonstration routes are identified as conceptual or demonstrative content.
- No booking or payment functionality is implied to exist.
- Unknown information is not fabricated to make the catalog appear complete.
- Unverified route and service information is not presented as confirmed.

## 5. Non-Functional Requirements

### NFR-001 — Responsive Interface

The interface shall be usable on desktop and mobile devices.

Route cards, text, and navigation controls shall remain accessible and readable without unintended horizontal overflow at the supported viewport sizes.

### NFR-002 — Usability

Interactive controls shall have clear labels and understandable behavior.

The interface shall provide a consistent way to discover and reveal additional route information.

### NFR-003 — Maintainability

The implementation shall use a consistent structure and naming convention to support future development and test automation.

### NFR-004 — Testability

The application shall expose identifiable, stable UI elements that can be located reliably by Playwright.

Automated tests shall verify observable behavior rather than depend unnecessarily on implementation details.

### NFR-005 — Documentation

The repository shall document the product scope, requirements, manual test cases, automated tests, execution instructions, and relevant testing results.

### NFR-006 — Language

The user interface shall use Spanish as its primary language for Version 1.0.

The project documentation shall be presented in English first and Spanish second for portfolio purposes.

## 6. Initial Route Data

The initial demonstration catalog is expected to include:

| Route | Reference distance | Reference elevation gain |
|---|---|---|
| Cañón del Combeima | 30–36 km | Approximately +1,500 m |
| Las Amarillas | 4.5 km ascent | Approximately +600 m |
| Chucuní–Alvarado | Approximately 68 km | Approximately +678 m |

These figures are preliminary reference data supplied for the project. They have not been independently verified and shall not be treated as authoritative route information.

The total experience duration, including transportation to the starting point, the cycling activity, and pickup after the ride, remains to be determined.

The routes are demonstration content and do not establish that the proposed transportation service is available.

## 7. Testing and Quality Strategy

Testing shall follow a requirements-driven approach.

Each applicable requirement shall be associated with one or more test cases containing:

- Test case identifier.
- Requirement reference.
- Preconditions.
- Test steps.
- Test data, when applicable.
- Expected result.
- Actual result.
- Execution status and evidence, where available.

The initial quality workflow will include:

1. Requirements review.
2. Test case design.
3. Application implementation.
4. Manual test execution.
5. Defect identification and investigation.
6. Automated test development using Playwright and TypeScript.
7. Automated execution and result analysis.
8. Documentation and portfolio review.

Automated test results shall be interpreted as evidence of the specific behavior covered by each test, not as proof that the entire application is defect-free.

## 8. Version 1.0 Completion Criteria

Version 1.0 may be considered ready for portfolio review when:

- The in-scope functionality is implemented.
- Applicable requirements have corresponding test cases.
- Manual tests have been executed and their results documented.
- Selected functional test cases have been automated with Playwright.
- Automated tests have been executed and their results reviewed.
- Known limitations and unverified information are documented.
- The interface has been checked at supported desktop and mobile viewport sizes.
- The repository contains clear setup and execution instructions.
- English and Spanish documentation versions are available.
- The application communicates the concept's development status accurately.

Completion shall be based on documented evidence rather than the appearance of the website alone.

---

# PARTE II — ESPAÑOL

## 1. Propósito

Betoneta Tours es un concepto de aplicación web diseñado para presentar experiencias de ciclismo en la región del Tolima, Colombia.

La aplicación presentará la marca Betoneta, mostrará un catálogo de rutas de ciclismo y comunicará una propuesta de servicio para transportar ciclistas y sus bicicletas hasta el punto de partida de una ruta y recogerlos cuando finalicen el recorrido.

Betoneta Tours es un concepto en desarrollo. El sitio web tiene como objetivo presentar y demostrar el concepto; no deberá presentar el servicio de transporte propuesto como operativo ni disponible para reservas.

El proyecto también servirá como entorno práctico de aprendizaje de ingeniería de requisitos, pruebas manuales, desarrollo de aplicaciones y pruebas automatizadas con Playwright y TypeScript.

## 2. Alcance del proyecto

### 2.1 Incluido en el alcance

La versión 1.0 incluirá:

- Una página de inicio que presente la marca Betoneta y su propuesta de valor.
- Navegación entre el contenido de inicio y el catálogo de rutas.
- Un catálogo con tarjetas de rutas de ciclismo seleccionadas.
- Nombres, descripciones, distancias de referencia y duración total de las experiencias.
- Detalles de rutas que se puedan desplegar y ocultar.
- Comunicación clara del estado de desarrollo del concepto.
- Tratamiento explícito de información desconocida o no verificada.
- Una interfaz adaptable a dispositivos de escritorio y móviles.
- Requisitos documentados y casos de prueba manuales.
- Registros de ejecución de pruebas manuales e investigación de defectos.
- Pruebas funcionales automatizadas con Playwright y TypeScript.
- Documentación adecuada para un portafolio público en GitHub.

### 2.2 Fuera del alcance

Las siguientes funcionalidades quedan excluidas de la versión 1.0:

- Reservas o gestión de reservas en línea.
- Pagos en línea.
- Registro, inicio de sesión o cuentas personales.
- Panel administrativo o sistema de gestión de contenidos.
- Backend o base de datos de producción.
- Seguimiento de rutas en tiempo real o navegación GPS.
- Programación operativa o garantía de disponibilidad del transporte.
- Afirmaciones de que el servicio propuesto está operativo comercialmente.
- Afirmaciones de que las condiciones, distancias, elevaciones o viabilidad del transporte han sido verificadas independientemente.

Estas funcionalidades podrán evaluarse para versiones futuras.

## 3. Usuarios previstos

- **Visitantes del sitio web:** Personas interesadas en descubrir rutas de ciclismo y conocer el concepto de Betoneta.
- **Ciclistas:** Visitantes que buscan información sobre rutas, incluyendo distancia, desnivel y dificultad cuando se conozcan estos datos.
- **Revisores del portafolio y reclutadores:** Personas que evalúan los requisitos, la estrategia de pruebas, la implementación y las prácticas de automatización del proyecto.

## 4. Requisitos funcionales

### RF-001 — Presentación de la página de inicio

La aplicación deberá mostrar el nombre de la marca Betoneta, la frase «Más rutas, menos límites» y una explicación clara del concepto de transporte propuesto.

La página de inicio deberá ofrecer una forma visible de acceder al catálogo de rutas.

**Criterios de aceptación:**
- El nombre de la marca es visible.
- La frase de marca se muestra correctamente.
- Se explica el concepto de transporte propuesto.
- Existe un enlace de navegación al catálogo de rutas.
- El contenido no implica que el servicio propuesto esté operativo actualmente.

### RF-002 — Catálogo de rutas y duración total de la experiencia

La aplicación deberá mostrar un catálogo de tarjetas de rutas de ciclismo.

Cada tarjeta deberá mostrar:
- Nombre de la ruta.
- Descripción breve.
- Distancia de referencia, cuando esté disponible.
- Duración total estimada de la experiencia.

La duración total deberá contemplar el transporte propuesto hasta el punto de partida, la actividad de ciclismo y la recogida al finalizar el recorrido.

Si la duración total no ha sido establecida, la interfaz deberá mostrar «Por determinar» en lugar de una estimación inventada.

**Criterios de aceptación:**
- Cada ruta mostrada tiene nombre y descripción.
- Las distancias de referencia disponibles se presentan con unidades apropiadas.
- La duración se identifica explícitamente como estimada.
- La duración representa la experiencia completa, no solamente el tiempo de ciclismo.
- Las duraciones desconocidas se marcan como «Por determinar».
- Las rutas demostrativas no se presentan como servicios comerciales confirmados.

### RF-003 — Detalles de las rutas

Cada tarjeta deberá ofrecer un control para mostrar información adicional de la ruta correspondiente.

Cuando estén disponibles, los detalles incluirán:
- Distancia de referencia.
- Desnivel positivo.
- Nivel de dificultad.
- Descripción o características relevantes de la ruta.
- Información sobre el concepto de transporte propuesto.

Los valores desconocidos o no verificados no deberán presentarse como hechos confirmados.

**Criterios de aceptación:**
- El control de detalles muestra la información correspondiente a la ruta.
- La información pertenece a la ruta seleccionada.
- Los valores no disponibles se omiten o se identifican expresamente como pendientes de determinar.
- La interfaz no presenta información sin verificar como confirmada.

### RF-004 — Desplegar y ocultar detalles

El usuario deberá poder desplegar y ocultar los detalles mediante el control correspondiente.

**Criterios de aceptación:**
- Los detalles están ocultos inicialmente.
- Al activar el control, los detalles se muestran.
- Al activar el control nuevamente, los detalles se ocultan.
- La etiqueta visible o el nombre accesible del control comunica su acción actual, cuando esté implementado.

### RF-005 — Independencia de las tarjetas

Cada tarjeta deberá controlar sus propios detalles sin mostrar accidentalmente información perteneciente a otra ruta.

Como máximo, una tarjeta podrá permanecer desplegada a la vez.

**Criterios de aceptación:**
- Al abrir una ruta, se muestran sus propios detalles.
- Al abrir otra ruta, se cierra la que estaba desplegada.
- La segunda ruta muestra su propia información.
- Al cerrar la ruta activa, sus detalles se ocultan.

### RF-006 — Navegación

La aplicación deberá proporcionar navegación entre el contenido de inicio y el catálogo de rutas.

**Criterios de aceptación:**
- Se puede acceder al catálogo mediante los enlaces proporcionados.
- Los destinos de navegación corresponden a las secciones previstas.
- El usuario puede regresar al contenido de inicio mediante la navegación disponible.

### RF-007 — Estado del concepto y transparencia de la información

La aplicación deberá identificar claramente a Betoneta Tours como un concepto en desarrollo.

El servicio de transporte propuesto no deberá presentarse como operativo, garantizado ni disponible para reservas.

**Criterios de aceptación:**
- El estado de desarrollo se comunica claramente.
- Las rutas se identifican como contenido conceptual o demostrativo.
- No se da a entender que existen funcionalidades de reservas o pagos.
- No se inventa información para aparentar que el catálogo está completo.
- La información no verificada de las rutas y del servicio no se presenta como confirmada.

## 5. Requisitos no funcionales

### RNF-001 — Interfaz adaptable

La interfaz deberá ser utilizable en dispositivos de escritorio y móviles.

Las tarjetas, los textos y los controles de navegación deberán permanecer accesibles y legibles, sin desbordamientos horizontales involuntarios en los tamaños de pantalla admitidos.

### RNF-002 — Usabilidad

Los controles interactivos deberán tener etiquetas claras y un comportamiento comprensible.

La interfaz deberá ofrecer una forma consistente de descubrir y mostrar información adicional sobre las rutas.

### RNF-003 — Mantenibilidad

La implementación deberá utilizar una estructura y convenciones de nombres consistentes para facilitar el desarrollo futuro y la automatización de pruebas.

### RNF-004 — Facilidad de prueba

La aplicación deberá exponer elementos de interfaz identificables y estables que Playwright pueda localizar de manera confiable.

Las pruebas automatizadas deberán verificar comportamientos observables y evitar depender innecesariamente de detalles internos de implementación.

### RNF-005 — Documentación

El repositorio deberá documentar el alcance del producto, los requisitos, los casos de prueba manuales, las pruebas automatizadas, las instrucciones de ejecución y los resultados relevantes de las pruebas.

### RNF-006 — Idioma

La interfaz de usuario utilizará el español como idioma principal de la versión 1.0.

La documentación del proyecto estará disponible primero en inglés y después en español para su presentación en el portafolio.

## 6. Datos iniciales de las rutas

Se espera que el catálogo demostrativo inicial incluya:

| Ruta | Distancia de referencia | Desnivel positivo de referencia |
|---|---|---|
| Cañón del Combeima | 30–36 km | Aproximadamente +1.500 m |
| Las Amarillas | 4,5 km de ascenso | Aproximadamente +600 m |
| Chucuní–Alvarado | Aproximadamente 68 km | Aproximadamente +678 m |

Estas cifras son datos preliminares de referencia suministrados para el proyecto. No han sido verificados independientemente y no deberán tratarse como información definitiva sobre las rutas.

La duración total de la experiencia, incluyendo el transporte hasta el punto de partida, la actividad de ciclismo y la recogida al finalizar el recorrido, está pendiente de determinar.

Las rutas son contenido demostrativo y no establecen que el servicio de transporte propuesto esté disponible.

## 7. Estrategia de pruebas y calidad

Las pruebas seguirán un enfoque basado en requisitos.

Cada requisito aplicable deberá estar asociado con uno o varios casos de prueba que contengan:

- Identificador del caso de prueba.
- Referencia al requisito.
- Precondiciones.
- Pasos de ejecución.
- Datos de prueba, cuando correspondan.
- Resultado esperado.
- Resultado obtenido.
- Estado de ejecución y evidencias, cuando estén disponibles.

El flujo inicial de calidad incluirá:

1. Revisión de requisitos.
2. Diseño de casos de prueba.
3. Implementación de la aplicación.
4. Ejecución de pruebas manuales.
5. Identificación e investigación de defectos.
6. Desarrollo de pruebas automatizadas con Playwright y TypeScript.
7. Ejecución automatizada y análisis de resultados.
8. Documentación y revisión del portafolio.

Los resultados de las pruebas automatizadas deberán interpretarse como evidencia del comportamiento específico que verifica cada prueba, no como una garantía de que toda la aplicación esté libre de defectos.

## 8. Criterios de finalización de la versión 1.0

La versión 1.0 podrá considerarse lista para la revisión del portafolio cuando:

- Las funcionalidades incluidas en el alcance estén implementadas.
- Los requisitos aplicables tengan casos de prueba asociados.
- Se hayan ejecutado las pruebas manuales y documentado sus resultados.
- Se hayan automatizado con Playwright los casos funcionales seleccionados.
- Las pruebas automatizadas se hayan ejecutado y sus resultados hayan sido revisados.
- Se hayan documentado las limitaciones conocidas y la información no verificada.
- La interfaz se haya comprobado en los tamaños de pantalla de escritorio y móviles admitidos.
- El repositorio contenga instrucciones claras de instalación y ejecución.
- Estén disponibles las versiones de la documentación en inglés y español.
- La aplicación comunique correctamente que el concepto está en desarrollo.

La finalización se determinará a partir de evidencias documentadas y no únicamente por la apariencia visual del sitio web.
