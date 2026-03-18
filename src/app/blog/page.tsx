import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Studding Outlet Flanges",
  description:
    "Technical articles and resources about studding outlet flanges, pad flanges, and industrial pipe connections.",
  alternates: {
    canonical: "https://studdingoutletflange.com/blog",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://studdingoutletflange.com"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://studdingoutletflange.com/blog"
    }
  ]
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .rv { opacity: 1; transform: none; }
            body > header.border-gray-200 { display: none !important; }
          `,
        }}
      />

      {/* Navigation */}
      <nav
        style={{
          backgroundColor: "#1a3a5c",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="/"
          style={{
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Studding Outlet Flanges
        </a>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <a
            href="/"
            style={{ color: "#ffffff", textDecoration: "none", fontSize: "16px" }}
          >
            Home
          </a>
          <a
            href="/blog"
            style={{ color: "#ffffff", textDecoration: "none", fontSize: "16px", fontWeight: "bold" }}
          >
            Blog
          </a>
        </div>
      </nav>

      {/* Blog Header */}
      <section
        style={{
          backgroundImage: "linear-gradient(135deg, #1a3a5c 0%, #2a5a8c 100%)",
          padding: "48px 24px",
          color: "#ffffff",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "12px" }}>
            Blog
          </h1>
          <p style={{ fontSize: "18px", opacity: 0.9 }}>
            Technical resources about studding outlet flanges
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section style={{ padding: "48px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <article
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "28px",
            marginBottom: "24px",
            transition: "box-shadow 0.2s",
          }}
        >
          <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#1a3a5c", marginBottom: "12px" }}>
            <a href="/blog/the-role-and-applications-of-studding-outlet-flanges" style={{ color: "#1a3a5c", textDecoration: "none" }}>
              The Role and Applications of Studding Outlet Flanges in Industries
            </a>
          </h2>
          <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.7, marginBottom: "12px" }}>
            Studding Outlet Flanges are specialized components used to connect
            pipes in various industrial applications. Learn about their types,
            sizes, materials, and key applications across petrochemical, water
            treatment, oil and gas, and manufacturing industries.
          </p>
          <a
            href="/blog/the-role-and-applications-of-studding-outlet-flanges"
            style={{
              color: "#1a3a5c",
              fontWeight: "600",
              textDecoration: "none",
              fontSize: "15px",
            }}
          >
            Read More &rarr;
          </a>
        </article>

        <div
          style={{
            textAlign: "center",
            padding: "32px",
            color: "#777",
            fontSize: "15px",
          }}
        >
          <p>
            For more information, visit{" "}
            <a
              href="https://texasflange.com?ref=studdingoutletflange"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1a3a5c", fontWeight: "600" }}
            >
              Texas Flange
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#1a3a5c",
          color: "#cccccc",
          padding: "32px 24px",
          textAlign: "center",
          fontSize: "14px",
          marginTop: "auto",
        }}
      >
        <p>
          &copy; {new Date().getFullYear()} Studding Outlet Flanges &middot; All rights reserved.
        </p>
        <p style={{ marginTop: "8px" }}>
          <a
            href="tel:281-484-8325"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            281-484-8325
          </a>{" "}
          &middot;{" "}
          <a
            href="mailto:sales@texasflange.com"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            sales@texasflange.com
          </a>{" "}
          &middot;{" "}
          <a
            href="https://texasflange.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            texasflange.com
          </a>
        </p>
      </footer>
    </>
  );
}
