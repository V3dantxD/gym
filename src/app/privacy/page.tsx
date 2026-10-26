import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
export const metadata: Metadata = { title: "Privacy Policy", robots: { index: false } };
export default function Page() { return <><PageHero title="Privacy Policy" /><section className="sect"><div className="wrap max-w-2xl text-white/70"><p>[REPLACE] Add the gym's legal Privacy Policy text here, reviewed by a qualified professional.</p></div></section></>; }
