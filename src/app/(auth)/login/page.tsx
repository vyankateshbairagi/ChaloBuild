import { redirect } from "next/navigation";

export default function LoginPage() {
  // In demo mode, bypass login and enter gym management dashboard directly
  redirect("/dashboard");
}
