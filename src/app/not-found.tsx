import Link from "next/link";
export default function NotFound() {
  return <section className="grid min-h-screen place-items-center px-5 text-center"><div><h1 className="text-8xl text-lime">404</h1><p className="mt-4 text-white/70">That page doesn't exist.</p><Link href="/" className="btn btn-lime mt-8">Back to home</Link></div></section>;
}
