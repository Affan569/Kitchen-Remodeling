import React, { useState, useEffect } from "react";
import { Button, Icon } from "../ui";
import { siteData } from "../../data";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-white/95 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SK</span>
              </div>
              <span className="font-heading font-semibold text-primary-dark text-lg hidden sm:block">
                {siteData.company.name}
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {siteData.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-text hover:text-primary-dark font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${siteData.company.phone}`}
              className="text-primary-dark font-semibold hover:text-accent transition-colors"
            >
              {siteData.company.phone}
            </a>
            <Button href="#contact" size="sm">
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            <Icon
              name={isMobileMenuOpen ? "close" : "menu"}
              size={24}
              className="text-primary-dark"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200">
          <div className="px-4 py-6 space-y-4">
            {siteData.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-text hover:text-primary-dark font-medium py-2 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-neutral-200 space-y-4">
              <a
                href={`tel:${siteData.company.phone}`}
                className="block text-primary-dark font-semibold hover:text-accent transition-colors"
              >
                {siteData.company.phone}
              </a>
              <Button href="#contact" className="w-full">
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
