import { Request, Response } from 'express';
import EmailService from '../services/EmailService';


const users = [{
    name: 'Daniel Filipe Schwingel',
    email: 'danielfilipeschwingel@gmail.com'
}]

export default {
    async index(req: Request,res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendEmail({
            to: {
                name: 'Daniel Filipe Schiwingel', 
                email: 'danielfilipeschwingel@gmail.com'},
            message: {
                subject: 'Bem vindo ao Sistema',
                body: 'Seja bem-vindo!'
            }
        });
        res.send('E-mail enviado');
    }
}