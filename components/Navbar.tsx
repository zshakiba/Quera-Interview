
const Navbar = () => {
  return (
    <nav className="bg-white hidden md:block p-4 shadow-lg sticky z-10 top-0 mb-8">
      <div className="container mx-auto max-w-screen-2xl flex items-center justify-between">
        <ul className="flex items-center gap-x-0 lg:gap-x-4 text-slate-800 lg:text-lg">
          <li>
            <a
              className="block px-4 py-2  rounded-md ransition-all duration-500"
              href="#"
            >
              <img  src="/logo.svg" alt="" />
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 hover:bg-gray-100 rounded-md transition-all duration-500"
              href="#"
            >
              خانه
            </a>
          </li>
        </ul>
        {/* //<!-- search bar --> */}
        <div className="flex-1 max-w-xl mr-4">
          <div className="bg-gray-100 p-1 rounded-md flex items-center">
            <span className="ml-3 mr-1"></span>
            <input
              type="text"
              placeholder="جستجو..."
              className="focus:outline-none bg-transparent w-full p-2 text-slate-800"
            />
          </div>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
