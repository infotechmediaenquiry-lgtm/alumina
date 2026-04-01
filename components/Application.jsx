"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const APPLICATIONS = [
  {
    id: 1,
    title: "Refractories",
    desc: "High-temperature resistant components for industrial furnaces and kilns.",
    img: "/banner_2.jpeg",
    span: "normal",
  },
  {
    id: 2,
    title: "Ceramics",
    desc: "Precision ceramic parts engineered for extreme environments.",
    img: "/ceramics.webp",
    span: "normal",
  },
  {
    id: 3,
    title: "Polishing",
    desc: "Advanced abrasive solutions for automotive and optical surfaces.",
    img: "/Polishing.webp",
    span: "normal",
  },
  {
    id: 4,
    title: "Specialty Industries",
    desc: "Custom-engineered components for niche industrial applications.",
    img: "/Specialty Industries.webp",
    span: "wide",
  },
  {
    id: 5,
    title: "Building Chemistry",
    desc: "Performance additives and binders for construction materials.",
    img: "/Building Chemistry.jpg",
    span: "normal",
  },
  {
    id: 6,
    title: "Glass",
    desc: "Ultra-pure raw materials for architectural and technical glass.",
    img: "/glass.webp",
    span: "normal",
  },
];

function AppCard({ item, visible, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`app-card${item.span === "wide" ? " app-card--wide" : ""}${visible ? " visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      <div className={`app-card-img${hovered ? " zoomed" : ""}`}>
        <img src={item.img} alt={item.title} />
      </div>

      {/* Gradient overlay */}
      <div className={`app-card-overlay${hovered ? " hovered" : ""}`} />

      {/* Red accent line */}
      <div className={`app-card-line${hovered ? " hovered" : ""}`} />

      {/* Content */}
      <div className={`app-card-content${hovered ? " hovered" : ""}`}>
        <h3 className="app-card-title">{item.title}</h3>
        <p className={`app-card-desc${hovered ? " hovered" : ""}`}>{item.desc}</p>
      </div>
    </div>
  );
}

export default function ApplicationsSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --brand: #da252a;
          --brand-dark: #b81e22;
          --brand-glow: rgba(218,37,42,0.4);
        }

        .apps-section {
          width: 100%;
          background: #ffffff;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Subtle top line */
        .apps-top-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(218,37,42,0.4) 40%, rgba(218,37,42,0.4) 60%, transparent 100%);
        }

        /* Background texture */
        .apps-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }

        /* ── Header ── */
        .apps-header {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 90px 80px 64px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s;
        }
        .apps-header.visible { opacity: 1; transform: translateY(0); }

        .apps-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .apps-eyebrow-dash {
          width: 28px;
          height: 2px;
          background: var(--brand);
        }
        .apps-eyebrow-label {
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--brand);
        }

        .apps-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 300;
          line-height: 1.1;
          color: #111;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }
        .apps-heading em {
          font-style: italic;
          color: transparent;
          -webkit-text-stroke: 1px rgba(0,0,0,0.4);
        }

        .apps-subtext {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(0,0,0,0.5);
          max-width: 580px;
          margin: 0 auto;
        }

        /* ── Grid ── */
        .apps-grid {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 80px 100px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto auto;
          gap: 16px;
        }

        /* ── Card ── */
        .app-card {
          position: relative;
          border-radius: 3px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 4/3;
          opacity: 0;
          transform: translateY(28px) scale(0.98);
          transition:
            opacity 0.7s ease,
            transform 0.7s ease,
            box-shadow 0.3s ease;
        }
        .app-card.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .app-card:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
          z-index: 3;
        }

        /* Wide card spans 2 cols */
        .app-card--wide {
          grid-column: span 1;
        }

        /* Image */
        .app-card-img {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .app-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.7s ease;
          display: block;
        }
        .app-card-img.zoomed img {
          transform: scale(1.08);
        }

        /* Dark overlay */
        .app-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.82) 0%,
            rgba(0,0,0,0.3) 50%,
            rgba(0,0,0,0.1) 100%
          );
          transition: background 0.4s ease;
        }
        .app-card-overlay.hovered {
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.9) 0%,
            rgba(0,0,0,0.5) 55%,
            rgba(0,0,0,0.2) 100%
          );
        }

        /* Red bottom line */
        .app-card-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: var(--brand);
          transition: width 0.4s ease;
          z-index: 4;
        }
        .app-card-line.hovered {
          width: 100%;
        }

        /* Content */
        .app-card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px 24px 22px;
          z-index: 3;
          transform: translateY(0);
          transition: transform 0.35s ease;
        }

        .app-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 600;
          color: #fff;
          line-height: 1.1;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
        }

        .app-card-desc {
          font-size: 12.5px;
          font-weight: 300;
          line-height: 1.65;
          color: rgba(255,255,255,0.7);
          margin: 0 0 14px;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.4s ease, opacity 0.4s ease 0.05s;
        }
        .app-card-desc.hovered {
          max-height: 60px;
          opacity: 1;
        }

        /* Explore CTA */
        .app-card-cta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--brand);
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s;
        }
        .app-card-cta.hovered {
          opacity: 1;
          transform: translateY(0);
        }
        .app-card-cta svg {
          transition: transform 0.25s ease;
        }
        .app-card:hover .app-card-cta svg {
          transform: translateX(4px);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .apps-grid { padding: 0 48px 80px; gap: 12px; }
          .apps-header { padding: 70px 48px 52px; }
        }
        @media (max-width: 768px) {
          .apps-grid {
            grid-template-columns: repeat(2, 1fr);
            padding: 0 24px 64px;
          }
          .app-card--wide { grid-column: span 2; }
          .apps-header { padding: 56px 24px 44px; }
        }
        @media (max-width: 480px) {
          .apps-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .app-card--wide { grid-column: span 1; }
          .app-card { aspect-ratio: 3/2; }
          .apps-header { padding: 48px 20px 36px; }
        }
      `}</style>

      <section className="apps-section" ref={sectionRef}>
        <div className="apps-top-line" />
        <div className="apps-bg-grid" />

        {/* Header */}
        <div className={`apps-header${visible ? " visible" : ""}`}>
          <div className="apps-eyebrow">
            <div className="apps-eyebrow-dash" />
            <span className="apps-eyebrow-label">What We Serve</span>
            <div className="apps-eyebrow-dash" />
          </div>
          <h2 className="apps-heading">
            Our Applications <em>Portfolio</em>
          </h2>
          <p className="apps-subtext">
            Our legacy is built on decades of research and development, bringing new engineering applications to global markets, with continued investment in process and product innovation.
          </p>
        </div>

        {/* Cards grid */}
        <div className="apps-grid">
          {APPLICATIONS.map((item, i) => (
            <AppCard
              key={item.id}
              item={item}
              visible={visible}
              delay={150 + i * 90}
            />
          ))}
        </div>
      </section>
    </>
  );
}