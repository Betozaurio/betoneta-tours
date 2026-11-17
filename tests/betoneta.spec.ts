
import { test, expect } from '@playwright/test';

test('TC-001: Homepage branding', async ({ page }) => {
    await page.goto('/');

    // Verify the Betoneta brand.
    await expect(
        page.getByRole('heading', { name: 'Betoneta', level: 1 })
    ).toBeVisible();

    // Verify the tagline.
    await expect(
        page.getByText('Más rutas, menos límites.', { exact: true })
    ).toBeVisible();

    // Verify the proposed service description.
    await expect(
        page.getByText(
            /Descubre las rutas de Ibagué mientras Betoneta/
        )
    ).toBeVisible();
});
test('TC-002: Navigate to the route catalog', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Explorar experiencias' }).click();
    await expect(page).toHaveURL(/#rutas$/);
    await expect(
        page.getByRole('heading', { name: 'explora nuestras rutas', level: 2 })
    ).toBeVisible();

});
test('TC-012: Highlight the route catalog when navigating to it', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Explorar experiencias' }).click();
    const encabezadorutas = page.getByRole('heading', { name: 'Explora nuestras rutas', level: 2 });
    await expect(page).toHaveURL(/#rutas$/);
    await expect(encabezadorutas).toHaveClass(/resaltar/);
    // The highlight is temporary; Playwright retries until the class is removed.
    await expect(encabezadorutas).not.toHaveClass(/resaltar/);

    await page.goto('/#rutas');
    await expect(encabezadorutas).not.toHaveClass(/resaltar/);

});



test('TC-003: Display route information', async ({ page }) => {
    await page.goto('/#rutas');
    const rutas = [
        {
            nombre: 'Cañón del Combeima',
            descripcion: 'Un recorrido de montaña entre paisajes andinos y caminos rurales.',
            distancia: 'Distancia de referencia: 30–36 km',
            duracion: 'Duración total: Por determinar',
        },
        {
            nombre: 'Las Amarillas',
            descripcion: 'Un ascenso exigente para ciclistas que disfrutan los grandes retos.',
            distancia: 'Distancia de referencia: 4,5 km de ascenso',
            duracion: 'Duración total: Por determinar',
        },
        {
            nombre: 'Chucuní – Alvarado',
            descripcion: 'Una alternativa de recorrido más rodador por los paisajes rurales del Tolima.',
            distancia: 'Distancia de referencia: 68 km',
            duracion: 'Duración total: Por determinar',
        }
    ]
    for (const ruta of rutas) {
        const tarjeta = page
            .locator('.tarjeta-ruta')
            .filter({
                has: page.getByRole('heading', { name: ruta.nombre })
            });
        await expect(tarjeta).toBeVisible();
        await expect(tarjeta.getByText(ruta.descripcion)).toBeVisible();
        await expect(tarjeta.getByText(ruta.distancia)).toBeVisible();
        await expect(tarjeta.getByText(ruta.duracion)).toBeVisible();
    }
});

