import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'

const handler= async(req, res) => {
    // const body = req.json();
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'shamail130silverhawk@gmail.com',
            pass: 'flnpdqrmosnklpfk'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'shamail130silverhawk@gmail.com',
        subject: req.body.subject,
        text: 'Client Name: ' + req.body.name + '\nClient Email: ' + req.body.email + '\nClient Subject: ' + req.body.subject + '\nMessage: ' + req.body.message
    }

    await new Promise((resolve, reject) => { 
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) { console.log(error); }
            else {
                console.log('Email sent: ' + info.response);
                res.status(200).json({ message: 'Check Email!' })
            }
        })
    })

    return
    // NextResponse.json({ message: 'Email sent successfully' })

}
export default handler