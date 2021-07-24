import Link from 'next/link';
import PropTypes from 'prop-types';

export default function LocalLink({
  routeName,
  pathName,
  className,
  onClick
}) {
  return <a className={className} href={pathName} onClick={onClick}>{routeName}</a>;
}

LocalLink.propTypes = {
  routeName: PropTypes.string.isRequired,
  pathName: PropTypes.string.isRequired,
  passHref: PropTypes.bool,
};