const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "f41774f03e4f54",
        pass: "b1a64f4d8d2c6a"
    }
};

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if (error) {
            console.log(error);
        }else{
            console.log(info)
            return info.response
        }
    })
}

let email_data = {
    from: 'fgh0296@naver.com',
    to: 'asd029600@gmail.com',
    subject: '안녕 나?',
    text: '노드제이에스 잼있다.'
}

send(email_data)