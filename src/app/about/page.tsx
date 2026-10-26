import type { Metadata } from "next";
import { PageHero, About, Facilities, Programs, Trainers, Plans, Testimonials, TrialCTA, Faq } from "@/components/Sections";
import { site } from "@/config/site";
export const metadata: Metadata = { title: "About Us", description: "Our story, our philosophy and the training experience.", alternates: { canonical: "/about" } };
export default function Page() {
  return <><PageHero title="About Us" sub="Our story, our philosophy and the training experience." /><About full /><Programs /><Testimonials /><TrialCTA /></>;
}
