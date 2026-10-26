"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => { const f = () => setScrolled(window.scrollY > 40); f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  useEffect(() => setOpen(false), [path]);
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled || open ? "bg-ink/95 backdrop-blur border-b border-white/10 py-3" : "py-6"}`}>
      <div className="wrap flex items-center justify-between">
        <Link href="/" className="font-display text-2xl uppercase tracking-tight">{site.name}</Link>
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {site.nav.map((n) => <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined} className={`text-sm font-medium transition-colors hover:text-lime ${path === n.href ? "text-lime" : "text-white/80"}`}>{n.label}</Link>)}
          <Link href="/contact#trial" className="btn btn-lime !py-2.5">Join Now</Link>
        </nav>
        <button className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav aria-label="Mobile" className="wrap flex flex-col gap-1 pb-6 pt-4 lg:hidden">
        {site.nav.map((n) => <Link key={n.href} href={n.href} className="border-b border-white/10 py-3 font-display text-3xl uppercase">{n.label}</Link>)}
        <Link href="/contact#trial" className="btn btn-lime mt-4">Join Now</Link>
      </nav>}
    </header>
  );
}
