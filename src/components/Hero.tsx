import { ArrowRight, Phone, Gavel } from "lucide-react";
import heroLawyer from "@/assets/hero-lawyer.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[760px] md:min-h-[860px] overflow-hidden rounded-b-[2rem] md:rounded-b-[3rem]">
      {/* Background image + lawyer */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 gradient-hero" />
        <img
          src={heroLawyer}
          alt="Avocat professionnel SKAA"
          className="absolute right-0 bottom-0 h-[85%] md:h-[95%] w-auto object-contain object-bottom hidden sm:block"
          width={1280}
          height={1280}
        />
      </div>

      {/* Content */}
      <div className="relative container pt-40 md:pt-48 pb-16">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/40 backdrop-blur-md border border-primary-foreground/15 px-4 py-2 text-xs md:text-sm text-primary-foreground/90">
            <Gavel size={14} className="text-accent" />
            Justice. Expertise. Résultats.
          </span>

          <h1 className="mt-6 font-serif text-primary-foreground text-5xl md:text-7xl leading-[1.05]">
            Votre Partenaire <br />
            Juridique <br />
            Stratégique
          </h1>

          <p className="mt-6 max-w-md text-primary-foreground/80 text-base md:text-lg leading-relaxed">
            Cabinet d'avocats basé à Abidjan, spécialisé en droit des affaires, 
            accompagnant entreprises, institutions et particuliers.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gold text-accent-foreground pl-6 pr-2 py-2 shadow-gold transition-smooth hover:translate-y-[-2px]"
            >
              <span className="font-medium">Contactez-nous</span>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowRight size={16} />
              </span>
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-primary-foreground text-primary pl-6 pr-2 py-2 shadow-soft transition-smooth hover:translate-y-[-2px]"
            >
              <span className="font-medium">Consultation gratuite</span>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-accent-foreground">
                <Phone size={14} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
