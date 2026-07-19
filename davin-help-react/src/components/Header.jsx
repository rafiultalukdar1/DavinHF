import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";

const NAV_LINKS = [
  { label: "Get Involved", to: "#" },
  { label: "DONATE NOW", to: "/donate" },
  { label: "About US", to: "/about-us" },
  { label: "Contact US", to: "#" },
  { label: "Our Work", to: "#" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="pt-14 md:pt-[56px]">
      <nav className="container mx-auto max-w-[1320px] px-[15px] flex items-center justify-between py-0">
        <Link to="/" className="inline-block">
          <img
            src="/images/davin-help-foundation.png"
            alt="Divine Help Foundation"
            className="w-[100px] sm:w-[130px] md:w-[150px] xl:w-[150px]"
          />
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="lg:hidden text-2xl text-brand-dark"
        >
          <FaBars />
        </button>

        <ul className="hidden lg:flex items-center">
          {NAV_LINKS.map((item, i) => (
            <li
              key={item.label}
              className={`mx-[15.195px] ${i === 0 ? "ml-0" : ""} ${
                i === NAV_LINKS.length - 1 ? "mr-0" : ""
              }`}
            >
              <Link
                to={item.to}
                className="!text-brand-dark font-archivo text-[23px] xl:text-[20px] font-normal uppercase border-b-[3px] border-dashed border-brand-yellow"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile offcanvas menu */}
      <div
        className={`fixed inset-0 z-50 transition-opacity ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-[320px] bg-white shadow-xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img
                src="/images/davin-help-foundation.png"
                alt="Divine Help Foundation"
                className="w-[120px]"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-xl text-brand-dark"
            >
              <FaXmark />
            </button>
          </div>
          <ul className="px-6">
            {NAV_LINKS.map((item) => (
              <li key={item.label} className="text-center">
                <Link
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="!text-brand-dark font-archivo text-[27.533px] font-normal uppercase my-[10px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
