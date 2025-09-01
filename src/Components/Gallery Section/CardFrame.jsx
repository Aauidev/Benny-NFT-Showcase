import { useState } from "react";

export default function CardFrame({
  className,
  backGroundImage,
  characterImage,
  title,
  isActive,
  onClick,
  color,
}) {
  const [isHovered, setHovered] = useState(false);
  return (
    <div className={className}>
      <div
        onClick={onClick}
        className={`relative w-40 h-48 outline-3 outline-white bg-transparent rounded-t-2xl brightness-85 saturate-85 hover:saturate-100 hover:brightness-100 transition-all duration-500 ease-initial origin-bottom will-change-transform select-none
        ${isActive ? "scale-110 -translate-y-[0.5px] mx-[7px] saturate-110 brightness-102" : null}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={"pointer-events-none will-change-transform"}>
          <img
            src={backGroundImage}
            alt={title + " Back Ground"}
            className={"rounded-t-2xl"}
          />
          <img
            src={characterImage}
            alt={title}
            className={
              "absolute top-0 scale-155 drop-shadow-sm drop-shadow-black/75"
            }
          />
        </div>
        <div
          className={
            "absolute w-41 -ml-[1px] h-9 bg-white -bottom-[2px] font-BebasNeue text-[1.6rem] text-center pt-[1.5px] will-change-transform"
          }
        />
        <div
          style={{
            "--color": color,
          }}
          className={`absolute w-[166px] h-[27px] bottom-0 translate-y-[3px] -translate-x-[3px] bg-gradient-to-t from-[var(--color)] to-transparent duration-500 transition-all ${!isHovered ? "opacity-0" : "opacity-50"}`}
        />
        <div
          className={
            "absolute w-40 h-9 -bottom-[2px] font-BebasNeue text-[1.6rem] text-center pt-[1.5px]"
          }
        >
          {title}
        </div>
      </div>
    </div>
  );
}
