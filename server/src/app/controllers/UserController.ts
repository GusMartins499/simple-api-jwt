import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

class UserController {
  async store(request: Request, response: Response) {
    const repository = getRepository(User);
    const { email, password } = request.body;

    const userExistis = await repository.findOne({ where: { email } });

    if (userExistis) {
      return response.sendStatus(409); // status conflit
    }

    const user = repository.create({ email, password }); // create entity in node
    await repository.save(user); // save database

    return response.json(user);
  }

  async index(request: Request, response: Response) {
    return response.json(await getRepository(User).find());
  }
}

export default new UserController();
