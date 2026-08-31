import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service" };

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" updated="—">
      <h2>The agreement</h2>
      <p>
        By using this site or buying a product from Collegare Studio, you agree to these terms. If you don&rsquo;t, please
        don&rsquo;t use the site.
      </p>
      <h2>What you&rsquo;re buying</h2>
      <p>
        Access to digital course material, templates, and community for the term described at purchase. Access is for
        one person and is not transferable.
      </p>
      <h2>What this isn&rsquo;t</h2>
      <p>
        Collegare Studio provides education, not legal, tax, accounting, or financial advice. Templates are starting
        points, not counsel. Consult a qualified professional for your situation.
      </p>
      <h2>No income promise</h2>
      <p>
        We make no guarantee of earnings, brand deals, or results. Outcomes depend on your work, market, and
        circumstances.
      </p>
      <h2>Intellectual property</h2>
      <p>
        Course material and templates remain the property of Collegare Studio. You may use templates in your own
        business; you may not resell, redistribute, or teach them as your own.
      </p>
      <h2>Refunds</h2>
      <p>Refund terms are stated at checkout and form part of these terms.</p>
      <h2>Contact</h2>
      <p>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </LegalPage>
  );
}
