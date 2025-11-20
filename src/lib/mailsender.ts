import nodemailer from "nodemailer";
import { MAIL_PASS } from "astro:env/server";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "ibra.sanusi.ayo@gmail.com",
    pass: MAIL_PASS,
  },
});

export async function sendMail(formData: FormData) {
  const name = formData.get("fullname");
  const email = formData.get("email");
  const comment = formData.get("comment");

  const text = `Tienes un nuevo cliente.<br>Nombre: ${name}<br>Email: ${email}<br>Comentario: ${
    comment || "No ha puesto ningún comentario."
  }`;

  const info = await transporter.sendMail({
    from: '"Ibrahim Ayodeji Sanusi" <ibra.sanusi.ayo@gmail.com>',
    to: "ibra.sanusi.ayo@gmail.com",
    subject: "Correo de oportunidad de trabajo - ibrasanusi.com",
    text, // plain‑text body
    html: text, // HTML body
  });

  console.log("Message sent:", info.messageId);
}
