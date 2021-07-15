import Link from 'next/link';

export default function Header() {
  return (
    <nav className="max-h-10 h-10 bg-gray-300 md:rounded">
      <div className="flex justify-between items-center h-full px-4">
        <div>Home</div>
        <div className="hidden md:block">
          <div>
            <Link
              href="/"
            >
              <a className="transition duration-500 mx-3 px-3 py-2 rounded text-sm hover:bg-gray-400">
                Home
              </a>
            </Link>
            <Link
              href="/work"
            >
              <a className="transition duration-500 mx-3 px-3 py-2 rounded text-sm hover:bg-gray-400">
                Work
              </a>
            </Link>
            <Link
              href="/"
            >
              <a className="transition duration-500 mx-3 px-3 py-2 rounded text-sm hover:bg-gray-400">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
