
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Droplets,
  Hammer,
  ShieldCheck,
  Sparkles,
  Phone,
  MapPin,
  ChevronDown,
  MessageCircle,
  Wrench,
} from "lucide-react";
import "./Home.css";

const PHONE = "27796322508";

const services = [
  {
    icon: Droplets,
    title: "Seamless Gutters",
    description:
      "Custom-fitted gutter systems designed for a clean finish and effective rainwater drainage.",
    number: "01",
  },
  {
    icon: Hammer,
    title: "Fascia & Bargeboards",
    description:
      "Neat roofline finishing that improves the appearance and protection of your property.",
    number: "02",
  },
  {
    icon: Wrench,
    title: "Gutter Repairs",
    description:
      "Solutions for leaking joints, damaged sections, blockages and drainage problems.",
    number: "03",
  },
  {
    icon: Sparkles,
    title: "Cleaning & Maintenance",
    description:
      "Professional gutter cleaning and maintenance to help keep rainwater flowing.",
    number: "04",
  },
];

const projects = [
  { image: "/images/project1.jpg", title: "Gutter Installation" },
  { image: "/images/project2.jpg", title: "Roofline Finishing" },
  { image: "/images/project3.jpg", title: "Guttering Workmanship" },
];

const faqs = [
  {
    question: "Do you offer free quotations?",
    answer:
      "Yes. Contact our team to arrange a free site quotation for your guttering requirements.",
  },
  {
    question: "Which areas do you service?",
    answer:
      "We serve customers across Gauteng and selected areas of North West. Contact us to confirm availability in your area.",
  },
  {
    question: "Do you repair existing gutters?",
    answer:
      "Yes. We assist with gutter repairs, leaks, cleaning and general maintenance.",
  },
  {
    question: "Do you provide a workmanship guarantee?",
    answer:
      "We offer a five-year workmanship guarantee. Please confirm the applicable terms when requesting your quotation.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [quote, setQuote] = useState({
    name: "",
    location: "",
    service: "Seamless Gutters",
    details: "",
  });

  function sendQuote(event) {
    event.preventDefault();

    const message = [
      "Hello Radebe Gutter Solution,",
      "",
      "I would like a free quotation.",
      `Name: ${quote.name}`,
      `Location: ${quote.location}`,
      `Service: ${quote.service}`,
      `Details: ${quote.details || "Please contact me."}`,
    ].join("\n");

    window.open(
      `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="rgs-home">
      {/* HERO */}
      <section className="rgs-hero">
        <div className="rgs-hero-overlay" />

        <div className="rgs-container rgs-hero-content">
          <div className="rgs-eyebrow">
            <span className="rgs-dot" />
            GAUTENG GUTTERING SPECIALISTS
          </div>

          <h1>
            Built to protect.
            <br />
            <span>Designed to impress.</span>
          </h1>

          <p>
            Seamless gutter installations, repairs and roofline
            finishing for homes and businesses.
            Reliable workmanship. Beautiful results.
          </p>

          <div className="rgs-hero-actions">
            <a href="#quote" className="rgs-btn rgs-btn-gold">
              Get a Free Quote <ArrowUpRight size={19} />
            </a>

            <Link to="/projects" className="rgs-btn rgs-btn-outline">
              Explore Our Work <ArrowRight size={19} />
            </Link>
          </div>

          <div className="rgs-hero-trust">
            <span><ShieldCheck size={18} /> 5-Year Workmanship Guarantee</span>
            <span><CheckCircle2 size={18} /> Free Site Quotations</span>
          </div>
        </div>

        <a className="rgs-scroll" href="#services">
          EXPLORE SERVICES ↓
        </a>
      </section>

      {/* INTRO */}
      <section className="rgs-intro rgs-section">
        <div className="rgs-container rgs-intro-grid">
          <div>
            <span className="rgs-kicker">WELCOME TO RADEBE GUTTER SOLUTION</span>
            <h2>
              Better drainage.
              <br />
              <em>Better protection.</em>
            </h2>
          </div>

          <div className="rgs-intro-right">
            <p>
              Your property deserves guttering that works as well as
              it looks. We provide seamless gutter solutions,
              professional repairs and quality roofline finishes
              tailored to your property.
            </p>
            <Link to="/about" className="rgs-text-link">
              Discover our company <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="rgs-services rgs-section">
        <div className="rgs-container">
          <div className="rgs-section-heading">
            <div>
              <span className="rgs-kicker">WHAT WE DO</span>
              <h2>Solutions for every roofline.</h2>
            </div>

            <Link to="/services" className="rgs-text-link">
              All services <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className="rgs-service-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  to="/services"
                  className="rgs-service-card"
                  key={service.number}
                >
                  <div className="rgs-service-top">
                    <Icon size={34} strokeWidth={1.5} />
                    <span>{service.number}</span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <span className="rgs-service-arrow">
                    <ArrowUpRight size={22} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="rgs-projects rgs-section">
        <div className="rgs-container">
          <div className="rgs-section-heading">
            <div>
              <span className="rgs-kicker">OUR WORK</span>
              <h2>Quality you can see.</h2>
            </div>

            <Link to="/projects" className="rgs-text-link">
              View all projects <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className="rgs-project-grid">
            {projects.map((project, index) => (
              <Link
                to="/projects"
                className={`rgs-project-card rgs-project-${index}`}
                key={project.image}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
                <div className="rgs-project-caption">
                  <div>
                    <small>RADEBE GUTTER SOLUTION</small>
                    <h3>{project.title}</h3>
                  </div>
                  <ArrowUpRight size={25} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="rgs-promise rgs-section">
        <div className="rgs-container rgs-promise-grid">
          <div>
            <span className="rgs-kicker">THE RADEBE DIFFERENCE</span>
            <h2>
              Attention to detail.
              <br />
              From start to finish.
            </h2>
            <p>
              We believe a professional installation should deliver
              lasting performance and a clean, attractive finish.
            </p>

            <a
              href={`https://wa.me/${PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rgs-btn rgs-btn-gold"
            >
              Speak to Our Team <MessageCircle size={19} />
            </a>
          </div>

          <div className="rgs-promise-list">
            {[
              "Seamless, custom-fitted solutions",
              "Professional installation and finishing",
              "Free site quotations",
              "Five-year workmanship guarantee",
            ].map((item, index) => (
              <div className="rgs-promise-item" key={item}>
                <span>0{index + 1}</span>
                <h3>{item}</h3>
                <CheckCircle2 size={22} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" className="rgs-quote rgs-section">
        <div className="rgs-container rgs-quote-grid">
          <div>
            <span className="rgs-kicker">START YOUR PROJECT</span>
            <h2>
              Let's get your
              <br />
              gutters sorted.
            </h2>
            <p>
              Tell us what you need. We'll prepare your request
              and connect you directly to our WhatsApp team.
            </p>

            <div className="rgs-contact-lines">
              <a href="tel:0796322508">
                <Phone size={19} /> 079 632 2508
              </a>
              <span>
                <MapPin size={19} /> Gauteng & selected North West areas
              </span>
            </div>
          </div>

          <form className="rgs-quote-form" onSubmit={sendQuote}>
            <h3>Request a free quotation</h3>

            <label htmlFor="rgs-name">Your name</label>
            <input
              id="rgs-name"
              required
              maxLength={100}
              placeholder="Full name"
              value={quote.name}
              onChange={(e) =>
                setQuote({ ...quote, name: e.target.value })
              }
            />

            <label htmlFor="rgs-location">Project location</label>
            <input
              id="rgs-location"
              required
              maxLength={150}
              placeholder="e.g. Pretoria, Gauteng"
              value={quote.location}
              onChange={(e) =>
                setQuote({ ...quote, location: e.target.value })
              }
            />

            <label htmlFor="rgs-service">Service required</label>
            <select
              id="rgs-service"
              value={quote.service}
              onChange={(e) =>
                setQuote({ ...quote, service: e.target.value })
              }
            >
              {services.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>

            <label htmlFor="rgs-details">Project details</label>
            <textarea
              id="rgs-details"
              rows={4}
              maxLength={1000}
              placeholder="Tell us about your property or gutter problem..."
              value={quote.details}
              onChange={(e) =>
                setQuote({ ...quote, details: e.target.value })
              }
            />

            <button className="rgs-btn rgs-btn-gold" type="submit">
              Send via WhatsApp <ArrowUpRight size={19} />
            </button>

            <small>
              Your WhatsApp app will open so you can review
              and send the message.
            </small>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="rgs-faq rgs-section">
        <div className="rgs-container rgs-faq-grid">
          <div>
            <span className="rgs-kicker">COMMON QUESTIONS</span>
            <h2>Good to know.</h2>
            <p>Answers to questions we often receive.</p>
          </div>

          <div className="rgs-faq-list">
            {faqs.map((faq, index) => (
              <div className="rgs-faq-item" key={faq.question}>
                <button
                  type="button"
                  aria-expanded={openFaq === index}
                  onClick={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                >
                  {faq.question}
                  <ChevronDown
                    size={20}
                    className={openFaq === index ? "rotated" : ""}
                  />
                </button>

                {openFaq === index && <p>{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="rgs-footer">
        <div className="rgs-container rgs-footer-inner">
          <div>
            <strong>RADEBE GUTTER SOLUTION</strong>
            <p>Seamless Guttering Built for Rainy Days.</p>
          </div>

          <div className="rgs-footer-links">
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <small>
            © {new Date().getFullYear()} Radebe Gutter Solution.
            All rights reserved.
          </small>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        className="rgs-whatsapp"
        href={`https://wa.me/${PHONE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Radebe Gutter Solution on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={27} />
      </a>
    </main>
  );
}
