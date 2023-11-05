import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// icons
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRotation = isOpen
    ? 'rotate-90 transition-all z-1 duration-3000'
    : '';

  return (
    <nav className="flex items-center justify-between px-5 relative  border-b-2 border-black rounded-t-3xl bg-white py-2 shadow-md">
      <div className="h-8 w-16"></div>
      <div className="hidden md:block">
        <ul className="flex gap-3 text-black ">
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'border-b-[2px] chicago border-gray-950 pb-1 transition-all duration-3000 '
                  : 'text-gray-950 chicago'
              }
            >
              My Project
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'border-b-[2px] chicago border-gray-950 pb-1 transition-all duration-3000 '
                  : 'text-gray-950 chicago '
              }
            >
              My profils
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'border-b-[2px] border-gray-950 pb-1 transition-all duration-3000 '
                  : 'text-gray-950 chicago'
              }
            >
              Social
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-3">
        <div>
          <Menu
            strokeWidth={1.25}
            className={`${menuRotation} ml-4 h-8 w-8 transform cursor-pointer md:hidden`}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div
          className={
            !isOpen
              ? 'absolute hidden left-0 top-10 w-full -translate-y-full  bg-pmarine-950  text-center duration-1000 md:hidden '
              : 'absolute left-0 top-3 w-full bg-pmarine-950 text-center  duration-10000 md:hidden '
          }
        >
          <Menu
            strokeWidth={1.25}
            className={` ${menuRotation} ml-auto h-8 w-8 cursor-pointer text-gray-50 `}
            onClick={() => setIsOpen(!isOpen)}
          />
          <ul className="flex flex-col  ">
            <li className="border-t-2 border-black chicago bg-white">
              <NavLink
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? 'text-porange-600 transition-all duration-3000'
                    : 'text-black '
                }
              >
                My Project
              </NavLink>
            </li>
            <li className="border-t-2 border-black chicago bg-white">
              <NavLink
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? 'text-porange-600 transition-all duration-3000'
                    : 'text-black '
                }
              >
                My profils
              </NavLink>
            </li>
            <li className="border-t-2 border-black chicago bg-white">
              <NavLink
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? 'text-porange-600 transition-all duration-3000'
                    : 'text-black '
                }
              >
                Social link
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
