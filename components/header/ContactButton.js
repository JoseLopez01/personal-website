import React from 'react';

function ContactButton() {
  return (
    <a href="#contact">
      <button className="hidden lg:block px-2 py-1 text-sm rounded border border-gray-500 text-gray-700 hover:bg-black hover:text-white transition duration-200">
        Let's get in touch
        <i className="uil uil-arrow-right ml-1"></i>
      </button>
    </a>
  );
}

export default ContactButton;
