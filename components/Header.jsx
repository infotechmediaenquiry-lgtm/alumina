"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Search, Globe, ArrowRight } from "lucide-react";
import NextImage from "next/image";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    categories: [
      {
        title: "Alumina Trihydrate (ATH)",
        items: [
          { label: "Sodium Aluminate", desc: "High-purity ATH powders", href: "/sodiumaluminate" },
          { label: "Calcined Alumina", desc: "Thermal & abrasive grades", href: "/calcinedalumina" },
          { label: "Activated Alumina", desc: "Custom particle sizes", href: "/activatedalumina" },
          { label: "Zirconium Silicate", desc: "Custom particle sizes", href: "/zirconiumsilicate" },
        ],
      },
      {
        title: "Industry Solutions",
        items: [
          { label: "Aerospace", desc: "High-performance components", href: "#" },
          { label: "Industrial", desc: "Heavy-duty applications", href: "#" },
          { label: "Electronics", desc: "Micro & nano engineering", href: "#", badge: "NEW" },
        ],
      },
      {
        title: "By Application",
        items: [
          { label: "Flame Retardants", desc: "FR filler systems", href: "#" },
          { label: "Polishing & Abrasives", desc: "Surface finish solutions", href: "#" },
          { label: "Ceramics", desc: "Structural & refractory", href: "#" },
        ],
      },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const searchRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:wght@600;700&display=swap');

        :root {
          --brand: #da252a;
          --brand-dark: #b81e22;
          --brand-light: #f5e6e7;
          --ink: #111418;
          --ink-mid: #4a5160;
          --ink-soft: #8b919e;
          --surface: #ffffff;
          --surface-alt: #f7f8fa;
          --border: #e8eaed;
          --shadow-sm: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
          --shadow-md: 0 4px 24px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.06);
          --shadow-lg: 0 12px 40px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06);
        }

        .navbar-root * { box-sizing: border-box; margin: 0; padding: 0; }
        .navbar-root {
          font-family: 'DM Sans', sans-serif;
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
        }

        /* Top utility bar */
        .utility-bar {
          background: var(--brand);
          padding: 6px 0;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .utility-bar.scrolled { max-height: 0; padding: 0; opacity: 0; }
        .utility-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .utility-left {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: rgba(255,255,255,0.88);
          letter-spacing: 0.02em;
        }
        .utility-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.5);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        .utility-right {
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 12px;
          color: rgba(255,255,255,0.88);
        }
        .utility-link {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: color 0.2s;
          text-decoration: none;
          color: inherit;
        }
        .utility-link:hover { color: #fff; }

        /* Main nav */
        .nav-main {
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          transition: box-shadow 0.3s ease;
        }
        .nav-main.scrolled { box-shadow: var(--shadow-md); }
        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          height: 68px;
          display: flex;
          align-items: center;
          gap: 0;
        }

        /* Logo */
        .logo-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          flex-shrink: 0;
          text-decoration: none;
        }

        /* Desktop links */
        .desktop-links {
          display: flex;
          align-items: center;
          gap: 2px;
          margin-left: 40px;
          flex: 1;
        }
        .nav-item {
          position: relative;
        }
        .nav-item::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          height: 16px;
          pointer-events: auto;
        }
        .nav-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 8px 14px;
          border-radius: 8px;
          border: none;
          background: transparent;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: var(--ink-mid);
          cursor: pointer;
          transition: all 0.18s ease;
          white-space: nowrap;
        }
        .nav-btn:hover, .nav-btn.active {
          color: var(--ink);
          background: var(--surface-alt);
        }
        .nav-btn.active { color: var(--brand); }
        .nav-btn svg {
          transition: transform 0.22s ease;
          color: var(--ink-soft);
        }
        .nav-btn.active svg { transform: rotate(180deg); color: var(--brand); }

        /* Dropdown base */
        .dropdown-panel {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%) translateY(8px);
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 10px;
          min-width: 240px;
          box-shadow: var(--shadow-lg);
          opacity: 0;
          visibility: hidden;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
          z-index: 100;
        }
        .dropdown-panel::before {
          content: '';
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 12px; height: 12px;
          background: var(--surface);
          border-left: 1px solid var(--border);
          border-top: 1px solid var(--border);
        }
        .dropdown-panel.open {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
          pointer-events: auto;
        }

        /* Wide dropdown for categories */
        .dropdown-panel.wide {
          min-width: 580px;
          left: 0;
          transform: translateX(-30%) translateY(8px);
        }
        .dropdown-panel.wide.open {
          transform: translateX(-30%) translateY(0);
        }
        .dropdown-panel.wide::before {
          left: 32%;
        }

        .panel-header {
          font-size: 11px;
          font-weight: 600;
          color: var(--ink-soft);
          letter-spacing: 0.09em;
          text-transform: uppercase;
          padding: 4px 8px 10px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 8px;
        }
        .categories-grid {
          display: flex;
          gap: 0;
        }
        .cat-col {
          flex: 1;
          padding: 0 4px;
          border-right: 1px solid var(--border);
        }
        .cat-col:last-child { border-right: none; }
        .cat-title {
          font-size: 11px;
          font-weight: 600;
          color: var(--ink-soft);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 4px 10px 8px;
        }

        /* Dropdown items */
        .dropdown-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 8px 10px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.15s;
        }
        .dropdown-item:hover { background: var(--surface-alt); }
        .dropdown-item:hover .drop-dot { opacity: 1; }
        .drop-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--brand);
          opacity: 0.35;
          flex-shrink: 0;
          margin-top: 6px;
          transition: opacity 0.15s;
        }
        .drop-label {
          font-size: 13.5px;
          font-weight: 500;
          color: var(--ink);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .drop-badge {
          font-size: 10px;
          font-weight: 600;
          background: var(--brand-light);
          color: var(--brand);
          padding: 2px 6px;
          border-radius: 20px;
          letter-spacing: 0.04em;
        }
        .drop-desc {
          font-size: 12px;
          color: var(--ink-soft);
          margin-top: 1px;
        }

        .panel-footer {
          border-top: 1px solid var(--border);
          margin-top: 8px;
          padding: 10px 8px 4px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .footer-link {
          font-size: 13px;
          font-weight: 500;
          color: var(--brand);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          background: none;
          border: none;
          font-family: 'DM Sans', sans-serif;
          transition: color 0.2s;
        }
        .footer-link:hover { color: var(--brand-dark); }

        /* Right actions */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: auto;
          flex-shrink: 0;
        }

        /* Search */
        .search-wrap {
          display: flex;
          align-items: center;
          gap: 0;
        }
        .search-expand {
          display: flex;
          align-items: center;
          overflow: hidden;
          width: 0;
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s;
          opacity: 0;
        }
        .search-expand.open { width: 220px; opacity: 1; }
        .search-input {
          width: 100%;
          border: 1.5px solid var(--border);
          border-right: none;
          border-radius: 8px 0 0 8px;
          padding: 7px 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          color: var(--ink);
          background: var(--surface-alt);
          outline: none;
          transition: border-color 0.2s;
        }
        .search-input:focus { border-color: var(--brand); background: var(--surface); }
        .search-submit {
          padding: 7px 12px;
          border: 1.5px solid var(--brand);
          border-radius: 0 8px 8px 0;
          background: var(--brand);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: background 0.2s;
        }
        .search-submit:hover { background: var(--brand-dark); }
        .icon-btn {
          width: 38px; height: 38px;
          border-radius: 9px;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ink-mid);
          transition: all 0.18s ease;
        }
        .icon-btn:hover { background: var(--surface-alt); color: var(--ink); }
        .icon-btn.active { background: var(--brand-light); color: var(--brand); }

        /* Language pill */
        .lang-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 8px;
          border: 1.5px solid var(--border);
          background: transparent;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: var(--ink-mid);
          cursor: pointer;
          transition: all 0.18s ease;
        }
        .lang-btn:hover { border-color: var(--brand); color: var(--brand); }

        /* CTA */
        .cta-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 18px;
          border-radius: 9px;
          border: none;
          background: var(--brand);
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          color: white;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .cta-btn:hover {
          background: var(--brand-dark);
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(218,37,42,0.35);
        }
        .cta-btn svg { transition: transform 0.2s; }
        .cta-btn:hover svg { transform: translateX(3px); }

        /* Mobile toggle */
        .mobile-toggle {
          display: none;
          width: 40px; height: 40px;
          border-radius: 9px;
          border: 1.5px solid var(--border);
          background: transparent;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          color: var(--ink);
          margin-left: 8px;
          transition: all 0.18s;
        }
        .mobile-toggle:hover { border-color: var(--brand); color: var(--brand); }

        /* Mobile menu */
        .mobile-panel {
          background: var(--surface);
          border-top: 1px solid var(--border);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.38s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mobile-panel.open { max-height: 800px; }
        .mobile-inner {
          padding: 16px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .mobile-search {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--surface-alt);
          border: 1.5px solid var(--border);
          border-radius: 10px;
          padding: 10px 14px;
          margin-bottom: 8px;
        }
        .mobile-search input {
          flex: 1;
          border: none;
          background: transparent;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: var(--ink);
          outline: none;
        }
        .mobile-nav-item {
          border-radius: 10px;
          overflow: hidden;
        }
        .mobile-nav-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 14px;
          border: none;
          background: transparent;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: var(--ink);
          cursor: pointer;
          text-align: left;
          border-radius: 10px;
          transition: background 0.15s;
        }
        .mobile-nav-btn:hover { background: var(--surface-alt); }
        .mobile-nav-btn svg { transition: transform 0.22s; color: var(--ink-soft); }
        .mobile-nav-btn.expanded svg { transform: rotate(180deg); color: var(--brand); }
        .mobile-sub {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s ease;
        }
        .mobile-sub.open { max-height: 600px; }
        .mobile-cat-title {
          font-size: 11px;
          font-weight: 600;
          color: var(--ink-soft);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 10px 14px 4px 22px;
        }
        .mobile-sub-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 14px 9px 22px;
          font-size: 14px;
          color: var(--ink-mid);
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.15s;
        }
        .mobile-sub-item::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--brand);
          flex-shrink: 0;
          opacity: 0.4;
        }
        .mobile-sub-item:hover { background: var(--brand-light); color: var(--brand); }
        .mobile-sub-item:hover::before { opacity: 1; }
        .mobile-divider {
          height: 1px;
          background: var(--border);
          margin: 8px 0;
        }
        .mobile-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 8px;
        }
        .mobile-lang {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 500;
          color: var(--ink-mid);
          cursor: pointer;
        }
        .mobile-cta {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 20px;
          border-radius: 9px;
          background: var(--brand);
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }
        .mobile-cta:hover { background: var(--brand-dark); }

        @media (max-width: 1024px) {
          .desktop-links { margin-left: 20px; gap: 0; }
          .nav-btn { padding: 8px 10px; font-size: 13.5px; }
        }

        @media (max-width: 768px) {
          .desktop-links, .nav-actions .search-wrap,
          .nav-actions .lang-btn, .nav-actions .cta-btn { display: none; }
          .mobile-toggle { display: flex; }
          .nav-inner { padding: 0 20px; }
          .utility-inner { padding: 0 20px; }
          .utility-right { display: none; }
        }
      `}</style>

      <div className="navbar-root">
        {/* Utility bar */}
        <div className={`utility-bar${scrolled ? " scrolled" : ""}`}>
          <div className="utility-inner">
            <div className="utility-left">
              <div className="utility-dot" />
              Global operations across 40+ countries
            </div>
            <div className="utility-right">
              <a className="utility-link" href="#">Contact Sales</a>
              <a className="utility-link" href="#">Partner Portal</a>
              <a className="utility-link" href="#">
                <Globe size={12} /> Global Sites
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <nav className={`nav-main${scrolled ? " scrolled" : ""}`}>
          <div className="nav-inner">

            {/* Logo */}
            <a className="logo-wrap" href="/">
              <NextImage
                src="/logo.webp"
                alt="Logo"
                width={200}
                height={200}
                style={{ objectFit: "contain" }}
                priority
              />
            </a>

            {/* Desktop links */}
            <div className="desktop-links">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="nav-item"
                  onMouseEnter={() => item.categories && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`nav-btn${activeDropdown === item.label ? " active" : ""}`}
                    onClick={() => !item.categories && window.location.href === item.href ? null : !item.categories && (window.location.href = item.href)}
                  >
                    {item.label}
                    {item.categories && <ChevronDown size={14} />}
                  </button>

                  {item.categories && (
                    <div 
                      className={`dropdown-panel wide${activeDropdown === item.label ? " open" : ""}`}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="panel-header">Browse by category</div>
                      <div className="categories-grid">
                        {item.categories.map((cat) => (
                          <div key={cat.title} className="cat-col">
                            <div className="cat-title">{cat.title}</div>
                            {cat.items.map((sub) => (
                              <div 
                                className="dropdown-item" 
                                key={sub.label}
                                onClick={() => window.location.href = sub.href}
                              >
                                <div className="drop-dot" />
                                <div>
                                  <div className="drop-label">
                                    {sub.label}
                                    {sub.badge && (
                                      <span className="drop-badge">{sub.badge}</span>
                                    )}
                                  </div>
                                  <div className="drop-desc">{sub.desc}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="panel-footer">
                        <button className="footer-link">
                          View all products <ArrowRight size={13} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="nav-actions">
              {/* Search */}
              <div className="search-wrap">
                <div className={`search-expand${searchOpen ? " open" : ""}`}>
                  <input
                    ref={searchRef}
                    className="search-input"
                    type="text"
                    placeholder="Search products, resources…"
                    value={searchVal}
                    onChange={(e) => setSearchVal(e.target.value)}
                    onKeyDown={(e) => e.key === "Escape" && setSearchOpen(false)}
                  />
                  <button className="search-submit">
                    <Search size={14} />
                  </button>
                </div>
                <button
                  className={`icon-btn${searchOpen ? " active" : ""}`}
                  onClick={() => setSearchOpen(!searchOpen)}
                  aria-label="Toggle search"
                >
                  {searchOpen ? <X size={17} /> : <Search size={17} />}
                </button>
              </div>

              {/* Language */}
              <button className="lang-btn">
                <Globe size={14} />
                EN
              </button>

              {/* CTA */}
              <button className="cta-btn">
                Get a Quote
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile panel */}
        <div className={`mobile-panel${mobileOpen ? " open" : ""}`}>
          <div className="mobile-inner">
            {/* Mobile search */}
            <div className="mobile-search">
              <Search size={16} color="var(--ink-soft)" />
              <input placeholder="Search products, resources…" />
            </div>

            {NAV_ITEMS.map((item) => (
              <div className="mobile-nav-item" key={item.label}>
                <button
                  className={`mobile-nav-btn${mobileExpanded === item.label ? " expanded" : ""}`}
                  onClick={() => {
                    if (item.categories) {
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label);
                    } else {
                      window.location.href = item.href;
                    }
                  }}
                >
                  {item.label}
                  {item.categories && <ChevronDown size={16} />}
                </button>

                {item.categories && (
                  <div className={`mobile-sub${mobileExpanded === item.label ? " open" : ""}`}>
                    {item.categories.map((cat) => (
                      <div key={cat.title}>
                        <div className="mobile-cat-title">{cat.title}</div>
                        {cat.items.map((sub) => (
                          <div 
                            className="mobile-sub-item" 
                            key={sub.label}
                            onClick={() => window.location.href = sub.href}
                          >
                            {sub.label}
                            {sub.badge && (
                              <span className="drop-badge">{sub.badge}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mobile-divider" />
            <div className="mobile-bottom">
              <div className="mobile-lang">
                <Globe size={16} />
                English (EN)
              </div>
              <button className="mobile-cta">
                Get a Quote <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}