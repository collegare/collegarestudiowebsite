import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal";
import { legal } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy" };

export default function Privacy() {
  return <LegalDoc data={legal.privacy} />;
}
