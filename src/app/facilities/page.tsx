import type { Metadata } from "next";
import { PageHero, About, Facilities, Programs, Trainers, Plans, Testimonials, TrialCTA, Faq } from "@/components/Sections";
import { site } from "@/config/site";
export const metadata: Metadata = { title: "Facilities", description: "Equipment and spaces built for serious training.", alternates: { canonical: "/facilities" } };
export default function Page() {
  return <><PageHero title="Facilities" sub="Equipment and spaces built for serious training." /><Facilities /><TrialCTA /></>;
}
