import Image from "next/image";
import Link from "next/link";
import { ImprovedDesignButton } from "@/components/ImprovedDesignButton";
import { socialProof, SUPPLIER_LOGOS_BASE } from "@/content/improved-home";

function getLogoUrl(filename: string) {
  return `${SUPPLIER_LOGOS_BASE}/${encodeURIComponent(filename)}`;
}

const solutions = [
  {
    category: "Promotional",
    title: "Promotional Office",
    description:
      "The ERP cloud solution for the promotional industry. Proceed in an efficient and structured manner. Unique order planning system.",
    link: "https://promidata.com/promotionaloffice.php",
  },
  {
    category: "Promotional",
    title: "Promotional Webshop",
    description:
      "Start selling immediately. More than 150 suppliers. Own look and feel.",
    link: "https://promidata.com/promotionalwebshop.php",
  },
  {
    category: "Promotional",
    title: "Promotional Sourcing",
    description:
      "Find the ideal corporate gift for your client. Extensive product database with over 700,000 unique products.",
    link: "https://promidata.com/promotionalsourcing.php",
  },
  {
    category: "Workwear",
    title: "Clothing Management System",
    description:
      "One step further in service. Wearer and product-specific size registrations. Customer look and feel.",
    link: "https://promidata.com/workwear-KMS.php",
  },
  {
    category: "Workwear",
    title: "Workwear Webshop",
    description:
      "Start selling immediately. More than 50 suppliers. Own look and feel.",
    link: "https://promidata.com/workwear-webshop.php",
  },
  {
    category: "Workwear",
    title: "Workwear Sourcing",
    description:
      "Find the ideal corporate clothing for your customer. Comprehensive product database with over 200,000 unique products.",
    link: "https://promidata.com/workwear-sourcing.php",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f1629]">
      {/* Navigation - matches promidata.com (with New site button added) */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#f59e0b]/30 bg-[#0f1629]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold lowercase tracking-tight text-[#f59e0b]">
              promidata
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <ImprovedDesignButton />
            <div className="hidden items-center gap-8 md:flex">
              <Link
                href="#solutions"
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                Promotional
              </Link>
              <Link
                href="#solutions"
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                Workwear
              </Link>
              <Link
                href="#contact"
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                About us
              </Link>
              <Link
                href="#contact"
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - matches promidata.com exactly */}
      <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#f59e0b] md:text-5xl lg:text-6xl">
            Your partner in
            <br />
            commercial success
          </h1>

          <p className="mb-6 max-w-2xl text-lg text-white/90 md:text-xl">
            Your partner for advanced IT solutions and commercial success within
            the promotional products and workwear industry. Whether you are a
            distributor, dealer or supplier, our powerful software and efficient
            data services are designed to take your business to new heights.
          </p>

          <p className="max-w-2xl text-slate-400">
            With access to high-quality product information from over 150
            suppliers, customers can always rely on the most up-to-date pricing
            and product data.
          </p>
        </div>
      </section>

      {/* Some of our suppliers - matches promidata.com */}
      <section className="border-t border-white/5 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
            Some of our suppliers
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {socialProof.suppliers.map((supplier) => (
              <div
                key={supplier.name}
                className="flex min-h-[80px] items-center justify-center rounded-2xl bg-white px-4 py-4"
              >
                <Image
                  src={getLogoUrl(supplier.logo)}
                  alt={supplier.name}
                  width={120}
                  height={48}
                  className="h-10 w-auto max-w-[120px] object-contain object-center"
                  unoptimized
                />
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-lg font-semibold text-[#f59e0b]">
            And many others!
          </p>
        </div>
      </section>

      {/* Connecting the industry - matches promidata.com */}
      <section id="solutions" className="border-t border-white/5 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Connecting the industry
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#f59e0b]">
                  {solution.category}
                </span>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {solution.title}
                </h3>
                <p className="mb-4 text-slate-400">{solution.description}</p>
                <Link
                  href={solution.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-[#f59e0b] hover:text-[#f97316]"
                >
                  More information →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter - matches promidata.com */}
      <section className="border-t border-white/5 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
            Sign up for the Promidata newsletter
          </h2>
          <Link
            href="https://promidata.com/newsletter.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-[#f59e0b] px-6 py-3 font-semibold text-[#0f1629] transition-colors hover:bg-[#f97316]"
          >
            Subscribe
          </Link>
        </div>
      </section>

      {/* Contact - matches promidata.com */}
      <section id="contact" className="border-t border-white/5 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">Contact</h2>
              <address className="not-italic text-slate-400">
                <p className="font-semibold text-white">Promidata B.V.</p>
                <p>Hoofdstraat 81</p>
                <p>6461CN Kerkrade</p>
                <p>Nederland</p>
                <div className="mt-4 space-y-1">
                  <a
                    href="tel:+31452045040"
                    className="block text-[#f59e0b] hover:text-[#f97316]"
                  >
                    +31 45 204 5040
                  </a>
                  <a
                    href="mailto:info@promidata.com"
                    className="block text-[#f59e0b] hover:text-[#f97316]"
                  >
                    info@promidata.com
                  </a>
                </div>
              </address>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">Follow us</h2>
              <p className="text-sm text-slate-500">
                PPP · PSI · GWW · ISO 27001
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - matches promidata.com */}
      <footer className="border-t border-white/5 px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <span className="text-lg font-semibold lowercase text-[#f59e0b]">
              promidata
            </span>
            <Link
              href="#"
              className="text-sm text-slate-500 hover:text-white"
            >
              Privacy Policy Promidata B.V.
            </Link>
          </div>
          <p className="mt-4 text-center text-sm text-slate-500 md:text-left">
            © 2017 – {new Date().getFullYear()} – Promidata B.V.
          </p>
        </div>
      </footer>
    </div>
  );
}
