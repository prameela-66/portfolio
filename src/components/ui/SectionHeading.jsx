import React from "react";
import { Reveal } from "./motion.jsx";

export default function SectionHeading({
  title,
  accent,
  description,
  align = "center",
  className = "",
}) {
  const alignClass = align === "left" ? "text-left" : "text-center";

  return (
    <Reveal className={`${alignClass} ${className}`}>
      <h2 className="h2">
        {title}{" "}
        {accent ? (
          <span className="text-gradient">{accent}</span>
        ) : null}
      </h2>
      {description ? <p className="subhead mt-5 mx-auto max-w-2xl">{description}</p> : null}
      <div className="mt-8 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </Reveal>
  );
}

