import { test, expect } from '@playwright/test';

test('Debe crear una Nota de Venta cumpliendo todos los pasos', async ({ page }) => {
    
  // 1. Iniciar sesión y navegar
  await page.goto('https://demo.relbase.cl/');
  await page.getByPlaceholder('Correo Electrónico').fill('qa_junior@relke.cl');
  await page.getByPlaceholder('Contraseña').fill('Demo123456!');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await expect(page.getByRole('heading', { name: 'Te damos la bienvenida a relBase' })).toBeVisible({ timeout: 15000 });

  await page.getByRole('link', { name: ' Ventas' }).click();
  await page.getByRole('link', { name: 'Notas de venta' }).click();
  
  await page.getByRole('link', { name: ' Nuevo' }).click();
  await page.getByRole('link', { name: 'Nota de venta', exact: true }).click();
  await page.waitForURL('**/dtes/notas-venta/new');

  // 4. Completar los datos mínimos
  await page.locator('#select2-sales_note_type_document_sii-container').click();
  await page.getByRole('treeitem', { name: 'FACTURA ELECTRÓNICA' }).click();

  await page.locator('#select2-sales_note_ware_house_id-container').click();
  await page.getByRole('treeitem', { name: 'Bodega principal' }).click();

  await page.locator('#select2-sales_note_customer_id-container').click();
  await page.locator('input[type="search"]').type('CR');
  await page.getByRole('treeitem', { name: '[90331000-6] CRISTAL CHILE' }).click();

  await page.locator('#select2-sales_note_e_document_products_attributes_0_product_id-container').click();
  await page.locator('input[type="search"]').type('ca');
  await page.getByRole('treeitem', { name: '[O-CD-558291] Caja de tomates' }).click();

  const priceInput = page.locator('input[id*="_price"][type="number"]');
  await expect(priceInput).not.toBeEmpty({ timeout: 10000 });
  
  
  const quantityInput = page.locator('input[id*="_quantity"][type="number"]');
  await quantityInput.type('2');
  await page.getByText('Cancelar Previsualizar Enviar').click();

  const totalElement = page.locator('#total');
  await expect(totalElement).not.toHaveText('$0', { timeout: 5000 });
  const totalValue = await totalElement.innerText();

  // 5. Guardar y verificar
  page.on('dialog', dialog => dialog.accept());
  await page.getByRole('button', { name: ' Enviar' }).click();
  await expect(page.getByText('Nota de venta creada correctamente')).toBeVisible();


  await page.goto('https://demo.relbase.cl/dtes/notas-venta');
  await expect(page).toHaveURL(/.*\/dtes\/notas-venta/);
  console.log('✅ ¡Prueba completada con éxito!');
});