import { useEffect, useState } from 'react';

import { UserList } from '../components/UserList';
import { fetchUsers } from '../services/users.api';
import type { User } from '../types/user.types';

export function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    void fetchUsers().then(setUsers);
  }, []);

  return (
    <section>
      <h2>Type-based: Users</h2>
      <UserList users={users} />
    </section>
  );
}
