import type { User } from './users.types';

const users: User[] = [{ id: 1, name: 'Ada Lovelace', email: 'ada@example.com' }];

export const usersService = {
  list(): User[] {
    return users;
  },
};
