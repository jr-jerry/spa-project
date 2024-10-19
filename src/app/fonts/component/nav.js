'use client';
export default function Navbar() {
  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full z-10 flex justify-between px-4 py-2">
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl font-bold text-white">Chloro</h1>
      </div>
      <div className="flex items-center space-x-4">
        <ul className="flex space-x-4 mx-auto">
          <li>
            <a href="#" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              About
            </a>
          </li>
          <li className="dropdown relative group">
            <button type="button" className="text-white">
              Services
            </button>
            <ul className="dropdown-menu absolute hidden group-hover:block bg-white p-4 m-2">
              <li>
                <a href="#" className="block px-4 py-2 text-black">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-black">
                  Services Detail
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown relative group">
            <button type="button" className="text-white">
              Pages
            </button>
            <ul className="dropdown-menu absolute hidden group-hover:block bg-white p-4 m-2">
              <li>
                <a href="#" className="block px-4 py-2 text-black">
                  Page 1
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-black">
                  Page 2
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-black">
                  Page 3
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-black">
                  Page 4
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-black">
                  Page 5
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-black">
                  Page 6
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-black">
                  Page 7
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-black">
                  Page 8
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="text-white">
              Contacts
            </a>
          </li>
        </ul>
        <div className="nav-rigth-item"></div>
        <button className="px-4 py-2 rounded-md bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="px-4 py-2 rounded-md bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

