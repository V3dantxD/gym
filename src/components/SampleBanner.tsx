import { SAMPLE_DATA } from "@/config/site";
export default function SampleBanner() {
  if (!SAMPLE_DATA) return null;
  return <div className="bg-yellow-300 px-4 py-1.5 text-center text-xs font-semibold text-ink">Sample content and illustrative images. Replace in src/config/site.ts before launch.</div>;
}
