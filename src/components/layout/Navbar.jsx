import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "../../data/schoolData.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-wrap container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Tulas International School home">
          <span className="brand-mark">T</span>
          <span className="brand-copy"><strong>TULAS</strong><small>INTERNATIONAL SCHOOL</small></span>
        </a>
        <div className="desktop-links">
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          <a className="nav-cta" href="#admissions">Admissions <ArrowUpRight size={15} /></a>
        </div>
        <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>
      {open && (
        <div className="mobile-menu">
          {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
          <a href="#admissions" onClick={() => setOpen(false)}>Admissions <ArrowUpRight size={15} /></a>
        </div>
      )}
    </header>
  );
}
