/* Style direction: Olive Noir Editorial — retain the original simple Selected Work section while using restrained text links to lead into the three standalone visual stories. */
/* Olive Noir Editorial: preserve the cinematic near-black canvas, warm type, and restrained olive accents. */
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import PortfolioHeader from "@/components/PortfolioHeader";
import { galleryCategories } from "@/data/gallery";

const clientBrands = [
  { src: "/assets/brands/1681335201236.png?v=prime-shot-studio", alt: "Molton brand mark" },
  { src: "/assets/brands/Corona-Mono-Light_Logo.png?v=prime-shot-studio", alt: "Corona brand mark" },
  { src: "/assets/brands/crown.png?v=prime-shot-studio", alt: "Crown brand mark" },
  { src: "/assets/brands/genoaa.png?v=prime-shot-studio", alt: "Genoa brand mark" },
  { src: "/assets/brands/logo.png?v=prime-shot-studio", alt: "Client brand mark" },
  { src: "/assets/brands/Asset3@4xlogoo.png?v=prime-shot-studio", alt: "Client brand mark" },
  { src: "/assets/brands/jilam-white-logo.png?v=prime-shot-studio", alt: "Jilam brand mark" },
];

export default function Home() {
  useEffect(() => {
    if (window.location.hash === "#work") {
      requestAnimationFrame(() => document.getElementById("work")?.scrollIntoView({ block: "start" }));
    }
  }, []);

  return (
    <main className="site-shell">
      <PortfolioHeader />

      <section id="top" className="hero-section">
        <div className="hero-image"><img src="/manus-storage/prime-shot-camera-hero_6e517d33.jpg" alt="Professional camera on a sculptural studio surface in cinematic light" /></div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1><span>Prime</span><span>Shot</span><span>Creative</span></h1>
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
          <h2>Prime is a creative<br /><em>production studio.</em></h2>
          <div className="intro-copy"><p>Prime is a creative production studio for brands that want more from their content.</p><p>We combine <strong>product photography, creative design, and marketing</strong> to turn brand ideas into sharp, distinctive visual content — from the first concept to the final campaign.</p><p className="intro-signoff"><strong>We create to win.</strong></p><a className="text-link" href="#contact">Start a project <ArrowUpRight size={16} /></a></div>
        </div>
      </section>

      <section className="brands-section section-pad" aria-labelledby="brands-title">
        <div className="section-label"><span>02</span><span>Brands we’ve scaled</span></div>
        <div className="brands-head">
          <h2 id="brands-title">Brands we’ve<br /><em>worked with.</em></h2>
          <p>A considered list of brands that trusted Prime to make their work sharper, clearer, and more memorable.</p>
        </div>
        <div className="brands-manifesto"><span>Selected client archive</span><i /><span>Built with intention</span></div>
        <div className="brand-logo-grid">
          {clientBrands.map((brand, index) => <div className={`brand-logo-card tone-${index + 1}`} key={brand.src}><div className="brand-card-inner"><img src={brand.src} alt={brand.alt} loading="lazy" /></div><span className="brand-card-index">0{index + 1}</span></div>)}
        </div>
      </section>

      <section id="work" className="work-section section-pad gallery-section" aria-labelledby="gallery-title">
        <div className="section-label"><span>03</span><span>Selected work</span></div>
        <div className="gallery-intro"><h2 id="gallery-title">The<br /><em>gallery.</em></h2><p>Three focused archives for process, campaign photography, and social-first design.</p></div>
        <div className="category-card-grid home-gallery-card-grid">
          {galleryCategories.map((category) => (
            <Link className="category-card" href={`/gallery/${category.slug}`} key={category.slug}>
              <div className="category-card-image">
                <img src={category.coverImage.src} alt={category.coverImage.alt} loading="eager" />
                <span className="category-card-index">{category.number}</span>
              </div>
              <div className="category-card-copy">
                <h3>{category.navLabel}</h3>
                <p>{category.note}</p>
                <span>Open archive <ArrowUpRight size={15} /></span>
              </div>
            </Link>
          ))}
        </div>
        <div className="archive-row"><span>Prime Shot Creative / Selected Work</span><span>Choose a category to explore</span></div>
      </section>

      <section id="services" className="services-section section-pad">
        <div className="section-label"><span>04</span><span>What we do</span></div>
        <div className="services-grid">
          <h2>From first<br /><em>frame to final form.</em></h2>
          <div className="service-list"><div><span>01</span><strong>Photography</strong><p>Campaigns / Products / Editorial / Portraits</p></div><div><span>02</span><strong>Creative Production</strong><p>Direction / Set design / Motion / Post-production</p></div><div><span>03</span><strong>Graphic Design</strong><p>Brand worlds / Art direction / Campaign systems</p></div></div>
        </div>
      </section>

      <section className="statement-section"><div className="statement-logo-frame"><img className="statement-logo" src="/manus-storage/prime-shot-final-logo_8052ebe7.webp" alt="Prime Shot Creative" /></div><p>Good work begins with<br /><em>a point of view.</em></p><span className="statement-rule" /></section>

      <footer id="contact" className="site-footer section-pad">
        <div className="section-label"><span>05</span><span>Start a conversation</span></div>
        <div className="footer-main">
          <div className="footer-heading"><span className="footer-kicker">Prime Shot Creative / Contact</span><h2>Have a project<br /><em>in mind?</em></h2></div>
          <div className="footer-contact-rail" aria-label="Contact details">
            <a className="footer-email" href="mailto:primeshoot1@gmail.com"><span>Email</span>primeshoot1@gmail.com <ArrowUpRight size={18} strokeWidth={1.2} /></a>
            <a className="footer-phone" href="tel:01026842033"><span>Phone</span>01026842033 <ArrowUpRight size={16} strokeWidth={1.2} /></a>
            <a className="footer-instagram" href="https://www.instagram.com/prime.shoot1/" target="_blank" rel="noreferrer"><span>Instagram</span>Prime Shoot <ArrowUpRight size={16} strokeWidth={1.2} /></a>
          </div>
        </div>
        <div className="footer-identity"><span className="official-logo-frame"><img className="official-logo" src="/manus-storage/prime-shot-final-logo_8052ebe7.webp" alt="Prime Shot Creative" /></span><span className="footer-identity-note">Visual stories / commercial photography / creative production</span></div>
        <div className="footer-bottom"><span>© 2026 Prime Shot Creative</span><span>Available for selected projects</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
