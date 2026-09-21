import React from "react";
import { Button, Icon } from "../ui";
import { siteData } from "../../data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-dark font-bold text-xl">SK</span>
              </div>
              <span className="font-heading font-semibold text-lg">
                {siteData.company.name}
              </span>
            </div>
            <p className="text-neutral-300 text-sm">
              Expert kitchen design and installation in Southampton & Hampshire.
              Transforming homes since {siteData.company.yearsInBusiness}.
            </p>
            <div className="flex space-x-4">
              {siteData.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="text-neutral-300 hover:text-accent transition-colors"
                  aria-label={social.platform}
                >
                  <Icon name={social.platform} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {siteData.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-neutral-300 hover:text-accent transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-neutral-300 hover:text-accent transition-colors"
                >
                  Kitchen Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-neutral-300 hover:text-accent transition-colors"
                >
                  Full Installation
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-neutral-300 hover:text-accent transition-colors"
                >
                  Worktops & Units
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-neutral-300 hover:text-accent transition-colors"
                >
                  Plumbing & Appliances
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-neutral-300 hover:text-accent transition-colors"
                >
                  Full Remodels
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Icon name="location" size={18} className="text-accent mt-1" />
                <span className="text-neutral-300">
                  {siteData.company.address}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Icon name="phone" size={18} className="text-accent" />
                <a
                  href={`tel:${siteData.company.phone}`}
                  className="text-neutral-300 hover:text-accent transition-colors"
                >
                  {siteData.company.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Icon name="email" size={18} className="text-accent" />
                <a
                  href={`mailto:${siteData.company.email}`}
                  className="text-neutral-300 hover:text-accent transition-colors"
                >
                  {siteData.company.email}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Button href="#contact" variant="secondary" size="sm">
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="mt-12 pt-8 border-t border-neutral-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Opening Hours</h4>
              <p className="text-neutral-300">{siteData.openingHours.weekdays}</p>
              <p className="text-neutral-300">{siteData.openingHours.saturday}</p>
              <p className="text-neutral-300">{siteData.openingHours.sunday}</p>
            </div>
            <div className="flex flex-col justify-end items-start md:items-end">
              <p className="text-neutral-400">
                © {currentYear} {siteData.company.name}. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-2">
                <a
                  href="#"
                  className="text-neutral-400 hover:text-accent transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-accent transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
