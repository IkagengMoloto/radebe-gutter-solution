
import {
  Droplets,
  ShieldCheck,
  Wrench,
  Paintbrush,
  ArrowRight,
  CheckCircle2,
  Phone,
  Ruler,
  Hammer
} from "lucide-react";

import { Link } from "react-router-dom";
import "./Services.css";

export default function Services() {
  const services = [
    {
      icon: Droplets,
      title: "Seamless Gutter Installation",
      description:
        "Custom-made seamless gutters manufactured on-site for residential, commercial and industrial properties.",
      features: [
        "0.53 Chromadek steel",
        "White, Bronze, Black and Wheat colours",
        "Reduced joints and potential leak points",
        "Professional installation"
      ],
      price: "From R120 per metre",
      featured: true
    },
    {
      icon: ShieldCheck,
      title: "Fascia & Bargeboard Installation",
      description:
        "Supply and installation of durable Chromadek fascia and bargeboards to improve roofline protection and appearance.",
      features: [
        "New fascia board installation",
        "Bargeboard replacement",
        "Replacement of rotten wooden fascias",
        "Professional finishing"
      ]
    },
    {
      icon: Hammer,
      title: "Downpipes & Accessories",
      description:
        "Complete rainwater drainage solutions designed to direct water safely away from your property.",
      features: [
        "Chromadek downpipes",
        "Elbows and funnels",
        "Brackets and fittings",
        "Installation and replacement"
      ]
    },
    {
      icon: Wrench,
      title: "Gutter Repairs",
      description:
        "Repair damaged, misaligned or leaking gutters to restore proper rainwater flow.",
      features: [
        "Leak sealing",
        "Gutter re-alignment",
        "Damaged section repairs",
        "Existing gutter maintenance"
      ]
    },
    {
      icon: Droplets,
      title: "Gutter Cleaning & Unblocking",
      description:
        "Removal of leaves, debris and blockages to keep your gutter system functioning effectively.",
      features: [
        "Debris removal",
        "Downpipe unblocking",
        "Water flow inspection",
        "Routine gutter maintenance"
      ]
    },
    {
      icon: Paintbrush,
      title: "Gutter Repainting",
      description:
        "Refresh the appearance of existing gutters with professional surface preparation and repainting.",
      features: [
        "Surface preparation",
        "Gutter repainting",
        "Colour matching advice",
        "Roofline appearance improvements"
      ]
    }
  ];

  return (
    <main className="services-page">
      <section className="services-banner">
        <span>RADEBE GUTTER SOLUTION</span>
        <h1>Our Professional Services</h1>
        <p>
          Reliable gutter installation, repairs and maintenance
          for homes and businesses across Gauteng.
        </p>
      </section>

      <section className="services-intro">
        <span className="services-label">WHAT WE OFFER</span>
        <h2>Your One-Stop Gutter Shop</h2>
        <p>
          From seamless gutter installation to repairs and
          maintenance, we provide complete solutions to help
          protect your property from rainwater damage.
        </p>
      </section>

      <section className="services-list">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className={`services-detail-card ${
                service.featured ? "featured" : ""
              }`}
            >
              {service.featured && (
                <span className="featured-label">
                  OUR MAIN SERVICE
                </span>
              )}

              <div className="services-icon">
                <Icon size={34} />
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 size={17} />
                    {feature}
                  </li>
                ))}
              </ul>

              {service.price && (
                <div className="services-price">
                  {service.price}
                  <small>Installation included. T&Cs apply.</small>
                </div>
              )}

              <Link to="/contact" className="services-quote">
                Request a Quote <ArrowRight size={17} />
              </Link>
            </article>
          );
        })}
      </section>

      <section className="services-benefits">
        <div className="services-benefits-heading">
          <span className="services-label">WHY CHOOSE US</span>
          <h2>More Than Just Gutter Installation</h2>
        </div>

        <div className="services-benefits-grid">
          <div>
            <Ruler size={34} />
            <h3>Free On-Site Quotations</h3>
            <p>
              We offer free measurements and quotations
              to help you plan your gutter installation.
            </p>
          </div>

          <div>
            <ShieldCheck size={34} />
            <h3>5-Year Workmanship Guarantee</h3>
            <p>
              Our installation workmanship is backed by
              a five-year guarantee, subject to its terms.
            </p>
          </div>

          <div>
            <CheckCircle2 size={34} />
            <h3>Competitive Pricing</h3>
            <p>
              We aim to beat qualifying written quotations,
              subject to terms and conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="services-colours">
        <span className="services-label">AVAILABLE FINISHES</span>
        <h2>Choose Your Gutter Colour</h2>
        <p>
          Our seamless gutters are available in a range
          of colours to complement your property.
        </p>

        <div className="gutter-colours">
          {[
            { name: "White", colour: "#f5f5f0" },
            { name: "Bronze", colour: "#806044" },
            { name: "Black", colour: "#222222" },
            { name: "Wheat / Cream", colour: "#dfd0ad" }
          ].map((item) => (
            <div className="gutter-colour" key={item.name}>
              <div
                className="colour-swatch"
                style={{ backgroundColor: item.colour }}
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <p className="colour-note">
          Colours shown are illustrative. Actual finishes may vary.
        </p>
      </section>

      <section className="services-cta">
        <h2>Need a Free Gutter Installation Quote?</h2>
        <p>
          Speak directly to our installer and get professional
          advice for your home or business.
        </p>

        <div className="services-cta-buttons">
          <a
            href="https://wa.me/27796322508?text=Hello%20Radebe%20Gutter%20Solution%2C%20I%20would%20like%20a%20free%20quotation."
            target="_blank"
            rel="noopener noreferrer"
            className="services-whatsapp"
          >
            Request a Quote <ArrowRight size={18} />
          </a>

          <a href="tel:0796322508" className="services-call">
            <Phone size={18} /> Call Us
          </a>
        </div>
      </section>
    </main>
  );
}
