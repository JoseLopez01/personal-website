import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function Skill({ percent }) {
  const ref = useRef(null);

  useEffect(() => {
    const circle = ref.current;
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
    circle.style.strokeDashoffset =
      circumference - (percent / 100) * circumference;
  }, [percent]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
    >
      <circle
        stroke="black"
        strokeWidth="4"
        fill="transparent"
        r="52"
        cx="60"
        cy="60"
        ref={ref}
        rotate="-90deg"
      >
      </circle>
      <text stroke="black" strokeWidth="1" x="50%" y="50%" textAnchor="middle">
        { percent }
      </text>
    </svg>
  );
}
