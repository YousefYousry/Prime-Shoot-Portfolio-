/* Style direction: Olive Noir Editorial — a compact, high-contrast header keeps the Prime stamp visible while letting navigation feel like archive metadata. */
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Studio", href: "/#studio" },
  { label: "Contact", href: "/#contact" },
];

export default function PortfolioHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header ${menuOpen ? "menu-is-open" : ""}`}>
        <Link className="brand-lockup" href="/" onClick={closeMenu} aria-label="Prime Shot Creative home">
          <span className="official-logo-frame"><img className="official-logo" src="/assets/brand/prime-shot-final-logo.webp" alt="Prime Shot Creative" fetchPriority="high" decoding="async" /></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={21} strokeWidth={1.4} /> : <Menu size={21} strokeWidth={1.4} />}<span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "visible" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-inner">
          <span className="eyebrow">Navigation / 00</span>
          {navigation.map((item, index) => <a className="mobile-menu-item" href={item.href} key={item.label} onClick={closeMenu}><small>0{index + 1}</small>{item.label}</a>)}
          <div className="mobile-menu-foot"><span>Available for selected projects</span></div>
        </div>
      </div>
    </>
  );
}
