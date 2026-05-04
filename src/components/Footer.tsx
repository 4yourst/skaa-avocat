import supportBg from "@/assets/support-bg.jpg";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-0 h-[340px] md:h-[420px] overflow-hidden">
      <img
        src={supportBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-primary/84" />

      <div className="relative container h-full pt-12 pb-6 md:pt-20 md:pb-10 flex flex-col justify-end">
        <h2 className="font-serif text-6xl md:text-[5.4rem] leading-none text-primary-foreground">
          Travaillons Ensemble
        </h2>
        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="font-serif text-[2.2rem] italic text-primary-foreground">SKAA Avocats</div>
          <div className="flex items-center gap-2">
            <a href="#" className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground text-primary transition-smooth hover:bg-accent hover:text-accent-foreground">
              <Facebook size={13} />
            </a>
            <a href="#" className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground text-primary transition-smooth hover:bg-accent hover:text-accent-foreground">
              <Instagram size={13} />
            </a>
            <a href="#" className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground text-primary transition-smooth hover:bg-accent hover:text-accent-foreground">
              <Linkedin size={13} />
            </a>
            <a href="#" className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground text-primary transition-smooth hover:bg-accent hover:text-accent-foreground">
              <X size={13} />
            </a>
          </div>
        </div>

        <div className="mt-3 h-px bg-primary-foreground/35" />

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-4 text-xs text-primary-foreground/90">
            <a href="#" className="hover:text-accent transition-smooth">Accueil</a>
            <a href="#about" className="hover:text-accent transition-smooth">À propos</a>
            <a href="#service" className="hover:text-accent transition-smooth">Services</a>
            <a href="#faq" className="hover:text-accent transition-smooth">FAQ</a>
            <a href="#contact" className="hover:text-accent transition-smooth">Contact</a>
          </div>
          <p className="text-xs text-primary-foreground/80">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