test('TC-004: Display route details', async ({ page }) => {
    await page.goto('/#rutas');
    const tarjeta = page
        .locator('.tarjeta-ruta')
        .filter({
            has: page.getByRole('heading', {
                name: 'Cañón del Combeima',
                exact: true
            })
        });
    await expect(tarjeta).toBeVisible();
    await tarjeta.getByRole('button', { name: 'Ver detalles' }).click();
    await expect(tarjeta.locator('.detalles-ruta')).toBeVisible();
    const otrasTarjetas = page
        .locator('.tarjeta-ruta')
        .filter({
            hasNot: page.getByRole('heading', {
                name: 'Cañón del Combeima',
                exact: true,
            }),
        });
    const detallesDeOtrasTarjetas = otrasTarjetas.locator('.detalles-ruta');
    await expect(detallesDeOtrasTarjetas).toHaveCount(2);
    await expect(detallesDeOtrasTarjetas.nth(0)).toBeHidden();
    await expect(detallesDeOtrasTarjetas.nth(1)).toBeHidden();
});
test('TC-005: Hide route details', async ({ page }) => {
    await page.goto('/#rutas');

    const tarjeta = page
        .locator('.tarjeta-ruta')
        .filter({
            has: page.getByRole('heading', {
                name: 'Cañón del Combeima',
                exact: true,
            }),
        });

    const detalles = tarjeta.locator('.detalles-ruta');
    const botonDetalles = tarjeta.getByRole('button', {
        name: 'Ver detalles',
    });

    await botonDetalles.click();
    await expect(detalles).toBeVisible();

    await botonDetalles.click();
    await expect(detalles).toBeHidden();
});
test('TC-006: Keep route details independent', async ({ page }) => {
    await page.goto('/#rutas');

    const tarjetaCombeima = page
        .locator('.tarjeta-ruta')
        .filter({
            has: page.getByRole('heading', {
                name: 'Cañón del Combeima',
                exact: true,
            }),
        });

    const tarjetaAmarillas = page
        .locator('.tarjeta-ruta')
        .filter({
            has: page.getByRole('heading', {
                name: 'Las Amarillas',
                exact: true,
            }),
        });

    const detallesCombeima = tarjetaCombeima.locator('.detalles-ruta');
    const detallesAmarillas = tarjetaAmarillas.locator('.detalles-ruta');

    await expect(tarjetaCombeima).toBeVisible();
    await expect(tarjetaAmarillas).toBeVisible();

    await tarjetaCombeima
        .getByRole('button', { name: 'Ver detalles' })
        .click();
    await expect(detallesCombeima).toBeVisible();

    await tarjetaAmarillas
        .getByRole('button', { name: 'Ver detalles' })
        .click();

    await expect(detallesCombeima).toBeHidden();
    await expect(detallesAmarillas).toBeVisible();
});
test('TC-007: Display the correct route details', async ({ page }) => {
    await page.goto('/#rutas');

    const rutas = [
        {
            nombre: 'Cañón del Combeima',
            identificador: 'COMBEIMA-01',
            datoDistintivo: 'Dificultad: Alta',
        },
        {
            nombre: 'Las Amarillas',
            identificador: 'LAS-AMARILLAS-01',
            datoDistintivo: 'Distancia: 4,5 km de ascenso',
        },
        {
            nombre: 'Chucuní – Alvarado',
            identificador: 'CHUCUNI-ALVARADO-01',
            datoDistintivo: 'Distancia: 68 km aproximadamente',
        },
    ];

    for (const ruta of rutas) {
        const tarjeta = page
            .locator('.tarjeta-ruta')
            .filter({
                has: page.getByRole('heading', {
                    name: ruta.nombre,
                    exact: true,
                }),
            });

        const detalles = tarjeta.locator('.detalles-ruta');
        const botonDetalles = tarjeta.getByRole('button', {
            name: 'Ver detalles',
        });

        await expect(tarjeta).toBeVisible();

        await botonDetalles.click();
        await expect(detalles).toBeVisible();

        await expect(
            detalles.getByText(
                `Identificador de prueba: ${ruta.identificador}`,
                { exact: true },
            ),
        ).toBeVisible();

        await expect(
            detalles.getByText(ruta.datoDistintivo, { exact: true }),
        ).toBeVisible();

        await botonDetalles.click();
        await expect(detalles).toBeHidden();
    }
});

test('TC-008: Communicate the project development status', async ({ page }) => {
    await page.goto('/');

    const avisoDemo = page.locator('.aviso-demo');

    await expect(
        page.getByRole('heading', { name: 'Betoneta', level: 1 }),
    ).toBeVisible();
    await expect(avisoDemo).toBeVisible();
    await expect(avisoDemo).toContainText(
        'Proyecto en desarrollo. Las rutas son demostrativas y no representan servicios operativos confirmados ni reservas garantizadas.',
    );

    await page.getByRole('link', { name: 'Explorar experiencias' }).click();

    await expect(page).toHaveURL(/#rutas$/);
    await expect(
        page.getByRole('heading', {
            name: 'Explora nuestras rutas',
            level: 2,
        }),
    ).toBeVisible();
    await expect(avisoDemo).toBeVisible();
    await expect(
        page.getByText(
            'Estas rutas son experiencias de demostración.',
            { exact: false },
        ),
    ).toBeVisible();
});

test('TC-009: Responsive layout', async ({ page }) => {
    const viewports = [
        { name: 'desktop', width: 1365, height: 900 },
        { name: 'mobile', width: 390, height: 844 },
    ];

    for (const viewport of viewports) {
        await page.setViewportSize({
            width: viewport.width,
            height: viewport.height,
        });
        await page.goto('/');

        await expect(
            page.getByRole('heading', { name: 'Betoneta', level: 1 }),
        ).toBeVisible();

        const homeHasNoHorizontalOverflow = await page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
        );
        expect(homeHasNoHorizontalOverflow, `${viewport.name} homepage overflow`).toBe(true);

        await page.getByRole('link', { name: 'Explorar experiencias' }).click();
        await expect(page).toHaveURL(/#rutas$/);
        await expect(
            page.getByRole('heading', { name: 'Explora nuestras rutas', level: 2 }),
        ).toBeVisible();

        const catalogHasNoHorizontalOverflow = await page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
        );
        expect(catalogHasNoHorizontalOverflow, `${viewport.name} catalog overflow`).toBe(true);

        const cards = page.locator('.tarjeta-ruta');
        await expect(cards).toHaveCount(3);

        const cardBounds = await cards.evaluateAll((elements) =>
            elements.map((element) => {
                const rect = element.getBoundingClientRect();
                return { left: rect.left, right: rect.right, width: rect.width };
            }),
        );
        for (const bounds of cardBounds) {
            // NFR-001 requires readable, usable content without unintended overflow; it does
            // not specify a fixed minimum card width. This is a layout heuristic, not a formal requirement.
            expect(bounds.width, `${viewport.name} route card width`).toBeGreaterThan(0);
            expect(bounds.left, `${viewport.name} route card left edge`).toBeGreaterThanOrEqual(0);
            expect(bounds.right, `${viewport.name} route card right edge`).toBeLessThanOrEqual(viewport.width);
        }

        for (const card of await cards.all()) {
            await expect(card.locator('h3')).toBeVisible();
            await expect(card.locator('p').first()).toBeVisible();

            const detailsButton = card.getByRole('button', { name: 'Ver detalles' });
            await expect(detailsButton).toBeVisible();
            await detailsButton.click();
            await expect(card.locator('.detalles-ruta')).toBeVisible();
            await expect(page.locator('.detalles-ruta:visible')).toHaveCount(1);
        }
    }
})

