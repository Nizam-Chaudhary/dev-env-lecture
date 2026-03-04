import { Request, Response } from 'express';

import { usersService } from './users.service';

export const usersController = {
  list(_req: Request, res: Response): void {
    res.json(usersService.list());
  },
};
