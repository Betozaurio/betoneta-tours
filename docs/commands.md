# Betoneta Tours — Catálogo de comandos

**Propósito:** recordar cómo arrancar la aplicación y ejecutar las pruebas automatizadas.

## 1. Ejecutar todos los tests

```powershell
npm run order-66
```

Ejecuta la suite de pruebas configurada en Playwright.

**Cuándo usarlo:** para ejecutar todas las pruebas automatizadas del proyecto.

## 2. Ejecutar solamente TC-002 en Chromium

```powershell
npx playwright test tests/betoneta.spec.ts --project=chromium --grep "TC-002"
```

Ejecuta únicamente la prueba de navegación al catálogo de rutas.

**Cuándo usarlo:** cuando estoy trabajando en TC-002 y quiero comprobar los cambios rápidamente.

## 3. Arrancar la aplicación localmente

```powershell
py -m http.server 3000 --bind 127.0.0.1
```

Inicia un servidor HTTP local para servir la página estática.

Abrir en el navegador: http://127.0.0.1:3000

**Importante:** dejar abierta la terminal mientras se necesite el servidor. Si el puerto 3000 ya está ocupado, comprobar si hay otro servidor funcionando antes de iniciar uno nuevo.

## 4. Recordatorios

- Ejecutar los comandos desde la carpeta raíz del proyecto, donde está `package.json`.
- El código de las pruebas se escribe en VS Code; los comandos se ejecutan en la terminal.
- Si una prueba falla, revisar el error completo antes de cambiar el código.
- Registrar los resultados de las pruebas en `docs/test-cases.md` cuando corresponda.

## 5. Comandos añadidos por mí

| Comando | Qué hace |
|---|---|
| `npm run test` | Ejecuta todos los tests de Playwright. |
| `npm run order-66` | Ejecuta la misma suite con mi alias personalizado. |

**Última actualización:** 19 de octubre de 2026.
