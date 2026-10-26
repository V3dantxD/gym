import { MessageCircle } from "lucide-react";
import { waLink } from "@/config/site";
export default function WhatsAppButton() {
  const href = waLink();
  if (!href) return null;
  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-lime text-ink shadow-lg transition-transform hover:scale-105"><MessageCircle /></a>;
}
