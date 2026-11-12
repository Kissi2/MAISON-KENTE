"use client";

import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/constants";
import { useCart } from "@/lib/cart-context";
import Logo from "@/components/shared/Logo";

interface NavbarProps {
  /** Force le fond opaque dès le départ (pages sans hero plein écran sombre) */
  alwaysOpaque?: boolean;
}

export default function Navbar({ alwaysOpaque = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, toggle: toggleCart } = useCart();

  useEffect(() => {
    if (alwaysOpaque) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [alwaysOpaque]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = `/${href}`;
    }
  };

  const isDark = alwaysOpaque || isScrolled || isMobileMenuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b ${
        isDark
          ? "bg-paper border-ink/10 text-ink"
          : "bg-transparent border-transparent text-paper"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-[4.5rem] md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="shrink-0"
            aria-label="MAISON KENTE — accueil"
          >
            <Logo
              variant="inline"
              tone={isDark ? "ink" : "paper"}
              withTagline={false}
              className="gap-2"
              markClassName="h-8 md:h-9 w-auto"
              nameClassName="hidden sm:inline lg:hidden xl:inline text-base tracking-[0.08em] whitespace-nowrap"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="eyebrow whitespace-nowrap tracking-[0.1em] xl:tracking-[0.2em] opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleCart}
              aria-label="Ouvrir le panier"
              className="relative p-1 opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center bg-clay text-[10px] font-semibold text-paper rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`whitespace-nowrap px-4 lg:px-5 py-2.5 text-sm font-medium border transition-colors duration-200 ${
                isDark
                  ? "border-clay bg-clay text-paper hover:bg-ink hover:border-ink"
                  : "border-paper text-paper hover:bg-paper hover:text-ink"
              }`}
            >
              WhatsApp
            </a>
          </div>

          {/* Actions mobile */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={toggleCart}
              aria-label="Ouvrir le panier"
              className="relative p-1"
            >
              <ShoppingBag size={21} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center bg-clay text-[10px] font-semibold text-paper rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-paper px-6 py-6 space-y-1 border-t border-ink/10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="eyebrow block py-3 border-b border-ink/10 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-clay text-paper px-4 py-3.5 text-sm font-medium mt-5"
          >
            Contacter via WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
