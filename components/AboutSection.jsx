"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Award, Users, Globe, } from "lucide-react";

const PILLARS = [
  { icon: Award,  title: "ISO Certified",       desc: "ISO 9001:2015 certified manufacturing across all facilities." },
  { icon: Globe,  title: "Popular Products",          desc: "Alumina Trihydrate, Sodium Aluminate, Calcined Alumina and Activated Alumina" },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
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
          --brand-glow: rgba(218, 37, 42, 0.35);
          --dark-bg: #ffffff;
          --dark-surface: #f5f5f3;
          --dark-card: #eeeeec;
          --dark-border: rgba(0,0,0,0.08);
          --text-primary: #111111;
          --text-muted: rgba(0,0,0,0.55);
          --text-subtle: rgba(0,0,0,0.35);
        }

        .about-section {
          width: 100%;
          background: var(--dark-bg);
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
          position: relative;
        }

        /* Top decorative line */
        .about-top-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(218,37,42,0.5) 40%, rgba(218,37,42,0.5) 60%, transparent 100%);
        }

        /* Background grid */
        .about-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }

        /* Main wrapper */
        .about-wrapper {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* ── LEFT: Photo block ── */
        .about-photo-col {
          position: relative;
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s;
        }
        .about-photo-col.visible { opacity: 1; transform: translateX(0); }

        /* Main image frame */
        .about-img-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4/5;
          border-radius: 2px;
          overflow: hidden;
        }

        .about-img-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.6s ease;
        }
        .about-img-frame:hover img { transform: scale(1.04); }

        /* Red corner accent */
        .img-corner-tl {
          position: absolute;
          top: -8px;
          left: -8px;
          width: 48px;
          height: 48px;
          border-top: 2px solid var(--brand);
          border-left: 2px solid var(--brand);
          z-index: 3;
        }
        .img-corner-br {
          position: absolute;
          bottom: -8px;
          right: -8px;
          width: 48px;
          height: 48px;
          border-bottom: 2px solid var(--brand);
          border-right: 2px solid var(--brand);
          z-index: 3;
        }

        /* Floating experience badge */
        .about-badge {
          position: absolute;
          bottom: -24px;
          right: -24px;
          width: 120px;
          height: 120px;
          background: var(--brand);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 5;
          box-shadow: 0 8px 40px var(--brand-glow);
        }
        .badge-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px;
          font-weight: 700;
          color: #fff;
          line-height: 1;
        }
        .badge-label {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
          text-align: center;
          margin-top: 3px;
        }

        /* Small secondary card */
        .about-card-mini {
          position: absolute;
          top: 40px;
          left: -36px;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 4px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 5;
          white-space: nowrap;
        }
        .mini-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--brand);
          flex-shrink: 0;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 var(--brand-glow); }
          50% { box-shadow: 0 0 0 6px transparent; }
        }
        .mini-text {
          font-size: 12px;
          font-weight: 500;
          color: var(--text-primary);
          letter-spacing: 0.03em;
        }
        .mini-sub {
          font-size: 10px;
          color: var(--text-muted);
          margin-top: 1px;
        }

        /* ── RIGHT: Info col ── */
        .about-info-col {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s;
        }
        .about-info-col.visible { opacity: 1; transform: translateX(0); }

        /* Eyebrow */
        .about-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .eyebrow-dash {
          width: 32px;
          height: 2px;
          background: var(--brand);
          flex-shrink: 0;
        }
        .eyebrow-label {
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--brand);
        }

        /* Heading */
        .about-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(38px, 4vw, 58px);
          font-weight: 300;
          line-height: 1.08;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          margin-bottom: 24px;
        }
        .about-heading em {
          font-style: italic;
          color: transparent;
          -webkit-text-stroke: 1px rgba(0,0,0,0.35);
        }

        /* Divider */
        .about-divider {
          width: 48px;
          height: 2px;
          background: var(--dark-border);
          margin-bottom: 24px;
        }

        /* Body text */
        .about-body {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.85;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        /* Pillars */
        .about-pillars {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 40px;
        }
        .pillar-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 16px;
          background: var(--dark-surface);
          border: 1px solid var(--dark-border);
          border-radius: 4px;
          transition: border-color 0.2s ease, background 0.2s ease;
          opacity: 0;
          transform: translateY(12px);
        }
        .pillar-item.visible { opacity: 1; transform: translateY(0); }
        .pillar-item:nth-child(1) { transition: border-color 0.2s, background 0.2s, opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s; }
        .pillar-item:nth-child(2) { transition: border-color 0.2s, background 0.2s, opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s; }
        .pillar-item:nth-child(3) { transition: border-color 0.2s, background 0.2s, opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s; }
        .pillar-item:nth-child(4) { transition: border-color 0.2s, background 0.2s, opacity 0.6s ease 0.8s, transform 0.6s ease 0.8s; }
        .pillar-item:hover {
          border-color: rgba(218,37,42,0.3);
          background: var(--dark-card);
        }
        .pillar-icon {
          width: 34px; height: 34px;
          border-radius: 4px;
          background: rgba(218,37,42,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--brand);
        }
        .pillar-title {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
          letter-spacing: 0.01em;
        }
        .pillar-desc {
          font-size: 12px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--text-muted);
        }

        /* CTA */
        .about-cta {
          display: flex;
          align-items: center;
          gap: 16px;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.7s ease 1s, transform 0.7s ease 1s;
        }
        .about-cta.visible { opacity: 1; transform: translateY(0); }

        .btn-primary {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 30px;
          background: var(--brand);
          color: #fff;
          border: none;
          border-radius: 3px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .btn-primary:hover {
          background: var(--brand-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px var(--brand-glow);
        }
        .btn-primary:hover svg { transform: translateX(4px); }
        .btn-primary svg { transition: transform 0.25s ease; }

        .btn-ghost {
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 500;
          color: var(--text-muted);
          background: none;
          border: none;
          cursor: pointer;
          letter-spacing: 0.03em;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0;
          transition: color 0.2s ease;
        }
        .btn-ghost:hover { color: var(--text-primary); }
        .btn-ghost::after {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: currentColor;
          transition: width 0.2s ease;
        }
        .btn-ghost:hover::after { width: 32px; }

        /* Responsive */
        @media (max-width: 1024px) {
          .about-wrapper { padding: 80px 48px; gap: 56px; }
          .about-card-mini { display: none; }
          .about-badge { width: 100px; height: 100px; bottom: -18px; right: -18px; }
          .badge-num { font-size: 30px; }
        }
        @media (max-width: 768px) {
          .about-wrapper {
            grid-template-columns: 1fr;
            padding: 60px 24px;
            gap: 48px;
          }
          .about-photo-col { max-width: 480px; margin: 0 auto; width: 100%; }
          .about-stats { grid-template-columns: repeat(2, 1fr); }
          .about-pillars { grid-template-columns: 1fr; }
          .img-corner-tl, .img-corner-br { display: none; }
        }
        @media (max-width: 480px) {
          .about-wrapper { padding: 48px 20px; }
          .about-heading { font-size: 36px; }
        }
      `}</style>

      <section className="about-section" ref={sectionRef}>
        <div className="about-top-line" />
        <div className="about-bg-grid" />

        <div className="about-wrapper">

          {/* ── LEFT: Photo ── */}
          <div className={`about-photo-col${visible ? " visible" : ""}`}>

            {/* Small live status card */}
            <div className="about-card-mini">
              <div className="mini-dot" />
              <div>
                <div className="mini-text">Currently Operating</div>
                <div className="mini-sub">3 Manufacturing Plants</div>
              </div>
            </div>

            {/* Main image */}
            <div className="about-img-frame">
              <div className="img-corner-tl" />
              <div className="img-corner-br" />
              {/* Replace src with your actual image path */}
              <img src="/about_us.jpg" alt="Our manufacturing facility" />
            </div>

            {/* Experience badge */}
            <div className="about-badge">
              <div className="badge-num">30</div>
              <div className="badge-label">Years of<br/>Excellence</div>
            </div>

          </div>

          {/* ── RIGHT: Info ── */}
          <div className={`about-info-col${visible ? " visible" : ""}`}>

            <div className="about-eyebrow">
              <div className="eyebrow-dash" />
              <span className="eyebrow-label">About Us</span>
            </div>

            <h2 className="about-heading">
              ALUMINA CHEMICALS & CASTABLES<br />
            </h2>

            <div className="about-divider" />

            <p className="about-body">
              For the last 23 years, we ALUMINA CHEMICALS & CASTABLES, have been offering superior quality chemicals & refractory castables to the customers. We are reckoned among the leading manufacturers, suppliers and exporters of Alumina Trihydrate, Sodium Aluminate, Calcined Alumina and Activated Alumina. We also supply Aluminium Hydroxide, Activated Alumina, Alumina Hydrate, Aluminium Oxide, Zirconium Silicate, Alumina Catalyst, Fire Retardant Fillers, Zero Halogen, Zirconium Oxide, Ceramic Alumina and much more. 
            <p className="about-body">
              Each of them is formulated by our well-trained team following the industrial quality standards. And so, our products are acclaimed for their optimum quality. They are accurate in composition and ensure long shelf life. We offer our products at pocket-friendly prices and in different packaging sizes.
            </p>
            </p>

            {/* Pillars */}
            <div className="about-pillars">
              {PILLARS.map((p) => {
                const Icon = p.icon;
                return (
                  <div className={`pillar-item${visible ? " visible" : ""}`} key={p.title}>
                    <div className="pillar-icon">
                      <Icon size={16} />
                    </div>
                    <div>
                      <div className="pillar-title">{p.title}</div>
                      <div className="pillar-desc">{p.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className={`about-cta${visible ? " visible" : ""}`}>
              <button className="btn-primary">
                Our Story
                <ArrowRight size={15} />
              </button>
              <button className="btn-ghost">View Capabilities</button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}