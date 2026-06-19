import { useEffect, useState } from "react";
import logoAsset from "@/assets/prime-logo.png.asset.json";

const links = [
  { href: "#despre", label: "Despre" },
  { href: "#servicii", label: "Servicii" },
  { href: "#galerie", label: "Galerie" },
  { href: "#program", label: "Program" },
  { href: "#abonamente", label: "Abonamente" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-prime">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass-dark shadow-lg shadow-black/20" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/95 p-1.5">
              <img src={logoAsset.url} alt="Prime Fitness & Beauty" className="h-full w-full object-contain" />
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-sm font-extrabold tracking-[0.2em] text-white">PRIME</div>
              <div className="text-[10px] tracking-[0.18em] text-primary-glow uppercase">Fitness &amp; Beauty</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-primary-glow transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#abonamente" className="hidden sm:inline-flex btn-primary !px-5 !py-2.5 !text-xs">
              Devino Membru
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="lg:hidden grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white"
            >
              <span className="relative block h-3 w-5">
                <span className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
                <span className={`absolute left-0 top-2.5 h-0.5 w-full bg-current transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass-dark rounded-2xl p-4 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm font-medium text-white/85 border-b border-white/5 last:border-0"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
