import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <a className="brand brand-light" href="#home">
            <span className="brand-mark">T</span>
            <span className="brand-copy"><strong>TULAS</strong><small>INTERNATIONAL SCHOOL</small></span>
          </a>
          <p>A co-educational, residential CBSE school in Dehradun, Uttarakhand.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <a href="#about">Our Story</a><a href="#learning">Learning</a><a href="#campus">Campus Life</a><a href="#admissions">Admissions</a>
        </div>
        <div>
          <h3>Connect</h3>
          <a href="https://tis.edu.in/" target="_blank" rel="noreferrer">Official website <ArrowUpRight size={14} /></a>
          <span className="footer-note"><MapPin size={15} /> Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun, Uttarakhand 248011</span>
          <a href="mailto:info@tis.edu.in"><Mail size={15} /> info@tis.edu.in</a>
          <a href="tel:+919837983791">Admissions: +91 98379 83791</a>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Tulas International School — redesign assessment</span><a href="#home">Back to top ↑</a></div>
    </footer>
  );
}
