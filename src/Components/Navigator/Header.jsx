import { useEffect, useState } from "react";
import { useTheme } from "../ThemeContext.jsx";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavShape, Navbar } from "../../Data/Data.js";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export default function Header({ activeAos }) {
  const [navHovered, setNavHovered] = useState(false);

  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const [isOnGallery, setIsOnGallery] = useState(false);
  const [isOnTech, setIsOnTech] = useState(false);

  const [scroll, setScroll] = useState(0);
  const maxScroll = 50;
  const offset = 30;
  const dynamicOpacity = (() => {
    const scrolled = scroll - offset;
    if (scrolled <= 0) return 0;
    if (scrolled >= maxScroll) return 1;
    return scrolled / maxScroll;
  })();
  const reverseDynamicOpacity = 1 - dynamicOpacity;

  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
      const footer = document.getElementById("footer");
      const gallery = document.getElementById("gallery");
      const tech = document.getElementById("tech");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight;
        setIsFooterVisible(isVisible);
      }

      if (gallery) {
        const rect = gallery.getBoundingClientRect();
        const isOnGallery =
          rect.top <= window.innerHeight * 0.05 &&
          rect.bottom >= window.innerHeight * 0.05;
        setIsOnGallery(isOnGallery);
      }

      if (tech) {
        const rect = tech.getBoundingClientRect();
        const isOnTech =
          rect.top <= window.innerHeight * 0.05 &&
          rect.bottom >= window.innerHeight * 0.05;
        setIsOnTech(isOnTech);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (activeAos) {
      AOS.init({
        once: true,
        easing: "ease-in-out",
      });
    }
  });

  const baseDuration = 500;
  const stepDuration = 200;
  const lastDuration = baseDuration + (Navbar.length - 1) * stepDuration;

  return (
    <header className={"absolute top-0 left-0 w-full"}>
      <nav>
        <ul className="flex relative justify-between px-9">
          <li className={"z-50"}>
            <div data-aos="fade-down" data-aos-duration={baseDuration}>
              <h1
                style={{ opacity: reverseDynamicOpacity }}
                className={`lg:block lg:scale-80 xl:scale-100 4xl:scale-130 4xl:origin-top-left hidden
                  font-BebasNeue text-[3.9rem] py-1.5 tracking-wider origin-left transition-all duration-500 select-none pointer-events-auto ${isDark ? "text-white" : "text-black"}`}
                title={"Mr Benny Showcase Website"}
              >
                Benny
              </h1>
            </div>
          </li>

          <div
            className={
              "fixed left-1/2 -translate-x-1/2 scale-43 sm:scale-70 md:scale-85 xl:scale-100 4xl:scale-130 z-50"
            }
          >
            <div
              style={{
                opacity: dynamicOpacity,
                width: "659.28px",
                transformOrigin: "top",
                aspectRatio: NavShape.aspectRatio,
                clipPath: `path('${NavShape.path}')`,
              }}
              className={`origin-top fixed justify-center ml-[1px] left-1/2 -translate-x-1/2 transition-all duration-600 ease-in-out backdrop-blur-[3.5px] 
                    ${navHovered ? " scale-97" : " scale-[0.953]"}`}
            />
            <svg
              viewBox={NavShape.viewBox}
              style={{ opacity: dynamicOpacity }}
              className={`origin-top fixed justify-center w-[627px] left-1/2 -translate-x-1/2 drop-shadow-[0_1px_3px] drop-shadow-black transition-all duration-600 ease-in-out fill-transparent stroke-[0.7px] stroke-white brightness-250 saturate-200 -mt-[1px]
                     ${navHovered ? "scale-102" : " "}`}
            >
              <path d={NavShape.path} />
            </svg>
          </div>

          <li className="scale-45 sm:scale-70 md:scale-85 xl:scale-100 4xl:scale-130 origin-top flex fixed left-1/2 -translate-x-1/2 justify-center gap-12 text-4xl tracking-wider font-BebasNeue py-7 z-50">
            {Navbar.map((item, index) => {
              return (
                <div
                  key={item.id}
                  data-aos="fade-down"
                  data-aos-duration={baseDuration + index * stepDuration}
                >
                  <Link
                    to={item.link}
                    spy={true}
                    activeClass={`text-5xl ${isDark ? "!text-[#5b0dff]" : "!text-[#2dd4fe]"}`}
                    smooth={true}
                    hashSpy={true}
                    duration={500}
                    isDynamic={true}
                    className={`transition-all duration-500 cursor-pointer leading-10 ease-in-out select-none pointer-events-auto hover:text-[45px] hover:brightness-200 ${isOnGallery || isOnTech ? "text-[#F1F1F1]" : isDark ? "text-[#F1F1F1]" : "text-black"}`}
                    onMouseEnter={() => setNavHovered(true)}
                    onMouseLeave={() => setNavHovered(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </li>
          <li className={"z-50"}>
            <div
              data-aos="fade-down"
              data-aos-duration={lastDuration + stepDuration}
            >
              <Link
                to="footer"
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={500}
                isDynamic={true}
              >
                <button
                  style={{ opacity: reverseDynamicOpacity }}
                  className={`lg:block lg:scale-85 xl:scale-100 4xl:scale-135 hidden
                    border-3 rounded-full text-2xl font-BebasNeue tracking-widest pt-[10px] pb-[7px] px-5 my-8 origin-top-right duration-500 transition-all cursor-pointer select-none pointer-events-auto ${isDark ? "text-white border-white hover:bg-white hover:text-black" : "text-black border-black hover:bg-black hover:text-white"}`}
                >
                  Contact
                </button>
              </Link>
            </div>
          </li>
        </ul>
        <button
          className={`fixed z-50 bottom-0 -m-3 sm:m-1 md:m-2 2xl:m-4 cursor-pointer focus:outline-none focus:border-none focus:ring-0 transition-all duration-500 ${reverseDynamicOpacity < 0.25 && !isFooterVisible ? "scale-45 sm:scale-65 md:scale-75 2xl:scale-90" : "scale-0 pointer-events-none"}`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={500}
            isDynamic={true}
          >
            <div
              className={`relative rounded-full h-20 w-20 duration-500 transition-colors ${isDark ? "bg-white" : "bg-gray-900"}`}
            >
              <MdOutlineKeyboardArrowUp
                className={`absolute w-15 h-15 m-[9.45px] duration-500 transition-colors ${isDark ? "fill-gray-900" : "fill-white"}`}
              />
            </div>
          </Link>
        </button>
      </nav>
    </header>
  );
}
