"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Beaker, Shield, Zap, TrendingUp, Download, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CeramicsPage() {
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
          --brand-glow: rgba(218, 37, 42, 0.35);
          --dark-bg: #ffffff;
          --dark-surface: #f5f5f3;
          --dark-card: #eeeeec;
          --dark-border: rgba(0,0,0,0.08);
          --text-primary: #111111;
          --text-muted: rgba(0,0,0,0.55);
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
          background: linear-gradient(135deg, #1b1b1b 0%, #2f2f2f 100%);
          color: white;
          padding: 110px 80px;
          min-height: 620px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .product-hero::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(218,37,42,0.18) 0%, transparent 70%);
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
          padding: 10px 18px;
          border-radius: 24px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 22px;
        }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 56px;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 24px;
          max-width: 620px;
          background: linear-gradient(135deg, #ffffff 0%, #c1c1c1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 18px;
          color: rgba(255,255,255,0.82);
          line-height: 1.8;
          margin-bottom: 38px;
          max-width: 620px;
        }

        .hero-cta-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary,
        .btn-secondary {
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
        }

        .btn-primary {
          background: var(--brand);
          color: white;
          border: none;
          padding: 14px 32px;
        }

        .btn-primary:hover {
          background: var(--brand-dark);
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(218,37,42,0.24);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 1px solid rgba(255,255,255,0.32);
          padding: 14px 32px;
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.55);
        }

        .hero-image {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 520px;
          height: 520px;
          border-radius: 18px;
          overflow: hidden;
          margin: 0 auto;
          animation: slideInRight 0.8s ease-out;
          box-shadow: 0 20px 60px rgba(0,0,0,0.18);
        }

        .hero-image img {
          object-fit: cover;
        }

        .specs-section,
        .features-section,
        .applications-section,
        .specifications-table,
        .cta-section {
          width: 100%;
          padding: 90px 80px;
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 44px;
          font-weight: 700;
          margin-bottom: 48px;
          text-align: center;
          color: var(--text-primary);
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }

        .spec-card {
          background: var(--dark-surface);
          border: 1px solid var(--dark-border);
          padding: 34px;
          border-radius: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .spec-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(218,37,42,0.1);
          border-color: var(--brand);
        }

        .spec-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(218,37,42,0.1);
          color: var(--brand);
          margin-bottom: 18px;
        }

        .spec-label {
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 12px;
          font-weight: 700;
        }

        .spec-value {
          font-size: 28px;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .features-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .feature-item {
          display: flex;
          gap: 18px;
          align-items: flex-start;
        }

        .feature-icon {
          margin-top: 4px;
          color: var(--brand);
          min-width: 28px;
        }

        .feature-content h4 {
          margin-bottom: 8px;
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .feature-content p {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 14px;
        }

        .info-box {
          background: var(--dark-surface);
          border: 1px solid var(--dark-border);
          border-left: 4px solid var(--brand);
          padding: 28px;
          border-radius: 12px;
          color: var(--text-primary);
        }

        .info-box h3 {
          font-size: 18px;
          margin-bottom: 10px;
        }

        .info-box p {
          color: var(--text-muted);
          line-height: 1.7;
        }

        .applications-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }

        .app-card {
          background: var(--dark-surface);
          border: 1px solid var(--dark-border);
          border-radius: 14px;
          padding: 30px 22px;
          text-align: center;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .app-card:hover {
          border-color: var(--brand);
          transform: translateY(-4px);
        }

        .app-icon {
          font-size: 40px;
          margin-bottom: 18px;
        }

        .app-card h4 {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--text-primary);
        }

        .app-card p {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.7;
        }

        .table-container {
          overflow-x: auto;
          background: var(--dark-surface);
          border: 1px solid var(--dark-border);
          border-radius: 14px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 720px;
        }

        th,
        td {
          padding: 18px 22px;
          text-align: left;
          font-size: 14px;
        }

        th {
          background: var(--dark-card);
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border-bottom: 2px solid rgba(218,37,42,0.12);
        }

        td {
          border-bottom: 1px solid var(--dark-border);
          color: var(--text-muted);
        }

        tbody tr:hover {
          background: var(--dark-card);
        }

        .cta-section {
          background: linear-gradient(135deg, #1b1b1b 0%, #2f2f2f 100%);
          color: white;
          text-align: center;
          position: relative;
        }

        .cta-content {
          max-width: 760px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          margin-bottom: 20px;
        }

        .cta-content p {
          color: rgba(255,255,255,0.78);
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 34px;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
          margin-bottom: 0;
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @media (max-width: 1024px) {
          .product-hero {
            grid-template-columns: 1fr;
            padding: 80px 48px;
          }

          .hero-title {
            font-size: 48px;
          }

          .specs-grid,
          .applications-grid,
          .features-wrapper {
            grid-template-columns: 1fr;
          }

          .specs-section,
          .features-section,
          .applications-section,
          .specifications-table,
          .cta-section {
            padding: 70px 48px;
          }
        }

        @media (max-width: 768px) {
          .product-hero {
            padding: 60px 28px;
          }

          .hero-title {
            font-size: 38px;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .specs-section,
          .features-section,
          .applications-section,
          .specifications-table,
          .cta-section {
            padding: 50px 28px;
          }

          .section-title {
            font-size: 36px;
          }
        }
      `}</style>

      <Header />

      <section className="product-hero">
        <div className="hero-content">
          <div className="hero-badge">Specialty Ceramics</div>
          <h1 className="hero-title">Advanced Ceramic Materials for Industry</h1>
          <p className="hero-subtitle">
            Engineered ceramics for wear resistance, thermal management, electronics, and precision manufacturing. Our ceramics range supports high-temperature, high-strength, and high-purity applications across modern industries.
          </p>
          <div className="hero-cta-group">
            <Link href="/contact" className="btn-primary">
              Get a Quote <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Sales
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src="/ceramics.webp"
            alt="Technical Ceramics"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </section>

      <section className="specs-section">
        <div className="section-title">Ceramics Product Overview</div>
        <div className="specs-grid">
          <div className="spec-card">
            <div className="spec-icon"><Beaker size={24} /></div>
            <div className="spec-label">High Purity</div>
            <div className="spec-value">≥ 99.5% Al₂O₃ / ZrO₂</div>
          </div>
          <div className="spec-card">
            <div className="spec-icon"><Shield size={24} /></div>
            <div className="spec-label">Thermal Stability</div>
            <div className="spec-value">Up to 1,600°C</div>
          </div>
          <div className="spec-card">
            <div className="spec-icon"><Zap size={24} /></div>
            <div className="spec-label">Wear Resistance</div>
            <div className="spec-value">Exceptional Hardness & Durability</div>
          </div>
        </div>
      </section>

      <section className="features-section" ref={sectionRef}>
        <div className="section-title">Key Features</div>
        <div className="features-wrapper">
          <div className="features-list">
            <div className="feature-item">
              <CheckCircle className="feature-icon" />
              <div className="feature-content">
                <h4>Engineered Purity</h4>
                <p>Consistent ceramic powders with tight chemistry control for precision engineering and critical applications.</p>
              </div>
            </div>
            <div className="feature-item">
              <CheckCircle className="feature-icon" />
              <div className="feature-content">
                <h4>Thermal Shock Resistance</h4>
                <p>Designed to maintain mechanical performance under rapid temperature changes and extreme heat cycles.</p>
              </div>
            </div>
            <div className="feature-item">
              <CheckCircle className="feature-icon" />
              <div className="feature-content">
                <h4>Electrical Insulation</h4>
                <p>Excellent dielectric performance for electronic substrates, insulating components, and high-frequency devices.</p>
              </div>
            </div>
            <div className="feature-item">
              <CheckCircle className="feature-icon" />
              <div className="feature-content">
                <h4>Chemical Durability</h4>
                <p>Resistant to corrosive media and process chemicals for stable long-term service life.</p>
              </div>
            </div>
            <div className="feature-item">
              <CheckCircle className="feature-icon" />
              <div className="feature-content">
                <h4>Precision Powder Grades</h4>
                <p>Custom particle sizes, shapes, and surface treatments to suit injection molding, extrusion, and sintering workflows.</p>
              </div>
            </div>
          </div>
          <div className="info-box">
            <h3>Applications</h3>
            <p>Our ceramics portfolio includes alumina, zirconia, silicon carbide, and specialty engineered powders for refractory linings, electrical ceramics, cutting tools, thermal barriers, and wear-resistant components.</p>
          </div>
        </div>
      </section>

      <section className="applications-section">
        <div className="section-title">Industry Applications</div>
        <div className="applications-grid">
          <div className="app-card">
            <div className="app-icon">🏭</div>
            <h4>Refractories</h4>
            <p>Robust ceramic linings for furnaces, kilns, and high-temperature process equipment.</p>
          </div>
          <div className="app-card">
            <div className="app-icon">💡</div>
            <h4>Electronics</h4>
            <p>Insulating substrates, packages, and components for semiconductors and passive devices.</p>
          </div>
          <div className="app-card">
            <div className="app-icon">⚙️</div>
            <h4>Precision Machinery</h4>
            <p>Wear-resistant parts for pumps, valves, seals, and bearings in harsh industrial operations.</p>
          </div>
          <div className="app-card">
            <div className="app-icon">🦾</div>
            <h4>Aerospace</h4>
            <p>Heat-resistant ceramic composites and coatings for high-performance aerospace systems.</p>
          </div>
          <div className="app-card">
            <div className="app-icon">💊</div>
            <h4>Medical</h4>
            <p>Biocompatible ceramic materials for dental, surgical, and implant-grade applications.</p>
          </div>
          <div className="app-card">
            <div className="app-icon">🚗</div>
            <h4>Automotive</h4>
            <p>High-temperature exhaust components, sensor housings, and brake system parts.</p>
          </div>
          <div className="app-card">
            <div className="app-icon">🔋</div>
            <h4>Energy</h4>
            <p>Materials for fuel cells, gas turbines, and thermal storage systems.</p>
          </div>
          <div className="app-card">
            <div className="app-icon">🧱</div>
            <h4>Construction</h4>
            <p>Advanced ceramic fillers, tiles, and coatings for high-performance building solutions.</p>
          </div>
        </div>
      </section>

      <section className="specifications-table">
        <div className="section-title">Technical Specifications</div>
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
                <td>Alumina Content</td>
                <td>% w/w</td>
                <td>≥ 99.5</td>
                <td>ICP Analysis</td>
              </tr>
              <tr>
                <td>Thermal Conductivity</td>
                <td>W/m·K</td>
                <td>2.5 - 3.5</td>
                <td>Laser Flash</td>
              </tr>
              <tr>
                <td>Bulk Density</td>
                <td>g/cm³</td>
                <td>3.8 - 4.0</td>
                <td>ASTM C373</td>
              </tr>
              <tr>
                <td>Mohs Hardness</td>
                <td>-</td>
                <td>7 - 9</td>
                <td>ASTM C1327</td>
              </tr>
              <tr>
                <td>Max Service Temperature</td>
                <td>°C</td>
                <td>1,600</td>
                <td>Thermal Cycle Test</td>
              </tr>
              <tr>
                <td>Dielectric Strength</td>
                <td>kV/mm</td>
                <td>12 - 16</td>
                <td>IEC 60243</td>
              </tr>
              <tr>
                <td>Particle Size</td>
                <td>µm</td>
                <td>1 - 45</td>
                <td>Laser Diffraction</td>
              </tr>
              <tr>
                <td>Moisture</td>
                <td>% w/w</td>
                <td>≤ 0.3</td>
                <td>ISO 787-2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to build with high-performance ceramics?</h2>
          <p>
            Contact our technical sales team for custom ceramic grades, packaging, and delivery solutions built around your application requirements.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">
              Contact Sales <Phone size={16} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Request a Specification <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
