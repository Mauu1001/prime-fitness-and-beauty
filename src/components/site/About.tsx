import { useReveal } from "@/hooks/use-reveal";

const cards = [
  {
    icon: "🏋️",
    title: "Echipamente Moderne",
    text: "Utilaje profesionale pentru toate grupele musculare, întreținute impecabil.",
  },
  {
    icon: "⏱️",
    title: "Program Flexibil",
    text: "Acces convenabil de luni până vineri, ideal pentru orice rutină.",
  },
  {
    icon: "🤝",
    title: "Comunitate Motivată",
    text: "O atmosferă prietenoasă care te împinge să dai tot ce ai mai bun.",
  },
  {
    icon: "📈",
    title: "Rezultate Reale",
    text: "Programe adaptate obiectivelor tale — vizibile săptămână de săptămână.",
  },
];

export default function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="despre" className="section-pad relative">
      <div className="container-prime">
        <div ref={ref} className="reveal max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Despre noi</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            De ce să alegi <span className="text-gradient">Prime Fitness &amp; Beauty?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            O sală modernă, deschisă tuturor celor care își doresc o condiție fizică mai bună, mai multă energie și un stil de viață sănătos. De la primii pași și până la performanță — aici găsești spațiul, echipamentele și comunitatea potrivită.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <Card key={i} {...c} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, text, delay }: { icon: string; title: string; text: string; delay: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="reveal group relative rounded-3xl bg-surface border border-border p-7 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1.5 transition-all duration-500"
    >
      <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-2xl">
        {icon}
      </div>
      <h3 className="mt-6 font-display text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}
