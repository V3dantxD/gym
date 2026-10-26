/**
 * CENTRAL CONTENT FILE. Everything marked [REPLACE] is placeholder copy the client must confirm.
 * Brand colours live in tailwind.config.ts (ink, coal, graphite, steel, lime).
 * Photos: put files in /public/images and set the `image` path (e.g. "/images/hero.jpg"). Empty = placeholder block.
 */
/** SAMPLE DATA. Set to false once real content replaces the seed values; this hides the sample banner. */
export const SAMPLE_DATA = true;

export const site = {
  name: "IRONWORKS GYM",
  tagline: "Premium strength & fitness club",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.example-gym.com",
  description: "Strength training, personal coaching and group classes in Ahmedabad. Book a free trial session.",
  city: "Ahmedabad", area: "Satellite",
  contact: { phone: "+91 98765 43210", email: "hello@ironworks-sample.com",
    address: "123 Sample Road, Satellite, Ahmedabad 380015", mapUrl: "https://maps.google.com/?q=YOUR+GYM+ADDRESS" },
  /** Digits only with country code, e.g. 919876543210. Leave empty to hide WhatsApp until supplied. */
  whatsapp: "919876543210",
  whatsappMessage: "Hi, I am interested in joining your gym. Please share the membership details.",
  phonePattern: "^\\+?[0-9\\s-]{8,15}$",
  hours: [ { days: "Mon – Fri", time: "5:30 am – 10:30 pm" }, { days: "Sat", time: "6:00 am – 9:00 pm" }, { days: "Sun", time: "7:00 am – 1:00 pm" } ],
  social: [ { label: "Instagram", href: "https://instagram.com/yourgym" } ] as { label: string; href: string }[],
  hero: { image: "/images/hero.jpg", headline: "BUILD YOUR STRONGEST SELF.", sub: "Train with purpose. Get stronger. Become the best version of yourself.",
    highlights: ["Expert Coaches", "Premium Equipment", "Results-Driven Training"] },
  /** Placeholders only. Replace with verified numbers or delete the array to hide the section. */
  stats: [ { value: "1,200+", label: "Members Trained" }, { value: "12", label: "Certified Trainers" }, { value: "8", label: "Training Programs" }, { value: "10", label: "Years of Experience" } ],
  about: { image: "/images/about.jpg", heading: "MORE THAN A GYM. A COMMUNITY.",
    body: ["We believe strength is built through consistent, well-coached effort. Every member gets a plan, a coach who knows their name, and a floor full of people pushing in the same direction.", "Whether you are lifting for the first time or chasing a competition total, you train in the same space with the same standards: show up, work hard, support the person next to you."] },
  /** Remove any facility the gym does not actually offer. */
  facilities: [
    { title: "Strength & Weight Training", text: "Racks, platforms, free weights and selectorised machines for every strength goal.", image: "/images/facility-1.jpg" },
    { title: "Cardio Zone", text: "Treadmills, bikes and rowers with clear space between stations.", image: "/images/facility-2.jpg" },
    { title: "Functional Training", text: "Open turf, sleds, kettlebells and rigs for athletic, full-body work.", image: "/images/facility-3.jpg" },
    { title: "Personal Training", text: "A dedicated coaching area for one-to-one sessions.", image: "/images/facility-4.jpg" },
    { title: "Group Fitness Classes", text: "A studio for scheduled coach-led classes.", image: "/images/facility-5.jpg" },
    { title: "Locker Rooms", text: "Clean lockers and showers so you can train before or after work.", image: "/images/facility-6.jpg" },
  ],
  programs: [
    { title: "Strength & Muscle Building", text: "Progressive programming for size and strength, tracked week to week.", image: "/images/program-1.jpg" },
    { title: "Fat Loss & Conditioning", text: "Structured training and nutrition habits for lasting change.", image: "/images/program-2.jpg" },
    { title: "Personal Training", text: "One-to-one plans built around your goal and schedule.", image: "/images/program-3.jpg" },
    { title: "Functional Fitness", text: "Move better, lift better and stay resilient.", image: "/images/program-4.jpg" },
    { title: "Group Classes", text: "Coach-led sessions with a team atmosphere.", image: "/images/program-5.jpg" },
  ],
  trainers: [
    { name: "Aarav Mehta", role: "Strength & Powerlifting", certs: "NSCA-CPT (sample)", experience: "8 years", bio: "Former state-level powerlifter who coaches technique first and numbers second.", image: "/images/trainer-1.jpg", instagram: "" },
    { name: "Riya Shah", role: "Fat Loss & Conditioning", certs: "ACE-CPT (sample)", experience: "6 years", bio: "Builds sustainable training and eating habits for busy professionals.", image: "/images/trainer-2.jpg", instagram: "" },
    { name: "Kabir Desai", role: "Functional Fitness", certs: "CrossFit L2 (sample)", experience: "7 years", bio: "Focuses on mobility, movement quality and injury-resilient strength.", image: "/images/trainer-3.jpg", instagram: "" },
  ],
  /** No prices or benefits are invented. Fill in only what the gym has confirmed. */
  plans: [
    { name: "Starter", price: "₹1,500", period: "per month", features: ["Gym floor access", "Locker room access"], featured: false },
    { name: "Pro", price: "₹2,500", period: "per month", features: ["Gym floor access", "Group classes", "Quarterly fitness assessment"], featured: true },
    { name: "Elite", price: "₹4,500", period: "per month", features: ["Gym floor access", "Group classes", "4 personal training sessions", "Priority booking"], featured: false },
  ],
  /** Only add real, approved testimonials. Empty array shows a placeholder state instead of fake reviews. */
  testimonials: [
    { name: "Sample Member A", quote: "Sample testimonial: the coaches adjusted my plan every week and I finally feel confident under the bar." },
    { name: "Sample Member B", quote: "Sample testimonial: clean gym, friendly floor, and a trial session that actually answered my questions." },
    { name: "Sample Member C", quote: "Sample testimonial: group classes keep me consistent. I have not missed a week since joining." },
  ] as { name: string; quote: string; image?: string }[],
  resultsDisclaimer: "Results vary by individual. Photos and stories are published with member permission.",
  faqs: [
    { q: "What membership options do you offer?", a: "We offer Starter, Pro and Elite plans, billed monthly. Visit for a tour and we will help you choose." },
    { q: "What are your opening hours?", a: "Monday to Friday 5:30 am – 10:30 pm, Saturday 6:00 am – 9:00 pm, Sunday 7:00 am – 1:00 pm." },
    { q: "Do you offer personal training?", a: "Yes. Personal training is available as part of the Elite plan or as an add-on." },
    { q: "Is the gym beginner-friendly?", a: "Yes. Every new member gets an orientation and a starter programme." },
    { q: "How does the free trial work?", a: "Book a free trial online or on WhatsApp, then visit at your chosen time to train and meet a coach." },
    { q: "What facilities are available?", a: "Strength floor, cardio zone, functional area, group studio, personal training area and locker rooms." },
    { q: "What is your cancellation policy?", a: "[REPLACE with the real policy]" },
  ],
  nav: [ { label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Facilities", href: "/facilities" }, { label: "Trainers", href: "/trainers" }, { label: "Membership", href: "/membership" }, { label: "Contact", href: "/contact" } ],
};
export const waLink = (msg = site.whatsappMessage) => site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}` : "";
