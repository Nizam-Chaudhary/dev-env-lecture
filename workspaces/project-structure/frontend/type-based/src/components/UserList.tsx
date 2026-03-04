import type { User } from '../types/user.types';

type UserListProps = {
  users: User[];
};

export function UserList({ users }: UserListProps) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
