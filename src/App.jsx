import { useEffect, useState } from "react";
import {ThemeProvider} from "./Components/ThemeContext.jsx";
import Header from "./Components/Navigator/Header.jsx";
import Home from "./Components/Home Section/Home.jsx";
import About from "./Components/About.jsx";
import Gallery from "./Components/Gallery Section/Gallery.jsx";
import Process from "./Components/Process.jsx";
import Tech from "./Components/Tech.jsx";
import Footer from "./Components/Navigator/Footer.jsx";
import Loading from "./Components/Navigator/Loading.jsx";

function App() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setPageLoaded(true);
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (pageLoaded && splineLoaded) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [pageLoaded, splineLoaded]);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <>
      <ThemeProvider>
        <div className={"relative overflow-x-hidden"}>
          {loading && <Loading/>}
          <div
            className={`transition-all duration-500 ${loading ? "opacity-0 overflow-y-hidden" : "opacity-100"}`}
          >
            <Header activeAos={!loading} />
            <main>
              <Home loadState={() => setSplineLoaded(true)} />
              <About />
              <Gallery />
              <Process />
              <Tech />
            </main>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
