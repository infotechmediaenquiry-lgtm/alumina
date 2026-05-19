"use client";

import {
  MapPin,
  Mail,
  Phone,
  User,
  Clock
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0b0b] text-gray-300">

      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/footer-bg.jpg')] bg-cover bg-center opacity-10"></div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 border-b border-gray-700">

        {/* Column 1 */}
        <div>
          <img
            src="../app/logo.webp"
            alt="Logo"
            className="mb-5 w-40"
          />

          <p className="text-sm leading-7 mb-6">
            Alumina Chemicals & Castables is a leading name in industrial manufacturing,
            providing top-tier refractory solutions for heavy industries since 1998.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[FaFacebookF, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="border border-gray-600 p-3 hover:bg-white hover:text-black transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", link: "/" },
              { name: "About Us", link: "/about" },
              { name: "Our Products", link: "/products" },
              { name: "Quality Assurance", link: "/quality" },
              { name: "Inquiry", link: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <span className="text-lg">›</span> {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Contact Us
          </h3>

          <div className="space-y-4 text-sm">

            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1" />
              <p>
                Plot No.R-32/43, TTC Industrial Estate, Rabale MIDC,
                Navi Mumbai - 400701, Maharashtra, India
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <a href="mailto:sales@alumina.co.in">
                sales@alumina.co.in
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <a href="mailto:nitin@alumina.co.in">
                nitin@alumina.co.in
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <a href="tel:7400093412">
                7400093412
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm py-4 text-gray-400">
        © {new Date().getFullYear()} Alumina Chemicals & Castables. All Rights Reserved.
      </div>

    </footer>
  );
}