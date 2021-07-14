export default function Header() {
  return (
    <nav className="max-h-10 h-10 bg-gray-300 rounded">
      <div className="flex justify-between items-center h-full p-4">
        <div>Home</div>
        <div className="hidden md:block">
          <div>
            <a
              className="transition duration-500 mx-3 px-3 py-2 rounded text-sm hover:bg-gray-400"
              href="#"
            >
              Link #1
            </a>
            <a
              className="transition duration-500 mx-3 px-3 py-2 rounded text-sm hover:bg-gray-400"
              href="#"
            >
              Link #2
            </a>
            <a
              className="transition duration-500 mx-3 px-3 py-2 rounded text-sm hover:bg-gray-400"
              href="#"
            >
              Link #3
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
