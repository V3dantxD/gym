import Image from "next/image";
export default function Photo({ src, alt, className = "", priority = false }: { src?: string; alt: string; className?: string; priority?: boolean }) {
  return (
    <div className={`relative overflow-hidden bg-graphite ${className}`}>
      {src ? <Image src={src} alt={alt} fill priority={priority} sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
        : <div role="img" aria-label={alt} className="absolute inset-0 grid place-items-center bg-[repeating-linear-gradient(135deg,#1b1c1f_0_14px,#222326_14px_28px)] text-xs text-steel">Replace with photo</div>}
    </div>
  );
}
