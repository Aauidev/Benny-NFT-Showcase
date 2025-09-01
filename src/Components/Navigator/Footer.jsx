import { useTheme } from "../ThemeContext.jsx";

import GitHubButton from "../Widgets/GitHubButton.jsx";
import LinkedinButton from "../Widgets/LinkedinButton.jsx";
import RaribleButton from "../Widgets/RaribleButton.jsx";
import OpenSeaButton from "../Widgets/OpenSeaButton.jsx";
import XButton from "../Widgets/XButton.jsx";
import InstagramButton from "../Widgets/InstagramButton.jsx";
import EmailField from "../Widgets/EmailField.jsx";

export default function Footer() {
  const { isDark } = useTheme();
  return (
    <footer
      id="footer"
      className={
        "flex relative w-screen h-full overflow-y-hidden items-center duration-500 transition-all"
      }
    >
      <div
        className={`absolute bg-[url("/src/assets/BackGrounds/LightFooter.svg")] h-full w-screen bg-cover bg-center transition-opacity duration-500 z-0 ${
          isDark ? "opacity-0" : null
        }`}
      />
      <div
        className={`absolute bg-[url("/src/assets/BackGrounds/DarkFooter.svg")] h-full w-screen bg-cover bg-center transition-opacity duration-500 z-0 ${
          isDark ? null : "opacity-0"
        }`}
      />
      <div
        className={`flex flex-col ml-8 py-6 pb-12 lg:pb-6 z-20
        [zoom:0.2] ml:[zoom:0.3] sm:[zoom:0.4] md:[zoom:0.5] lg:[zoom:0.6] xl:[zoom:0.7] 3xl:[zoom:0.8]`}
      >
        <div className={"flex flex-row"}>
          <GitHubButton
            link={"https://github.com/Aauidev"}
            hoverClass={"hover:mr-23 active:mr-23"}
            className={"drop-shadow-lg drop-shadow-black mr-10"}
          />
          <RaribleButton
            link={"https://rarible.com/Mr_Benny"}
            hoverClass={"hover:mr-32 active:mr-32"}
            className={"drop-shadow-lg drop-shadow-black"}
          />
          <OpenSeaButton
            link={"https://opensea.io/MrBenny-"}
            hoverClass={"hover:mr-32 active:mr-32"}
            className={"drop-shadow-lg drop-shadow-black"}
          />
        </div>
        <div className={"flex flex-row"}>
          <LinkedinButton
            link={"https://linkedin.com/in/amin-asgari"}
            hoverClass={"hover:mr-23 active:mr-23"}
            className={"drop-shadow-lg drop-shadow-black mr-10"}
          />
          <XButton
            link={"https://twitter.com/MrBenny_NFT"}
            hoverClass={"hover:mr-32 active:mr-32"}
            className={"drop-shadow-lg drop-shadow-black"}
          />
          <InstagramButton
            link={"https://www.instagram.com/mrbenny.nft"}
            hoverClass={"hover:mr-32 active:mr-32"}
            className={"drop-shadow-lg drop-shadow-black"}
          />
        </div>
      </div>

      <div
        className={`absolute flex flex-col col-span-3 right-0 top-1/2 -translate-y-1/2 lg:-translate-y-2/5 mr-2 lg:mr-6 origin-right 
        scale-25 ml:scale-35 sm:scale-50 md:scale-60 lg:scale-70 xl:scale-85 3xl:scale-100`}
      >
        <EmailField />
        <span
          className={`text-center text-[20px] sm:text-[22px] w-98 border-2 py-3 m-4 mt-1 select-none rounded-full transition-colors duration-500 ${isDark ? "bg-[#060016]/85 text-white border-white" : "bg-white/85 text-black border-black"}`}
        >
          Send Your Email to Receive Your Reward:
        </span>
      </div>
      <div
        className={
          "absolute w-screen h-5 top-0 bg-black -translate-y-4 sm:-translate-y-3 -translate-x-1 blur-md"
        }
      />

      <div
        className={`absolute z-10 bottom-0 flex justify-center items-center w-screen mb-1 sm:mb-3 origin-bottom
        scale-25 ml:scale-35 sm:scale-50 md:scale-60 lg:scale-80 xl:scale-90 3xl:scale-100`}
      >
        <p
          className={`font-BebasNeue min-w-100 text-xl tracking-wide select-none transition-colors duration-500 ${isDark ? "text-white" : null}`}
        >
          Copyright<span className="font-Roboto">©</span> 2025{" "}
          <span>Amin Asgari</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
