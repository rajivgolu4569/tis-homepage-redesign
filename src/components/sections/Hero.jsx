import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="home" className="hero">
      <div className="hero-art" aria-hidden="true"><img src="/images/campus.svg" alt="" /></div>
      <div className="hero-shade" />
      <div className="container hero-inner">
        <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }}>
          <span className="hero-kicker"><Sparkles size={14} /> The Modern Gurukul · Dehradun</span>
          <h1>Rooted in values.<br /><em>Ready for tomorrow.</em></h1>
          <p className="hero-description">A co-educational, residential school where CBSE academics, modern learning and enduring values come together to support each student’s growth.</p>
          <div className="hero-actions">
            <a className="btn-primary" href="#admissions">Explore admissions <ArrowUpRight size={17} /></a>
            <a className="btn-outline" href="#about">Discover TIS</a>
          </div>
        </motion.div>
        <div className="hero-bottom">
          <span>CBSE · Co-educational · Residential</span><a href="#about">Scroll to explore <ArrowDown size={15} /></a>
        </div>
      </div>
      <div className="hero-orb" aria-hidden="true">T</div>
    </section>
  );
}
