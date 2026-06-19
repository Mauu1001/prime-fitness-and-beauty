import { useReveal } from "@/hooks/use-reveal";

const services = [
  { title: "Antrenamente de Forță", text: "Construiește masă musculară și putere cu programe structurate.", icon: "💪" },
  { title: "Cardio", text: "Îmbunătățește rezistența și sănătatea cardiovasculară.", icon: "🔥" },
  { title: "Slăbire", text: "Programe dedicate pierderii sustenabile în greutate.", icon: "⚡" },
  { title: "Creștere Masă Musculară", text: "Planuri progresive pentru dezvoltare musculară reală.", icon: "🏆" },
  { title: "Personal Training", text: "Antrenamente individuale alături de un coach dedicat.", icon: "🎯" },
  { title: "Beauty & Wellness", text: "Servicii de recuperare și stare de bine după efort.", icon: "✨" },
];

export default function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="servicii" className="section-pad relative bg-secondary/60">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
      <div className="container-prime relative">
        <div ref={ref} className="reveal max-w-2xl">
          <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Servicii</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Programe pentru <span className="text-gradient">fiecare obiectiv</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            De la primii pași la transformări complete — alege drumul potrivit pentru tine.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, text, icon, delay }: { title: string; text: string; icon: string; delay: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="reveal group relative overflow-hidden rounded-3xl bg-surface p-8 border border-border transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_30px_60px_-30px_oklch(0.55_0.18_145/0.45)] hover:border-primary/40"
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative">
        <div className="text-4xl mb-5">{icon}</div>
        <h3 className="font-display text-2xl font-bold">{title}</h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">{text}</p>
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
          Află mai mult <span aria-hidden>→</span>
        </div>
      </div>
    </div>
  );
}
