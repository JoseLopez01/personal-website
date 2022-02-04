import Link from 'next/link';
import PropTypes from 'prop-types';

export default function LocalLink({ routeName, pathName, className, onClick }) {
  return (
    <a href={pathName} onClick={onClick}>
      <button className={className}>{routeName}</button>
    </a>
  );
}

LocalLink.propTypes = {
  routeName: PropTypes.string.isRequired,
  pathName: PropTypes.string.isRequired,
  passHref: PropTypes.bool,
};
