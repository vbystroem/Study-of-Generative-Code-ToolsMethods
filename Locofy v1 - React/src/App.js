import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import IPhoneSE90NYLggaTill from "./pages/IPhoneSE90NYLggaTill";
import IPhoneSE92NYSeEnITa from "./pages/IPhoneSE92NYSeEnITa";
import IPhoneSE93NYSeEnITa from "./pages/IPhoneSE93NYSeEnITa";

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
      case "/iphone-se-92-ny-se-en-i-taget-3-steg-1":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-se-93-ny-se-en-i-taget-4-steg-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<IPhoneSE90NYLggaTill />} />
      <Route
        path="/iphone-se-92-ny-se-en-i-taget-3-steg-1"
        element={<IPhoneSE92NYSeEnITa />}
      />
      <Route
        path="/iphone-se-93-ny-se-en-i-taget-4-steg-1"
        element={<IPhoneSE93NYSeEnITa />}
      />
    </Routes>
  );
}
export default App;
