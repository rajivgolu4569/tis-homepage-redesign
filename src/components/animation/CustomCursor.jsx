import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-40);
  const y = useMotionValue(-40);
  const springX = useSpring(x, { stiffness: 360, damping: 28, mass: .35 });
  const springY = useSpring(y, { stiffness: 360, damping: 28, mass: .35 });
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener?.("change", update);
    const move = (event) => { x.set(event.clientX); y.set(event.clientY); };
    const over = (event) => setHovering(Boolean(event.target.closest("a, button")));
    if (media.matches) {
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerover", over);
    }
    return () => {
      media.removeEventListener?.("change", update);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div className="custom-cursor" aria-hidden="true"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{ scale: hovering ? 1.65 : 1, opacity: hovering ? .55 : .85 }}
    />
  );
}
