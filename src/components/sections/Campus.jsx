import { ArrowUpRight } from "lucide-react";
import Reveal from "../animation/Reveal.jsx";

const spaces = [
  { name: "Learning facilities", detail: "Digital workstations and well-equipped science and IT labs", image: "/images/classroom.svg", className: "campus-large" },
  { name: "Sports & wellbeing", detail: "A programme featuring 16+ sports, according to TIS", image: "/images/sports.svg", className: "" },
  { name: "Library & discovery", detail: "A library collection reported by TIS at 20,000+ books", image: "/images/library.svg", className: "" },
];

export default function Campus() {
  return (
    <section id="campus" className="section campus-section">
      <div className="container">
        <Reveal className="campus-heading">
          <div><span className="eyebrow">Campus life</span><h2 className="section-title">Space to learn,<br /><i>play and grow.</i></h2></div>
          <p className="muted">TIS describes a campus with digital workstations, science and IT laboratories, a library and a broad sports programme. These are original illustrative graphics, not photographs of the school.</p>
        </Reveal>
        <div className="campus-grid">
          {spaces.map((space, index) => (
            <Reveal key={space.name} delay={index * .08} className={`campus-card ${space.className}`}>
              <img src={space.image} alt="" />
              <div className="campus-label"><div><h3>{space.name}</h3><p>{space.detail}</p></div><span><ArrowUpRight size={17} /></span></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
