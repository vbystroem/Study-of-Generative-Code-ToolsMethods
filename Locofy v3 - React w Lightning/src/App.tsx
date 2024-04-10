import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import IPhoneSE from "./pages/IPhoneSE";
import IPhoneSE1 from "./pages/IPhoneSE1";
import IPhoneSE2 from "./pages/IPhoneSE2";

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
      case "/iphone-se-96":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-se-97":
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
      <Route path="/" element={<IPhoneSE />} />
      <Route path="/iphone-se-96" element={<IPhoneSE1 />} />
      <Route path="/iphone-se-97" element={<IPhoneSE2 />} />
    </Routes>
  );
}
export default App;
