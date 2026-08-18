/* Style direction: Olive Noir Editorial — preserve the original Selected Work section’s simple left-led headings, short copy, and calm gallery grids on every standalone category page. */
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import PortfolioHeader from "@/components/PortfolioHeader";
import { galleryCategories, getGalleryCategory } from "@/data/gallery";
import { useLayoutEffect, useMemo } from "react";

export function GalleryPage() {
  const [, params] = useRoute("/gallery/:slug");
  const category = getGalleryCategory(params?.slug ?? "");
  const randomizedImages = useMemo(() => category ? [...category.images].sort(() => Math.random() - 0.5) : [], [category]);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [params?.slug]);

  if (!category) {
    return (
      <main className="site-shell">
        <PortfolioHeader />
        <section className="work-section section-pad simple-gallery-page">
          <div className="section-label"><span>03</span><span>Selected work</span></div>
          <h1>That archive<br /><em>is not here.</em></h1>
          <Link className="text-link" href="/#work"><ArrowLeft size={16} /> Back to selected work</Link>
        </section>
      </main>
    );
  }

  return (
    <main className={`site-shell category-${category.slug}`}>
      <PortfolioHeader />
      <section className="work-section section-pad simple-gallery-page" aria-label={`${category.navLabel} gallery`}>
        <div className="section-label"><span>{category.number}</span><span>Selected work</span></div>
        <div className="gallery-intro"><h1>{category.titleMain}<br /><em>{category.titleAccent}</em></h1><p>{category.description}</p></div>
        <nav className="simple-category-nav" aria-label="Gallery category navigation">
          {galleryCategories.map((item) => <Link className={item.slug === category.slug ? "active" : ""} href={`/gallery/${item.slug}`} key={item.slug}><small>{item.number}</small>{item.navLabel}</Link>)}
        </nav>
        {randomizedImages.length > 0 ? (
          <div className="gallery-grid simple-gallery-grid">{randomizedImages.map((image, index) => <a className={`gallery-image gallery-${image.frame ?? "standard"} ${index === 0 ? "gallery-featured" : ""}`} href={image.src} target="_blank" rel="noreferrer" key={image.src}><img src={image.src} alt={image.alt} loading={index < 3 ? "eager" : "lazy"} /></a>)}</div>
        ) : null}
        <div className="archive-row"><Link href="/#work"><ArrowLeft size={15} /> Back to selected work</Link><Link href="/#contact">Start a project <ArrowUpRight size={15} /></Link></div>
      </section>
    </main>
  );
}
