
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
