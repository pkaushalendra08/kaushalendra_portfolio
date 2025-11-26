"use client";

import React, { useRef, useState } from "react";

export const TiltOnTouch = ({ children, maxTilt = 12 }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleTouchMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const touch = e.touches[0];
    const rect = card.getBoundingClientRect();

    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    const rotateY = percentX * maxTilt;
    const rotateX = -percentY * maxTilt;

    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: "transform 50ms linear",
    });
  };

  const handleTouchEnd = () => {
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg)",
      transition: "transform 200ms ease-out",
    });
  };

  return (
    <div
      ref={cardRef}
      style={style}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      className="sm:hidden"
    >
      {children}
    </div>
  );
};
