/* Style direction: Olive Noir Editorial — asymmetry, contact-sheet metadata, and restrained motion make the studio archive feel curated rather than templated. */
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useMemo, useState } from "react";

type Project = {
  number: string;
  title: string;
  category: string;
  year: string;
  image: string;
  size: "wide" | "tall" | "standard";
};

const projects: Project[] = [
  { number: "01", title: "Still / Citrus", category: "Campaigns", year: "2026", image: "/manus-storage/prime-shot-campaign_630f7eb8.jpg", size: "wide" },
  { number: "02", title: "Form & Function", category: "Product", year: "2025", image: "/manus-storage/prime-shot-hero_ed9335a2.jpg", size: "tall" },
  { number: "03", title: "Quiet Structure", category: "Fashion", year: "2025", image: "/manus-storage/prime-shot-fashion_e15bd8a9.jpg", size: "standard" },
  { number: "04", title: "The Working Surface", category: "Graphic Design", year: "2024", image: "/manus-storage/prime-shot-design_e9b95ed4.jpg", size: "wide" },
];

const filters = ["All", "Campaigns", "Photography", "Product", "Fashion", "Graphic Design"];

const clientBrands = [
  { src: "/manus-storage/1681335201236_2e1429bf.png", alt: "Molton brand mark" },
  { src: "/manus-storage/Corona-Mono-Light_Logo_4935a4c9.png", alt: "Corona brand mark" },
  { src: "/manus-storage/crown_98b0e961.png", alt: "Crown brand mark" },
  { src: "/manus-storage/genoaa_891a5f39.png", alt: "Genoa brand mark" },
  { src: "/manus-storage/logo_3659e417.png", alt: "Client brand mark" },
  { src: "/manus-storage/Asset3@4xlogoo_c099737e.png", alt: "Client brand mark" },
];

