const { MailtrapClient } = require("mailtrap");


export default async function handler(req, res) {
    const TOKEN = process.env.MAILTRAP_TOKEN;
    const ENDPOINT = process.env.MAILTRAP_ENDPOINT;

    const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

    const sender = {
    email: "mailtrap@nlu.se",
    name: "Mailtrap Test",
    };

    const recipients = [
    {
        email: "augustsvensson5@gmail.com",
    }
    ];

    client
    .send({
        from: sender,
        to: recipients,
        subject: "You are awesome!",
        text: "Congrats for sending test email with Mailtrap!",
        category: "Integration Test",
    })
    .then(console.log, console.error);

    res.status(302).send();
}