test('TC-010: Open external routes in a new tab', async ({ page, context }) => {
    // Abrimos Betoneta en la pestaña que Playwright ya creó para este test.
    await page.goto('/');

    // Buscamos el enlace por su nombre visible, igual que lo encontraría una persona.
    const enlaceVerRutas = page.getByRole('link', { name: 'Ver rutas', exact: true });

    // Confirmamos que el enlace existe y está visible antes de intentar usarlo.
    await expect(enlaceVerRutas).toBeVisible();

    // Empezamos a esperar la nueva pestaña antes del clic para no perdernos el evento.
    const nuevaPestanaPromise = page.waitForEvent('popup');

    // Al hacer clic, el enlace externo debería abrir Wikiloc en otra pestaña.
    await enlaceVerRutas.click();

    // Esperamos a que el navegador cree la pestaña y guardamos su objeto para inspeccionarlo.
    const nuevaPestana = await nuevaPestanaPromise;

    // Verificamos que la nueva pestaña llegó a la página de rutas de Ibagué en Wikiloc.
    await expect(nuevaPestana).toHaveURL(
        /^https:\/\/es\.wikiloc\.com\/rutas\/mountain-bike\/colombia\/tolima\/ibague/,
    );

    // El contexto representa la ventana del navegador; debe contener ambas pestañas.
    await expect.poll(() => context.pages().length).toBe(2);

    // Comprobamos que la pestaña original sigue en Betoneta y todavía muestra su marca.
    await expect(page).toHaveURL(/\/$/);
    await expect(
        page.getByRole('heading', { name: 'Betoneta', level: 1 }),
    ).toBeVisible();
});

test('TC-011: Switch from Route B to Route C', async ({ page }) => {
    // Abrimos directamente el catálogo, donde están las dos tarjetas del caso.
    await page.goto('/#rutas');

    // Identificamos la tarjeta de Las Amarillas usando su encabezado accesible.
    const tarjetaAmarillas = page
        .locator('.tarjeta-ruta')
        .filter({
            has: page.getByRole('heading', {
                name: 'Las Amarillas',
                exact: true,
            }),
        });

    // Identificamos Chucuní–Alvarado de la misma forma para limitar el clic a esa tarjeta.
    const tarjetaChucuni = page
        .locator('.tarjeta-ruta')
        .filter({
            has: page.getByRole('heading', {
                name: 'Chucuní – Alvarado',
                exact: true,
            }),
        });

    // Guardamos los contenedores de detalles para comprobar su visibilidad después de cada clic.
    const detallesAmarillas = tarjetaAmarillas.locator('.detalles-ruta');
    const detallesChucuni = tarjetaChucuni.locator('.detalles-ruta');

    // Comprobamos que ambas tarjetas están presentes antes de interactuar con ellas.
    await expect(tarjetaAmarillas).toBeVisible();
    await expect(tarjetaChucuni).toBeVisible();

    // Cumplimos la precondición del caso: abrimos primero Las Amarillas.
    await tarjetaAmarillas
        .getByRole('button', { name: 'Ver detalles' })
        .click();
    await expect(detallesAmarillas).toBeVisible();

    // Ejecutamos el paso del caso: abrimos los detalles de Chucuní–Alvarado.
    await tarjetaChucuni
        .getByRole('button', { name: 'Ver detalles' })
        .click();

    // Verificamos el resultado esperado para ambas tarjetas.
    await expect(detallesAmarillas).toBeHidden();
    await expect(detallesChucuni).toBeVisible();

    // Confirmamos que no quedó abierta ninguna otra tarjeta del catálogo.
    await expect(page.locator('.detalles-ruta:visible')).toHaveCount(1);
});
