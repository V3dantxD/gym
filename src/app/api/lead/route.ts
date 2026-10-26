import { NextResponse } from "next/server";
import { site } from "@/config/site";
export async function POST(req: Request) {
  let b: Record<string, string>;
  try { b = await req.json(); } catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }
  if (b.company) return NextResponse.json({ ok: true }); // honeypot
  if (!b.name?.trim() || !new RegExp(site.phonePattern).test(b.phone || "") || !b.consent)
    return NextResponse.json({ error: "Invalid submission" }, { status: 422 });
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return NextResponse.json({ ok: true, demo: true }); // DEMO MODE: nothing is delivered
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (process.env.LEAD_WEBHOOK_TOKEN) headers.Authorization = `Bearer ${process.env.LEAD_WEBHOOK_TOKEN}`;
  const payload = { name: b.name, phone: b.phone, email: b.email || "", goal: b.goal, date: b.date, time: b.time, consent: true, source: "website", at: new Date().toISOString() };
  try {
    const r = await fetch(url, { method: "POST", headers, body: JSON.stringify(payload) });
    if (!r.ok) throw new Error(String(r.status));
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "Delivery failed" }, { status: 502 }); }
}
