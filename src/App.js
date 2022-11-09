import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import MovieDetail from "./components/movieDetail/MovieDetail";
import PageNotFound from "./components/pageNotFound/PageNotFound";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imbdID" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
