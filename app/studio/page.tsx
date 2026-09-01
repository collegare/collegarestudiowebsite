import { redirect } from "next/navigation";

// /studio still resolves — it now points at About.
export default function StudioRedirect() {
  redirect("/about");
}
