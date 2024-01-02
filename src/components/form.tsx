import { FormEvent, useState } from "react";

export default function Form() {
  const [responseMessage, setResponseMessage] = useState("");

async function submit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const response = await fetch("/api/feedback", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  if (data.message) {
    setResponseMessage(data.message);
  }
  return (
    <form action="https://birthday.badcop.live/rsvp" onSubmit={submit}>
    <input type="text" name="name" placeholder="Minecraft username" />
    <button type="submit" onSubmit={submit}>Submit</button>
    </form>);
}
