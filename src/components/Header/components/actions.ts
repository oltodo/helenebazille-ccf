"use server";

import { formSchema } from "./ContactForm";

export async function sendMessage(formData: FormData) {
  console.log(formData);

  const data = Object.fromEntries(formData);

  try {
    formSchema.parse(data);
  } catch (e) {
    console.log(e);
  }

  // const rawFormData = {
  //   customerId: formData.get("customerId"),
  //   amount: formData.get("amount"),
  //   status: formData.get("status"),
  // };

  // mutate data
  // revalidate cache
}
