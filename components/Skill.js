import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Skill({ name, percent, color, icon: Icon }) {
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
    <div>
      <div className="relative flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          className="transform -rotate-90"
        >
          <circle
            stroke={color}
            strokeWidth="4"
            fill="transparent"
            r="52"
            cx="60"
            cy="60"
            ref={ref}
          ></circle>
        </svg>
        <div className="absolute transform -translate-x-2/4 -translate-y-2/4 top-1/2 left-1/2  text-center">
          <Icon fill={color} />
          <span className="font-semibold text-sm text-gray-500">
            {`${percent}%`}
          </span>
        </div>
      </div>
    </div>
  );
}
