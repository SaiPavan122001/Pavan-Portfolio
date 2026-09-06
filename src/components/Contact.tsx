import { useRef } from "react";
import { profile } from "../data/content";
import { SectionHead, useReveal } from "./About";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section className="section contact" id="contact" ref={ref}>
      <SectionHead
        ep="EPISODE 06"
        kicker="SEASON FINALE"
        line1="START A NEW"
        line2="TRANSMISSION."
      />
      <div className="contact__grid">
        <form
          className="card contact__form reveal"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `mailto:${profile.email}`;
          }}
        >
          <div className="contact__row">
            <label>
              <span className="mono">First Name</span>
              <input type="text" name="firstName" required placeholder="Your name" />
            </label>
            <label>
              <span className="mono">Last Name</span>
              <input type="text" name="lastName" placeholder="Your surname" />
            </label>
          </div>
          <label>
            <span className="mono">Email Address</span>
            <input type="email" name="email" required placeholder="you@company.com" />
          </label>
          <label>
            <span className="mono">Message</span>
            <textarea name="message" rows={5} required placeholder="Type your message here..." />
          </label>
          <button className="btn btn--red" type="submit">
            ⤳ TRANSMIT MESSAGE
          </button>
          <p className="mono contact__note">
            ▸ Opens your mail client addressed to {profile.email}
          </p>
        </form>

        <div className="contact__side">
          <div className="card reveal">
            <p className="mono red card__label">DIRECT CHANNELS</p>
            <ul className="contact__links">
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GITHUB ↗
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LINKEDIN ↗
                </a>
              </li>
            </ul>
            <p className="mono contact__loc">📍 {profile.location}</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer__top">
          <span className="footer__logo">
            SAIPAVAN<span className="red">.</span>
          </span>
          <p className="mono">// DEVFLIX DEVELOPER SERIES • {profile.season}</p>
          <ul className="footer__social mono">
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GITHUB
              </a>
            </li>
            <li>
              <span className="footer__sep">//</span>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LINKEDIN
              </a>
            </li>
            <li>
              <span className="footer__sep">//</span>
            </li>
            <li>
              <a href={`mailto:${profile.email}`}>EMAIL</a>
            </li>
          </ul>
        </div>
        <p className="mono footer__copy">© 2026 DESIGNED &amp; ENGINEERED BY SAI PAVAN</p>
      </footer>
    </section>
  );
}