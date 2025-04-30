import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import {
  createBrowserRouter,
  RouterProvider,
  HashRouter as Routerr,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import LetUsPlay from "./pages/TicTacToe.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Game from "./components/TicTacToeGame.jsx";
import Timer from "./pages/Timer.jsx";
import Users from "./pages/Users.jsx";

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
    <Header/>
    <Routerr>
    
      <Routes>
        <Route path="/tiktaktoe" element={<LetUsPlay />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/users/:userId" element={<Users />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/" element={<App />} errorElement={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Routerr>
  </StrictMode>
);
