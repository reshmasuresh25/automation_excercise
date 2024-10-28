export function generateUser() {
  const email = `user${Math.floor(Math.random() * 10000)}@example.com`;
  return {
    email: email,
    password: 'Password123!',
    first_name: 'Test',
    last_name: 'User',
  };
}

export interface User {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}
