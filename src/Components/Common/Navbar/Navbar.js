import { NavLink } from "react-router-dom";
import logo from "../../../Assets/logo.webp";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const navToggle = () => {
    document.getElementById("nav-responsive").classList.toggle("-left-[1px]")
  };
  return (
    <>
      <nav className="sticky top-0 w-full py-1 flex justify-between bg-white border leading-[92px]">
        <div className="my-auto mx-1">
          <NavLink to='/'><img src={logo} alt="Logo"  className="cursor-pointer"/></NavLink>
        </div>
        <span className="hidden text-3xl my-auto px-2 max-[778px]:block">
          <GiHamburgerMenu onClick={navToggle} />
        </span>
        <ul className="flex gap-5 py-auto pr-4 max-[778px]:hidden">
          <li>
            <NavLink to='/about' className="cursor-pointer font-semibold text-[17px]">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/wherewework' className="cursor-pointer font-semibold text-[17px]">
              Where We Work
            </NavLink>
          </li>
          <li>
            <NavLink to='/contactus' className="cursor-pointer font-semibold text-[17px]">
              Contact Us
            </NavLink>
          </li>
          <li>
            <button className="leading-none text-black border-2 font-Why font-extralight border-gray-900 px-12 py-3 hover:bg-[#0C1D39] hover:text-white">
              Get Involved
            </button>
          </li>
        </ul>
      </nav>


      {/* nav toggle start */}
      <ul id="nav-responsive" className="hidden max-[778px]:block duration-500 pl-8 pt-10 w-2/3 h-screen fixed z-50 top-0 -left-[100%] bg-[#0C1D39] text-white">
        <li className="leading-10">
          <NavLink to='/about' className=" cursor-pointer font-semibold text-[17px]">
            About
          </NavLink>
        </li>
        <hr className="w-3/4 bg-white" />
        <li className="leading-10">
          <NavLink to='/wherewework' className=" cursor-pointer font-semibold text-[17px]">
            Where We Work
          </NavLink>
        </li>
        <hr className="w-3/4 bg-white" />
        <li className="leading-10">
          <NavLink to='/contactus' className=" cursor-pointer font-semibold text-[17px]">
            Contact Us
          </NavLink>
        </li>
        <hr className="w-3/4 bg-white" />
        <li className="leading-10">
          <NavLink className=" cursor-pointer font-semibold text-[17px]">Get Involved</NavLink>
        </li>
        <hr className="w-3/4 bg-white" />
      </ul>
      {/* nav toggle ended */}
    </>
  );
}

export default Navbar;
