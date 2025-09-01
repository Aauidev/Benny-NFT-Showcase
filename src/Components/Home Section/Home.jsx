import { useState } from "react";

import { useTheme } from "../ThemeContext.jsx";
import ToggleButton from "./ToggleButton.jsx";
import Spline from "@splinetool/react-spline";
import LoadingIcon from "../Widgets/LoadingIcon.jsx";

import DarkBackground from "/DarkBackground.svg"
import LightBackground from "/BackGround.svg"

export default function Home({ loadState }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className={"flex justify-center items-center relative h-screen w-screen"}
    >
      <img
        src={DarkBackground}
        alt="DarkBackGround"
        className={`absolute h-screen w-screen object-cover transition-opacity duration-500 ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src={LightBackground}
        alt="LightBackGround"
        className={`absolute h-screen w-screen object-cover transition-opacity duration-500 ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
      />
      <Spline
        scene="https://prod.spline.design/0ufvacvj9yiGhoJ3/scene.splinecode"
        className={"max-h-140 sm:max-h-200 md:max-h-max z-10"}
        onLoad={() => {
          loadState(true);
          setIsLoaded(true);
        }}
      />
      <LoadingIcon
        className={`absolute pb-30 scale-50 sm:scale-70 3xl:scale-100 transition-opacity ${isLoaded ? "opacity-0" : "opacity-100"}`}
        color={isDark ? "white" : "black"}
      />
      <ToggleButton
        className={
          "absolute scale-35 mr-[10rem] sm:scale-70 sm:mr-[19rem] lg:mr-[17rem] 2xl:scale-75 2xl:mr-[20rem] 3xl:scale-100 3xl:mr-[25rem] top-1/3 mt-15 -translate-y-1/2 z-30"
        }
      />
      <h1
        className={`scale-44 sm:scale-80 md:scale-95 lg:left-1/2 lg:translate-y-1/1 lg:origin-left lg:opacity-100 lg:scale-50 lg:m-20 xl:scale-65 2xl:ml-25 2xl:scale-80 3xl:scale-100 3xl:pt-10
          absolute bottom-1/2 translate-y-2/3 opacity-75 font-BebasNeue leading-50 select-none text-[12rem] transition-colors duration-500 ${isDark ? "text-white" : "text-[#121212]"}`}
      >
        SHOWCASE
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WEBSITE
      </h1>
    </section>
  );
}
