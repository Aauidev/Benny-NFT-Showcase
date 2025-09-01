import { useTheme } from "./ThemeContext.jsx";

export default function About() {
  const { isDark } = useTheme();
  return (
    <section
      id="about"
      className={`flex justify-center relative transition-colors duration-500 z-0 ${isDark ? "bg-[#030303]" : "bg-white"}`}
    >
      <div
        className={`absolute bg-[url("/src/assets/BackGrounds/DarkStroke.svg")] h-full w-screen bg-cover transition-opacity duration-500 z-0 ${
          isDark ? "opacity-65" : "opacity-0"
        }`}
      />
      <div
        className={`absolute bg-[url("/src/assets/BackGrounds/LightStroke.svg")] h-full w-screen bg-cover transition-opacity duration-500 z-0 ${
          isDark ? "opacity-0" : "opacity-65"
        }`}
      />
      <article
        className={`text-[20px] p-5 sm:text-[35px] sm:leading-15 sm:p-15 md:p-25 md:text-[40px] 4xl:max-w-[150rem] md:tracking-[2px] text-justify font-BebasNeue transition-colors duration-500 z-10 ${isDark ? "text-white" : "text-[#121212]"}`}
      >
        This website serves as a showcase for a collection of 3D NFTs that I
        have created and designed myself using{" "}
        <a
          href={"https://www.blender.org/"}
          target="_blank"
          rel="noopener noreferrer"
          className={"text-[#FF7500] cursor-pointer"}
        >
          Blender
        </a>
        . Its main purpose is to provide an interactive and engaging platform
        where visitors can explore the themes, concepts, and intricate details
        of the artworks, and interact with the 3D models directly on the web.
        <br /> <br /> <br />
        The NFTs are listed on reputable marketplaces such as{" "}
        <a
          href={"https://opensea.io/"}
          target="_blank"
          rel="noopener noreferrer"
          className={"text-[#0086ff] cursor-pointer"}
        >
          OpenSea
        </a>{" "}
        and{" "}
        <a
          href={"https://rarible.com/"}
          target="_blank"
          rel="noopener noreferrer"
          className={"text-[#f6d303] cursor-pointer"}
        >
          Rarible
        </a>
        , where I have obtained verification on Rarible. This project also
        serves as an opportunity to further develop my programming skills by
        combining my background in graphic design with web development.
        <br /> <br /> <br />
        With a background in graphic arts, this project bridges the gap between
        creative design and technology, allowing my visual works to be presented
        in an interactive format.
      </article>
    </section>
  );
}
