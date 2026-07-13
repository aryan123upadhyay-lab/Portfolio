import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseEnter = () => setHover(true);
    const mouseLeave = () => setHover(false);

    window.addEventListener("mousemove", moveCursor);

    const elements = document.querySelectorAll("a, button");

    elements.forEach((el) => {
      el.addEventListener("mouseenter", mouseEnter);
      el.addEventListener("mouseleave", mouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", mouseEnter);
        el.removeEventListener("mouseleave", mouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Outer Glow */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: position.x,
          top: position.y,
          width: hover ? "70px" : "45px",
          height: hover ? "70px" : "45px",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(168,85,247,.45) 0%, rgba(168,85,247,.15) 55%, transparent 100%)",
          filter: "blur(10px)",
          transition:
            "width .2s ease,height .2s ease,left .05s linear,top .05s linear",
        }}
      />

      {/* Center Dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: position.x,
          top: position.y,
          width: hover ? "14px" : "10px",
          height: hover ? "14px" : "10px",
          transform: "translate(-50%, -50%)",
          background: "#c084fc",
          boxShadow:
            "0 0 10px #c084fc,0 0 25px #a855f7,0 0 45px #7e22ce",
          transition:
            "width .2s ease,height .2s ease,left .05s linear,top .05s linear",
        }}
      />
    </>
  );
}