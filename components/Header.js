import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const router = useRouter();

  /**
   * TODO:
   *
   * - [] Create a new component for Links
   * - [] Create a nwe component for Image Icons
   * - [] Add responsive new navBar
   */
  return (
    <nav className="max-h-10 h-10 md:rounded">
      <div className="flex justify-between items-center h-full px-4">
        <div className="font-bold">JL</div>
        <div className="hidden md:block">
          <div>
            <Link href="/">
              <a
                className={`transition duration-500 mx-3 px-3 py-2 rounded text-sm hover:bg-gray-200 font-bold ${
                  router.pathname === '/' ? 'bg-gray-200' : ''
                }`}
              >
                Home
              </a>
            </Link>
            <Link href="/work">
              <a
                className={`transition duration-500 mx-3 px-3 py-2 rounded text-sm hover:bg-gray-200 font-bold ${
                  router.pathname === '/work' ? 'bg-gray-200' : ''
                }`}
              >
                Work
              </a>
            </Link>
            <Link href="/">
              <a
                className={`transition duration-500 mx-3 px-3 py-2 rounded text-sm hover:bg-gray-200 font-bold ${
                  router.pathname === '/contact' ? 'bg-gray-200' : ''
                }`}
              >
                Contact
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <Link href="/">
            <a className="mx-3 text-gray-400 twitter">
              <Image src="/icons/twitter.svg" height={20} width={20} />
            </a>
          </Link>
          <Link href="/">
            <a className="mx-3 text-gray-400">
              <Image src="/icons/github.svg" height={20} width={20} />
            </a>
          </Link>
          <Link href="/">
            <a className="mx-3 text-gray-400">
              <Image src="/icons/linkedin.svg" height={20} width={20} />
            </a>
          </Link>
          <Link href="/">
            <a className="mx-3 text-gray-400">
              <Image src="/icons/instagram.svg" height={20} width={20} />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
