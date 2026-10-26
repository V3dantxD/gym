import type { Metadata } from "next";
import { PageHero, About, Facilities, Programs, Trainers, Plans, Testimonials, TrialCTA, Faq } from "@/components/Sections";
import { site } from "@/config/site";
export const metadata: Metadata = { title: "Trainers", description: "Coaches who know how to get you to your goal.", alternates: { canonical: "/trainers" } };
export default function Page() {
  return <><PageHero title="Trainers" sub="Coaches who know how to get you to your goal." /><Trainers /><TrialCTA /></>;
}
