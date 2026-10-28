
import { ArrowRight, Phone, ShieldCheck, Wrench, Droplets } from "lucide-react";
import "./Home.css";

export default function Home() {
  const services = [
    {
      title: "Seamless Gutters",
      description: "Professional seamless gutter installation for homes and businesses.",
      icon: Droplets
    },
    {
      title: "Fascia & Bargeboards",
      description: "Durable Chromadek fascia and bargeboard installation.",
      icon: ShieldCheck
    },
    {
      title: "Gutter Repairs",
      description: "Gutter cleaning, repairs, leak sealing and maintenance.",
      icon: Wrench
    }
  ];

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-label">
            PROFESSIONAL GUTTER SOLUTIONS
          </span>

          <h1>
            Seamless Guttering
            <br />
            Built for Rainy Days
          </h1>

          <p>
            Protect your home or business with durable,
            professionally installed seamless gutters.
            Serving Gauteng and surrounding areas.
          </p>

          <div className="hero-buttons">
            <a href="/contact" className="btn-primary">
              Get a Free Quote <ArrowRight size={18} />
            </a>

            <a href="tel:0796322508" className="btn-secondary">
              <Phone size={18} /> Call Us
            </a>
          </div>
        </div>
      </section>

      <section className="home-services">
        <div className="section-heading">
          <span>WHAT WE DO</span>
          <h2>Our Professional Services</h2>
          <p>
            Quality gutter solutions for residential
            and commercial properties.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div className="service-card" key={service.title}>
                <Icon size={38} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="home-cta">
        <h2>Need Professional Gutter Installation?</h2>
        <p>
          Get a free on-site quotation from Radebe Gutter Solution.
        </p>

        <a
          href="https://wa.me/27796322508"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Request a Quote on WhatsApp
        </a>
      </section>
    </main>
  );
}
