import { Router } from 'express';
import User from "./app/models/User";

const routes = new Router();

routes.get('/', async function (req, res) {
    const user = await User.create({
      name: 'Herval Mata',
      email: 'admin@admin.com',
      password_hash: '123456'
    })
    return res.json(user);
});

export default routes;
