"use client";

import Link from "next/link";

export function Footer({
  contact,
  footer,
}: {
  contact: {
    company: string;
    address: string[];
    phone: string;
    email: string;
    badges: string[];
  };
  footer: {
    links: { label: string; href: string }[];
    supportLinks?: { label: string; href: string }[];
    copyright: string;
  };
}) {
  return (
    <footer id="contact" className="border-t border-white/5 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              {contact.company}
            </h3>
            <address className="not-italic text-slate-400">
              {contact.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <div className="mt-4 space-y-1">
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="block text-[#f59e0b] hover:text-[#f97316]"
                >
                  {contact.phone}
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="block text-[#f59e0b] hover:text-[#f97316]"
                >
                  {contact.email}
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-500">
                {contact.badges.join(" · ")}
              </p>
            </address>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick links</h3>
            <ul className="space-y-2">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#f59e0b]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {footer.supportLinks && footer.supportLinks.length > 0 && (
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Support</h3>
              <ul className="space-y-2">
                {footer.supportLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-[#f59e0b]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Newsletter</h3>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-500 focus:border-[#f59e0b]/50 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/20"
              />
              <button
                type="submit"
                className="rounded-xl bg-[#f59e0b] px-4 py-2.5 font-semibold text-[#0f1629] hover:bg-[#f97316]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <span className="text-lg font-semibold lowercase text-[#f59e0b]">
            promidata
          </span>
          <p className="text-sm text-slate-500">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
