import { useState } from "react";

export default function RaribleButton({
  className,
  hoverClass,
  link,
  textColor,
  bgColor,
  logoColor,
  borderWidth,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={className}>
      <div
        className={
          "relative w-20 h-20 m-2 rounded-2xl transition-all duration-500 " +
          hoverClass
        }
      >
        <svg
          style={{
            fill: logoColor || "black",
          }}
          className={`absolute duration-500 transition-all  origin-center top-1/2 -translate-y-1/2 z-10 pointer-events-none ${isHovered ? "opacity-0 scale-0" : "scale-60"}`}
          viewBox="0 0 750.1 533.1"
        >
          <path
            d="M1029,748.1c13.4,4.5,25.4,9.6,36.4,16.9,29.9,19.5,48.4,47,55.5,81.7a193.5,193.5,0,0,1,3.9,37.9c.5,42.4.1,84.7.3,127.1,0,3.8-1,4.8-4.8,4.8q-103.5-.2-206.9,0c-3.8,0-4.8-1-4.8-4.8.2-39.9.3-79.7,0-119.6a88.5,88.5,0,0,0-2.6-21.8c-5.1-19.5-19.2-29.1-38.1-32.5a116.1,116.1,0,0,0-21.2-1.9H597.1c-5.8,0-5.8,0-5.8,6v169.4c0,5.2,0,5.3-5.4,5.3H380.5c-5.6,0-5.6-.1-5.6-5.5V488.9c0-5.4,0-5.4,5.5-5.4q261.5,0,522.9.1c35.8.1,71.3,3.5,106.1,12.7,19.9,5.2,38.8,12.9,55.9,24.8,28.1,19.5,44,46.7,49.1,80.3,3.5,23,3.7,45.8-2.9,68.3-10.4,35.9-33.9,59.8-68.3,73.4C1038.8,744.9,1034.3,746.3,1029,748.1ZM729.9,640.3H595.8c-3.7,0-4.6,1-4.6,4.6.2,13.9.1,27.8.1,41.6,0,5.1,0,5.1,5.1,5.1H852.7a143.9,143.9,0,0,0,22.7-1.9c12.5-2.1,19.4-9.8,19.8-21.3.6-14.3-4.7-22.4-17.9-25.3a109.3,109.3,0,0,0-24.2-2.5C812.1,640.2,771,640.3,729.9,640.3Z"
            transform="translate(-374.9 -483.5)"
          />
        </svg>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button
            style={{
              backgroundColor: bgColor,
              borderColor: textColor,
              borderWidth: borderWidth || 0,
            }}
            className={`absolute h-20 rounded-2xl overflow-hidden border-[#f6d303] cursor-pointer duration-500 transition-all will-change-transform ${isHovered ? "w-50 bg-[#171719]" : "w-20 bg-[#f6d303]"}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            <div
              style={{
                color: textColor,
              }}
              className={`text-[#f6d503] text-3xl pt-1 transition-all duration-500 will-change-transform select-none ${isHovered ? null : "opacity-0 scale-0"}`}
            >
              Rarible
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}
