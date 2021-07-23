import Link from 'next/link';
import PropTypes from 'prop-types';

export default function LocalLink({ routeName, pathName, passHref }) {
  return (
    <Link href={pathName} passHref={passHref}>
      <a className="transition duration-500 mx-3 px-3 py-2 rounded text-sm hover:bg-gray-200 font-bold">
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
