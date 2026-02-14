import type { Metadata } from "next";
import {
  hero,
  socialProof,
  valuePillars,
  solutions,
  howItWorks,
  metrics,
  testimonials,
  integrations,
  faq,
  finalCta,
  contact,
  footer,
} from "@/content/improved-home";
import {
  Nav,
  Hero,
  LogoCloud,
  Features,
  SolutionsTabs,
  HowItWorks,
  Stats,
  Testimonials,
  Integrations,
  FAQ,
  CTA,
  Footer,
} from "@/components/improved";

export const metadata: Metadata = {
  title: "Promidata - IT-oplossingen voor promotional & workwear",
  description:
    "Advanced IT solutions and data services for the promotional products and workwear industry. ERP, Webshops, Sourcing. 150+ suppliers, up-to-date data. Connecting the industry.",
  keywords: [
    "promotional products",
    "workwear",
    "ERP",
    "webshop",
    "sourcing",
    "corporate gifts",
    "bedrijfskleding",
    "SynQore",
    "FastEditor",
  ],
  openGraph: {
    title: "Promidata - IT-oplossingen voor promotional & workwear",
    description:
      "Advanced IT solutions for the promotional products and workwear industry. 150+ suppliers. Connecting the industry.",
    url: "https://promidata.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ImprovedDesignPage() {
  return (
    <div className="min-h-screen bg-[#0f1629] bg-grid-pattern">
      <Nav />

      <main>
        <Hero content={hero} />
        <LogoCloud content={socialProof} />
        <Features pillars={valuePillars} />
        <SolutionsTabs content={solutions} />
        <HowItWorks steps={howItWorks} />
        <Stats metrics={metrics} />
        <Testimonials testimonials={testimonials} />
        <Integrations integrations={integrations} />
        <FAQ items={faq} />
        <CTA content={finalCta} />
        <Footer contact={contact} footer={footer} />
      </main>

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Promidata B.V.",
            url: "https://promidata.com",
            logo: "https://promidata.com/logo.png",
            description:
              "IT solutions for the promotional products and workwear industry.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Hoofdstraat 81",
              addressLocality: "Kerkrade",
              postalCode: "6461CN",
              addressCountry: "NL",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+31-45-2045040",
              contactType: "customer service",
              email: "info@promidata.com",
              areaServed: "NL",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Promidata",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "ERP, Webshop and Sourcing solutions for promotional products and workwear industry.",
            provider: {
              "@type": "Organization",
              name: "Promidata B.V.",
            },
          }),
        }}
      />
    </div>
  );
}
