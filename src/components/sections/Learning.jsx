import { Activity, BookOpen, Palette, ArrowUpRight } from "lucide-react";
import { learningAreas } from "../../data/schoolData.js";
import Reveal from "../animation/Reveal.jsx";

const icons = { book: BookOpen, palette: Palette, activity: Activity };

export default function Learning() {
  return (
    <section id="learning" className="section learning-section">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Academics & development</span>
          <h2 className="section-title">Learning for the <i>whole person.</i></h2>
          <p className="muted heading-description">TIS follows the CBSE curriculum and describes its approach as inclusive, collaborative and experiential, with opportunities to develop skills beyond academic study.</p>
        </Reveal>
        <div className="learning-grid">
          {learningAreas.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.number} delay={index * .1} className="learning-card">
                <div className="card-top"><span>{item.number}</span><div className="learning-icon"><Icon size={23} strokeWidth={1.6} /></div></div>
                <h3>{item.title}</h3><p>{item.description}</p>
                <a href="#admissions" aria-label={`Learn more about ${item.title}`}>Discover <ArrowUpRight size={16} /></a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
