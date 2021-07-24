import PropTypes from 'prop-types';

import Image from 'next/image';

export default function IconLink({ iconSrc, className, href }) {
  return (
    <a className={className} href={href} target="_blank">
      <Image src={iconSrc} height={20} width={20} />
    </a>
  );
}

IconLink.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
