// poderia ser utilizado type (o type não pode ser extendido interface pode)
interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
  // attachment?: Array<string>; 
}

// DTO: Data Transfer Object

interface IMessageDTO {
  to: IMailTo,
  message: IMailMessage
}

interface IEmailService {
  sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService{
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`)
  }
}

export default EmailService;