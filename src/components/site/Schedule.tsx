import { useReveal } from "@/hooks/use-reveal";

const days = [
  { d: "Luni", h: "09:00 – 21:00" },
  { d: "Marți", h: "09:00 – 21:00" },
  { d: "Miercuri", h: "09:00 – 21:00" },
  { d: "Joi", h: "09:00 – 21:00" },
  { d: "Vineri", h: "09:00 – 21:00" },
  { d: "Sâmbătă", h: "Închis", closed: true },
  { d: "Duminică", h: "Închis", closed: true },
];

export default function Schedule() {
  const ref = useReveal<HTMLDivElement>();
  const today = new Date().getDay(); // 0 Sun ... 6 Sat
  const todayIdx = today === 0 ? 6 : today - 1;

  return (
    <section id="program" className="section-pad bg-secondary/40">
      <div className="container-prime">
        <div ref={ref} className="reveal grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">Program</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Antrenament când <span className="text-gradient">îți convine</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Suntem deschiși 12 ore pe zi, de luni până vineri. Vino fără programare sau sună-ne pentru detalii.
            </p>
            <a href="tel:0733787669" className="mt-7 inline-flex btn-primary">
              Sună acum: 0733 787 669
            </a>
          </div>

          <div className="relative rounded-3xl glass p-2 shadow-[var(--shadow-elegant)]">
            <div className="rounded-[1.3rem] bg-surface p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="font-display font-bold text-lg">Orar săptămânal</div>
                <div className="text-xs uppercase tracking-widest text-primary">Live</div>
              </div>
              <ul className="divide-y divide-border">
                {days.map((it, i) => (
                  <li
                    key={i}
                    className={`flex items-center justify-between py-4 transition-colors ${
                      i === todayIdx ? "bg-primary/10 -mx-3 px-3 rounded-xl border-y border-transparent" : ""
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`h-2 w-2 rounded-full ${it.closed ? "bg-muted-foreground/40" : "bg-primary"}`} />
                      <span className="font-medium">
                        {it.d}
                        {i === todayIdx && <span className="ml-2 text-xs uppercase tracking-wider text-primary">Astăzi</span>}
                      </span>
                    </span>
                    <span className={`font-display font-bold ${it.closed ? "text-muted-foreground" : ""}`}>{it.h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
