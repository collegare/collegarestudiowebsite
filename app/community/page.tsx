import { redirect } from "next/navigation";

// The Community was renamed The Collective.
export default function CommunityRedirect() {
  redirect("/collective");
}
