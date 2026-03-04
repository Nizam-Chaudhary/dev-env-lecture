import { Request, Response } from 'express';

import { listUsers } from '../services/users.service';

export function getUsers(_req: Request, res: Response): void {
  res.json(listUsers());
}
