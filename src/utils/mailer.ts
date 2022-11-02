import nodemailer from 'nodemailer';

export function sendEmail(aid: string, uid: string, realname: string, status: string, mailing: MailConfig) {
  let transporter = nodemailer.createTransport({
    host: mailing.host,
    port: mailing.port,
    secure: mailing.ssl,
    auth: {
      user: mailing.user,
      pass: mailing.pass,
    },
  });
  transporter.sendMail({
    from: `"CLI" <${mailing.user}>`,
    to: mailing.to,
    subject: "服务器签到反馈",
    html: `<table border="1"><thead><th>aid</th><th>uid</th><th>name</th><th>status</th></thead><tbody><td>${aid}</td><td>${uid}</td><td>${realname}</td><td>${status}</td></tbody></table>`
  }, () => { transporter.close(); });
}