import React from 'react';

const SOCIAl = [
  {
    icon: 'uil-twitter',
    link: 'https://twitter.com/im_el_joe',
    label: 'Twitter profile',
  },
  {
    icon: 'uil-medium-m',
    link: 'https://medium.com/@lopezarizajosealejandro',
    label: 'Medium profile',
  },
  {
    icon: 'uil-linkedin',
    link: 'https://www.linkedin.com/in/jos%C3%A9-alejandro-b1836b1a9/',
    label: 'Linkedin profile',
  },
  {
    icon: 'uil-github',
    link: 'https://github.com/JoseLopez01',
    label: 'Github profile',
  },
];

function Social({ light }) {
  return (
    <>
      {SOCIAl.map((social) => (
        <a href={social.link} target="_blank">
          <button
            className={`text-3xl ${light ? 'text-black' : 'text-white'}`}
            aria-label={social.label}
            type="button"
          >
            <i className={`ui ${social.icon}`}></i>
          </button>
        </a>
      ))}
    </>
  );
}

export default Social;
