import { useEffect, useState } from 'react';

import { getUsers } from './users.api';
import type { User } from './users.types';

export function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    void getUsers().then(setUsers);
  }, []);

  return (
    <section>
      <h2>Module-based: Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </section>
  );
}
