import type { Metadata } from "next";
import { PageHero, About, Facilities, Programs, Trainers, Plans, Testimonials, TrialCTA, Faq } from "@/components/Sections";
import { site } from "@/config/site";
export const metadata: Metadata = { title: "Membership", description: "Plans and answers before you join.", alternates: { canonical: "/membership" } };
export default function Page() {
  return <><PageHero title="Membership" sub="Plans and answers before you join." /><Plans /><Faq /><TrialCTA /></>;
}
