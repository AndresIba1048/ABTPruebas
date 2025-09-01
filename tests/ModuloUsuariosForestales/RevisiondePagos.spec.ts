import { test, expect } from '@playwright/test';

test('RevisiondePagos', async ({ page }) => {
  await page.goto('https://abt.bits.bo/auth/login');
  await page.getByRole('button', { name: 'INGRESAR COMO FUNCIONARIO' }).click();
  await page.getByRole('textbox', { name: 'Correo Electronico o Usuario' }).click();
  await page.getByRole('textbox', { name: 'Correo Electronico o Usuario' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('Admin1234');
  await page.getByRole('button', { name: 'INICIAR SESIÓN' }).click();
  await page.locator('a').filter({ hasText: 'Usuarios Forestales' }).click();
  await page.locator('a').filter({ hasText: 'Administración de Agentes' }).click();
  await page.getByRole('link', { name: ' Inscripciones' }).click();
  await page.locator('app-auxiliar-officers-options').getByRole('button').click();
  await page.getByRole('menuitem', { name: 'Revisar pago' }).locator('a').click();
  /*await page.locator('#paid span').click();
  await page.getByText('El registro ha sido').click();
  await page.getByRole('alert').getByRole('button', { name: 'Close' }).click();
  await page.locator('#paid span').click();
  await page.getByText('El registro ha sido').click();
  await page.getByRole('alert').getByRole('button', { name: 'Close' }).click();
  await page.locator('#disabled span').click();
  await page.getByText('El registro ha sido').click();
  await page.getByRole('alert').getByRole('button', { name: 'Close' }).click();
  await page.locator('#disabled span').click();
  await page.getByText('El registro ha sido').click();
  await page.getByRole('alert').getByRole('button', { name: 'Close' }).click();*/
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'AM' }).click();
  await page.getByRole('button', { name: ' Cerrar Sesión' }).click();
});