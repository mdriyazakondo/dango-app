import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";

const ShearedLayout = lazy(() => import("./Layouts/ShearedLayout"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const SingleClock = lazy(() => import("./pages/SingleClock"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShearedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/singleClock/:id" element={<SingleClock />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
