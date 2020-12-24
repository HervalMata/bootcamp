export default {
  host: 'smtp.gmail.com',
  port: 567,
  auth: {
    user: process.env.USER_GMAIL,
    pass: process.env.USER_PASS,
  },
  default: {
    from: 'Equipe GoBarber <noreplay@gobarber.com>',
  },
};
