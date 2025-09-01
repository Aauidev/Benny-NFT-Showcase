import { useTheme } from "./ThemeContext.jsx";

export default function Process() {
  const { isDark } = useTheme();
  return (
    <section
      id="process"
      className={`flex justify-center items-center relative h-full duration-500 transition-colors ${isDark ? "bg-[#030303]" : "bg-white"}`}
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
        The project started with creating 3D models in Blender, focusing on
        optimizing each object to reduce file size without compromising quality.
        The models were exported in both FBX and GLB formats. GLB files were
        primarily used for appearance-related objects, as they offer better
        compression with fewer glitches. During material reconstruction in
        Spline, textures were optimized, and lighting and visual effects were
        applied to enhance the visual quality of each section.
        <br /> <br /> <br />
        Due to the relatively large size of the models, which can take a few
        seconds to fully load, a loading state was implemented. Once all models
        and site elements are completely loaded, the loading state is set to
        false, and the website is displayed to the user.
        <br /> <br /> <br />
        In the first section of the website, the main object, Benny, interacts
        with the user's cursor on desktop devices and responds to tap and drag
        gestures on mobile and tablet devices. Users can also switch between
        dark and light themes, with preferences stored in local storage to
        ensure settings persist across sessions.
        <br /> <br /> <br />
        The website header, built using React Scroll, enables quick navigation
        to different sections. Clicking on any section smoothly scrolls the page
        to that part, while the Contact button directs users to the footer.
        <br /> <br /> <br />
        In the gallery section, users can explore and interact with all 3D
        models. Each model includes social media and marketplace icons,
        providing direct access to the corresponding links for that specific
        model.
        <br /> <br /> <br />
        The tech section showcases all the libraries and packages used in the
        project, along with brief explanations for each.
        <br /> <br /> <br />
        In the footer, users can find social links and a form to submit their
        email to receive the official Benny Trophy. The website is fully
        responsive, although desktop browsing is recommended for the best user
        experience.
      </article>
    </section>
  );
}
