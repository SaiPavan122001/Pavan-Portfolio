import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { capabilities } from "../data/extras";
import { SectionHead } from "./About";

gsap.registerPlugin(ScrollTrigger);

export default function Capabilities() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(".cap__row");
      rows.forEach((row, i) => {
        gsap.fromTo(
          row,
          { scale: 0.92 + i * 0.02, opacity: 0.35, y: 60 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
              end: "top 35%",
              scrub: true,
            },
          }
        );
      });
      gsap.fromTo(
        trackRef.current,
        { rotateX: 12 },
        {
          rotateX: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section caps" id="capabilities" ref={ref}>
      <SectionHead
        ep="EPISODE 03"
        kicker="THE DIRECTOR'S CUT"
        line1="DIRECTOR'S CUT"
        line2="TECHNICAL CAPABILITIES."
      />
      <div className="caps__perspective" ref={trackRef}>
        {capabilities.map((c) => (
          <article className="cap__row" key={c.title} tabIndex={0}>
            <div className="cap__left">
              <p className="mono red">{c.label}</p>
              <h3>{c.title}</h3>
            </div>
            <div className="cap__right">
              <p>{c.desc}</p>
              <ul className="chiprow">
                {c.tags.map((t) => (
                  <li className="chip" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}