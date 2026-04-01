"use client";

import { useEffect, useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";

const CERTIFICATES = [
  {
    id: 1,
    code: "ISO 9001:2015",
    title: "Quality Management System",
    img: "/certificate_01.jpg",
  },
  {
    id: 2,
    code: "ISO 14001:2015",
    title: "Environmental Management",
    img: "/certificate_02.jpg",
  },
  {
    id: 3,
    code: "IATF 45001:2018",
    title: "Automotive Quality Standard",
    img: "/Certificate_03.jpg",
  },
];

export default function CertificatesSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [zoomed, setZoomed] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setZoomed(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = zoomed ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [zoomed]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --brand: #da252a;
          --brand-dark: #b81e22;
          --brand-glow: rgba(218,37,42,0.3);
        }

        .certs-section {
          width: 100%;
          background: #ffffff;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .certs-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,0,0,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.018) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }

        .certs-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 320px;
          background: radial-gradient(ellipse at center, rgba(218,37,42,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .certs-top-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(218,37,42,0.5) 40%, rgba(218,37,42,0.5) 60%, transparent 100%);
        }

        .certs-header {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 90px 80px 64px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s;
        }
        .certs-header.visible { opacity: 1; transform: translateY(0); }

        .certs-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .certs-eyebrow-dash { width: 28px; height: 2px; background: var(--brand); }
        .certs-eyebrow-label {
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--brand);
        }

        .certs-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 300;
          line-height: 1.1;
          color: #111111;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }
        .certs-heading em {
          font-style: italic;
          color: transparent;
          -webkit-text-stroke: 1px rgba(0,0,0,0.35);
        }

        .certs-subtext {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(0,0,0,0.48);
          max-width: 520px;
          margin: 0 auto;
        }

        /* Grid */
        .certs-grid {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 80px 100px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        /* Card box */
        .cert-card {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.09);
          border-radius: 6px;
          padding: 20px 20px 24px;
          position: relative;
          overflow: hidden;
        }
        .cert-card.visible { opacity: 1; transform: translateY(0); }
        .cert-card:hover {
          border-color: rgba(218,37,42,0.4);
          box-shadow: 0 20px 48px rgba(0,0,0,0.12);
        }

        /* Red top accent line slides in on card hover */
        .cert-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 0; height: 3px;
          background: var(--brand);
          transition: width 0.4s ease;
          z-index: 3;
        }
        .cert-card:hover::before { width: 100%; }

        /* Faint watermark number */
        .cert-card-num {
          position: absolute;
          top: 10px; right: 14px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 52px;
          font-weight: 700;
          color: rgba(0,0,0,0.05);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        /* Image wrapper */
        .cert-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 3/4;
          border-radius: 3px;
          overflow: hidden;
          cursor: zoom-in;
          background: #e8e8e6;
          border: 1px solid rgba(0,0,0,0.08);
          transition: border-color 0.3s ease;
        }
        .cert-card:hover .cert-img-wrap {
          border-color: rgba(218,37,42,0.25);
        }

        .cert-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.5s ease;
        }
        .cert-img-wrap:hover img { transform: scale(1.05); }

        /* Red top bar */
        .cert-img-topbar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--brand);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
          z-index: 2;
        }
        .cert-img-wrap:hover .cert-img-topbar { transform: scaleX(1); }

        /* Hover overlay */
        .cert-img-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
          z-index: 2;
        }
        .cert-img-wrap:hover .cert-img-overlay { background: rgba(218,37,42,0.15); }

        .cert-zoom-icon {
          width: 52px; height: 52px;
          border-radius: 50%;
          background: rgba(255,255,255,0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brand);
          opacity: 0;
          transform: scale(0.75);
          transition: opacity 0.3s ease, transform 0.3s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
        }
        .cert-img-wrap:hover .cert-zoom-icon {
          opacity: 1;
          transform: scale(1);
        }

        /* Info below */
        .cert-info {
          padding: 16px 2px 4px;
        }
        .cert-code-badge {
          display: inline-block;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--brand);
          background: rgba(218,37,42,0.1);
          border: 1px solid rgba(218,37,42,0.2);
          border-radius: 2px;
          padding: 3px 9px;
          margin-bottom: 10px;
        }
        .cert-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 600;
          color: #111111;
          line-height: 1.2;
          margin: 0;
          letter-spacing: -0.01em;
        }

        /* ── Modal ── */
        .cert-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0,0,0,0);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          transition: background 0.3s ease;
          pointer-events: none;
        }
        .cert-modal-backdrop.open {
          background: rgba(0,0,0,0.9);
          pointer-events: all;
          cursor: zoom-out;
        }

        .cert-modal-box {
          position: relative;
          max-width: 580px;
          width: 100%;
          border-radius: 4px;
          overflow: hidden;
          opacity: 0;
          transform: scale(0.85) translateY(24px);
          transition: opacity 0.35s ease, transform 0.35s ease;
          cursor: default;
          box-shadow: 0 40px 120px rgba(0,0,0,0.8);
        }
        .cert-modal-backdrop.open .cert-modal-box {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        .cert-modal-img {
          width: 100%;
          height: auto;
          display: block;
          max-height: 82vh;
          object-fit: contain;
          background: #fff;
        }

        .cert-modal-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          padding: 13px 16px;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .cert-modal-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          overflow: hidden;
        }
        .cert-modal-code {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--brand);
          white-space: nowrap;
        }
        .cert-modal-sep {
          width: 1px; height: 14px;
          background: rgba(255,255,255,0.2);
          flex-shrink: 0;
        }
        .cert-modal-name {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.65);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .cert-modal-close {
          width: 30px; height: 30px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }
        .cert-modal-close:hover {
          border-color: var(--brand);
          background: rgba(218,37,42,0.25);
          color: #fff;
        }

        .cert-modal-bottom-line {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: var(--brand);
        }

        /* Responsive */
        @media (max-width: 860px) {
          .certs-grid {
            grid-template-columns: repeat(2, 1fr);
            padding: 0 48px 80px;
            gap: 20px;
          }
          .certs-header { padding: 70px 48px 52px; }
        }
        @media (max-width: 560px) {
          .certs-grid {
            grid-template-columns: 1fr;
            padding: 0 24px 64px;
            max-width: 380px;
          }
          .certs-header { padding: 56px 24px 40px; }
          .cert-modal-box { max-width: 100%; }
        }
      `}</style>

      <section className="certs-section" ref={sectionRef}>
        <div className="certs-top-line" />
        <div className="certs-bg-grid" />
        <div className="certs-glow" />

        {/* Header */}
        <div className={`certs-header${visible ? " visible" : ""}`}>
          <div className="certs-eyebrow">
            <div className="certs-eyebrow-dash" />
            <span className="certs-eyebrow-label">Certifications</span>
            <div className="certs-eyebrow-dash" />
          </div>
          <h2 className="certs-heading">
            Trusted by <em>Standards,</em> Built on Quality
          </h2>
          <p className="certs-subtext">
            Our facilities and processes are certified by globally recognised bodies — ensuring every product meets the highest international benchmarks.
          </p>
        </div>

        {/* Cards */}
        <div className="certs-grid">
          {CERTIFICATES.map((cert, i) => (
            <div
              key={cert.id}
              className={`cert-card${visible ? " visible" : ""}`}
              style={{ transitionDelay: `${150 + i * 130}ms` }}
            >
              <div className="cert-card-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="cert-img-wrap" onClick={() => setZoomed(cert)}>
                <div className="cert-img-topbar" />
                <img src={cert.img} alt={cert.title} />
                <div className="cert-img-overlay">
                  <div className="cert-zoom-icon">
                    <ZoomIn size={22} />
                  </div>
                </div>
              </div>
              <div className="cert-info">
                <div className="cert-code-badge">{cert.code}</div>
                <h3 className="cert-card-title">{cert.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Zoom Modal */}
        <div
          className={`cert-modal-backdrop${zoomed ? " open" : ""}`}
          onClick={() => setZoomed(null)}
        >
          {zoomed && (
            <div className="cert-modal-box" onClick={(e) => e.stopPropagation()}>
              <div className="cert-modal-bar">
                <div className="cert-modal-meta">
                  <span className="cert-modal-code">{zoomed.code}</span>
                  <div className="cert-modal-sep" />
                  <span className="cert-modal-name">{zoomed.title}</span>
                </div>
                <button className="cert-modal-close" onClick={() => setZoomed(null)} aria-label="Close">
                  <X size={13} />
                </button>
              </div>
              <img className="cert-modal-img" src={zoomed.img} alt={zoomed.title} />
              <div className="cert-modal-bottom-line" />
            </div>
          )}
        </div>
      </section>
    </>
  );
}