import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EcoEssentials",
  description: "Sustainably Transforming Your Home",
  keywords: ["eco-friendly home essentials", "environmentally conscious consumers, primarily aged 25-45, interested in sustainable living"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ borderBottom: "1px solid #eee", padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/" style={{ fontWeight: 700, fontSize: "1.25rem", color: "var(--primary)", textDecoration: "none" }}>EcoEssentials</a>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href="/" style={{ color: "#555", textDecoration: "none" }}>Home</a>
            <a href="/products" style={{ color: "#555", textDecoration: "none" }}>Products</a>
            <a href="/about" style={{ color: "#555", textDecoration: "none" }}>About</a>
          </div>
        </nav>
        {children}
        <footer style={{ background: "#f9f9f9", borderTop: "1px solid #eee", padding: "2rem", textAlign: "center", color: "#888", marginTop: "4rem" }}>
          <p>&copy; 2026 EcoEssentials. All rights reserved.</p>
          <p style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>eco-friendly home essentials | environmentally conscious consumers, primarily aged 25-45, interested in sustainable living</p>
        </footer>
      </body>
    </html>
  );
}
