import { useState } from "react";

export default function LinkedinButton({
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
            fill: logoColor || "white",
          }}
          className={`absolute duration-500 transition-all  origin-center top-1/2 -translate-y-1/2 z-10 pointer-events-none ${isHovered ? "opacity-0 scale-0" : "scale-55"}`}
          viewBox="0 0 748.7 748.8"
        >
          <path
            d="M785.2,619.2c15.8-23.8,34.9-42.1,58.2-55.9a170.5,170.5,0,0,1,68.7-22.9c38.8-4.1,76.3.5,111.5,17.7,40.9,19.9,66.6,53.1,80.8,95.7a226.9,226.9,0,0,1,11.3,60.7c.4,10.7.9,21.5.9,32.2q.2,149.8.1,299.6c0,7.5,0,7.5-7.3,7.5H968.5c-6.9,0-7,0-7-7q0-125.5.1-251.1c0-19.2-.9-38.3-6.4-56.9-7.1-23.6-19.7-42.7-43.5-52.4-13.9-5.7-28.5-6.4-43.1-5.4-23.2,1.7-43.5,9.9-58.9,28.1-11.9,14-18.5,30.4-21.4,48.3a240.7,240.7,0,0,0-3,35q-.3,126.9-.1,253.6c0,7.8,0,7.8-7.5,7.8H642.3c-4.9,0-6.6-1-6.6-6.3q.1-243.6,0-487c0-5.1,1.3-6.7,6.5-6.7H778.6c6.6,0,6.6,0,6.6,6.8Z"
            transform="translate(-367.9 -305.2)"
          />
          <path
            d="M538.6,804.3v242c0,7.5,0,7.5-7.3,7.5H389.9c-7.2,0-7.3,0-7.3-7.2V563.8c0-2.1-.4-4.3.3-6.1s2.2-2.8,3.7-3.6,2.6-.1,4-.1H530.5c8.1,0,8.1,0,8.1,7.9Z"
            transform="translate(-367.9 -305.2)"
          />
          <path
            d="M551.8,398.2c.1,47.2-37.2,92.2-92.1,92.2s-92.2-44.4-91.8-93.6a92.4,92.4,0,0,1,92.7-91.6C511.1,305.2,551.8,346.8,551.8,398.2Z"
            transform="translate(-367.9 -305.2)"
          />
        </svg>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button
            style={{
              backgroundColor: bgColor,
              borderColor: textColor,
              borderWidth: borderWidth || 2,
            }}
            className={`absolute h-20 rounded-2xl overflow-hidden border-[#0266c8] cursor-pointer duration-500 transition-all will-change-transform ${isHovered ? "w-50 bg-white" : "w-20 bg-[#0266c8]"}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            <div
              style={{
                color: textColor,
              }}
              className={`text-[#0266c8] text-3xl pt-1 transition-all duration-500 will-change-transform select-none ${isHovered ? null : "opacity-0 scale-0"}`}
            >
              Linkedin
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}