function ProjectTile({ project }: { project: Project }) {
  return (
    <article className={`project-tile ${project.size}`}>
      <a href="#contact" className="project-image-wrap" aria-label={`View ${project.title} project`}>
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-shade" />
        <div className="project-hover">
          <span>View project</span>
          <ArrowUpRight size={18} strokeWidth={1.4} />
        </div>
      </a>
      <div className="project-meta">
        <span className="project-index">{project.number}</span>
        <div>
          <h3>{project.title}</h3>
          <p>{project.category} <span>/</span> {project.year}</p>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = useMemo(() => activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter || (activeFilter === "Photography" && project.category === "Fashion")), [activeFilter]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className={`site-header ${menuOpen ? "menu-is-open" : ""}`}>
        <a className="brand-lockup" href="#top" onClick={closeMenu} aria-label="Prime Shot Creative home">
          <span className="official-logo-frame"><img className="official-logo" src="/manus-storage/prime-shot-final-logo_3a8d8d0f.webp" alt="Prime Shot Creative" /></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#services">Services</a><a href="#studio">Studio</a><a href="#contact">Contact</a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={21} strokeWidth={1.4} /> : <Menu size={21} strokeWidth={1.4} />}<span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "visible" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-inner">
          <span className="eyebrow">Navigation / 00</span>
          {['Work', 'Services', 'Studio', 'Contact'].map((item, index) => <a href={`#${item.toLowerCase()}`} key={item} onClick={closeMenu}><small>0{index + 1}</small>{item}</a>)}
          <div className="mobile-menu-foot"><span>Alexandria / Cairo</span><span>Available for selected projects</span></div>
        </div>
      </div>

      <section id="top" className="hero-section">
        <div className="hero-image"><img src="/manus-storage/prime-shot-camera-hero_363ce75c.jpg" alt="Professional camera on a sculptural studio surface in cinematic light" /></div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-kicker"><span>Independent creative studio</span><span>EST. 2020 — EGYPT</span></div>
          <h1><span>Prime Shot</span><span>Creative</span></h1>
          <div className="hero-bottom">
            <p>Visual stories, commercial photography<br />and creative production for brands.</p>
            <a className="circle-link" href="#work" aria-label="Explore selected work"><ArrowDownRight size={23} strokeWidth={1.2} /></a>
          </div>
        </div>
        <div className="hero-side-label">Photography <i /> Creative Production <i /> Graphic Design</div>
      </section>

      <section id="studio" className="intro-section section-pad">
        <div className="section-label"><span>01</span><span>Who we are</span></div>
        <div className="intro-grid">
          <h2>We create visual<br /><em>stories for brands.</em></h2>
          <div className="intro-copy"><p>We frame, produce, and finish visual systems with intent — from the first reference image to the final campaign crop. Built for brands that know the difference a point of view makes.</p><a className="text-link" href="#contact">More about the studio <ArrowUpRight size={16} /></a></div>
        </div>
      </section>

      <section className="brands-section section-pad" aria-labelledby="brands-title">
        <div className="section-label"><span>02</span><span>Brands we’ve scaled</span></div>
        <div className="brands-head">
          <h2 id="brands-title">A working archive<br /><em>of visual partners.</em></h2>
          <p>A small record of brands, campaigns, and visual systems shaped with a clear point of view.</p>
        </div>
        <div className="brands-manifesto"><span>Selected client archive</span><i /><span>Different voices. One visual standard.</span></div>
        <div className="brand-logo-grid">
          {clientBrands.map((brand, index) => <div className={`brand-logo-card tone-${index + 1}`} key={brand.src}><div className="brand-card-inner"><img src={brand.src} alt={brand.alt} loading="lazy" /></div><span className="brand-card-index">0{index + 1}</span><span className="brand-card-caption">Client archive</span></div>)}
        </div>
      </section>

      <section id="work" className="work-section section-pad">
        <div className="work-head"><div className="section-label"><span>03</span><span>Selected work</span></div><p className="work-note">A considered selection of campaigns,<br />objects, people, and process.</p></div>
        <div className="filter-row" role="tablist" aria-label="Filter selected work">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? "active" : ""} onClick={() => setActiveFilter(filter)} role="tab" aria-selected={activeFilter === filter}>{filter}</button>)}</div>
        <div className="project-grid">{visibleProjects.map((project) => <ProjectTile key={project.number} project={project} />)}</div>
        <div className="archive-row"><span>Showing {String(visibleProjects.length).padStart(2, "0")} projects</span><a href="#contact">View full archive <ArrowUpRight size={16} /></a></div>
      </section>

      <section id="services" className="services-section section-pad">
        <div className="section-label"><span>04</span><span>What we do</span></div>
        <div className="services-grid">
          <h2>From first<br /><em>frame to final form.</em></h2>
          <div className="service-list"><div><span>01</span><strong>Photography</strong><p>Campaigns / Products / Editorial / Portraits</p></div><div><span>02</span><strong>Creative Production</strong><p>Direction / Set design / Motion / Post-production</p></div><div><span>03</span><strong>Graphic Design</strong><p>Brand worlds / Art direction / Campaign systems</p></div></div>
        </div>
      </section>

      <section className="statement-section"><div className="statement-logo-frame"><img className="statement-logo" src="/manus-storage/prime-shot-final-logo_3a8d8d0f.webp" alt="Prime Shot Creative" /></div><p>Good work begins with<br /><em>a point of view.</em></p><span className="statement-rule" /></section>

      <footer id="contact" className="site-footer section-pad"><div className="section-label"><span>05</span><span>Start a conversation</span></div><div className="footer-main"><h2>Have a project<br /><em>in mind?</em></h2><a className="footer-email" href="mailto:primeshoot1@gmail.com">primeshoot1@gmail.com <ArrowUpRight size={22} strokeWidth={1.2} /></a><a className="footer-phone" href="tel:01026842033">01026842033 <ArrowUpRight size={18} strokeWidth={1.2} /></a><a className="footer-instagram" href="https://www.instagram.com/prime.shoot1/" target="_blank" rel="noreferrer">Instagram / @prime.shoot1 <ArrowUpRight size={18} strokeWidth={1.2} /></a></div><div className="footer-identity"><span className="official-logo-frame"><img className="official-logo" src="/manus-storage/prime-shot-final-logo_3a8d8d0f.webp" alt="Prime Shot Creative" /></span></div><div className="footer-bottom"><span>© 2026 Prime Shot Creative</span><span>Alexandria / Cairo</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
