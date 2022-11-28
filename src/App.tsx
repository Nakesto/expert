import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useLocation, Navigate, Outlet } from "react-router-dom";
import Home from "./Page/Home";
import Test from "./Page/Test";
import About from "./Page/About";
import PageLayout from "./Page/PageLayout";
import Question from "./Page/Question";
import { AnimatePresence } from "framer-motion";
import Result from "./Page/Result";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/test" element={<Outlet />}>
          <Route index element={<Test />} />
          <Route path="question" element={<Question />} />
          <Route path="*" element={<Navigate to="/test" />} />
        </Route>
        <Route path="/" element={<PageLayout />}>
          <Route path="result" element={<Result />} />
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
