import { useReveal } from "@/hooks/use-reveal";

const plans = [
  {
    name: "Basic",
    tagline: "Cel mai ales",
    price: "250",
    period: "RON / lună",
    features: ["Abonament pe 1 lună","Acces sală în program standard", "Vestiare moderne", "Acces zona cardio"],
    cta: "Alege Basic",
  },
  {
    name: "VIP",
    tagline: "Maxim rezultat",
    price: "500",
    features: ["Abonament pe 1 lună", "Acces complet la sală", "Personal Trainer", "Plan de antrenament personalizat"],
    cta: "Alege VIP",
    featured: true,
  },
  {
    name: "Premium",
    tagline: "Experiență completă",
    price: "550",
    features: ["Abonament pe 3 luni", "Acces sală în program standard", "Vestiare moderne", "Acces zona cardio"],
    cta: "Alege Premium",
  },
];

export default function Pricing() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="abonamente" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
      <div className="container-prime relative">
        <div ref={ref} className="reveal text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">Abonamente</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Alege pachetul <span className="text-gradient">potrivit</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Fără contracte ascunse. Anulezi oricând. Toate prețurile sunt în RON.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-5 items-stretch">
          {plans.map((p, i) => (
            <PlanCard key={i} {...p} delay={i * 100} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Prețurile sunt orientative — contactează-ne pentru oferte personalizate și abonamente pentru cupluri sau studenți.
        </p>
      </div>
    </section>
  );
}

function PlanCard({
  name, tagline, price, features, cta, featured, delay,
}: {
  name: string; tagline: string; price: string; features: string[]; cta: string; featured?: boolean; delay: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal relative rounded-3xl p-8 sm:p-10 flex flex-col transition-all duration-500 ${
        featured
          ? "lg:-mt-4 lg:mb-0 text-white shadow-[0_40px_80px_-30px_oklch(0.55_0.18_145/0.55)] scale-[1.02]"
          : "bg-surface border border-border shadow-[var(--shadow-soft)] hover:-translate-y-1"
      }`}
      {...(featured && { style: { ...{ transitionDelay: `${delay}ms` }, background: "var(--gradient-dark)" } })}
    >
      {featured && (
        <div className="absolute inset-x-0 -top-3 flex justify-center">
          <span className="rounded-full px-4 py-1.5 text-[10px] font-bold tracking-[0.25em] uppercase text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
            Recomandat
          </span>
        </div>
      )}
      {featured && (
        <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, oklch(0.72 0.20 145 / 0.25), transparent 60%)" }} />
      )}

      <div className="relative">
        <div className="text-xs uppercase tracking-[0.25em] opacity-60">{tagline}</div>
        <h3 className="mt-2 font-display text-3xl font-black">{name}</h3>
        <div className="mt-6 flex items-baseline gap-1">
          <span className={`font-display text-6xl font-black ${featured ? "text-primary-glow" : ""}`}>{price}</span>
          <span className="text-sm opacity-70"> RON </span>
        </div>

        <ul className="mt-8 space-y-3 text-sm">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px] font-bold ${featured ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}>✓</span>
              <span className={featured ? "text-white/85" : "text-foreground/85"}>{f}</span>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold transition-all ${
            featured
              ? "bg-white text-foreground hover:bg-primary hover:text-primary-foreground"
              : "btn-primary"
          }`}
        >
          {cta}
        </a>
      </div>
    </div>
  );
}
