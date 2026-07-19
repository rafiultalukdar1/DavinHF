import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <a
      href="#top"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="scrolltotop fixed right-[30px] bottom-[25px] z-10 w-[42px] h-[42px] rounded-full bg-black text-white flex items-center justify-center transition-all duration-300"
    >
      <FaArrowUp className="text-[16px]" />
      <span className="pulse-ring absolute inset-0 -z-10" />
    </a>
  );
}
