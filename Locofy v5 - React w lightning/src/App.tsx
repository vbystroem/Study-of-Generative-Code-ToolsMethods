import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MinaFavoriterHubV from "./pages/MinaFavoriterHubV";
import MinaFavoriterOption1V from "./pages/MinaFavoriterOption1V";
import MinaFavoriterOption2V from "./pages/MinaFavoriterOption2V";

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
      case "/minafavoriteroption1-v5":
        title = "";
        metaDescription = "";
        break;
      case "/minafavoriteroption2-v5":
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
      <Route path="/" element={<MinaFavoriterHubV />} />
      <Route
        path="/minafavoriteroption1-v5"
        element={<MinaFavoriterOption1V />}
      />
      <Route
        path="/minafavoriteroption2-v5"
        element={<MinaFavoriterOption2V />}
      />
    </Routes>
  );
}
export default App;
