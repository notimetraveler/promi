export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f1629] bg-grid-pattern">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0f1629]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-semibold lowercase tracking-tight text-[#f59e0b]">
              promidata
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#promotional"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Promotional
            </a>
            <a
              href="#workwear"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Workwear
            </a>
            <a
              href="#about"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              About us
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-[#f59e0b] px-4 py-2 text-sm font-medium text-[#0f1629] transition-colors hover:bg-[#f97316]"
            >
              More information
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="gradient-orb gradient-orb-1" aria-hidden />
        <div className="gradient-orb gradient-orb-2" aria-hidden />

        <div className="relative mx-auto max-w-4xl">
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

          <p className="mb-10 max-w-2xl text-slate-400">
            With access to high-quality product information from over 150
            suppliers, customers can always rely on the most up-to-date pricing
            and product data.
          </p>

          <a
            href="#solutions"
            className="inline-block rounded-lg bg-[#f59e0b] px-6 py-3 font-semibold text-[#0f1629] transition-colors hover:bg-[#f97316]"
          >
            Discover our solutions
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/5 bg-white/[0.02] px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#f59e0b] md:text-3xl">
                150+
              </div>
              <p className="mt-1 text-sm text-slate-400">Suppliers</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white md:text-3xl">
                700.000+
              </div>
              <p className="mt-1 text-sm text-slate-400">
                Promotional products
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white md:text-3xl">
                200.000+
              </div>
              <p className="mt-1 text-sm text-slate-400">Workwear products</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white md:text-3xl">
                ISO 27001
              </div>
              <p className="mt-1 text-sm text-slate-400">Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Connecting the industry - Solutions */}
      <section
        id="solutions"
        className="px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Connecting the industry
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                category: "Promotional",
                title: "Promotional Office",
                description:
                  "The ERP cloud solution for the promotional industry. Proceed in an efficient and structured manner. Unique order planning system.",
              },
              {
                category: "Promotional",
                title: "Promotional Webshop",
                description:
                  "Start selling immediately. More than 150 suppliers. Own look and feel.",
              },
              {
                category: "Promotional",
                title: "Promotional Sourcing",
                description:
                  "Find the ideal corporate gift for your client. Extensive product database with over 700,000 unique products.",
              },
              {
                category: "Workwear",
                title: "Clothing Management System",
                description:
                  "One step further in service. Wearer and product-specific size registrations. Customer look and feel.",
              },
              {
                category: "Workwear",
                title: "Workwear Webshop",
                description:
                  "Start selling immediately. More than 50 suppliers. Own look and feel.",
              },
              {
                category: "Workwear",
                title: "Workwear Sourcing",
                description:
                  "Find the ideal corporate clothing for your customer. Comprehensive product database with over 200,000 unique products.",
              },
            ].map((solution, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-[#f59e0b]/30 hover:bg-white/[0.04]"
              >
                <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#f59e0b]">
                  {solution.category}
                </span>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {solution.title}
                </h3>
                <p className="mb-4 text-slate-400">{solution.description}</p>
                <a
                  href="mailto:info@promidata.com"
                  className="inline-block text-sm font-medium text-[#f59e0b] hover:text-[#f97316]"
                >
                  More information →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-white/5 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Sign up for the Promidata newsletter
          </h2>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 focus:border-[#f59e0b]/50 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/20"
            />
            <button
              type="submit"
              className="rounded-lg bg-[#f59e0b] px-6 py-3 font-semibold text-[#0f1629] transition-colors hover:bg-[#f97316]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Contact */}
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

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <span className="text-lg font-semibold lowercase text-[#f59e0b]">
              promidata
            </span>
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-white"
            >
              Privacy Policy Promidata B.V.
            </a>
          </div>
          <p className="mt-4 text-center text-sm text-slate-500 md:text-left">
            © 2017 – {new Date().getFullYear()} – Promidata B.V.
          </p>
        </div>
      </footer>
    </div>
  );
}
