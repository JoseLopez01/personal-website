import Image from 'next/image';
import Link from 'next/link';

export default function IconLink({ iconSrc }) {
  return (
    <Link href="/">
      <a className="mx-3 text-gray-400">
        <Image src={iconSrc} height={20} width={20} />
      </a>
    </Link>
  );
}
