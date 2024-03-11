"use server";

import { FormValues, FormState } from "./config";
import { formSchema } from "./config";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "ssl0.ovh.net",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendMessage(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const data = Object.fromEntries(formData) as FormValues;

  try {
    formSchema.parse(data);

    const body = [
      ["Nom", data.name],
      ["Adresse email", data.email],
    ];

    if (data.phone) {
      body.push(["Téléphone", data.phone]);
    }

    body.push(["Message", data.message]);

    await transporter.sendMail({
      subject: `Nouveau message reçu depuis le formulaire de contact`,
      to: process.env.SMTP_USER,
      from: process.env.SMTP_USER || "",
      replyTo: {
        name: data.name,
        address: data.email,
      },
      html: body
        .map(
          (part) =>
            `<b>${part[0]} :</b><br/><br/>${part[1].replace(/\n/g, "<br />")}`,
        )
        .join("<br/><br/>"),
    });
  } catch (e) {
    console.log("message not sent", data);

    return { status: "error" };
  }

  console.log("message sent", data);

  return { status: "sent" };
}
