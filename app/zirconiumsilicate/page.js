"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Beaker, Shield, Zap, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ZirconiumSilicatePage() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

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
          --brand-glow: rgba(218, 37, 42, 0.4);
          --dark-bg: #ffffff;
          --dark-surface: #f5f5f3;
          --dark-card: #eeeeec;
          --dark-border: rgba(0,0,0,0.08);
          --text-primary: #111111;
          --text-muted: rgba(0,0,0,0.55);
          --text-subtle: rgba(0,0,0,0.35);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: var(--dark-bg);
          color: var(--text-primary);
          font-family: 'DM Sans', sans-serif;
        }

        .product-hero {
          width: 100%;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          color: white;
          padding: 120px 80px;
          min-height: 600px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .product-hero::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(218,37,42,0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          animation: slideInLeft 0.8s ease-out;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(218,37,42,0.2);
          border: 1px solid var(--brand);
          color: var(--brand);
          padding: 8px 16px;
          border-radius: 24px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 64px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #ffffff 0%, #b0b0b0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 18px;
          color: rgba(255,255,255,0.8);
          line-height: 1.6;
          margin-bottom: 40px;
          max-width: 520px;
        }

        .hero-cta-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: var(--brand);
          color: white;
          border: none;
          padding: 14px 32px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          font-family: 'DM Sans', sans-serif;
        }

        .btn-primary:hover {
          background: var(--brand-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px var(--brand-glow);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 1px solid rgba(255,255,255,0.3);
          padding: 14px 32px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          font-family: 'DM Sans', sans-serif;
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.6);
        }

        .hero-image {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 420px;
          height: 420px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: slideInRight 0.8s ease-out;
          overflow: hidden;
          margin: 0 auto;
        }

        .hero-image-img {
          border-radius: 12px !important;
        }

        .specs-section {
          width: 100%;
          background: var(--dark-bg);
          padding: 100px 80px;
          position: relative;
        }

        .specs-top-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(218,37,42,0.5) 40%, rgba(218,37,42,0.5) 60%, transparent 100%);
          margin-bottom: 100px;
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 60px;
          text-align: center;
          color: var(--text-primary);
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-bottom: 60px;
        }

        .spec-card {
          background: var(--dark-surface);
          border: 1px solid var(--dark-border);
          padding: 40px;
          border-radius: 8px;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease-out;
        }

        .spec-card:hover {
          border-color: var(--brand);
          box-shadow: 0 10px 30px rgba(218,37,42,0.1);
          transform: translateY(-4px);
        }

        .spec-icon {
          width: 48px;
          height: 48px;
          background: rgba(218,37,42,0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brand);
          margin-bottom: 20px;
        }

        .spec-label {
          font-size: 14px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .spec-value {
          font-size: 28px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .features-section {
          width: 100%;
          background: var(--dark-surface);
          padding: 100px 80px;
          position: relative;
        }

        .features-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .feature-item {
          display: flex;
          gap: 16px;
          animation: fadeInLeft 0.6s ease-out;
        }

        .feature-icon {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          color: var(--brand);
          margin-top: 2px;
        }

        .feature-content h4 {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .feature-content p {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .features-info {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .info-box {
          background: var(--dark-card);
          border: 1px solid var(--dark-border);
          padding: 32px;
          border-radius: 8px;
          border-left: 4px solid var(--brand);
        }

        .info-box h3 {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .info-box p {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .applications-section {
          width: 100%;
          background: var(--dark-bg);
          padding: 100px 80px;
        }

        .applications-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(218,37,42,0.5) 40%, rgba(218,37,42,0.5) 60%, transparent 100%);
          margin-bottom: 100px;
        }

        .applications-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .app-card {
          background: var(--dark-surface);
          border: 1px solid var(--dark-border);
          padding: 32px 24px;
          border-radius: 8px;
          text-align: center;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease-out;
        }

        .app-card:hover {
          border-color: var(--brand);
          box-shadow: 0 10px 30px rgba(218,37,42,0.1);
          transform: translateY(-4px);
        }

        .app-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .app-card h4 {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .app-card p {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .specifications-table {
          width: 100%;
          background: var(--dark-bg);
          padding: 100px 80px;
        }

        .specifications-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(218,37,42,0.5) 40%, rgba(218,37,42,0.5) 60%, transparent 100%);
          margin-bottom: 100px;
        }

        .table-container {
          overflow-x: auto;
          background: var(--dark-surface);
          border: 1px solid var(--dark-border);
          border-radius: 8px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }

        th {
          background: var(--dark-card);
          padding: 16px 20px;
          text-align: left;
          font-weight: 600;
          color: var(--text-primary);
          border-bottom: 2px solid var(--brand);
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 0.5px;
        }

        td {
          padding: 16px 20px;
          border-bottom: 1px solid var(--dark-border);
          color: var(--text-muted);
        }

        tr:last-child td {
          border-bottom: none;
        }

        tbody tr:hover {
          background: var(--dark-card);
        }

        .cta-section {
          width: 100%;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          padding: 100px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(218,37,42,0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
          margin: 0 auto;
          color: white;
        }

        .cta-content h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .cta-content p {
          font-size: 16px;
          color: rgba(255,255,255,0.8);
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 1024px) {
          .product-hero {
            grid-template-columns: 1fr;
            padding: 80px 60px;
            gap: 60px;
            min-height: auto;
          }

          .hero-title {
            font-size: 48px;
          }

          .specs-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

          .features-wrapper {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .applications-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .specs-section,
          .features-section,
          .applications-section,
          .specifications-table,
          .cta-section {
            padding: 80px 60px;
          }
        }

        @media (max-width: 768px) {
          .product-hero {
            padding: 60px 40px;
          }

          .hero-title {
            font-size: 36px;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .specs-grid {
            grid-template-columns: 1fr;
          }

          .applications-grid {
            grid-template-columns: 1fr;
          }

          .specs-section,
          .features-section,
          .applications-section,
          .specifications-table,
          .cta-section {
            padding: 60px 40px;
          }

          .section-title {
            font-size: 36px;
            margin-bottom: 40px;
          }

          .spec-card {
            padding: 30px;
          }

          .cta-section {
            padding: 60px 40px;
          }

          .cta-content h2 {
            font-size: 36px;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <Header />

      <section className="product-hero">
        <div className="hero-content">
          <div className="hero-badge">Specialty Ceramic Material</div>
          <h1 className="hero-title">Zirconium Silicate</h1>
          <p className="hero-subtitle">
            Used as opacifier in ceramic industries. High-grade zirconium silicate for refractories, ceramics, foundry coatings, and advanced industrial formulations.
          </p>
          <div className="hero-cta-group">
            <Link href="/contact" className="btn-primary">
              Get a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src="/new-zirconium-silicate.png"
            alt="Zirconium Silicate Product"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="hero-image-img"
          />
        </div>
      </section>

      <section className="specs-section">
        <div className="specs-top-line"></div>
        <h2 className="section-title">Product Specifications</h2>
        <div className="specs-grid">
          <div className="spec-card">
            <div className="spec-icon"><Beaker size={24} /></div>
            <div className="spec-label">ZrO₂ Content</div>
            <div className="spec-value">≥ 68%</div>
          </div>
          <div className="spec-card">
            <div className="spec-icon"><Shield size={24} /></div>
            <div className="spec-label">SiO₂ Content</div>
            <div className="spec-value">≥ 30%</div>
          </div>
          <div className="spec-card">
            <div className="spec-icon"><Zap size={24} /></div>
            <div className="spec-label">Mohs Hardness</div>
            <div className="spec-value">6.5 - 7.5</div>
          </div>
        </div>
      </section>

      <section className="features-section" ref={sectionRef}>
        <div className="features-wrapper">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 40 }}>Key Features</h2>
            <div className="features-list">
              <div className="feature-item">
                <CheckCircle className="feature-icon" />
                <div className="feature-content">
                  <h4>High Thermal Stability</h4>
                  <p>Exceptional resistance to high temperatures for refractory and ceramic applications.</p>
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle className="feature-icon" />
                <div className="feature-content">
                  <h4>Superior Purity</h4>
                  <p>Low impurity levels for consistent processing and end-product quality.</p>
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle className="feature-icon" />
                <div className="feature-content">
                  <h4>Fine Grain Control</h4>
                  <p>Uniform particle distribution for predictable performance in formulations.</p>
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle className="feature-icon" />
                <div className="feature-content">
                  <h4>Excellent Abrasion Resistance</h4>
                  <p>Durable material for coatings and composites that face wear and abrasion.</p>
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle className="feature-icon" />
                <div className="feature-content">
                  <h4>Wide Application Range</h4>
                  <p>Used in foundry, dental ceramics, refractories, and specialty chemical systems.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="features-info">
            <div className="info-box">
              <h3>🔬 Chemical Formula</h3>
              <p>ZrSiO₄</p>
            </div>
            <div className="info-box">
              <h3>📦 Available Packaging</h3>
              <p>25 kg bags, 500 kg sacks, 1000 kg IBCs, and bulk transport options.</p>
            </div>
            <div className="info-box">
              <h3>🌍 Global Availability</h3>
              <p>Manufactured with stable supply for local and export markets.</p>
            </div>
            <div className="info-box">
              <h3>📋 Certifications</h3>
              <p>ISO 9001:2015, REACH compliant, and customer-specific quality documentation available.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="applications-section">
        <div className="applications-line"></div>
        <h2 className="section-title">Industry Applications</h2>
        <div className="applications-grid">
          <div className="app-card">
            <div className="app-icon">🏭</div>
            <h4>Refractories</h4>
            <p>High-temperature linings and castables for kilns and furnaces.</p>
          </div>
          <div className="app-card">
            <div className="app-icon">🧱</div>
            <h4>Ceramics</h4>
            <p>Dental and technical ceramics with excellent toughness and stability.</p>
          </div>
          <div className="app-card">
            <div className="app-icon">🏺</div>
            <h4>Glazes & Coatings</h4>
            <p>Improves wear resistance and chemical durability in glaze systems.</p>
          </div>
          <div className="app-card">
            <div className="app-icon">⚙️</div>
            <h4>Foundry</h4>
            <p>Used in mould and core coatings for dimensional accuracy and release.</p>
          </div>
          <div className="app-card">
            <div className="app-icon">🧬</div>
            <h4>Medical</h4>
            <p>Raw material for dental porcelain and bio-ceramic components.</p>
          </div>
          <div className="app-card">
            <div className="app-icon">🔧</div>
            <h4>Polishing</h4>
            <p>Fine abrasive for surface finishing in precision applications.</p>
          </div>
          <div className="app-card">
            <div className="app-icon">♻️</div>
            <h4>Catalyst Carriers</h4>
            <p>Support material in catalysts and adsorption systems.</p>
          </div>
          <div className="app-card">
            <div className="app-icon">🧴</div>
            <h4>Specialty Chemicals</h4>
            <p>Ingredient in specialty formulations with thermal and chemical resistance.</p>
          </div>
        </div>
      </section>

      <section className="specifications-table">
        <div className="specifications-line"></div>
        <h2 className="section-title">Technical Specifications</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Unit</th>
                <th>Specification</th>
                <th>Test Method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Zirconia (ZrO₂)</td>
                <td>% w/w</td>
                <td>≥ 68</td>
                <td>ICP Analysis</td>
              </tr>
              <tr>
                <td>Silica (SiO₂)</td>
                <td>% w/w</td>
                <td>≥ 30</td>
                <td>ICP Analysis</td>
              </tr>
              <tr>
                <td>Loss on Ignition</td>
                <td>% w/w</td>
                <td>≤ 0.5</td>
                <td>ISO 3262</td>
              </tr>
              <tr>
                <td>Mohs Hardness</td>
                <td>-</td>
                <td>6.5 - 7.5</td>
                <td>ASTM C135</td>
              </tr>
              <tr>
                <td>Apparent Density</td>
                <td>g/cm³</td>
                <td>3.9 - 4.1</td>
                <td>ASTM C604</td>
              </tr>
              <tr>
                <td>Bulk Density</td>
                <td>g/cm³</td>
                <td>1.5 - 1.7</td>
                <td>ASTM D1895</td>
              </tr>
              <tr>
                <td>Fusibility</td>
                <td>°C</td>
                <td>1750</td>
                <td>Thermal Analysis</td>
              </tr>
              <tr>
                <td>Fe₂O₃</td>
                <td>% w/w</td>
                <td>≤ 0.2</td>
                <td>ICP-OES</td>
              </tr>
              <tr>
                <td>Al₂O₃</td>
                <td>% w/w</td>
                <td>≤ 0.5</td>
                <td>ICP-OES</td>
              </tr>
              <tr>
                <td>Particle Size</td>
                <td>μm</td>
                <td>5 - 50</td>
                <td>Laser Diffraction</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Source Zirconium Silicate?</h2>
          <p>
            Contact us to discuss your requirements for refractory, ceramic, or specialty industrial applications.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">
              <Phone size={16} /> Contact Sales
            </button>
            <button className="btn-secondary">
              <ArrowRight size={16} /> View More Products
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
