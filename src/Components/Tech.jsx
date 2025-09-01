import { TechSlide } from "/src/Data/Data.js";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectCoverflow,
  Autoplay,
  Keyboard,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { useState } from "react";

export default function Tech() {
  const [activeName, setActiveName] = useState(TechSlide[0].name);
  const [activeColor, setActiveColor] = useState(TechSlide[0].color);

  const name = activeName.replace(/\s+/g, "").toUpperCase() + "/";
  const nameLine = name.repeat(20);

  return (
    <section
      id="tech"
      className={"flex flex-row justify-between bg-[#0B0B0B] w-screen h-full"}
    >
      <div
        style={{
          color: activeColor,
          transition: "color 300ms ease-in-out",
        }}
        className={`mm:text-2xl ml:text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl 3xl:text-8xl
         absolute select-none py-1 sm:py-3 lg:py-4 font-Doto will-change-auto z-0`}
      >
        <div className={"marquee-right"}>
          <span className={"opacity-90"}>{nameLine}</span>
          <span className={"opacity-90"}>{nameLine}</span>
          <br />
          <span className={"opacity-75"}>{nameLine}</span>
          <span className={"opacity-75"}>{nameLine}</span>
        </div>
        <div className={"marquee-left"}>
          <span className={"opacity-60"}>{nameLine}</span>
          <span className={"opacity-60"}>{nameLine}</span>
          <br />
          <span className={"opacity-45"}>{nameLine}</span>
          <span className={"opacity-45"}>{nameLine}</span>
        </div>
        <div className={"marquee-right"}>
          <span className={"opacity-30"}>{nameLine}</span>
          <span className={"opacity-30"}>{nameLine}</span>
          <br />
          <span className={"opacity-15"}>{nameLine}</span>
          <span className={"opacity-15"}>{nameLine}</span>
        </div>
        <div className={"marquee-left"}>
          <span className={"opacity-5"}>{nameLine}</span>
          <span className={"opacity-5"}>{nameLine}</span>
          <br />
          <span className={"opacity-2"}>{nameLine}</span>
          <span className={"opacity-2"}>{nameLine}</span>
        </div>
      </div>

      <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        navigation={true}
        onSlideChange={(swiper) => {
          const realIndex = swiper.realIndex;
          setActiveName(TechSlide[realIndex].name);
          setActiveColor(TechSlide[realIndex].color);
        }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 1 },
        }}
        autoplay={{
          delay: 5000,
        }}
        keyboard={true}
        modules={[EffectCoverflow, Navigation, Autoplay, Keyboard]}
        className={"mySwiper"}
      >
        {TechSlide.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              style={{
                "--shadow-color": item.color,
              }}
              className={`h-14 mm:h-20 sm:h-27 md:h-31 xl:h-42 2xl:h-50 3xl:h-65
              mt-[25%] sm:mt-[21%] md:mt-[20%] lg:mt-[45%] xl:mt-[35%] 3xl:mt-60 aspect-square select-none`}
            />
            <div
              className={`[zoom:0.35] mm:[zoom:0.45] ml:[zoom:0.5] sm:[zoom:0.65] md:[zoom:0.7] lg:[zoom:0.6] xl:[zoom:0.75] 2xl:[zoom:0.75] 3xl:[zoom:1] ml-7 -mt-18 mm:-mt-10 sm:mt-0 xl:-mt-2 2xl:mt-0
              mb-[10%] md:mb-[13%] lg:mb-[15%] 3xl:mb-30 w-150 flex-col text-center content-center -translate-x-3 text-white drop-shadow-xl drop-shadow-black select-none will-change-auto`}
            >
              <p className={"text-6xl font-BebasNeue font-bold tracking-wider"}>
                {item.name}
              </p>
              <p
                style={{
                  textAlign: "justify",
                  textAlignLast: "center",
                }}
                className={"text-xl mt-3"}
              >
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
