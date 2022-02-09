import React from 'react';
import Image from 'next/image';

function MyIcon() {
  return (
    <div className="flex items-center">
      <Image src="/icons/icon.svg" height="40" width="40" alt="My Logo" />
      <span className="text-xl font-bold ml-2">Jose Lopez</span>
    </div>
  );
}

export default MyIcon;
