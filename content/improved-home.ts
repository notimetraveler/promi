/**
 * Configureerbare content voor de Improved Design homepage.
 * Pas hier teksten aan - wijzigingen verschijnen direct op de pagina.
 */

export const hero = {
  headline: "Your partner in commercial success",
  subcopy:
    "Advanced IT solutions and data services for the promotional products and workwear industry. Whether you're a distributor, dealer or supplier — our software takes your business to new heights.",
  secondaryText:
    "Access to high-quality product data from over 150 suppliers. Always up-to-date pricing and product information.",
  ctaPrimary: "Plan a demo",
  ctaPrimaryHref: "#contact",
  ctaSecondary: "Contact us",
  ctaSecondaryHref: "#contact",
  ctaTertiary: "View solutions",
  ctaTertiaryHref: "#solutions",
};

/** Basis-URL voor supplier logo's van promidata.com */
export const SUPPLIER_LOGOS_BASE = "https://promidata.com/img/supplierLogos/top";

export const socialProof = {
  claim: "150+ suppliers · up-to-date data · And many others!",
  suppliers: [
    { name: "Clipper", logo: "Clipper.png" },
    { name: "Giving", logo: "Giving_blue-orange_PMS-pdf.png" },
    { name: "Inspirion", logo: "Inspirion logo jpg.jpg" },
    { name: "Prodir", logo: "Logo Prodir-ai.png" },
    { name: "PF Concept", logo: "PF Concept logo_rgb.png" },
    { name: "Premium Square", logo: "Premium Square PMS logo-ai.png" },
    { name: "Reflects", logo: "Reflects2020_Original-ai.png" },
    { name: "Senator", logo: "Senator Logo MiG 1920-pdf.png" },
    { name: "Texet", logo: "Texet logo.png" },
    { name: "The Peppermint Company", logo: "The Peppermint Company-ai.png" },
    { name: "Toppoint", logo: "Toppoint-logo-black-ai.png" },
    { name: "Santino", logo: "Vespo - Santino.jpg" },
    { name: "Blåkläder", logo: "blaklader.png" },
    { name: "Elasto", logo: "elasto_claim_pos (1).png" },
    { name: "Herock", logo: "herock-work-wear-logo-C062E6224A-seeklogo.com.png" },
    { name: "Jung", logo: "jung_rgb-ai.png" },
    { name: "Dassy", logo: "logo-dassy-vierk-jpg.jpg" },
    { name: "U-Power", logo: "logo-u-power-web.jpg" },
    { name: "NWT", logo: "logo_nwt_25-jaar.png" },
    { name: "Midocean", logo: "midocean_SOLO-Group_company-svg.png" },
    { name: "Tricorp", logo: "tricorp.webp" },
  ] as { name: string; logo: string }[],
};

export const valuePillars = [
  {
    title: "ERP",
    description: "Cloud-based ERP for the promotional and workwear industry. Efficient order planning, structured processes.",
    icon: "chart",
  },
  {
    title: "Webshops",
    description: "Start selling immediately. Own look and feel with 150+ suppliers at your fingertips.",
    icon: "shop",
  },
  {
    title: "Sourcing",
    description: "Find the ideal corporate gift or workwear. 700K+ promotional and 200K+ workwear products.",
    icon: "search",
  },
  {
    title: "Data services",
    description: "High-quality product data, always up-to-date. ISO 27001 certified for enterprise trust.",
    icon: "database",
  },
];

export const solutions = {
  promotional: [
    {
      title: "Promotional Office",
      description: "The ERP cloud solution for the promotional industry. Proceed in an efficient and structured manner with a unique order planning system.",
      benefits: ["Efficient workflows", "Structured processes", "Unique order planning"],
    },
    {
      title: "Promotional Webshop",
      description: "Start selling immediately. More than 150 suppliers at your fingertips with your own look and feel.",
      benefits: ["150+ suppliers", "Own look and feel", "Ready to launch"],
    },
    {
      title: "SynQore Brandstore",
      description: "Full-service brandstore solution. Extranet and ordering platform for seamless B2B collaboration.",
      benefits: ["Full service", "Extranet platform", "B2B ordering"],
    },
    {
      title: "Promotional Sourcing",
      description: "Find the ideal corporate gift for your client. Extensive product database with over 700,000 unique products.",
      benefits: ["700K+ products", "Advanced search", "Supplier logos"],
    },
    {
      title: "Promotional Data",
      description: "High-quality product data from 150+ suppliers. Always up-to-date pricing and availability.",
      benefits: ["Daily sync", "ISO 27001", "Enterprise-ready"],
    },
    {
      title: "FastEditor",
      description: "Design tools for personalized promotional products. Create and order in one seamless flow.",
      benefits: ["Design tools", "Personalization", "Integrated ordering"],
    },
  ],
  workwear: [
    {
      title: "Clothing Management System",
      description: "One step further in service. Wearer and product-specific size registrations with customer look and feel.",
      benefits: ["Size management", "Branded experience", "Wearer registration"],
    },
    {
      title: "Workwear Webshop",
      description: "Start selling immediately. More than 50 suppliers with your own look and feel.",
      benefits: ["50+ suppliers", "Own branding", "Quick deployment"],
    },
    {
      title: "Workwear SynQore",
      description: "Full-service workwear solution. Extranet and ordering platform for corporate clothing.",
      benefits: ["Extranet platform", "Full service", "B2B ordering"],
    },
    {
      title: "Workwear Sourcing",
      description: "Find the ideal corporate clothing for your customer. Comprehensive database with over 200,000 workwear products.",
      benefits: ["200K+ products", "Full specs", "Supplier data"],
    },
    {
      title: "Workwear Data",
      description: "Up-to-date workwear product data. Reliable sourcing from 50+ suppliers.",
      benefits: ["Daily updates", "50+ suppliers", "ISO certified"],
    },
    {
      title: "Workwear FastEditor",
      description: "Design tools for personalized workwear. Create custom designs and order with ease.",
      benefits: ["Design tools", "Personalization", "Seamless flow"],
    },
  ],
};

