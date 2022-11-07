import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Home from "./Page/Home";
import Test from "./Page/Test";
import About from "./Page/About";
import PageLayout from "./Page/PageLayout";
import Question from "./Page/Question";
import { AnimatePresence } from "framer-motion";
import { QuestionCard } from "./Components/QuestionCard";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/test" element={<Test />} />
        <Route path="/question" element={<Question />}>
          <Route path="/question/:id" element={<QuestionCard />} />
        </Route>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
