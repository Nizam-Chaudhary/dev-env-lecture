import type { User } from './users.types';

export async function getUsers(): Promise<User[]> {
  return Promise.resolve([
    { id: 1, name: 'Linus Torvalds' },
    { id: 2, name: 'Margaret Hamilton' },
  ]);
}
