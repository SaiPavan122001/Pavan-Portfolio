import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "../data/content";
import { SectionHead, useReveal } from "./About";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".exp__row").forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 80, rotateX: 8 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transformOrigin: "top center",
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 85%" },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section experience" id="experience" ref={ref}>
      <SectionHead
        ep="EPISODE 03"
        kicker="THE MAIN TIMELINE"
        line1="MAIN TIMELINE"
        line2="EXPERIENCE & ROLES."
      />
      <div className="exp__list">
        {experience.map((e) => (
          <article className="exp__row" key={e.company}>
            <div className="exp__head">
              <div>
                <h3 className="exp__company">{e.company}</h3>
                <p className="exp__role red">{e.role}</p>
              </div>
              <p className="mono exp__period">{e.period}</p>
            </div>
            <ul className="exp__points">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <ul className="chiprow">
              {e.tech.map((t) => (
                <li className="chip" key={t}>
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}