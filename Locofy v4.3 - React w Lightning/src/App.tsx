import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MinaFavoriterOption1Copy from "./pages/MinaFavoriterOption1Copy";
import MinaFavoriterHubCopy from "./pages/MinaFavoriterHubCopy";
import MinaFavoriterOption2Copy from "./pages/MinaFavoriterOption2Copy";

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
      case "/minafavoriterhub-copy":
        title = "";
        metaDescription = "";
        break;
      case "/minafavoriteroption2-copy":
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
      <Route path="/" element={<MinaFavoriterOption1Copy />} />
      <Route path="/minafavoriterhub-copy" element={<MinaFavoriterHubCopy />} />
      <Route
        path="/minafavoriteroption2-copy"
        element={<MinaFavoriterOption2Copy />}
      />
    </Routes>
  );
}
export default App;
