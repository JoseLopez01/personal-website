import Link from 'next/link';
import PropTypes from 'prop-types';

export default function LocalLink({ routeName, pathName, passHref, className }) {
  return (
    <Link href={pathName} passHref={passHref}>
      <a className={className}>
        {routeName}
      </a>
    </Link>
  );
}

LocalLink.propTypes = {
  routeName: PropTypes.string.isRequired,
  pathName: PropTypes.string.isRequired,
  passHref: PropTypes.bool,
};

LocalLink.defaultProps = {
  passHref: false,
};
