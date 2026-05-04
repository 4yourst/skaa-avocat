import aboutLawyer from "@/assets/about-lawyer.jpg";

const stats = [
  { value: "15+", label: "Années d'expérience" },
  { value: "500+", label: "Dossiers gérés" },
  { value: "98%", label: "Clients satisfaits" },
];

const About = () => {
  return (
    <section id="about" className="container py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-6 md:gap-6 items-stretch max-w-6xl mx-auto">
        <div className="rounded-[1.8rem] overflow-hidden shadow-card">
          <img
            src={aboutLawyer}
            alt="Avocat SKAA au travail"
            className="h-full w-full object-cover aspect-[4/5] md:aspect-auto md:min-h-[520px]"
            loading="lazy"
            width={800}
            height={900}
          />
        </div>

        <div className="bg-sage rounded-[1.8rem] p-7 md:p-10 shadow-soft">
          <h2 className="font-serif text-[2.7rem] md:text-[3.35rem] leading-[0.95] text-primary">
            Votre Cabinet Moderne.
            <span className="block text-gold">Accompagnement Stratégique</span>
          </h2>

          <p className="mt-5 text-[1.01rem] text-muted-foreground leading-relaxed max-w-[56ch]">
            SKAA Avocats est un cabinet d'avocats basé à Abidjan, spécialisé en droit des affaires. 
            Nous accompagnons les entreprises, les startups, les institutions et les particuliers avec 
            une expertise juridique multidisciplinaire. De la consultation initiale à la résolution 
            de vos litiges, nous vous offrons un accompagnement stratégique, des conseils avisés et 
            une représentation solide pour défendre vos intérêts.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-[3rem] md:text-[3.35rem] leading-none text-primary">{s.value}</div>
                <div className="mt-2 text-sm text-primary/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
