interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: Array<String>;
}

interface MessageDTO {
    to: IMailTo;
    message: IMailMessage;
}

interface IEmailService {
    sendEmail(request: MessageDTO): void;
}

class EmailService implements IEmailService {
    sendEmail({ to, message }: MessageDTO) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
}

export default EmailService;