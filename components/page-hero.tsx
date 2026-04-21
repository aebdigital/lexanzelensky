type PageHeroProps = {
  title: string;
  backgroundImage?: string;
};

export function PageHero({
  title,
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
        </div>
      </div>
    </section>
  );
}
