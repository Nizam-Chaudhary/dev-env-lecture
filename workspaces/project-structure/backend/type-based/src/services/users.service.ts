import type { User } from '../types/user.types';

const users: User[] = [{ id: 1, name: 'Grace Hopper', email: 'grace@example.com' }];

export function listUsers(): User[] {
  return users;
}
