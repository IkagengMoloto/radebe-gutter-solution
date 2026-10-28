
import {
  CheckCircle,
  ShieldCheck,
  Users,
  Target,
  Award,
  ArrowRight,
  Phone
} from "lucide-react";

import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  const advantages = [
    {
      icon: Users,
      title: "Direct Communication",
      description:
        "When you contact us, you speak directly with the installer, not a middleman."
    },
    {
      icon: Award,
      title: "50+ Completed Projects",
      description:
        "We have completed over 50 gutter installation projects across Gauteng."
    },
    {
      icon: ShieldCheck,
      title: "5-Year Workmanship Guarantee",
      description:
        "We stand behind our installations with a five-year workmanship guarantee."
    },
    {
      icon: CheckCircle,
      title: "Competitive Pricing",
      description:
        "We offer affordable gutter solutions and aim to beat qualifying written quotations."
    }
  ];

  return (
    <main className="about-page">

      {/* PAGE BANNER */}
      <section className="about-banner">
        <div>
          <span>GET TO KNOW US</span>
          <h1>About Radebe Gutter Solution</h1>
          <p>
            Seamless Guttering Built for Rainy Days
          </p>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="about-intro">
        <div className="about-intro-content">
          <span className="section-label">WHO WE ARE</span>

          <h2>
            Professional Gutter Installation
            You Can Trust
          </h2>

          <p>
            Radebe Gutter Solution is a 100% Black-owned,
            hands-on gutter installation company based
            in Gauteng, South Africa.
          </p>

          <p>
            We specialise in seamless gutter installation,
            fascia boards, bargeboards, downpipes,
            gutter repairs and maintenance.
          </p>

          <p>
            We believe every South African property
            deserves durable gutters that protect
            buildings from rainwater damage.
          </p>

          <p>
            Our approach is simple: neat workmanship,
            affordable pricing and direct communication
            with our customers.
          </p>

          <Link to="/contact" className="about-button">
            Request a Free Quote
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="about-intro-image">
          <img
            src="/images/about.jpg"
            alt="Radebe Gutter Solution installation work"
          />
        </div>
      </section>

      {/* COMPANY EXPERIENCE */}
      <section className="about-stats">
        <div>
          <h3>50+</h3>
          <p>Completed Projects</p>
        </div>

        <div>
          <h3>5 Years</h3>
          <p>Workmanship Guarantee</p>
        </div>

        <div>
          <h3>7 Days</h3>
          <p>Available Every Week</p>
        </div>

        <div>
          <h3>Gauteng</h3>
          <p>Primary Service Area</p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story">
        <span className="section-label">OUR JOURNEY</span>
        <h2>Our Story</h2>

        <p>
          Radebe Gutter Solution started with one idea:
          South African homes deserve gutters that
          don't start leaking after just a few months.
        </p>

        <p>
          What began with a small toolbox and a promise
          to deliver neat work at a fair price has grown
          into a trusted gutter installation business.
        </p>

        <p>
          From our first project in Soshanguve to more
          than 50 completed projects across Gauteng,
          our reputation has grown through hard work,
          customer referrals and reliable service.
        </p>

        <p>
          Today, we serve homeowners, landlords,
          construction companies, roofing contractors,
          residential estates and commercial properties.
        </p>
      </section>

      {/* MISSION AND VISION */}
      <section className="about-mission">
        <div className="mission-card">
          <Target size={38} />

          <h3>Our Mission</h3>

          <p>
            To provide durable, affordable and
            professionally installed gutter systems
            that protect homes and businesses
            against rainwater damage.
          </p>
        </div>

        <div className="mission-card">
          <Award size={38} />

          <h3>Our Vision</h3>

          <p>
            To become Gauteng's most trusted gutter
            installation brand, recognised for
            quality workmanship, excellent service
            and competitive pricing.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-why">
        <div className="about-heading">
          <span className="section-label">OUR ADVANTAGES</span>
          <h2>Why Choose Radebe Gutter Solution?</h2>
        </div>

        <div className="advantages-grid">
          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <div className="advantage-card" key={item.title}>
                <Icon size={36} />

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="about-cta">
        <h2>Looking for Reliable Gutter Installers?</h2>

        <p>
          Contact Radebe Gutter Solution for a free
          on-site quotation and professional advice.
        </p>

        <div className="about-cta-buttons">
          <a
            href="https://wa.me/27796322508"
            target="_blank"
            rel="noopener noreferrer"
            className="about-button"
          >
            Get a Free Quote
            <ArrowRight size={18} />
          </a>

          <a href="tel:0796322508" className="about-call">
            <Phone size={18} />
            Call 079 632 2508
          </a>
        </div>
      </section>

    </main>
  );
}
