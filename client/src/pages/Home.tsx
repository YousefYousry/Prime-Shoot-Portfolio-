/* Style direction: Olive Noir Editorial — asymmetry, contact-sheet metadata, and restrained motion make the studio archive feel curated rather than templated. */
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useMemo, useState } from "react";

type GalleryGroup = {
  number: string;
  title: string;
  note: string;
  images: { src: string; alt: string }[];
};

const galleryGroups: GalleryGroup[] = [
  {
    number: "01",
    title: "Model Shots",
    note: "Studio portraits / campaign frames / fashion studies",
    images: [
      ["20.2_d0db3c23.png", "Genoa model campaign frame"], ["19.2_09a376c6.png", "Genoa model campaign frame"], ["18.1_c9a9b3bd.png", "Genoa model campaign frame"], ["11.1_0fa9e0fa.png", "Genoa model campaign frame"], ["10.1_7ea1182e.png", "Genoa model campaign frame"], ["10-heda-model_829c05af.png", "Heda model studio portrait"], ["5.5_2267d3ec.png", "Genoa model campaign frame"], ["4.4_eef306f7.png", "Genoa model campaign frame"], ["3.3_2cecc222.png", "Genoa model campaign frame"], ["2.4_5a87b258.png", "Genoa model campaign frame"], ["8.1_1314e935.png", "Genoa model campaign frame"], ["7_2b17ca0a.png", "Weekend Club model campaign design"], ["12_4468f818.png", "Weekend Club group campaign frame"],
    ].map(([file, alt]) => ({ src: `/manus-storage/${file}`, alt })),
  },
  {
    number: "02",
    title: "Social Media Designs",
    note: "Content systems / promotional layouts / social-first creative",
    images: [
      ["Te2_6da67eb3.png", "Genoa graphic campaign composition"], ["Cover2_524bf341.jpeg", "Genoa group campaign composition"], ["2_52813dbb.png", "Weekend Club social media design"], ["5_49d6f880.png", "Heda social media design"], ["3_10ed06d8.png", "Heda social media design"],
    ].map(([file, alt]) => ({ src: `/manus-storage/${file}`, alt })),
  },
];

const clientBrands = [
  { src: "/manus-storage/1681335201236_2e1429bf.png", alt: "Molton brand mark" },
  { src: "/manus-storage/Corona-Mono-Light_Logo_4935a4c9.png", alt: "Corona brand mark" },
  { src: "/manus-storage/crown_98b0e961.png", alt: "Crown brand mark" },
  { src: "/manus-storage/genoaa_891a5f39.png", alt: "Genoa brand mark" },
  { src: "/manus-storage/logo_3659e417.png", alt: "Client brand mark" },
  { src: "/manus-storage/Asset3@4xlogoo_c099737e.png", alt: "Client brand mark" },
  { src: "/manus-storage/jilam-white-logo_6d4ad336.png", alt: "Jilam brand mark" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const randomizedGalleryGroups = useMemo(() => galleryGroups.map((group, index) => index < 2 ? { ...group, images: [...group.images].sort(() => Math.random() - 0.5) } : group), []);
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
          <div className="mobile-menu-foot"><span>Available for selected projects</span></div>
        </div>
      </div>

      <section id="top" className="hero-section">
        <div className="hero-image"><img src="/manus-storage/prime-shot-camera-hero_363ce75c.jpg" alt="Professional camera on a sculptural studio surface in cinematic light" /></div>
        <div className="hero-overlay" />
        <div className="hero-content">
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
        <div className="gallery-intro"><h2 id="gallery-title">Selected<br /><em>work.</em></h2><p>A considered selection of campaigns, models, compositions, and social-first design — assembled by discipline.</p></div>
        <div className="gallery-groups">{randomizedGalleryGroups.map((group) => <section className="gallery-group" key={group.number} aria-labelledby={`gallery-${group.number}`}><div className="gallery-group-head"><div><span className="gallery-group-index">{group.number}</span><h3 id={`gallery-${group.number}`}>{group.title}</h3></div><p>{group.note}</p></div><div className="gallery-grid">{group.images.map((image, index) => <a className={`gallery-image ${index === 0 ? "gallery-featured" : ""}`} href={image.src} target="_blank" rel="noreferrer" key={image.src}><img src={image.src} alt={image.alt} loading="lazy" /></a>)}</div></section>)}</div>
      </section>

      <section id="services" className="services-section section-pad">
        <div className="section-label"><span>04</span><span>What we do</span></div>
        <div className="services-grid">
          <h2>From first<br /><em>frame to final form.</em></h2>
          <div className="service-list"><div><span>01</span><strong>Photography</strong><p>Campaigns / Products / Editorial / Portraits</p></div><div><span>02</span><strong>Creative Production</strong><p>Direction / Set design / Motion / Post-production</p></div><div><span>03</span><strong>Graphic Design</strong><p>Brand worlds / Art direction / Campaign systems</p></div></div>
        </div>
      </section>

      <section className="statement-section"><div className="statement-logo-frame"><img className="statement-logo" src="/manus-storage/prime-shot-final-logo_3a8d8d0f.webp" alt="Prime Shot Creative" /></div><p>Good work begins with<br /><em>a point of view.</em></p><span className="statement-rule" /></section>

      <footer id="contact" className="site-footer section-pad">
        <div className="section-label"><span>05</span><span>Start a conversation</span></div>
        <div className="footer-main">
          <div className="footer-heading"><span className="footer-kicker">Prime Shot Creative / Contact</span><h2>Have a project<br /><em>in mind?</em></h2></div>
          <div className="footer-contact-rail" aria-label="Contact details">
            <a className="footer-email" href="mailto:primeshoot1@gmail.com"><span>Email</span>primeshoot1@gmail.com <ArrowUpRight size={18} strokeWidth={1.2} /></a>
            <a className="footer-phone" href="tel:01026842033"><span>Phone</span>01026842033 <ArrowUpRight size={16} strokeWidth={1.2} /></a>
            <a className="footer-instagram" href="https://www.instagram.com/prime.shoot1/" target="_blank" rel="noreferrer"><span>Social</span>Instagram / @prime.shoot1 <ArrowUpRight size={16} strokeWidth={1.2} /></a>
          </div>
        </div>
        <div className="footer-identity"><span className="official-logo-frame"><img className="official-logo" src="/manus-storage/prime-shot-final-logo_3a8d8d0f.webp" alt="Prime Shot Creative" /></span><span className="footer-identity-note">Visual stories / commercial photography / creative production</span></div>
        <div className="footer-bottom"><span>© 2026 Prime Shot Creative</span><span>Available for selected projects</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
