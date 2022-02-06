import React from 'react';

function MenuIcon({ handleOnOpen }) {
  return (
    <div className="lg:hidden">
      <button className="text-5xl" onClick={handleOnOpen}>
        <i className="uil uil-bars"></i>
      </button>
    </div>
  );
}

export default MenuIcon;
