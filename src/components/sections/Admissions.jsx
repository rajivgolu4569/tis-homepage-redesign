import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Reveal from "../animation/Reveal.jsx";

export default function Admissions() {
  return (
    <section id="admissions" className="admissions-section">
      <div className="container">
        <Reveal className="admissions-panel">
          <div className="admissions-decoration" aria-hidden="true">T</div>
          <div className="admissions-copy">
            <span className="eyebrow">Admissions · Grades IV–XII</span>
            <h2>Begin your journey<br /><i>at Tula’s.</i></h2>
            <p>TIS publishes its admissions process, eligibility information and application details on its official website. Visit the admissions page for current dates, requirements and availability.</p>
            <a className="btn-primary" href="https://tis.edu.in/boarding-school/admission-open/" target="_blank" rel="noreferrer">View admissions information <ArrowUpRight size={17} /></a>
          </div>
          <div className="admissions-aside"><CheckCircle2 size={19} /><span>Co-educational<br />residential school</span></div>
        </Reveal>
      </div>
    </section>
  );
}
