import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import IPhoneSE2 from "./pages/IPhoneSE2";
import IPhoneSE from "./pages/IPhoneSE";
import IPhoneSE1 from "./pages/IPhoneSE1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/minafavoriterhub":
        title = "";
        metaDescription = "";
        break;
      case "/minafavoriteroption1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<IPhoneSE2 />} />
      <Route path="/minafavoriterhub" element={<IPhoneSE />} />
      <Route path="/minafavoriteroption1" element={<IPhoneSE1 />} />
    </Routes>
  );
}
export default App;
