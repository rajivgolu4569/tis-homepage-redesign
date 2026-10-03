import { ArrowUpRight } from "lucide-react";
import Reveal from "../animation/Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <Reveal direction="left" className="about-visual">
          <img src="/images/learning.svg" alt="Illustration of students learning together" />
          <div className="visual-caption"><span className="caption-dot" /> Learning that reaches beyond the classroom</div>
        </Reveal>
        <Reveal direction="right" className="about-copy">
          <span className="eyebrow">Our story</span>
          <h2 className="section-title">The Modern <i>Gurukul.</i></h2>
          <p className="muted">Established in 2012, Tula’s International School is a co-educational residential school in Dehradun, Uttarakhand. Its Modern Gurukul approach brings together contemporary education and enduring values.</p>
          <p className="muted">TIS aims to support academic progress alongside students’ personal, social, creative and physical development, helping them grow into responsible and independent learners.</p>
          <a className="text-link" href="https://tis.edu.in/" target="_blank" rel="noreferrer">Explore the official TIS website <ArrowUpRight size={17} /></a>
        </Reveal>
      </div>
    </section>
  );
}
