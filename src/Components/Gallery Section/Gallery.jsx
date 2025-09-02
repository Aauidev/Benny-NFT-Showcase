import {useEffect, useRef, useState} from "react";
import { Application } from "@splinetool/runtime";
import CardFrame from "./CardFrame.jsx";
import { Character } from "/src/Data/Data.js";
import LoadingIcon from "../Widgets/LoadingIcon.jsx";
import RaribleButton from "../Widgets/RaribleButton.jsx";
import OpenSeaButton from "../Widgets/OpenSeaButton.jsx";
import XButton from "../Widgets/XButton.jsx";
import InstagramButton from "../Widgets/InstagramButton.jsx";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleClick(index) {
    setActiveIndex((prev) => (prev === index ? 0 : index));
  }

  function renderCardGroup(start, end, className) {
    return (
      <div
        className={`flex justify-end gap-1 will-change-transform ${className}`}
      >
        {Character.slice(start, end)
          .reverse()
          .map((item) => (
            <CardFrame
              key={item.id}
              backGroundImage={item.cardBackGround}
              characterImage={item.cardCharacterImage}
              isActive={activeIndex === item.id}
              title={item.name}
              color={item.colorCode}
              onClick={() => handleClick(item.id)}
              className={"drop-shadow-sm drop-shadow-black/75"}
            />
          ))}
      </div>
    );
  }

  function renderCharacters(mode) {
    return Character.map((item) => (
      <div key={item.id}>
        {mode === "img" && (
          <img
            src={item.backGround}
            alt={item.name + "'s Background"}
            loading="lazy"
            className={`absolute object-cover h-screen w-screen transition-all duration-500 will-change-transform z-0 ${
              activeIndex === item.id ? "opacity-100" : "opacity-0"
            } `}
          />
        )}

        <div className={"absolute inset-0"}>
          <div className={"relative h-full"}>
            {mode === "name" && (
              <div className={"absolute -rotate-90 z-0"}>
                <div
                  className={`absolute -translate-y-103 -translate-x-75 text-[130px] text-white font-BebasNeue font-bold leading-30 origin-top drop-shadow-black/75 drop-shadow-md select-none duration-500 transition-all will-change-auto z-0 ${activeIndex === item.id ? `${item.textClassName}` : "opacity-0 -mt-60"} `}
                >
                  {item.name}
                </div>
              </div>
            )}

            {mode === "loading" && (
              <LoadingIcon
                className={`absolute duration-500 transition-opacity z-0 ${activeIndex === item.id ? null : "opacity-10"}`}
                color={item.colorCode}
              />
            )}

            {mode === "icons" && (
              <div
                className={
                  "absolute -translate-y-12.5 translate-x-25 drop-shadow-md drop-shadow-black/50 "
                }
              >
                <RaribleButton
                  link={item.raribleUrl}
                  logoColor={"white"}
                  textColor={item.colorCode}
                  bgColor={"#050505"}
                  borderWidth={2}
                  className={`fixed duration-500 transition-all origin-center ${item.id !== 0 ? (activeIndex === item.id ? "z-30 scale-90" : "opacity-0 scale-0 z-0") : "opacity-0 scale-0 z-0"}`}
                />
                <OpenSeaButton
                  link={item.openSeaUrl}
                  textColor={item.colorCode}
                  bgColor={"#050505"}
                  borderWidth={2}
                  className={`fixed mt-22 duration-500 transition-all origin-center ${item.id !== 0 ? (activeIndex === item.id ? "z-30 scale-90" : "opacity-0 scale-0 z-0") : "opacity-0 scale-0 z-0"}`}
                />
                <XButton
                  link={item.XUrl}
                  textColor={item.colorCode}
                  bgColor={"#050505"}
                  borderWidth={2}
                  className={`fixed mt-44 duration-500 transition-all origin-center ${item.id !== 0 ? (activeIndex === item.id ? "z-30 scale-90" : "opacity-0 scale-0 z-0") : "opacity-0 scale-0 z-0"}`}
                />
                <InstagramButton
                  link={item.instagramUrl}
                  textColor={item.colorCode}
                  bgColor={"#050505"}
                  borderWidth={2}
                  className={`fixed mt-66 duration-500 transition-all origin-center ${item.id !== 0 ? (activeIndex === item.id ? "z-30 scale-90" : "opacity-0 scale-0 z-0") : "opacity-0 scale-0 z-0"}`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    ));
  }


  function renderObj(){
    const splineRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
      if (splineRef.current) {
        splineRef.current.dispose();
        splineRef.current = null;
      }

      if (containerRef.current) {
        const oldCanvas = containerRef.current.querySelector("canvas");
        if (oldCanvas) {
          const gl = oldCanvas.getContext("webgl2") || oldCanvas.getContext("webgl");
          if (gl) gl.getExtension("WEBGL_lose_context")?.loseContext();

          oldCanvas.remove();
        }
      }

      const canvas = document.createElement("canvas");
      canvas.className =
        "absolute z-10 duration-500 transition-all origin-bottom will-change-auto w-full h-full";
      containerRef.current.appendChild(canvas);

      const splineInstance = new Application(canvas);
      splineRef.current = splineInstance;

      const sceneURL = Character[activeIndex]?.splineAPI || "";
      splineInstance.load(sceneURL).catch((err) => console.error(err));

      return () => {
        if (splineRef.current) {
          splineRef.current.dispose();
          splineRef.current = null;
        }
        if (containerRef.current) {
          const oldCanvas = containerRef.current.querySelector("canvas");
          if (oldCanvas) {
            const gl = oldCanvas.getContext("webgl2") || oldCanvas.getContext("webgl");
            if (gl) gl.getExtension("WEBGL_lose_context")?.loseContext();

            oldCanvas.remove();
          }
        }
      };
    }, [activeIndex]);

    return (
      <div
        ref={containerRef}
        className="relative w-full h-full z-30 scale-120 lg:scale-100 will-change-transform"
      />
    );
  }

  return (
    <section id="gallery" className={"relative"}>
      <div className={"absolute h-screen w-screen"}>
        {renderCharacters("img")}
      </div>
      <div
        className={
          "absolute w-screen h-screen bg-cover bg-center opacity-15 z-10 bg-[url(/src/assets/BackGrounds/Overlay%20Pattern5.svg)]"
        }
      />
      <div
        className={
          "grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 grid-cols-1 w-screen h-screen"
        }
      >
        <div className={"flex justify-center items-center w-full h-full z-30"}>
          <div
            className={
              "relative w-full h-full z-30 scale-120 lg:scale-100 will-change-transform"
            }
          >
            {renderObj()}
          </div>
          <div
            className={
              "absolute scale-35 mm:scale-50 sm:scale-70 lg:scale-80 2xl:scale-100"
            }
          >
            {renderCharacters("loading")}
          </div>
          <div
            className={
              "absolute z-40 scale-40 mm:scale-45 sm:scale-55 md:scale-60 lg:scale-75 2xl:scale-90 3xl:scale-100"
            }
          >
            {renderCharacters("icons")}
          </div>
          <div
            className={
              "absolute z-20 origin-bottom scale-45 ml:scale-45 sm:scale-55 lg:scale-70 ll:scale-80 3xl:scale-100"
            }
          >
            {renderCharacters("name")}
          </div>
        </div>
        <div className={"flex justify-center items-center"}>
          <div
            className={
              "z-30 scale-45 sm:scale-75 md:scale-90 lg:scale-65 xl:scale-75 2xl:scale-85 3xl:scale-100 4xl:scale-125 5xl:scale-150 will-change-transform"
            }
          >
            {renderCardGroup(1, 4, " ")}
            {renderCardGroup(4, undefined, "mt-15")}
          </div>
        </div>
      </div>
    </section>
  );
}
