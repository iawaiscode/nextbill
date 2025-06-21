"use client";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";
import { Loader } from "lucide-react";

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit">
      {pending ? <Loader className="animate-spin" /> : "Submit"}
    </Button>
  );
};
