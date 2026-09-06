import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export function useReveal(scope: React.RefObject<HTMLElement | null>, deps: unknown[] = []) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(".reveal");
      targets.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });
      // clip-reveal for big titles
      gsap.utils.toArray<HTMLElement>(".clip-line").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: 110, rotate: 3 },
          {
            yPercent: 0,
            rotate: 0,
            duration: 1.1,
            ease: "power4.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });
    }, scope);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export function SectionHead({
  ep,
  kicker,
  line1,
  line2,
}: {
  ep: string;
  kicker: string;
  line1: string;
  line2?: string;
}) {
  return (
    <div className="section-head">
      <p className="section-head__ep mono">
        <span className="red">▸ {ep}</span>
        <span className="section-head__sep">|</span>
        <span>{kicker}</span>
      </p>
      <h2 className="section-head__title">
        <span className="clip-mask">
          <span className="clip-line">{line1}</span>
        </span>
        {line2 && (
          <span className="clip-mask">
            <span className="clip-line clip-line--red">{line2}</span>
          </span>
        )}
      </h2>
    </div>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section className="section about" id="about" ref={ref}>
      <SectionHead
        ep="EPISODE 02"
        kicker="ABOUT THE ENGINEER"
        line1="EPISODE SYNOPSIS"
        line2="ORIGIN & VISION."
      />
      <div className="about__grid">
        <article className="card about__bio">
          <span className="card__ghost">01</span>
          <p className="mono red card__label">CAST &amp; BACKGROUND</p>
          <p className="about__lead">
            I am <strong>Adusumalli Sai Pavan</strong>, an Agentic AI &amp; Full Stack Developer.
            My technical narrative bridges enterprise software engineering and applied artificial
            intelligence — translating complex backend logic into smart, high-performance
            interfaces.
          </p>
          <p className="about__muted">{profile.summary}</p>
          <ul className="chiprow">
            <li className="chip">AI &amp; ML</li>
            <li className="chip">FULL-STACK DEVELOPMENT</li>
            <li className="chip">CLOUD ARCHITECTURE</li>
          </ul>
        </article>
        <article className="card about__side">
          <p className="mono red card__label">HIGHLIGHTS &amp; ACHIEVEMENTS</p>
          <ul className="about__highlights">
            {profile.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </article>
        <article className="card about__stack card--red-glow">
          <p className="mono red card__label">RESPONSIVE TECH STACK</p>
          <p>Equipped with industry-grade instruments for robust scaling.</p>
          <ul className="chiprow">
            {["REACT", "FASTAPI", "LANGGRAPH", "PYTHON", "DOCKER", "K8S", "QDRANT", "AWS"].map(
              (t) => (
                <li className="chip" key={t}>
                  {t}
                </li>
              )
            )}
          </ul>
        </article>
      </div>
    </section>
  );
}