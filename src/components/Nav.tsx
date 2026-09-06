import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { label: "HOME", href: "#top" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERTISE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Nav() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".nav",
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.4, ease: "power3.out" }
      );
      ScrollTrigger.create({
        start: "top -80",
        onEnter: () => document.body.classList.add("scrolled"),
        onLeaveBack: () => document.body.classList.remove("scrolled"),
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <nav ref={ref} className="nav" aria-label="Main navigation">
      <a className="nav__logo" href="#top">
        SAIPAVAN<span className="red">.</span>
      </a>
      <ul className="nav__links">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <a className="btn btn--red btn--sm" href="#contact">
        HIRE ME
      </a>
    </nav>
  );
}