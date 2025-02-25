import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  HashRouter as Routerr,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import LetUsPlay from "./components/LetUsPlay.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import ContactUs from "./components/ContactUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/letusplay",
    element: <LetUsPlay />,
    errorElement: <PageNotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Routerr>
      <Routes>
        <Route path="/letusplay" element={<LetUsPlay />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/" element={<App />} errorElement={<PageNotFound />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Routerr>
  </StrictMode>
);
