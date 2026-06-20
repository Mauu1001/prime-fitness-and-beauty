import logoAsset from "src/assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.10_0.012_150)] text-white">
      <div className="container-prime py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-white p-1.5">
                <img src={logoAsset.url} alt="Prime Fitness & Beauty" className="h-full w-full object-contain" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-base font-extrabold tracking-[0.18em]">PRIME</div>
                <div className="text-[10px] tracking-[0.18em] text-primary-glow uppercase">Fitness &amp; Beauty</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/60 leading-relaxed">
              Sala premium din Borca, Neamț. Performanță, sănătate și un stil de viață activ — într-un singur loc.
            </p>
          </div>

          <FCol title="Link-uri rapide" items={[
            { l: "Despre", h: "#despre" },
            { l: "Servicii", h: "#servicii" },
            { l: "Galerie", h: "#galerie" },
            { l: "Abonamente", h: "#abonamente" },
          ]} />

          <FCol title="Program" items={[
            { l: "Luni – Vineri: 09:00 – 21:00" },
            { l: "Sâmbătă: Închis" },
            { l: "Duminică: Închis" },
          ]} />

          <FCol title="Contact" items={[
            { l: "617075 Borca, Neamț" },
            { l: "0733 787 669", h: "tel:0733787669" },
            { l: "WhatsApp", h: "https://wa.me/40733787669" },
          ]} />
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Prime Fitness &amp; Beauty. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-3">
            {["Facebook", "Instagram", "TikTok"].map((s) => (
              <a key={s} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-xs text-white/70 hover:text-primary-glow hover:border-primary/50 transition" aria-label={s}>
                {s.charAt(0)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FCol({ title, items }: { title: string; items: { l: string; h?: string }[] }) {
  return (
    <div>
      <div className="font-display text-sm font-bold tracking-[0.2em] uppercase text-primary-glow mb-5">{title}</div>
      <ul className="space-y-2.5 text-sm text-white/70">
        {items.map((it) => (
          <li key={it.l}>
            {it.h ? (
              <a href={it.h} className="hover:text-primary-glow transition-colors">{it.l}</a>
            ) : (
              <span>{it.l}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
