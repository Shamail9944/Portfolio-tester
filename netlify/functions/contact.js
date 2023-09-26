import nodemailer from 'nodemailer'
import { NextResponse } from "next/server";

function handler(req, res) {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shamail130silverhawk@gmail.com',
            pass: 'flnpdqrmosnklpfk'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'shamail130silverhawk@gmail.com',
        subject: req.body.subject,
        text: 'Client Name: ' + req.body.name + '\nClient Email: ' + req.body.email + '\nClient Subject: ' + req.body.subject + '\nMessage: ' + req.body.message,
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) { console.log(error); }
        else { console.log('Email sent: ' + info.response); }
    })

    return res.status(200).json({ message: 'Check Email!' })
    // NextResponse.json({ message: 'Email sent successfully' })

}
handler();
