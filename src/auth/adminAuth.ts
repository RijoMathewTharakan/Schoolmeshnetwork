const ADMIN_PASSWORD = 'changeme-admin';

export function validateAdminAccess(inputPassword: string): boolean {
  return inputPassword === ADMIN_PASSWORD;
}
