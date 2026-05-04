import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#service" },
  { label: "Équipe", href: "#testimonial" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-30">
      <div className="container flex items-center justify-between py-6">
        <a href="#" className="font-serif text-2xl md:text-3xl text-primary-foreground italic">
          SKAA Avocats
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-primary-foreground/90 hover:text-accent transition-smooth text-sm tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary/95 backdrop-blur-sm">
          <div className="container flex flex-col gap-4 py-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-primary-foreground/90 hover:text-accent transition-smooth"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
