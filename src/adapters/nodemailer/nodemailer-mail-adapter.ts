import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1ff9001556adcd",
    pass: "660b4da641213b"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
      await transport.sendMail({
    from: 'Equipe Feedget <armazem21rio@gmail.com>',
    to: 'Giovanni Perrotta <gioperrotta@gmail.com>',
    subject,
    html: body
  });
  }
}