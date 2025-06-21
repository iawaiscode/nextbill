"use server";
import { db } from "../../db";
import { invoices } from "../../db/schema";
import { redirect } from "next/navigation";

export const handleForm = async (formData: FormData) => {
  const value = Math.floor(parseFloat(String(formData.get("value"))) * 100);
  const description = String(formData.get("description"));
  const results = await db
    .insert(invoices)
    .values({
      value,
      description,
      status: "open",
    })
    .returning({
      id: invoices.id,
    });
  redirect(`/invoices/${results[0].id}`);
};
