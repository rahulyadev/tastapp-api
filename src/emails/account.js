const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID)

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to: email,
        from:'parryrpy@gmail.com',
        subject:'Thanks for joining in!',
        text:'Welcome to the app,' + name + '. Let me know how you get along with the app.'
    }).then(() => {
        console.log("Message sent!!")
    }).catch((e) => {
        console.log(e)
        console.log(e.response.body)
    })
}

const sendExitEmail = (email,name) => {
    sgMail.send({
        to: email,
        from:'parryrpy@gmail.com',
        subject:'Goodbye ' + name + '!',
        text:'Is there anything you felt wrong'
    }).then(() => {
        console.log("Message sent!!")
    }).catch((e) => {
        console.log(e)
        console.log(e.response.body)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendExitEmail
}