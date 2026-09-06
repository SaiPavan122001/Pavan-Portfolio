import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(".hero__ribbon", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.2)
        .fromTo(
          ".hero__badge",
          { opacity: 0, scale: 0.8, filter: "blur(8px)" },
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.7 },
          0.5
        )
        .fromTo(
          ".hero__line",
          { yPercent: 110, rotate: 4 },
          { yPercent: 0, rotate: 0, duration: 1.1, stagger: 0.12 },
          0.6
        )
        .fromTo(
          ".hero__ticker-in",
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.7 },
          1.1
        )
        .fromTo(
          ".hero__blurb",
          { opacity: 0, y: 24, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 },
          1.2
        )
        .fromTo(
          ".hero__cta .btn",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.6 },
          1.35
        )
        .fromTo(
          ".hero__photo",
          { opacity: 0, y: 60, rotateY: -18, scale: 0.9 },
          { opacity: 1, y: 0, rotateY: 0, scale: 1, duration: 1.2 },
          0.9
        )
        .fromTo(".hero__stats", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 1.5);

      // parallax on scroll
      gsap.to(".hero__inner", {
        yPercent: -12,
        opacity: 0.25,
        filter: "blur(4px)",
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero__photo", {
        y: -60,
        rotate: 2,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <header className="hero" ref={ref}>
      <div className="hero__ribbon mono">
        <span className="red">// DEVFLIX DEVELOPER SERIES</span>
        <span className="ribbon__sep">|</span>
        <span>{profile.season}</span>
      </div>

      <div className="hero__inner">
        <div className="hero__left">
          <div className="hero__badge mono">
            <span className="tag-red">FULL STACK</span> & AI DEVELOPER &amp; PROBLEM SOLVER
          </div>
          <h1 className="hero__title">
            <span className="hero__line-wrap">
              <span className="hero__line">{profile.heroLine1}</span>
            </span>
            <span className="hero__line-wrap">
              <span className="hero__line">{profile.heroLine2}</span>
            </span>
            <span className="hero__line-wrap">
              <span className="hero__line hero__line--red">{profile.heroLine3}</span>
            </span>
          </h1>
          <div className="hero__ticker mono hero__ticker-in">
            {profile.ticker.map((t, i) => (
              <span key={t}>
                <span className="tag-red">{t.toUpperCase()}</span>
                {i < profile.ticker.length - 1 && <span className="ticker-dot"> • </span>}
              </span>
            ))}
          </div>
          <p className="hero__blurb">{profile.blurb}</p>
          <div className="hero__cta">
            <a className="btn btn--ghost" href="#projects">
              ▶ VIEW PROJECTS
            </a>
            <a className="btn btn--outline" href="#contact">
              ⊙ CONTACT ME
            </a>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__photo">
            <span className="hero__photo-tag mono">FEATURED ME</span>
            <div className="hero__photo-frame">
              <img
                src="/profile.svg"
                alt="Portrait of Adusumalli Sai Pavan"
                loading="eager"
                onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
              />
              <div className="hero__photo-fallback" aria-hidden="true">
                SP
              </div>
            </div>
          </div>
          <aside className="hero__sidecard">
            <p className="mono red">100+ TASKS &amp; PROJECTS</p>
            <p>
              Agentic AI systems, RAG pipelines, multi-tenant SaaS platforms and enterprise
              integrations.
            </p>
          </aside>
        </div>
      </div>

      <ul className="hero__stats">
        {profile.stats.map((s) => (
          <li key={s.label}>
            <strong>{s.value}</strong>
            <span className="mono">{s.label}</span>
          </li>
        ))}
      </ul>

      <div className="marquee marquee--bottom" aria-hidden="true">
        <div className="marquee__track">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="mono">
              ENGINEERED FOR SCALE&nbsp;&nbsp;✦&nbsp;&nbsp;AGENTIC AI&nbsp;&nbsp;✦&nbsp;&nbsp;FULL
              STACK&nbsp;&nbsp;✦&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}