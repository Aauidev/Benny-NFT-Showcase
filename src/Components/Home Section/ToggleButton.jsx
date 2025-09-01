import { useTheme } from "../ThemeContext.jsx";
import { RiFlashlightFill, RiMoonFill } from "react-icons/ri";

export default function ToggleButton({ className }) {
  const { isDark, setIsDark } = useTheme();

  return (
    <button className={className}>
      <div
        className={`scale-80 border-7 w-50 h-150 rounded-full backdrop-blur-sm transition-colors duration-500 focus:outline-none ${isDark ? "border-white" : "border-[#121212]"}`}
      >
        <div
          className={`w-41 h-41 rounded-full border-7 mx-[10px] transition-all duration-500 ease-in-out cursor-pointer ${!isDark ? "my-3.5 border-[#121212]" : "my-102 rotate-360 border-white"}`}
          onClick={() => setIsDark((prev) => !prev)}
        >
          <div className={"relative"}>
            <RiFlashlightFill
              className={`absolute m-4 w-30 h-30 transition-all duration-500 z-20 fill-[#121212] ${isDark ? "scale-0 opacity-0" : null}`}
            />
            <RiMoonFill
              className={`absolute m-4 w-30 h-30 transition-all duration-500 z-20 fill-white ${!isDark ? "scale-0 opacity-0" : null}`}
            />
          </div>
        </div>
      </div>
    </button>
  );
}
