import React from 'react';

const SOCIAl = [
  {
    icon: 'uil-twitter',
    link: 'https://twitter.com/im_el_joe',
  },
  {
    icon: 'uil-medium-m',
    link: 'https://medium.com/@lopezarizajosealejandro',
  },
  {
    icon: 'uil-linkedin',
    link: 'https://www.linkedin.com/in/jos%C3%A9-alejandro-b1836b1a9/',
  },
  {
    icon: 'uil-github',
    link: 'https://github.com/JoseLopez01',
  },
];

function Social({ light }) {
  return (
    <>
      {SOCIAl.map((social) => (
        <a href={social.link} target="_blank">
          <button className={`text-3xl ${light ? 'text-black' : 'text-white'}`}>
            <i className={`ui ${social.icon}`}></i>
          </button>
        </a>
      ))}
    </>
  );
}

export default Social;
