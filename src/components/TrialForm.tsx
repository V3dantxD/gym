"use client";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { site, waLink } from "@/config/site";
type Errors = Record<string, string>;
const input = "w-full border border-white/20 bg-ink px-4 py-3 text-white placeholder:text-steel focus:border-lime";
export default function TrialForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "loading" | "ok" | "demo" | "error">("idle");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const d = Object.fromEntries(f.entries()) as Record<string, string>;
    const err: Errors = {};
    if (!d.name?.trim()) err.name = "Enter your full name.";
    if (!new RegExp(site.phonePattern).test(d.phone?.trim() || "")) err.phone = "Enter a valid mobile number (8–15 digits, optional +).";
    if (d.email && !/^\S+@\S+\.\S+$/.test(d.email)) err.email = "Enter a valid email address or leave it blank.";
    if (!d.goal) err.goal = "Choose a fitness goal.";
    if (!d.date) err.date = "Choose a preferred date.";
    if (!d.time) err.time = "Choose a preferred time.";
    if (!d.consent) err.consent = "Please agree to be contacted.";
    setErrors(err);
    if (Object.keys(err).length) return;
    setState("loading");
    try {
      const r = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      const j = await r.json();
      setState(!r.ok ? "error" : j.demo ? "demo" : "ok");
      if (r.ok) (e.target as HTMLFormElement).reset();
    } catch { setState("error"); }
  }
  const Field = ({ id, label, children }: { id: string; label: string; children: React.ReactNode }) => (
    <div><label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label>{children}
      {errors[id] && <p id={`${id}-e`} role="alert" className="mt-1 text-sm text-red-400">{errors[id]}</p>}</div>);
  const p = (id: string) => ({ id, name: id, className: input, "aria-invalid": !!errors[id], "aria-describedby": errors[id] ? `${id}-e` : undefined });
  const wa = waLink();
  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field id="name" label="Full name"><input {...p("name")} autoComplete="name" /></Field>
      <Field id="phone" label="Mobile number"><input {...p("phone")} type="tel" inputMode="tel" autoComplete="tel" /></Field>
      <Field id="email" label="Email address (optional)"><input {...p("email")} type="email" autoComplete="email" /></Field>
      <Field id="goal" label="Fitness goal"><select {...p("goal")} defaultValue=""><option value="" disabled>Select a goal</option>{["Build muscle", "Lose fat", "Get stronger", "General fitness", "Not sure yet"].map((g) => <option key={g}>{g}</option>)}</select></Field>
      <Field id="date" label="Preferred visit date"><input {...p("date")} type="date" /></Field>
      <Field id="time" label="Preferred time"><select {...p("time")} defaultValue=""><option value="" disabled>Select a time</option>{["Morning", "Afternoon", "Evening"].map((g) => <option key={g}>{g}</option>)}</select></Field>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="sm:col-span-2"><label className="flex items-start gap-3 text-sm"><input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-lime" /> I agree to be contacted about my free trial.</label>
        {errors.consent && <p role="alert" className="mt-1 text-sm text-red-400">{errors.consent}</p>}</div>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button className="btn btn-lime" disabled={state === "loading"}>{state === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}Book Your Free Trial</button>
        {wa && <a className="btn btn-line" href={wa} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>}
      </div>
      <div className="sm:col-span-2" aria-live="polite">
        {state === "ok" && <p className="border border-lime p-4 text-lime">Thanks. We have your request and will contact you to confirm your visit.</p>}
        {state === "demo" && <p className="border border-yellow-400 p-4 text-yellow-300">Demo mode: the form works, but no destination is configured, so this enquiry was not delivered. Set LEAD_WEBHOOK_URL before launch.</p>}
        {state === "error" && <p className="border border-red-400 p-4 text-red-300">Something went wrong. Please try again or call {site.contact.phone}.</p>}
      </div>
    </form>
  );
}
