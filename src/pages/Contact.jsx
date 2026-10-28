
import { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2
} from "lucide-react";

import "./Contact.css";

const PHONE = "0796322508";
const WHATSAPP = "27796322508";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  location: "",
  service: "",
  propertyType: "",
  message: ""
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message = [
      "RADEBE GUTTER SOLUTION",
      "NEW QUOTATION REQUEST",
      "",
      `Full Name: ${form.name.trim()}`,
      `Phone Number: ${form.phone.trim()}`,
      `Email: ${form.email.trim() || "Not provided"}`,
      `Project Location: ${form.location.trim()}`,
      `Service Required: ${form.service}`,
      `Property Type: ${form.propertyType}`,
      `Project Description: ${form.message.trim() || "Not provided"}`,
      "",
      "Hello Radebe, I would like to request a free quotation.",
      "Please contact me regarding my project.",
      "",
      "Thank you."
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.location.assign(whatsappUrl);
  }

  return (
    <main className="contact-page">

      {/* PAGE HEADER */}
      <section className="contact-banner">
        <span>GET IN TOUCH</span>
        <h1>Contact Radebe Gutter Solution</h1>
        <p>
          Need seamless gutters, repairs or roofline
          improvements? Request your free quotation today.
        </p>
      </section>

      {/* CONTACT DETAILS AND FORM */}
      <section className="contact-main">

        {/* LEFT SECTION */}
        <div className="contact-details">
          <span className="contact-label">
            CONTACT INFORMATION
          </span>

          <h2>Let's Talk About Your Project</h2>

          <p className="contact-intro">
            Speak directly to the installer. We provide
            professional gutter installation, repairs
            and maintenance services across Gauteng
            and surrounding areas.
          </p>

          <div className="contact-detail-item">
            <Phone size={24} />
            <div>
              <h3>Call Us</h3>
              <a href={`tel:${PHONE}`}>
                {PHONE}
              </a>
            </div>
          </div>

          <div className="contact-detail-item">
            <MessageCircle size={24} />
            <div>
              <h3>WhatsApp</h3>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with Radebe
              </a>
            </div>
          </div>

          <div className="contact-detail-item">
            <MapPin size={24} />
            <div>
              <h3>Our Location</h3>
              <p>Gauteng, South Africa</p>
              <p>
                Serving Pretoria, Johannesburg,
                Centurion, Midrand, Ekurhuleni
                and surrounding areas.
              </p>
            </div>
          </div>

          <div className="contact-detail-item">
            <Clock size={24} />
            <div>
              <h3>Operating Hours</h3>
              <p>Monday – Sunday</p>
              <p>07:00 – 17:00</p>
              <small>Emergency calls welcome</small>
            </div>
          </div>

          <div className="contact-social">
            <h3>Follow Our Work</h3>
            <p>
              <strong>Facebook:</strong> Radebe Gutter Solution
            </p>
            <p>
              <strong>Instagram:</strong> @radebe_gutter_solution
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="contact-form-container">

          <div className="contact-form-heading">
            <span className="contact-label">
              FREE QUOTATION
            </span>

            <h2>Request a Free Quote</h2>

            <p>
              Complete the form below and send your
              quotation request directly through WhatsApp.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="contact-form"
          >

            {/* NAME AND PHONE */}
            <div className="contact-form-row">

              <div className="contact-form-field">
                <label htmlFor="name">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="e.g. 0791234567"
                  autoComplete="tel"
                  required
                />
              </div>

            </div>

            {/* EMAIL AND LOCATION */}
            <div className="contact-form-row">

              <div className="contact-form-field">
                <label htmlFor="email">
                  Email Address (Optional)
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="location">
                  Project Location *
                </label>
                <input
                  id="location"
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="e.g. Soshanguve, Pretoria"
                  required
                />
              </div>

            </div>

            {/* SERVICE AND PROPERTY */}
            <div className="contact-form-row">

              <div className="contact-form-field">
                <label htmlFor="service">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select a service
                  </option>
                  <option value="Seamless Gutter Installation">
                    Seamless Gutter Installation
                  </option>
                  <option value="Fascia and Bargeboards">
                    Fascia & Bargeboards
                  </option>
                  <option value="Downpipes and Accessories">
                    Downpipes & Accessories
                  </option>
                  <option value="Gutter Cleaning">
                    Gutter Cleaning
                  </option>
                  <option value="Gutter Repairs">
                    Gutter Repairs
                  </option>
                  <option value="Leak Sealing">
                    Leak Sealing
                  </option>
                  <option value="Gutter Repainting">
                    Gutter Repainting
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              <div className="contact-form-field">
                <label htmlFor="propertyType">
                  Property Type *
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={form.propertyType}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select property type
                  </option>
                  <option value="Residential Home">
                    Residential Home
                  </option>
                  <option value="Townhouse or Complex">
                    Townhouse / Complex
                  </option>
                  <option value="Commercial Property">
                    Commercial Property
                  </option>
                  <option value="Industrial Property">
                    Industrial Property
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

            </div>

            {/* PROJECT DESCRIPTION */}
            <div className="contact-form-field">
              <label htmlFor="message">
                Project Description
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your gutter installation or repair requirements..."
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="contact-submit"
            >
              <Send size={18} />
              Continue to WhatsApp
            </button>

            <p className="contact-form-note">
              Your information will be prepared in a
              WhatsApp message. You must press Send
              in WhatsApp to submit your quotation request.
            </p>

          </form>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="contact-benefits">

        <div>
          <CheckCircle2 size={30} />
          <h3>Free On-Site Quotations</h3>
          <p>
            Free measurements and professional advice
            for your gutter installation project.
          </p>
        </div>

        <div>
          <CheckCircle2 size={30} />
          <h3>5-Year Workmanship Guarantee</h3>
          <p>
            Professional installation backed by
            our workmanship guarantee terms.
          </p>
        </div>

        <div>
          <CheckCircle2 size={30} />
          <h3>7 Days a Week</h3>
          <p>
            Available Monday to Sunday,
            from 07:00 to 17:00.
          </p>
        </div>

      </section>
    </main>
  );
}
