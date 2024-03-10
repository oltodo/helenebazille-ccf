"use server";

import { revalidatePath } from "next/cache";
import { FormValues, FormState } from "./config";
import { formSchema } from "./config";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "ssl0.ovh.net",
  secure: true,
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

    transporter.sendMail({
      subject: `Nouveau message reçu depuis le formulaire de contact`,
      to: process.env.SMTP_USER,
      from: {
        name: data.name,
        address: data.email,
      },
      text: `
    Nom : ${data.name}

    Adresse email : ${data.email}

    ${data.phone ? `Téléphone : ${data.phone}` : ""}

    Message :

    ${data.message}
        `.trim(),
    });
  } catch (e) {
    console.log(e);
  }

  return { message: "sent" };
}
