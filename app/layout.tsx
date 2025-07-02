import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans, fontMartianMono, fontPassionOne } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { AgeVerification } from "@/components/age-verification";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-transparent font-sans antialiased",
          fontSans.variable,
          fontMartianMono.variable,
          fontPassionOne.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-full px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full bg-sablue text-white py-6">
              <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-nowrap text-xs md:text-left">
                    <a className="text-xs hover:underline" href="/privacy">
                      Privacy Policy
                    </a>
                    <br />© 2025 All Rights Reserved
                  </div>
                  <p className="text-xs flex mx-10">
                    For use only by adults 21 years of age and older; 18+ for
                    medical states. Keep out of reach of children. Do not
                    operate a vehicle or machinery while under the influence of
                    this drug. Laws governing the legality, availability and use
                    of marijuana vary by state.
                  </p>

                  <div className="flex items-center gap-6">
                    <a
                      className="hover:scale-110 transition-transform"
                      href="https://www.instagram.com/space_ape__official/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>

                    <a
                      className="bg-white text-sablue px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      href="/signup"
                    >
                      Join Our Giveaway
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          <AgeVerification />
        </Providers>
      </body>
    </html>
  );
}
