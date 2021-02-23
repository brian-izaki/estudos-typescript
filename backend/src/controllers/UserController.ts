import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
  { name: 'brian', email: 'brian@gmail.com' },
  { name: 'Larissa', email: 'Larissa@gmail.com' },
  { name: 'zara', email: 'zara@gmail.com' },
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users)
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: 'brian', email: 'brian@gmail.com' },
      message: { subject: 'Bem-vindo ao sistema', body: 'seja bem-vindo' }
    });

    return res.send();
  }
}