import { redirect } from "next/navigation";

// The Course was absorbed into the Academy.
export default function CourseRedirect() {
  redirect("/academy");
}
