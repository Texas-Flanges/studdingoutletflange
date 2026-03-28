import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studding Outlet Flanges | Studding Outlet Flange Experts",
  description:
    "Manufacturing and supplying studding outlet flanges in carbon steel, stainless steel, and alloy materials per ASME, ANSI, AWWA, and API standards. Sizes from 1/2\" to 24\", pressure ratings 150# to 2500#.",
  keywords: [
    "studding outlet flanges",
    "pad flanges",
    "industrial pipe flanges",
    "ASME flanges",
    "carbon steel flanges",
    "stainless steel flanges",
    "alloy flanges",
    "Texas Flange",
  ],
  openGraph: {
    title: "Studding Outlet Flanges | Studding Outlet Flange Experts",
    description:
      "Manufacturing and supplying studding outlet flanges in carbon steel, stainless, and alloy per ASME / ANSI / AWWA / API standards.",
    url: "https://studdingoutletflange.com",
    siteName: "Studding Outlet Flanges",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studding Outlet Flanges | Studding Outlet Flange Experts",
    description:
      "Manufacturing and supplying studding outlet flanges per ASME / ANSI / AWWA / API standards.",
  },
  alternates: {
    canonical: "https://studdingoutletflange.com",
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Studding Outlet Flanges",
    url: "https://studdingoutletflange.com",
    description:
      "Manufacturing and supplying studding outlet flanges in carbon steel, stainless steel, and alloy materials.",
    parentOrganization: {
      "@type": "Organization",
      name: "Texas Flange & Fitting Supply",
      url: "https://texasflange.com?ref=studdingoutletflange",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-281-484-8325",
      contactType: "sales",
      email: "sales@texasflange.com",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the primary purpose of Studding Outlet Flanges?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Studding Outlet Flanges facilitate secure pipe connections in various applications.",
        },
      },
      {
        "@type": "Question",
        name: "How do Studding Outlet Flanges save space?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Their compact design allows them to fit into tight spaces, optimizing available room.",
        },
      },
      {
        "@type": "Question",
        name: "Are Studding Outlet Flanges expensive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, they offer cost-effective solutions for efficient pipe connections.",
        },
      },
      {
        "@type": "Question",
        name: "Can Studding Outlet Flanges be customized for specific projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, they can be tailored to meet the unique requirements of your project.",
        },
      },
      {
        "@type": "Question",
        name: "Do Studding Outlet Flanges come in different sizes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, they are available in a range of sizes to accommodate various applications.",
        },
      },
      {
        "@type": "Question",
        name: "What materials are Studding Outlet Flanges made from?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They can be crafted from a variety of materials, chosen based on project demands.",
        },
      },
      {
        "@type": "Question",
        name: "Can Studding Outlet Flanges handle high-pressure situations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, they are engineered to withstand high pressure and elevated temperatures.",
        },
      },
      {
        "@type": "Question",
        name: "Are there size and pressure options available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, they come in different sizes and pressure ratings to match specific needs.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I source Studding Outlet Flanges?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can find them through various manufacturers and suppliers. One of the leading manufacturers is TexasFlange.com",
        },
      },
      {
        "@type": "Question",
        name: "Are Studding Outlet Flanges easy to install?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, they are designed for ease of installation in various applications.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
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
          position: "sticky",
          top: 0,
          zIndex: 100,
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
            href="#about"
            style={{ color: "#ffffff", textDecoration: "none", fontSize: "16px" }}
          >
            About
          </a>
          <a
            href="#faq"
            style={{ color: "#ffffff", textDecoration: "none", fontSize: "16px" }}
          >
            FAQ</a>
          <a
            href="/blog"
            style={{ color: "#ffffff", textDecoration: "none", fontSize: "16px" }}
          >
            Blog
          </a>
          <a
            href="#contact"
            style={{ color: "#ffffff", textDecoration: "none", fontSize: "16px" }}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="rv"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,58,92,0.55), rgba(26,58,92,0.55)), url(/hero-flanges.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "60px 24px",
          color: "#ffffff",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: "bold",
            marginBottom: "24px",
            lineHeight: 1.1,
          }}
        >
          Studding Outlet Flange Experts
        </h1>
        <p
          style={{
            fontSize: "18px",
            maxWidth: "640px",
            marginBottom: "16px",
            lineHeight: 1.6,
          }}
        >
          Carbon, Stainless, and Alloy studding outlets per ASME Section VIII, in a wide variety of sizes and mounts for your project needs.
        </p>
        <p
          style={{
            fontSize: "16px",
            maxWidth: "640px",
            marginBottom: "32px",
            lineHeight: 1.6,
          }}
        >
          Manufacturing and supplying a complete line of studding pad flange outlets. We can provide flat bottom, shell mount, head mount, or even tangential mount for your tank or pressure vessel configurations.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href="#about"
            style={{
              backgroundColor: "#ffffff",
              color: "#1a3a5c",
              padding: "14px 32px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Learn More
          </a>
          <a
            href="https://texasflange.com?ref=studdingoutletflange"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#d4a843",
              color: "#ffffff",
              padding: "14px 32px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* About / Role & Applications Section */}
      <section
        id="about"
        className="rv"
        style={{
          padding: "64px 24px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#1a3a5c",
            marginBottom: "24px",
          }}
        >
          The Role and Applications of Studding Outlet Flanges in Industries
        </h2>
        <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#333", marginBottom: "24px" }}>
          Studding Outlet Flanges are specialized components used to connect pipes
          in various industrial applications. They offer unique advantages and are
          available in different types, sizes, and materials. Let&apos;s explore what
          they are and their key characteristics.
        </p>

        <div style={{ margin: "32px 0", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
          <img
            src="/studding-outlet-flange1.jpg"
            alt="Studding Outlet Flange - Top View"
            style={{
              maxWidth: "337px",
              width: "100%",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
          <img
            src="/studding-outlet-flange2.jpg"
            alt="Studding Outlet Flange - Cutaway View"
            style={{
              maxWidth: "369px",
              width: "100%",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        <h3
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            color: "#1a3a5c",
            marginBottom: "16px",
            marginTop: "40px",
          }}
        >
          Types of Studding Outlet Flanges
        </h3>
        <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#333", marginBottom: "16px" }}>
          Studding Outlet Flanges come in several distinct types, each tailored for
          specific purposes:
        </p>
        <ul style={{ fontSize: "17px", lineHeight: 2, color: "#333", paddingLeft: "24px", marginBottom: "24px" }}>
          <li>
            <strong>Flat Bottom Type:</strong> The most commonly used type,
            featuring a flat bottom suitable for a wide range of applications.
          </li>
          <li>
            <strong>Shell Mount Type:</strong> Designed for external use, these
            flanges provide a secure connection on the outside of vessels or pipes.
          </li>
          <li>
            <strong>Head Mount Type:</strong> Tailored for attachment to the top of
            vessels or tanks, these flanges offer efficient connections.
          </li>
          <li>
            <strong>Alternate Radius Type:</strong> These flanges feature a
            different curvature, ideal for projects requiring a non-standard fit.
          </li>
        </ul>

        <div style={{ margin: "32px 0", textAlign: "center" }}>
          <img
            src="/studding-outlet-flange-dwgs.jpg"
            alt="Studding Outlet Flange Configurations - Flat Bottom, Shell or Head Mount, Tangential Mount"
            style={{
              width: "100%",
              maxWidth: "785px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        <h3
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            color: "#1a3a5c",
            marginBottom: "16px",
            marginTop: "40px",
          }}
        >
          Size and Pressure Range
        </h3>
        <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#333", marginBottom: "24px" }}>
          Studding Outlet Flanges are available in various sizes, spanning from
          smaller sizes like 1/2 inch to larger ones like 24 inches. This extensive
          range ensures suitability for both small-scale and large-scale
          applications. Additionally, they are offered in various pressure ratings,
          such as 150# to 2500#, to match specific pressure requirements.
        </p>

        <h3
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            color: "#1a3a5c",
            marginBottom: "16px",
            marginTop: "40px",
          }}
        >
          Materials Used
        </h3>
        <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#333", marginBottom: "16px" }}>
          Studding Outlet Flanges can be manufactured using a diverse range of
          materials, including:
        </p>
        <ul style={{ fontSize: "17px", lineHeight: 2, color: "#333", paddingLeft: "24px", marginBottom: "16px" }}>
          <li>Carbon Steel</li>
          <li>Chrome Alloys</li>
          <li>Stainless Steel</li>
          <li>Aluminum</li>
          <li>Hastalloy</li>
          <li>Inconel</li>
          <li>Incolloy</li>
          <li>Monel</li>
          <li>Copper</li>
          <li>Duplex</li>
          <li>Titanium</li>
        </ul>
        <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#333", marginBottom: "24px" }}>
          The choice of material depends on project specifications, such as
          corrosion resistance, temperature tolerance, and pressure handling
          capabilities.
        </p>

        <h3
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            color: "#1a3a5c",
            marginBottom: "16px",
            marginTop: "40px",
          }}
        >
          Applications of Studding Outlet Flanges
        </h3>
        <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#333", marginBottom: "16px" }}>
          Studding Outlet Flanges find applications in various industries and
          scenarios, including:
        </p>
        <ul style={{ fontSize: "17px", lineHeight: 2, color: "#333", paddingLeft: "24px", marginBottom: "24px" }}>
          <li>
            <strong>Petrochemical Industry:</strong> They are used to connect pipes
            in refineries and chemical plants, ensuring the safe transfer of
            chemicals and petroleum products.
          </li>
          <li>
            <strong>Water Treatment Facilities:</strong> Studding Outlet Flanges
            play a role in water treatment plants, connecting pipes for the
            purification and distribution of clean water.
          </li>
          <li>
            <strong>Oil and Gas Sector:</strong> In the oil and gas industry, these
            flanges are essential for connecting pipelines that transport crude oil
            and natural gas.
          </li>
          <li>
            <strong>Manufacturing and Fabrication:</strong> Studding Outlet Flanges
            are used in manufacturing processes, where they connect pipes in
            machinery and equipment.
          </li>
          <li>
            <strong>Construction:</strong> They find applications in construction
            projects, helping secure pipes in buildings, bridges, and infrastructure.
          </li>
        </ul>
      </section>

      {/* Studding Outlets Info Section */}
      <section
        className="rv"
        style={{
          padding: "64px 24px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h3
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              color: "#1a3a5c",
              marginBottom: "8px",
            }}
          >
            What Are Studding Outlets?
          </h3>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#333", marginBottom: "24px" }}>
            Studding outlets (you might also hear them called pad flanges) are a practical steel component used to add a connection point to the outside of a pressure vessel or storage tank. The flat bottom of the flange gets welded directly onto the vessel wall, and the top face is pre-drilled and threaded so you can bolt on flanges, pipe assemblies, valves, gauges, or other equipment. It&apos;s essentially a purpose-built attachment point, without having to cut a full nozzle into the vessel.
          </p>

          <h3
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              color: "#1a3a5c",
              marginBottom: "8px",
            }}
          >
            Do They Come in Different Sizes?
          </h3>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#333", marginBottom: "24px" }}>
            Texas Flange offers studding outlets in with quick turns for smaller sizes, and in pressure classes from 150# to 2500#, so there&apos;s a good chance we have something that fits your application. The facing/contact surface where the flange bolts up will have a small raised ring, with the height of that ring depending on the pressure class.
          </p>

          <h3
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              color: "#1a3a5c",
              marginBottom: "8px",
            }}
          >
            What If My Vessel Has a Curved Surface?
          </h3>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#333", marginBottom: "24px" }}>
            Most studding outlets ship with a flat bottom, which works fine for flat surfaces. But if your vessel has a curved shell or dished head, the back of the flange can be machined to match that curve so it sits flush instead of rocking on the surface. We can match your shell or head mount configuration.
          </p>

          <h3
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              color: "#1a3a5c",
              marginBottom: "8px",
            }}
          >
            What Are They Made Of?
          </h3>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#333", marginBottom: "24px" }}>
            Carbon steel is the most common material, but if your application involves corrosive fluids or extreme temperatures, Texas Flange can also supply studding outlets in stainless steel and a variety of alloy grades.
          </p>

          <h3
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              color: "#1a3a5c",
              marginBottom: "8px",
            }}
          >
            A Note on Thickness
          </h3>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#333", marginBottom: "0" }}>
            The standard thickness generally meets minimum code requirements, but the right thickness for your specific situation depends on your operating conditions. It&apos;s always worth a conversation with our team before you order.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="rv"
        style={{
          padding: "64px 24px",
          backgroundColor: "#f5f7fa",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#1a3a5c",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            Frequently Asked Questions
          </h2>

          {[
            {
              q: "What is the primary purpose of Studding Outlet Flanges?",
              a: "Studding Outlet Flanges facilitate secure pipe connections in various applications.",
            },
            {
              q: "How do Studding Outlet Flanges save space?",
              a: "Their compact design allows them to fit into tight spaces, optimizing available room.",
            },
            {
              q: "Are Studding Outlet Flanges expensive?",
              a: "No, they offer cost-effective solutions for efficient pipe connections.",
            },
            {
              q: "Can Studding Outlet Flanges be customized for specific projects?",
              a: "Yes, they can be tailored to meet the unique requirements of your project.",
            },
            {
              q: "Do Studding Outlet Flanges come in different sizes?",
              a: "Yes, they are available in a range of sizes to accommodate various applications.",
            },
            {
              q: "What materials are Studding Outlet Flanges made from?",
              a: "They can be crafted from a variety of materials, chosen based on project demands.",
            },
            {
              q: "Can Studding Outlet Flanges handle high-pressure situations?",
              a: "Yes, they are engineered to withstand high pressure and elevated temperatures.",
            },
            {
              q: "Are there size and pressure options available?",
              a: "Yes, they come in different sizes and pressure ratings to match specific needs.",
            },
            {
              q: "Where can I source Studding Outlet Flanges?",
              a: "You can find them through various manufacturers and suppliers. One of the leading manufacturers is TexasFlange.com",
            },
            {
              q: "Are Studding Outlet Flanges easy to install?",
              a: "Yes, they are designed for ease of installation in various applications.",
            },
          ].map((item, i) => (
            <details
              key={i}
              style={{
                marginBottom: "12px",
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                padding: "20px 24px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                cursor: "pointer",
              }}
            >
              <summary
                style={{
                  fontSize: "17px",
                  fontWeight: "600",
                  color: "#1a3a5c",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {i + 1}. {item.q}
              </summary>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#555",
                  marginTop: "12px",
                }}
              >
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Conclusion Section */}
      <section
        className="rv"
        style={{
          padding: "64px 24px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#1a3a5c",
            marginBottom: "16px",
          }}
        >
          In Conclusion
        </h2>
        <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#333", marginBottom: "16px" }}>
          Studding Outlet Flanges are functional components that serve a specific
          purpose in pipe systems. They offer versatility in types, sizes, and
          materials, allowing for customization to meet project requirements. These
          flanges play a practical role in ensuring secure and efficient pipe
          connections across different industries.
        </p>
        <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#333" }}>
          For more information regarding Studding Outlet Flanges visit{" "}
          <a
            href="https://texasflange.com?ref=studdingoutletflange"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1a3a5c", fontWeight: "600" }}
          >
            Texas Flange
          </a>
          .
        </p>
      </section>

      {/* CTA Section */}
      <section
        className="rv"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #1a3a5c 0%, #d4a843 100%)",
          padding: "64px 24px",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "24px" }}>
          Ready to Get Started?
        </h2>
        <p style={{ fontSize: "18px", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
          Contact us for all your studding outlet flange needs.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="tel:281-484-8325"
            style={{
              backgroundColor: "#ffffff",
              color: "#1a3a5c",
              padding: "14px 32px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Call 281-484-8325
          </a>
          <a
            href="https://texasflange.com?ref=studdingoutletflange"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "transparent",
              color: "#ffffff",
              padding: "14px 32px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
              border: "2px solid #ffffff",
            }}
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="rv"
        style={{
          padding: "64px 24px",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#1a3a5c",
            marginBottom: "16px",
          }}
        >
          Contact
        </h2>
        <p style={{ fontSize: "17px", color: "#555", marginBottom: "32px" }}>
          Reach out for studding outlet flange needs
        </p>
        <div style={{ fontSize: "17px", lineHeight: 2, color: "#333" }}>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:281-484-8325" style={{ color: "#1a3a5c" }}>
              281-484-8325
            </a>
          </p>
          <p>
            <strong>Fax:</strong> 281-484-8730
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:sales@texasflange.com" style={{ color: "#1a3a5c" }}>
              sales@texasflange.com
            </a>
          </p>
          <p style={{ marginTop: "16px" }}>
            <a
              href="https://www.texasflange.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#d4a843",
                color: "#ffffff",
                padding: "12px 28px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "bold",
                display: "inline-block",
              }}
            >
              Request a Quote
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#1a3a5c",
          color: "#cccccc",
          padding: "48px 24px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "32px",
            marginBottom: "32px",
          }}
        >
          <div>
            <h3
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            >
              Studding Outlet Flanges
            </h3>
            <p style={{ fontSize: "14px", lineHeight: 1.7 }}>
              Your source for quality industrial pipe flanges.
            </p>
          </div>
          <div>
            <h3
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            >
              Quick Links
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a href="#about" style={{ color: "#cccccc", textDecoration: "none", fontSize: "14px" }}>
                About
              </a>
              <a href="#faq" style={{ color: "#cccccc", textDecoration: "none", fontSize: "14px" }}>
                FAQ
              </a>
              <a href="/blog" style={{ color: "#cccccc", textDecoration: "none", fontSize: "14px" }}>
                Blog
              </a>
              <a href="#contact" style={{ color: "#cccccc", textDecoration: "none", fontSize: "14px" }}>
                Contact
              </a>
            </div>
          </div>
          <div>
            <h3
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            >
              Contact
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px" }}>
              <a href="tel:281-484-8325" style={{ color: "#cccccc", textDecoration: "none" }}>
                281-484-8325
              </a>
              <a
                href="mailto:sales@texasflange.com"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                sales@texasflange.com
              </a>
              <a
                href="https://www.texasflange.com/contact-us"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                Request a Quote
              </a>
            </div>
          </div>
          <div>
            <h3
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            >
              Related
            </h3>
            <a
              href="https://texasflange.com?ref=studdingoutletflange"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#cccccc", textDecoration: "none", fontSize: "14px" }}
            >
              texasflange.com
            </a>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid #2a4a6c",
            paddingTop: "24px",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          &copy; {new Date().getFullYear()} Studding Outlet Flanges &middot;
          Mon-Fri, 8 AM - 5 PM CST &middot; All rights reserved.
        </div>
      </footer>
    </>
  );
}
