import React from "react";
import "./ButtonLink.css";

export default function ButtonLink({label, link, className, onMouseEnter, onMouseLeave}) {
  return (
    <a
      href={link}
      target="_blank"
      className={`cta-btn ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span class="hover-frame" data-num="1"></span>
      <span class="hover-frame" data-num="2"></span>
      {label}
    </a>
  );
}
