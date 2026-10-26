import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
export const metadata: Metadata = { title: "Terms", robots: { index: false } };
export default function Page() { return <><PageHero title="Terms" /><section className="sect"><div className="wrap max-w-2xl text-white/70"><p>[REPLACE] Add the gym's legal Terms text here, reviewed by a qualified professional.</p></div></section></>; }
