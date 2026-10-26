import Link from "next/link";
import { Check, Instagram } from "lucide-react";
import { site, waLink } from "@/config/site";
import Photo from "./Photo";
import Reveal from "./Reveal";
import TrialForm from "./TrialForm";

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return <section className="border-b border-white/10 bg-coal pb-14 pt-40"><div className="wrap"><h1 className="rise max-w-4xl text-6xl md:text-8xl">{title}</h1>{sub && <p className="rise mt-6 max-w-xl text-lg text-white/70">{sub}</p>}</div></section>;
}
export function Hero() {
  const h = site.hero;
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <Photo src={h.image} alt="Athlete training at the gym" priority className="reveal-img absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="wrap relative pb-16 pt-40 md:pb-24">
        <h1 className="rise max-w-5xl text-[clamp(3.5rem,11vw,10rem)]">{h.headline}</h1>
        <p className="rise mt-6 max-w-xl text-lg text-white/80 [animation-delay:.2s]">{h.sub}</p>
        <div className="rise mt-8 flex flex-wrap gap-4 [animation-delay:.35s]">
          <Link href="/contact#trial" className="btn btn-lime">Start Your Free Trial</Link>
          <Link href="/membership" className="btn btn-line">Explore Memberships</Link>
        </div>
        <ul className="rise mt-12 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/15 pt-5 text-sm text-white/80 [animation-delay:.5s]">
          {h.highlights.map((x) => <li key={x} className="flex items-center gap-2"><Check className="h-4 w-4 text-lime" />{x}</li>)}
        </ul>
      </div>
    </section>
  );
}
export function Stats() {
  if (!site.stats.length) return null;
  return <section className="border-y border-white/10 bg-coal"><dl className="wrap grid grid-cols-2 gap-px md:grid-cols-4">{site.stats.map((s) => <div key={s.label} className="py-10 md:px-6"><dd className="font-display text-6xl text-lime">{s.value}</dd><dt className="mt-1 text-sm text-steel">{s.label}</dt></div>)}</dl></section>;
}
export function About({ full = false }: { full?: boolean }) {
  const a = site.about;
  return (
    <section className="sect"><div className="wrap grid items-center gap-12 lg:grid-cols-12">
      <Reveal className="lg:col-span-7"><Photo src={a.image} alt="Inside the gym" className="aspect-[4/5] md:aspect-[5/4] lg:-ml-8" /></Reveal>
      <Reveal className="lg:col-span-5"><h2 className="text-5xl md:text-6xl">{a.heading}</h2>
        <div className="mt-6 space-y-4 text-white/70">{a.body.map((p, i) => <p key={i}>{p}</p>)}</div>
        {!full && <Link href="/about" className="btn btn-line mt-8">Discover Our Story</Link>}</Reveal>
    </div></section>
  );
}
export function Facilities({ limit }: { limit?: number }) {
  const list = limit ? site.facilities.slice(0, limit) : site.facilities;
  return (
    <section className="sect bg-coal"><div className="wrap">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6"><h2 className="text-5xl md:text-7xl">Train in the right space.</h2>{limit && <Link href="/facilities" className="btn btn-line">All facilities</Link>}</div>
      <div className="grid gap-6 md:grid-cols-6">
        {list.map((f, i) => (
          <Reveal key={f.title} className={`group relative ${i % 3 === 0 ? "md:col-span-4" : "md:col-span-2"}`}>
            <Photo src={f.image} alt={f.title} className="aspect-[4/3] md:aspect-auto md:h-96 [&_img]:transition-transform [&_img]:duration-700 group-hover:[&_img]:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-5 pt-16"><h3 className="text-3xl">{f.title}</h3><p className="mt-1 max-w-md text-sm text-white/70">{f.text}</p></div>
          </Reveal>))}
      </div>
    </div></section>
  );
}
export function Programs() {
  return (
    <section className="sect"><div className="wrap"><h2 className="mb-12 text-5xl md:text-7xl">Programs built around your goal.</h2>
      <ul className="divide-y divide-white/10 border-y border-white/10">
        {site.programs.map((p) => (
          <li key={p.title}><Reveal className="grid items-center gap-6 py-8 md:grid-cols-12">
            <Photo src={p.image} alt={p.title} className="aspect-video md:col-span-3" />
            <h3 className="text-4xl md:col-span-4">{p.title}</h3>
            <p className="text-white/70 md:col-span-3">{p.text}</p>
            <Link href={waLink(`Hi, I'd like to know more about ${p.title}.`) || "/contact#trial"} className="btn btn-line md:col-span-2" {...(site.whatsapp ? { target: "_blank", rel: "noopener noreferrer" } : {})}>Enquire</Link>
          </Reveal></li>))}
      </ul></div></section>
  );
}
export function Trainers({ limit }: { limit?: number }) {
  const list = limit ? site.trainers.slice(0, limit) : site.trainers;
  return (
    <section className="sect bg-coal"><div className="wrap"><h2 className="mb-12 text-5xl md:text-7xl">Meet the trainers.</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {list.map((t, i) => (
          <Reveal key={i} className={i === 1 ? "md:mt-12" : ""}>
            <Photo src={t.image} alt={t.name} className="aspect-[3/4]" />
            <h3 className="mt-5 text-3xl">{t.name}</h3><p className="text-lime">{t.role}</p>
            <p className="mt-1 text-sm text-steel">{t.certs} · {t.experience}</p><p className="mt-3 text-sm text-white/70">{t.bio}</p>
            {t.instagram && <a href={t.instagram} aria-label={`${t.name} on Instagram`} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block hover:text-lime"><Instagram className="h-5 w-5" /></a>}
          </Reveal>))}
      </div>
      {limit && <Link href="/trainers" className="btn btn-line mt-12">All trainers</Link>}
    </div></section>
  );
}
export function Plans() {
  return (
    <section className="sect"><div className="wrap"><h2 className="mb-12 text-5xl md:text-7xl">Choose your plan.</h2>
      <div className="grid items-stretch gap-6 md:grid-cols-3">
        {site.plans.map((p) => (
          <Reveal key={p.name} className={`flex flex-col p-8 ${p.featured ? "border-2 border-lime bg-graphite" : "border border-white/15 bg-coal"}`}>
            <h3 className="text-4xl">{p.name}</h3>{p.featured && <p className="mt-1 text-sm text-lime">Recommended</p>}
            <p className="mt-6 font-display text-6xl">{p.price}</p><p className="text-sm text-steel">{p.period}</p>
            <ul className="my-8 flex-1 space-y-3 text-sm">{p.features.map((f, i) => <li key={i} className="flex gap-3"><Check className="h-4 w-4 shrink-0 text-lime" />{f}</li>)}</ul>
            <Link className={`btn ${p.featured ? "btn-lime" : "btn-line"}`} href="/contact#trial">Choose Your Plan</Link>
            {site.whatsapp && <a className="mt-3 text-center text-sm text-white/70 hover:text-lime" target="_blank" rel="noopener noreferrer" href={waLink(`Hi, I'm interested in the ${p.name} plan. Please share the details.`)}>Ask on WhatsApp</a>}
          </Reveal>))}
      </div></div></section>
  );
}
export function Testimonials() {
  const t = site.testimonials;
  return (
    <section className="sect bg-coal"><div className="wrap"><h2 className="mb-12 text-5xl md:text-7xl">Real members. Real progress.</h2>
      {t.length ? <div className="grid gap-6 md:grid-cols-3">{t.map((x) => <figure key={x.name} className="border border-white/15 p-8"><blockquote className="text-lg">“{x.quote}”</blockquote><figcaption className="mt-5 text-lime">{x.name}</figcaption></figure>)}</div>
        : <p className="max-w-xl border border-dashed border-white/20 p-8 text-steel">Member stories will appear here once approved by the members featured. Add them in src/config/site.ts.</p>}
      <p className="mt-8 text-xs text-steel">{site.resultsDisclaimer}</p></div></section>
  );
}
export function TrialCTA() {
  return (
    <section id="trial" className="sect scroll-mt-20 bg-lime text-ink"><div className="wrap grid gap-12 lg:grid-cols-2">
      <div><h2 className="text-6xl md:text-8xl">YOUR NEXT CHAPTER STARTS HERE.</h2><p className="mt-6 max-w-md text-lg">Experience the atmosphere, meet our trainers, and find the right training plan for your goals.</p></div>
      <div className="bg-ink p-6 text-white md:p-8"><TrialForm /></div>
    </div></section>
  );
}
export function Faq() {
  return (
    <section className="sect"><div className="wrap grid gap-12 lg:grid-cols-12"><h2 className="text-5xl md:text-7xl lg:col-span-5">Questions, answered.</h2>
      <div className="divide-y divide-white/10 border-y border-white/10 lg:col-span-7">
        {site.faqs.map((f) => <details key={f.q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium">{f.q}<span className="text-lime transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 max-w-xl text-white/70">{f.a}</p></details>)}
      </div></div></section>
  );
}
