import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal";
import { legal } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service" };

export default function Terms() {
  return <LegalDoc data={legal.terms} />;
}
