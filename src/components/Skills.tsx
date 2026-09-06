import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillDecks } from "../data/extras";
import { SectionHead } from "./About";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".deck-card");
      const total = cards.length;

      const applyDeck = (progress: number) => {
        const p = progress * (total - 1);
        cards.forEach((card, i) => {
          const d = p - i;
          const clamped = Math.max(-1.4, Math.min(1.4, d));
          const active = Math.abs(d) < 0.5;
          const x = clamped * -240;
          const z = -Math.abs(clamped) * 320;
          const rotY = clamped * -32;
          const rotZ = clamped * -6;
          card.style.transform = `translate(-50%,-50%) translate3d(${x}px, 0px, ${z}px) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`;
          card.style.zIndex = String(100 - Math.round(Math.abs(clamped) * 10));
          card.style.filter = active ? "none" : `blur(${Math.min(3, Math.abs(clamped) * 2.4)}px)`;
          card.style.opacity = String(Math.max(0, 1 - Math.abs(clamped) * 0.55));
        });
      };

      applyDeck(0);

      const st = ScrollTrigger.create({
        trigger: ref.current,
        start: "top top",
        end: "+=260%",
        pin: true,
        scrub: true,
        onUpdate: (self) => applyDeck(self.progress),
      });
      void st;
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section skills" id="skills" ref={ref}>
      <SectionHead
        ep="EPISODE 04"
        kicker="CORE COMPETENCIES"
        line1="CORE COMPETENCIES"
        line2="THE SKILL VAULT."
      />
      <div className="skills__stage" ref={stageRef}>
        <div className="skills__ghost" aria-hidden="true">
          SKILLS
        </div>
        <div className="skills__deck">
          {skillDecks.map((s, i) => (
            <article
              className="deck-card"
              key={s.title}
              style={{ transform: "translate(-50%,-50%)", zIndex: 100 - i }}
            >
              <p className="mono red">EP. 0{i + 1}</p>
              <h3>{s.title}</h3>
              <p className="deck-card__desc">{s.desc}</p>
              <ul className="chiprow">
                {s.tags.map((t) => (
                  <li className="chip" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mono skills__hint red">▶ SCROLL TO FLIP THROUGH THE VAULT</p>
      </div>
    </section>
  );
}