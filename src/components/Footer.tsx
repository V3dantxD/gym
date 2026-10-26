import Link from "next/link";
import { site } from "@/config/site";
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-coal">
      <div className="wrap grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1"><p className="font-display text-3xl uppercase">{site.name}</p><p className="mt-3 text-sm text-steel">{site.tagline}. {site.description}</p></div>
        <div><h3 className="text-lg">Explore</h3><ul className="mt-4 space-y-2 text-sm text-white/80">{site.nav.map((n) => <li key={n.href}><Link className="hover:text-lime" href={n.href}>{n.label}</Link></li>)}</ul></div>
        <div className="text-sm text-white/80"><h3 className="text-lg">Visit</h3>
          <address className="mt-4 not-italic space-y-2"><p>{site.contact.address}</p><p><a className="hover:text-lime" href={site.contact.mapUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a></p>
          <p>{site.contact.phone}</p><p><a className="hover:text-lime" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p></address></div>
        <div className="text-sm text-white/80"><h3 className="text-lg">Hours</h3>
          <ul className="mt-4 space-y-2">{site.hours.map((h) => <li key={h.days} className="flex justify-between gap-4"><span>{h.days}</span><span className="text-steel">{h.time}</span></li>)}</ul>
          <ul className="mt-6 flex gap-4">{site.social.map((s) => <li key={s.label}><a className="hover:text-lime" href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}</ul></div>
      </div>
      <div className="border-t border-white/10 py-5"><div className="wrap flex flex-wrap justify-between gap-3 text-xs text-steel"><p>© {new Date().getFullYear()} {site.name}</p><p className="flex gap-5"><Link href="/privacy" className="hover:text-lime">Privacy Policy</Link><Link href="/terms" className="hover:text-lime">Terms</Link></p></div></div>
    </footer>
  );
}
