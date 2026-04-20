import React, { useState } from "react";
import "./Services_Contact.css";
import emailjs from "@emailjs/browser";


const Services_Contact = () => {

const sendEmail = (e) => {
  e.preventDefault();

  setStatus("loading"); 

  emailjs
    .sendForm(
      "service_vb4wl3i",
      "template_6arr79k",
      e.target,
      "0G5f4DdAr10n_dJGE"
    )
    .then(
      () => {
        alert("Message sent 🚀");
        e.target.reset();
        setStatus(""); 
      },
      (error) => {
        console.log(error.text);
        alert("Failed ❌");
        setStatus(""); 
      }
    );
};

const [status, setStatus] = useState("");
  return (
    <div className="sc-wrap" id="contact">

      {/* BG */}
      <div className="sc-bg">
        {/* <img src={bgImg} alt="" /> */}
      </div>

      <div className="noise"></div>

      {/* ── SERVICES ── */}
      <div className="services-top">
        <div className="sc-tag">Commission a Suit</div>

        <div className="sc-heading">
          Choose Your<br />
          <span className="outline">Mark</span>
          <span className="red"> Armor.</span>
        </div>

        <div className="sc-sub">
          // Every suit built from scratch · No templates · Fully deployed
        </div>

        <div className="pricing-grid">

          {/* MARK I */}
          <div className="price-card">
            <div className="pc-ghost">I</div>
            <div className="pc-mark">// Mark I · Starter</div>
            <div className="pc-name">Landing Page</div>
            <div className="pc-desc">One powerful page. Fast, responsive, animated. Perfect for local businesses, personal brands, and events.</div>

            <div className="pc-price-row">
              <div className="pc-currency">₹</div>
              <div className="pc-amount">8K</div>
              <div className="pc-unit">onwards</div>
            </div>

            <div className="pc-time">// Delivered in 5–7 days</div>

            <div className="pc-features">
              <div className="pc-feat">Single page, fully responsive</div>
              <div className="pc-feat">Scroll animations included</div>
              <div className="pc-feat">Contact form integrated</div>
              <div className="pc-feat">Custom domain deploy</div>
            </div>

            <a href="#contact-form" className="pc-cta outline-btn">
              Commission Mark I
            </a>
          </div>

          {/* MARK II */}
          <div className="price-card featured">
            <div className="pc-ghost">II</div>
            <div className="feat-label">Most Popular</div>

            <div className="pc-mark">// Mark II · Standard</div>
            <div className="pc-name">Business Website</div>

           <div className="pc-desc">3–5 pages with full branding, animations, and a contact system. The complete suit for growing businesses.</div>

            <div className="pc-price-row">
              <div className="pc-currency">₹</div>
              <div className="pc-amount">18K</div>
              <div className="pc-unit">onwards</div>
            </div>

            <div className="pc-time">// Delivered in 10–14 days</div>

            <div className="pc-features">
              <div className="pc-feat">Up to 5 pages</div>
              <div className="pc-feat">Advanced animations</div>
              <div className="pc-feat">WhatsApp + Email</div>
              <div className="pc-feat">SEO optimized</div>
              <div className="pc-feat">1 month support</div>
            </div>

            <a href="#contact-form" className="pc-cta solid-btn">
              Commission Mark II
            </a>
          </div>

          {/* MARK III */}
          <div className="price-card">
            <div className="pc-ghost">III</div>

            <div className="pc-mark">// Mark III · Pro</div>
            <div className="pc-name">Web Application</div>

            <div className="pc-desc">Full React/Next.js web app with real functionality — dashboards, e-commerce, bookings, portals. Custom built.</div>

            <div className="pc-price-row">
              <div className="pc-currency">₹</div>
              <div className="pc-amount">35K</div>
              <div className="pc-unit">onwards</div>
            </div>

            <div className="pc-time">// Timeline discussed</div>

            <div className="pc-features">
              <div className="pc-feat">Custom React App</div>
              <div className="pc-feat">API + Database</div>
              <div className="pc-feat">Auth system</div>
              <div className="pc-feat">Admin panel</div>
              <div className="pc-feat">3 months support</div>
            </div>

            <a href="#contact-form" className="pc-cta outline-btn">
              Commission Mark III
            </a>
          </div>

        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="contact-divider">
        <div className="div-line"></div>

        <div className="div-center">
          {/* <div className="div-arc">
            <svg viewBox="0 0 28 28">
              <circle cx="14" cy="14" r="12"  stroke="rgba(73, 76, 235, 0.8)" />
              <circle cx="14" cy="14" r="8"  stroke="rgba(66, 92, 209, 0.6)"/>
              <circle cx="14" cy="14" r="3" fill="rgba(14, 110, 255, 0.8)" />
            </svg>
          </div> */}
          Open communication channel
        </div>

        <div className="div-line"></div>
      </div>

      {/* ── CONTACT ── */}
      <div className="contact-bottom" id="contact-form">

        {/* LEFT */}
        <div className="contact-left">
          <div className="cl-tag">Get In Touch</div>

          <div className="cl-heading">
            Let's Build<br />
            Something<br />
            <span className="red">Real.</span>
          </div>

          <p className="cl-desc">
        Have a project in mind? A business that needs a website? An idea that needs to become real?</p>
        <p className="cl-desc"><strong>I respond within 24 hours.</strong> No agencies, no middlemen — you work directly with me.
      </p>

          <div className="contact-methods">

            <a  href="mailto:honeycodes24@gmail.com?subject=Project%20Inquiry&body=Hi%2C%20I%20saw%20your%20portfolio..."
                 target="_blank"
                rel="noopener noreferrer" 
                 className="contact-method">
              <div className="cm-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#b91c1c" stroke-width="1.5">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
              <div className="cm-info">
                <div className="cm-label">// Email</div>
                <div className="cm-value">Email Me : honeycodes24@gmail.com</div>
              </div>
              <div className="cm-arrow">→</div>
            </a>

            <a  href="https://wa.me/919555791632?text=Hi%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project"
                    target="_blank"
                    rel="noopener noreferrer" className="contact-method">
              <div className="cm-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#b91c1c" stroke-width="1.5">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
            </svg>
          </div>
              <div className="cm-info">
                <div className="cm-label">// WhatsApp</div>
                <div className="cm-value">Let's Chat On WhatsApp</div>
              </div>
              <div className="cm-arrow">→</div>
            </a>

            <a href="https://www.linkedin.com/in/honey-gupta-5b686b366/"
                target="_blank" 
                rel="noopener noreferrer" className="contact-method">
              <div className="cm-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#b91c1c" stroke-width="1.5">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </div>
              <div className="cm-info">
                <div className="cm-label">// LinkedIn</div>
                <div className="cm-value">Let's Connect on LinkedIn : www.linkedin.com/in/honey-gupta-5b686b366</div>
              </div>
              <div className="cm-arrow">→</div>
            </a>

          </div>

            <div className="availability">
                <div className="avail-dot"></div>
                <div className="avail-text">Available for new projects · Responding within 24hrs</div>
            </div>
        </div>

        {/* RIGHT FORM */}
<form className="contact-form" onSubmit={sendEmail}>

  <div className="form-title">Send a Message</div>

  <div className="form-row two-col">
    <input name="name" className="form-input" placeholder="Your name" required />
    <input name="email" className="form-input" placeholder="Your email" required/>
  </div>

  <div className="form-row">
    <select name="project" className="form-select" required defaultValue="">
      <option>Select a Suit - Mark I, II & III </option>
      <option>Mark I - Landing Page(from ₹8,000)</option>
      <option>Mark II - Business Website(from ₹18,000)</option>
      <option>Mark III - Web Application(from ₹35,000)</option>
      <option> Anything Else - Let's Talk</option>
    </select>
  </div>

  <div className="form-row">
    <textarea
      name="message"
      className="form-textarea"
      placeholder="Tell me about your project..." required
    />
  </div>

<button
  type="submit"
  className="form-submit"
  disabled={status === "loading"}
>
  {status === "loading" ? "Sending..." : "Send Message"}
</button>

</form>

      </div>

      {/* FOOTER */}
      <div className="footer-strip">
        <div className="footer-logo">Harry<span>.</span></div>

        <div className="footer-copy">© 2026 Harry · All rights reserved · Designed & Developed by Harry</div>

        <div className="footer-links">
          <a href="https://github.com/HoneyCode24" target="_blank" 
                rel="noopener noreferrer" className="footer-link">GitHub </a>
          <a href="https://www.linkedin.com/in/honey-gupta-5b686b366/" target="_blank" 
                rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <a href="#" className="footer-link">Top ↑</a>
        </div>
      </div>

    </div>
  );
};

export default Services_Contact;