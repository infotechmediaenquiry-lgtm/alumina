"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Alumina Trihydrate",
    image: "/alumina-trihydrate.png",
    link: "/aluminatrihydrate",
    large: true,
  },
  {
    id: 2,
    title: "Calcined Alumina",
    image: "/calcined-alumina.png",
    link: "/calcinedalumina",
  },
  {
    id: 3,
    title: "Sodium Aluminates",
    image: "/Sodium-Aluminate.png",
    link: "/sodiumaluminate",
  },
  {
    id: 4,
    title: "Activated Alumina",
    image: "/activated-alumina.png",
    link: "/activatedalumina",
  },
  {
    id: 5,
    title: "Calcined Alumina",
    image: "/calcined-alumina.png",
    link: "/calcinedalumina",
  },
];

export default function ProductGrid() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --brand: #ff6b00;
        }

        .products-section {
          position: relative;
          width: 100%;
          background: #f5f5f5;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          padding: 100px 0;
        }

        /* Same Background */
        .products-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }

        .products-top-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,107,0,0.4) 40%,
            rgba(255,107,0,0.4) 60%,
            transparent 100%
          );
        }

        .products-container {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: auto;
          padding: 0 40px;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .product-card {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.4);
          overflow: hidden;
          position: relative;
          transition: all 0.4s ease;
          min-height: 420px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.12);
        }

        .product-card.large {
          grid-column: span 2;
        }

        .product-image {
          position: relative;
          width: 100%;
          height: 260px;
          overflow: hidden;
        }

        .product-image img {
          transition: transform 0.6s ease;
        }

        .product-card:hover .product-image img {
          transform: scale(1.06);
        }

        .product-content {
          padding: 32px;
          position: relative;
        }

        .product-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          font-weight: 700;
          color: #111;
          margin-bottom: 18px;
          line-height: 1.1;
        }

        .product-card:not(.large) .product-title {
          font-size: 34px;
        }

        .product-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: var(--brand);
          font-size: 18px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .product-link svg {
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-link svg {
          transform: translateX(6px);
        }

        .product-bottom-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: var(--brand);
          transition: width 0.4s ease;
        }

        .product-card:hover .product-bottom-line {
          width: 100%;
        }

        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .product-card.large {
            grid-column: span 2;
          }
        }

        @media (max-width: 768px) {
          .products-container {
            padding: 0 20px;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }

          .product-card.large {
            grid-column: span 1;
          }

          .product-title {
            font-size: 34px !important;
          }

          .product-image {
            height: 220px;
          }
        }
      `}</style>

      <section className="products-section">
        {/* Same Background */}
        <div className="products-top-line" />
        <div className="products-bg-grid" />

        <div className="products-container">
          <div className="products-grid">
            {products.map((product) => (
              <div
                key={product.id}
                className={`product-card ${product.large ? "large" : ""}`}
              >
                {/* Image */}
                <div className="product-image">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Content */}
                <div className="product-content">
                  <h2 className="product-title">{product.title}</h2>

                  <Link href={product.link} className="product-link">
                    View All
                    <ArrowRight size={20} />
                  </Link>
                </div>

                {/* Bottom Hover Line */}
                <div className="product-bottom-line" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}