export const howItWorks = [
  {
    step: 1,
    title: "Data",
    description: "We connect 150+ suppliers and keep product data, pricing and availability up-to-date.",
  },
  {
    step: 2,
    title: "Platform",
    description: "Our ERP, webshop and sourcing solutions give you one integrated platform.",
  },
  {
    step: 3,
    title: "Sales & efficiency",
    description: "Offer faster, reduce errors, improve margins. Connecting the industry.",
  },
];

export const metrics = [
  {
    value: "40%",
    label: "Faster quoting",
    description: "With integrated data and direct supplier connections",
  },
  {
    value: "90%",
    label: "Fewer errors",
    description: "Through automatic data sync and validation",
  },
  {
    value: "25%",
    label: "Better margins",
    description: "Thanks to better purchasing and more efficient processes",
  },
  {
    value: "150+",
    label: "Suppliers",
    description: "Always up-to-date product information and pricing",
  },
];

export const testimonials = [
  {
    quote:
      "Promidata has completely transformed our sales processes. We can now quote much faster and our error margin has dropped dramatically.",
    author: "Sales Manager, Promotional Distributor",
    company: "Premium Partner B.V.",
  },
  {
    quote:
      "The integration with our ERP and webshop was seamless. Our customers appreciate the professional look and up-to-date product data.",
    author: "IT Director, Workwear Specialist",
    company: "Corporate Wear NL",
  },
  {
    quote:
      "Connecting the industry is not an empty promise. We now work with data from 150+ suppliers in one platform.",
    author: "CEO, Multi-brand Dealer",
    company: "Brand Solutions",
  },
];

export const integrations = [
  { name: "Connected suppliers", description: "150+ suppliers integrated" },
  { name: "SynQore", description: "Brandstore & full service" },
  { name: "FastEditor", description: "Design & personalization tools" },
  { name: "Extranet", description: "Ordering platform" },
  { name: "API", description: "Custom integrations" },
];

export const faq = [
  {
    question: "How quickly can I get started with Promidata?",
    answer:
      "Onboarding typically takes 2-4 weeks, depending on the chosen solution. We guide you step by step through the implementation.",
  },
  {
    question: "How often is product data updated?",
    answer:
      "Our supplier data is synchronized daily. Prices and availability are always up-to-date.",
  },
  {
    question: "Which suppliers are connected?",
    answer:
      "More than 150 suppliers from the promotional and workwear industry. From major brands to specialized providers.",
  },
  {
    question: "Is support included?",
    answer:
      "Yes, all packages include technical support. We respond to your questions within 1 business day.",
  },
  {
    question: "Can I use my own branding?",
    answer:
      "Absolutely. Webshops and portals are fully white-label: your logo, colours and branding.",
  },
  {
    question: "Is Promidata ISO certified?",
    answer:
      "Yes, we are ISO 27001 certified for information security — enterprise-grade trust.",
  },
  {
    question: "Does Promidata work with existing ERP systems?",
    answer:
      "Yes, we offer integrations with SynQore and other systems. Contact us for your specific environment.",
  },
  {
    question: "What does implementation cost?",
    answer:
      "Costs depend on your requirements. Plan a demo and we will create a tailored proposal.",
  },
];

export const finalCta = {
  headline: "Ready to grow?",
  subcopy:
    "Plan a no-obligation demo or contact us directly. We respond within 1 business day.",
  ctaText: "Plan a demo",
  ctaHref: "#contact",
  secondaryText: "Or call +31 45 204 5040",
};

export const contact = {
  company: "Promidata B.V.",
  address: ["Hoofdstraat 81", "6461CN Kerkrade", "The Netherlands"],
  phone: "+31 45 204 5040",
  email: "info@promidata.com",
  badges: ["PPP", "PSI", "GWW", "ISO 27001"],
};

export const footer = {
  links: [
    { label: "Privacy Policy", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Support", href: "#contact" },
    { label: "About us", href: "#" },
  ],
  supportLinks: [
    { label: "Videos", href: "#" },
    { label: "Help & Explanation", href: "#" },
    { label: "Downloads", href: "#" },
  ],
  copyright: `© 2017 – ${new Date().getFullYear()} – Promidata B.V.`,
};
