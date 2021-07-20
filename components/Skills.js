import React, { useEffect } from 'react';
import Skill from './Skill';

export default function Skills() {
  const percents = [79, 80, 10];

  return (
    <div className="flex justify-around">
      {percents.map((percent, i) => (
        <Skill key={i} percent={percent} />
      ))}
    </div>
  );
}
