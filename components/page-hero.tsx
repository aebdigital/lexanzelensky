type PageHeroProps = {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
};

export function PageHero({
  title,
  subtitle,
  backgroundImage = "/sources/Uvodna-stranka/posuvacia-cast-2.jpg"
}: PageHeroProps) {
  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${backgroundImage}')`
      }}
    >
      <div className="site-container">
        <div className="page-hero-content">
          <h1>{title}</h1>
          {subtitle && (
            <p className="mt-4 text-lg md:text-xl font-medium text-white/90 uppercase tracking-widest">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
