import { useRef } from "react";
import { projects } from "../data/extras";
import { SectionHead, useReveal } from "./About";

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section className="section projects" id="projects" ref={ref}>
      <SectionHead
        ep="EPISODE 05"
        kicker="FEATURED WORK"
        line1="FEATURED WORK"
        line2="PLAYLIST 05."
      />
      <div className="projects__grid">
        {projects.map((p) => (
          <article className={`proj-card reveal${p.featured ? " proj-card--featured" : ""}`} key={p.title}>
            <div className="proj-card__tilt">
              <div className="proj-card__top">
                <span className="mono red">{p.code}</span>
                {p.featured && <span className="mono proj-card__badge">★ FEATURED</span>}
              </div>
              <h3 className="proj-card__title">{p.title}</h3>
              <p className="proj-card__desc">{p.desc}</p>
              <ul className="chiprow">
                {p.tags.map((t) => (
                  <li className="chip" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="proj-card__foot">
                {p.link ? (
                  <a className="btn btn--ghost btn--sm" href={p.link} target="_blank" rel="noreferrer">
                    ↗ VIEW ON GITHUB
                  </a>
                ) : (
                  <span className="mono proj-card__nolink">// CASE STUDY — NO PUBLIC REPO</span>
                )}
                {p.report && (
                  <a
                    className="btn btn--ghost btn--sm"
                    href={p.report}
                    target="_blank"
                    rel="noreferrer"
                    type="application/pdf"
                  >
                    📄 REPORT
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}