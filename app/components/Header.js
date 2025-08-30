"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MiniTrafficNav() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(null);

  const links = [
    { href: "/", color: "red", label: "Ana Sayfa" },
    { href: "/about", color: "yellow", label: "Hakkımda" },
    { href: "/contact", color: "green", label: "İletişim" },
  ];

  const displayLabel =
    hovered && hovered !== pathname
      ? `${links.find((l) => l.href === hovered)?.label} - Bu sayfaya yönlendiriliyorsunuz`
      : links.find((l) => l.href === pathname)?.label || "";

  return (
    <div className="traffic-nav">
      {/* Sol yuvarlaklar */}
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          <span
            className={`dot ${link.color} ${
              pathname === link.href ? "active" : ""
            }`}
            onMouseEnter={() => setHovered(link.href)}
            onMouseLeave={() => setHovered(null)}
          ></span>
        </Link>
      ))}

      {/* Ortadaki aktif sayfa yazısı */}
      <div className="active-label">{displayLabel}</div>

      <style jsx>{`
        .traffic-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 8px 16px;
          background-color: #e0e0e0;
          display: flex;
          align-items: center;
          z-index: 1000;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          display: inline-block;
          cursor: pointer;
          opacity: 0.6;
          transition: all 0.3s ease;
          margin-right: 10px;
        }

        .dot.red {
          background-color: #ff605c;
        }
        .dot.yellow {
          background-color: #ffbd44;
        }
        .dot.green {
          background-color: #00ca4e;
        }

        .dot:hover {
          transform: translateY(-2px);
          opacity: 1;
        }
        .dot.active {
          box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.3);
          opacity: 1;
        }

        .active-label {
          flex: 1;
          text-align: center;
          font-weight: bold;
          font-size: 16px;
          color: #333;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  );
}
