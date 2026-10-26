import { Hero, Stats, About, Facilities, Programs, Trainers, Plans, Testimonials, TrialCTA, Faq } from "@/components/Sections";
export default function Home() {
  return <><Hero /><Stats /><About /><Facilities limit={4} /><Programs /><Trainers limit={3} /><Plans /><Testimonials /><TrialCTA /><Faq /></>;
}
