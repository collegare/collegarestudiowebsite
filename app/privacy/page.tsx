import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="—">
      <h2>What we collect</h2>
      <p>
        When you join the waitlist we collect the email address you give us, and optionally your first name and the
        creator type you select. If you buy something, our payment processor collects billing details — we never see or
        store full card numbers.
      </p>
      <h2>How we use it</h2>
      <p>
        To email you about the course, the waitlist, and the studio. To understand which campaigns bring people in. We
        do not sell your data.
      </p>
      <h2>Who we share it with</h2>
      <p>
        Our email platform, our payment processor, our analytics provider, and our advertising platforms for
        measurement. Each processes data on our behalf under their own terms.
      </p>
      <h2>Advertising</h2>
      <p>
        We run ads on third-party platforms and may use their pixels to measure conversions and build audiences. You can
        opt out through each platform&rsquo;s ad settings.
      </p>
      <h2>Your choices</h2>
      <p>
        Unsubscribe from any email and we stop. Write to us to request a copy of your data or its deletion.
      </p>
      <h2>Contact</h2>
      <p>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </LegalPage>
  );
}
