import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";
import { AgeCalculator } from "./components/Tools/AgeCalculator/AgeCalculator";
import InstagramVideoDownloader from "./components/Tools/Instagram/InstagramVideoDownloader";
import { PinCode } from "./components/Tools/PinCode/PinCode";
import { Products } from "./Pages/Products";
import { ToolsHome } from "./components/Tools/ToolsHome";
import { Quote } from "./components/Tools/Quote/Quote";
import { Quotes } from "./Pages/Quotes";
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {load ? (
        <Preloader load={load} />
      ) : (
        <div className="App" >
          <Navbar />
         
          {/* <ScrollToTop /> */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/project" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/ageCalculator" component={AgeCalculator} />
            <Route path="/InstagramVideoDownloader" component={InstagramVideoDownloader} />
            <Route path="/PinCode" component={PinCode} />
            <Route path="/Products" component={Products} />
            <Route path="/Tools" component={ToolsHome} />
            <Route path="/Quotes" component={Quotes} />
          </Switch>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
