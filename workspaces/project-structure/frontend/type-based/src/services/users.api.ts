import type { User } from '../types/user.types';

export async function fetchUsers(): Promise<User[]> {
  return Promise.resolve([
    { id: 1, name: 'Tim Berners-Lee' },
    { id: 2, name: 'Radia Perlman' },
  ]);
}
