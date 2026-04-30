"use client";

import { useEffect, useState, useCallback } from "react";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    src: "/banner_1.jpeg",
    alt: "Industrial engineering plant",
  },
  {
    src: "/banner_2.jpeg",
    alt: "Automotive components manufacturing",
  },
  {
    src: "/banner_3.jpeg",
    alt: "Aerospace precision parts",
  },
];

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const goTo = useCallback(
    (index, dir = "next") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 500);
    },
    [animating]
  );

  const prev = () => {
    const index = (current - 1 + SLIDES.length) % SLIDES.length;
    goTo(index, "prev");
  };

  const next = useCallback(() => {
    const index = (current + 1) % SLIDES.length;
    goTo(index, "next");
  }, [current, goTo]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!loaded) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [loaded, next]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --brand: #da252a;
          --brand-dark: #b81e22;
          --brand-glow: rgba(218, 37, 42, 0.4);
        }

        .hero-root {
          position: relative;
          width: 100%;
          height: 80svh;
          min-height: 600px;
          overflow: hidden;
          background: #0a0a0a;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Slider ── */
        .hero-slider {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .hero-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: opacity 0.7s ease, transform 0.7s ease;
          opacity: 0;
          transform: scale(1.04);
        }

        .hero-slide.active {
          opacity: 1;
          transform: scale(1);
          z-index: 2;
        }

        .hero-slide.exit-next {
          opacity: 0;
          transform: scale(0.97) translateX(-3%);
          z-index: 1;
        }

        .hero-slide.exit-prev {
          opacity: 0;
          transform: scale(0.97) translateX(3%);
          z-index: 1;
        }

        /* ── Overlay layers ── */
        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 3;
          background:
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.15) 0%,
              rgba(0,0,0,0.45) 40%,
              rgba(0,0,0,0.75) 80%,
              rgba(0,0,0,0.88) 100%
            );
        }

        .hero-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          z-index: 10;
          background: linear-gradient(90deg, transparent 0%, var(--brand) 30%, var(--brand) 70%, transparent 100%);
          opacity: 0.9;
        }

        .hero-noise {
          position: absolute;
          inset: 0;
          opacity: 0.035;
          z-index: 4;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          z-index: 4;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }

        /* ── Slider Nav Buttons ── */
        .slider-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.25);
          background: rgba(0,0,0,0.4);
          color: rgba(255,255,255,0.85);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
          transition: all 0.22s ease;
          opacity: 0;
        }
        .slider-nav.visible { opacity: 1; }
        .slider-nav:hover {
          border-color: var(--brand);
          background: rgba(218,37,42,0.25);
          color: #fff;
          transform: translateY(-50%) scale(1.08);
        }
        .slider-nav:active {
          transform: translateY(-50%) scale(0.96);
        }
        .slider-nav-prev { left: 28px; }
        .slider-nav-next { right: 28px; }

        /* ── Dots ── */
        .slider-dots {
          position: absolute;
          bottom: 60px;
          right: 80px;
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 8px;
          opacity: 0;
          transition: opacity 0.8s ease 1.2s;
        }
        .slider-dots.visible { opacity: 1; }
        .slider-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          padding: 0;
        }
        .slider-dot.active {
          background: var(--brand);
          width: 22px;
          border-radius: 3px;
        }
        .slider-dot:hover:not(.active) {
          background: rgba(255,255,255,0.6);
        }

        /* ── Content ── */
        .hero-content {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 80px 80px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }
        .hero-eyebrow.visible { opacity: 1; transform: translateY(0); }
        .eyebrow-line {
          width: 40px;
          height: 2px;
          background: var(--brand);
        }
        .eyebrow-text {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
        }
        .eyebrow-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border: 1px solid rgba(218,37,42,0.5);
          border-radius: 20px;
          background: rgba(218,37,42,0.12);
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #ff6b6e;
        }
        .eyebrow-badge-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--brand);
          animation: blink 1.8s ease-in-out infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .hero-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(52px, 7vw, 96px);
          font-weight: 300;
          line-height: 1.0;
          color: #ffffff;
          letter-spacing: -0.02em;
          margin-bottom: 28px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s;
          max-width: 900px;
        }
        .hero-heading.visible { opacity: 1; transform: translateY(0); }
        .hero-heading em {
          font-style: italic;
          font-weight: 300;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.6);
        }
        .hero-heading .accent-word {
          color: var(--brand);
          font-weight: 600;
          font-style: normal;
          -webkit-text-stroke: 0;
        }

        .hero-sub {
          font-size: clamp(15px, 1.5vw, 18px);
          font-weight: 300;
          line-height: 1.7;
          color: rgba(255,255,255,0.58);
          max-width: 520px;
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s;
        }
        .hero-sub.visible { opacity: 1; transform: translateY(0); }

        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.8s, transform 0.8s ease 0.8s;
        }
        .hero-cta-row.visible { opacity: 1; transform: translateY(0); }

        .btn-primary {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: var(--brand);
          color: white;
          border: none;
          border-radius: 4px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.04em;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .btn-primary:hover {
          background: var(--brand-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px var(--brand-glow);
        }
        .btn-primary svg { transition: transform 0.25s ease; flex-shrink: 0; }
        .btn-primary:hover svg { transform: translateX(4px); }

        .btn-secondary {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 28px;
          background: transparent;
          color: rgba(255,255,255,0.85);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 4px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.03em;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
          backdrop-filter: blur(8px);
        }
        .btn-secondary:hover {
          border-color: rgba(255,255,255,0.5);
          color: #fff;
          background: rgba(255,255,255,0.06);
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 32px;
          margin-left: auto;
        }
        .hero-stat {
          text-align: right;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .hero-stat.visible { opacity: 1; transform: translateY(0); }
        .hero-stat:nth-child(1) { transition-delay: 1s; }
        .hero-stat:nth-child(2) { transition-delay: 1.1s; }
        .hero-stat:nth-child(3) { transition-delay: 1.2s; }
        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 600;
          color: #fff;
          line-height: 1;
        }
        .stat-number span { color: var(--brand); }
        .stat-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-top: 4px;
        }
        .stat-divider {
          width: 1px;
          height: 36px;
          background: rgba(255,255,255,0.12);
        }

        .hero-scroll {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0;
          transition: opacity 0.8s ease 1.4s;
          cursor: pointer;
        }
        .hero-scroll.visible { opacity: 1; }
        .scroll-text {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }
        .scroll-icon {
          color: rgba(255,255,255,0.35);
          animation: bounce 2s ease-in-out infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-content { padding: 0 48px 64px; }
          .hero-stats { gap: 20px; }
          .slider-nav-prev { left: 16px; }
          .slider-nav-next { right: 16px; }
          .slider-dots { right: 48px; }
        }
        @media (max-width: 768px) {
          .hero-content { padding: 0 24px 230px; }
          .hero-stats { display: none; }
          .hero-cta-row { gap: 12px; }
          .btn-primary, .btn-secondary { padding: 14px 22px; font-size: 13px; }
          .slider-nav { width: 40px; height: 40px; }
          .slider-dots { right: 24px; bottom: 52px; }
        }
        @media (max-width: 480px) {
          .hero-heading { font-size: 42px; }
          .hero-content { padding: 0 20px 100px; }
          .slider-nav-prev { left: 10px; }
          .slider-nav-next { right: 10px; }
        }
      `}</style>

      <section className="hero-root">

        {/* ── Image Slider ── */}
        <div className="hero-slider">
          {SLIDES.map((slide, i) => {
            let cls = "hero-slide";
            if (i === current) {
              cls += " active";
            } else if (animating) {
              cls += direction === "next" ? " exit-next" : " exit-prev";
            }
            return (
              <img
                key={slide.src}
                className={cls}
                src={slide.src}
                alt={slide.alt}
              />
            );
          })}
        </div>

        {/* Overlay layers */}
        <div className="hero-overlay" />
        <div className="hero-noise" />
        <div className="hero-grid" />
        <div className="hero-accent" />

        {/* ── Left / Right Nav Buttons ── */}
        <button
          className={`slider-nav slider-nav-prev${loaded ? " visible" : ""}`}
          onClick={prev}
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className={`slider-nav slider-nav-next${loaded ? " visible" : ""}`}
          onClick={next}
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* ── Dots ── */}
        <div className={`slider-dots${loaded ? " visible" : ""}`}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`slider-dot${i === current ? " active" : ""}`}
              onClick={() => goTo(i, i > current ? "next" : "prev")}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="hero-content">

          <div className={`hero-eyebrow${loaded ? " visible" : ""}`}>
            <div className="eyebrow-badge">
              <div className="eyebrow-badge-dot" />
              Est. 1994
            </div>
            <div className="eyebrow-line" />
            <div className="eyebrow-text">Global Engineering Solutions</div>
          </div>

          <h1 className={`hero-heading${loaded ? " visible" : ""}`}>
            Specialty<br />
            <em>Alumina</em> <span className="accent-word">Chemicals</span>
          </h1>

          <p className={`hero-sub${loaded ? " visible" : ""}`}>
            We offer a wide range of specialty alumina chemical products including Alumina Trihydrate, Calcined Alumina, Sodium Aluminates, Alumina Hydrate, and various Chemical Supplies.
          </p>

          <div className={`hero-cta-row${loaded ? " visible" : ""}`}>
            <button className="btn-primary">
              Contact Us
              <ArrowRight size={16} />
            </button>
            <button className="btn-secondary">
              Explore Products
              <ArrowRight size={15} />
            </button>

            <div className="hero-stats">
              <div className={`hero-stat${loaded ? " visible" : ""}`}>
                <div className="stat-number">500<span>+</span></div>
                <div className="stat-label">Global Clients</div>
              </div>
              <div className="stat-divider" />
              <div className={`hero-stat${loaded ? " visible" : ""}`}>
                <div className="stat-number">40<span>+</span></div>
                <div className="stat-label">Countries</div>
              </div>
              <div className="stat-divider" />
              <div className={`hero-stat${loaded ? " visible" : ""}`}>
                <div className="stat-number">30<span>yr</span></div>
                <div className="stat-label">Experience</div>
              </div>
            </div>
          </div>
        </div>

        <div className={`hero-scroll${loaded ? " visible" : ""}`}>
          <span className="scroll-text">Scroll</span>
          <ChevronDown size={16} className="scroll-icon" />
        </div>

      </section>
    </>
  );
}