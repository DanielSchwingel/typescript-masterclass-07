import { Request, Response } from 'express';
const users = [{
    name: 'Daniel Filipe Schwingel',
    email: 'danielfilipeschwingel@gmail.com'
}]

export default {
    async index(req: Request,res: Response) {
        return res.json({users});
    }
}