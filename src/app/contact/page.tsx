import type { Metadata } from "next";
import { PageHero, TrialCTA } from "@/components/Sections";
import { site } from "@/config/site";
export const metadata: Metadata = { title: "Contact", description: `Contact ${site.name} or book a free trial.`, alternates: { canonical: "/contact" } };
export default function Page() {
  return <><PageHero title="Contact" sub="Visit, call or send an enquiry. We reply fast." />
    <section className="sect"><div className="wrap grid gap-10 md:grid-cols-3">
      <div><h2 className="text-3xl">Address</h2><p className="mt-3 text-white/70">{site.contact.address}</p><a className="mt-3 inline-block text-lime" href={site.contact.mapUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a></div>
      <div><h2 className="text-3xl">Call or write</h2><p className="mt-3 text-white/70">{site.contact.phone}</p><a className="text-lime" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></div>
      <div><h2 className="text-3xl">Hours</h2><ul className="mt-3 text-white/70">{site.hours.map((h) => <li key={h.days}>{h.days}: {h.time}</li>)}</ul></div>
    </div></section><TrialCTA /></>;
}
