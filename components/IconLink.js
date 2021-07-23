import Image from 'next/image';
import Link from 'next/link';

export default function IconLink({ iconSrc, className }) {
  return (
    <Link href="/">
      <a className={className}>
        <Image src={iconSrc} height={20} width={20} />
      </a>
    </Link>
  );
}
