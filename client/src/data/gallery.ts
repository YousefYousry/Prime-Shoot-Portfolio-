/* Style direction: Olive Noir Editorial — each category is documented like a considered production archive, using concise metadata and purposefully paced image sequences. */

const managedGalleryAssetSources: Record<string, string> = {
  "12.png": "/manus-storage/12_7802b6d9.png",
  "2.png": "/manus-storage/2_b1b68627.png",
  "3.png": "/manus-storage/3_7af24148.png",
  "5.png": "/manus-storage/5_2a22ce68.png",
};

const galleryAssetSrc = (file: string) => managedGalleryAssetSources[file] ?? `/assets/gallery/${file}`;

export type GalleryImage = {
  src: string;
  alt: string;
  frame?: "portrait" | "portrait-tall" | "landscape";
};

export type GalleryCategory = {
  number: string;
  slug: "behind-the-scenes" | "model-shots" | "social-media-designs";
  navLabel: string;
  titleMain: string;
  titleAccent: string;
  note: string;
  description: string;
  coverImage: GalleryImage;
  images: GalleryImage[];
};

export const galleryCategories: GalleryCategory[] = [
  {
    number: "01",
    slug: "behind-the-scenes",
    navLabel: "Behind the Scenes",
    titleMain: "Behind the",
    titleAccent: "scenes.",
    note: "On-set moments / production process / creative direction",
    description: "The frames between the final frames: direction, set-building, lighting, styling, and the working rhythm behind every Prime production.",
    coverImage: { src: "/manus-storage/prime-shot-behind-the-scenes-olive-noir_dc0c22ab.jpg", alt: "Prime Shot studio lighting setup behind the scenes" },
    images: [
      { src: "/manus-storage/bts-studio-camera-team_c0132889.jpeg", alt: "Prime Shot team preparing a studio camera setup", frame: "portrait" },
      { src: "/manus-storage/bts-gimbal-team_6aed68cb.jpeg", alt: "Prime Shot crew working with a gimbal during production", frame: "portrait-tall" },
      { src: "/manus-storage/bts-studio-directing_5d7519e1.jpeg", alt: "Prime Shot studio production and creative direction", frame: "portrait" },
      { src: "/manus-storage/bts-outdoor-camera_5e2a2d2c.png", alt: "Prime Shot outdoor camera setup", frame: "landscape" },
      { src: "/manus-storage/bts-outdoor-monitor_3dc55a13.png", alt: "Prime Shot team reviewing an outdoor production monitor", frame: "landscape" },
      { src: "/manus-storage/bts-red-studio_3dd8a76a.jpeg", alt: "Prime Shot red studio lighting setup", frame: "portrait-tall" },
      { src: "/manus-storage/bts-creative-shoot_79fb4543.webp", alt: "Prime Shot creative shoot preparation", frame: "portrait" },
      { src: "/manus-storage/bts-lighting-brief_03310185.webp", alt: "Prime Shot lighting and creative brief on set", frame: "portrait" },
      { src: "/manus-storage/bts-smoke-lighting-landscape_45f186de.jpeg", alt: "Prime Shot crew working through a smoke-lit behind-the-scenes set", frame: "landscape" },
    ],
  },
  {
    number: "02",
    slug: "model-shots",
    navLabel: "Model Shots",
    titleMain: "Model",
    titleAccent: "shots.",
    note: "Studio portraits / campaign frames / fashion studies",
    description: "Portrait-led campaign work shaped by light, gesture, casting, and a clear point of view.",
    coverImage: { src: "/manus-storage/prime-shot-model-shots-cover-olive-noir_5e5ab7b4.png", alt: "Genoa model portrait in Prime Shot Olive Noir editorial styling" },
    images: [
      ["20.2.png", "Genoa model campaign frame"], ["19.2.png", "Genoa model campaign frame"], ["18.1.png", "Genoa model campaign frame"], ["11.1.png", "Genoa model campaign frame"], ["10.1.png", "Genoa model campaign frame"], ["10-heda-model.png", "Heda model studio portrait"], ["5.5.png", "Genoa model campaign frame"], ["4.4.png", "Genoa model campaign frame"], ["3.3.png", "Genoa model campaign frame"], ["2.4.png", "Genoa model campaign frame"], ["8.1.png", "Genoa model campaign frame"], ["7.png", "Weekend Club model campaign design"], ["12.png", "Weekend Club group campaign frame"],
    ].map(([file, alt]) => ({ src: galleryAssetSrc(file), alt })),
  },
  {
    number: "03",
    slug: "social-media-designs",
    navLabel: "Social Media Designs",
    titleMain: "Social media",
    titleAccent: "designs.",
    note: "Content systems / promotional layouts / social-first creative",
    description: "Social-first visual systems made to carry a campaign across formats while preserving its graphic character.",
    coverImage: { src: "/manus-storage/prime-shot-social-media-designs-general-cover_0f63d5bf.png", alt: "Prime Shot Olive Noir editorial still life representing social media design systems" },
    images: [
      ...[
        ["Te2.png", "Genoa graphic campaign composition"], ["Cover2.jpeg", "Genoa group campaign composition"], ["2.png", "Weekend Club social media design"], ["5.png", "Heda social media design"], ["3.png", "Heda social media design"],
      ].map(([file, alt]) => ({ src: galleryAssetSrc(file), alt })),
      { src: "/manus-storage/molton-floor-cleaner-campaign_8a195f05.png", alt: "Molton floor-cleaner social media campaign" },
      { src: "/manus-storage/crown-wax-polish-campaign_f5c05c1d.png", alt: "Crown wax shoe-polish social media campaign" },
      { src: "/manus-storage/crown-self-shining-sponges-campaign_57054912.png", alt: "Crown self-shining sponges social media campaign" },
    ],
  },
];

export const getGalleryCategory = (slug: string) => galleryCategories.find((category) => category.slug === slug);
