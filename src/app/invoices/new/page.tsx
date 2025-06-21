"use client";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { handleForm } from "../../actions/actions";
import { startTransition, SyntheticEvent, useState } from "react";
import { SubmitButton } from "../../../components/SubmitButton";

const CreateInvoice = () => {
  const [state, setState] = useState("ready");
  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (state === "pending") return;
    setState("pending");
    const target = event.target as HTMLFormElement;
    startTransition(async () => {
      const formData = new FormData(target);
      await handleForm(formData);
    });
  };

  return (
    <section className={" container mx-auto"}>
      <div className={"flex flex-col p-4 md:p-8 space-y-12"}>
        <div>
          <h1 className={"text-lg font-semibold"}>Invoices</h1>
          <h1 className={"text-3xl font-bold"}>Create new invoice</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          action={handleForm}
          className="flex flex-col space-y-4 md:space-y-6 w-1/3"
        >
          <div>
            <Label htmlFor="name">Billing name</Label>
            <Input id="name" name="name" type="text" />
          </div>
          <div>
            <Label htmlFor="email">Billing email</Label>
            <Input id="email" name="email" type="email" />
          </div>
          <div>
            <Label htmlFor="value">Value</Label>
            <Input id="value" name="value" type="text" />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description"></Textarea>
          </div>
          <SubmitButton />
        </form>
      </div>
    </section>
  );
};
export default CreateInvoice;
