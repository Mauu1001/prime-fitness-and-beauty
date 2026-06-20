import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-gym.jpg";
import { useCounter } from "@/hooks/use-reveal";

const stats = [
  { value: 100, suffix: "+", label: "Membri activi" },
  { value: 30, suffix: "+", label: "Aparate profesionale" },
  { value: 12, suffix: "h", label: "Program zilnic" },
  { value: 5, suffix: "★", label: "Atmosferă premium" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Antrenament la Prime Fitness & Beauty"
          className="h-full w-full object-cover scale-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.62_0.18_145/0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_70%,oklch(0.08_0.01_150)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-prime flex min-h-screen flex-col justify-center pt-32 pb-20">
        <div className="max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs uppercase tracking-[0.25em]"> 
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
            Borca, Neamț • Sală Premium
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95]">
            Transformă-ți <span className="text-gradient">corpul.</span>
            <br />
            Depășește-ți <em className="not-italic text-primary-glow">limitele.</em>
          </h1>

          <p className="mt-7 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed font-light">
            Prime Fitness &amp; Beauty — locul unde performanța, sănătatea și stilul de viață activ se întâlnesc.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#abonamente" className="btn-primary">
              Devino Membru
              <span aria-hidden>→</span>
            </a>
            <a href="#contact" className="btn-ghost">Contactează-ne</a>
          </div>
        </div>

        {/* Stats */}
        <div ref={ref} className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} inView={inView} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/60 text-xs tracking-[0.3em]">
        SCROLL
        <span className="block h-10 w-px bg-gradient-to-b from-primary-glow to-transparent" />
      </div>
    </section>
  );
}

function StatCard({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) {
  const n = useCounter(value, 1600, inView);
  return (
    <div className="glass-dark rounded-2xl p-5 sm:p-6">
      <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white">
        {n}
        <span className="text-primary-glow">{suffix}</span>
      </div>
      <div className="mt-1 text-xs sm:text-sm text-white/65 uppercase tracking-[0.15em]">{label}</div>
    </div>
  );
}
