import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import ScrollToTop from "./components/ScrollToTop";
import { AgeCalculator } from "./components/Tools/AgeCalculator/AgeCalculator";
import InstagramVideoDownloader from "./components/Tools/Instagram/InstagramVideoDownloader";
import { PinCode } from "./components/Tools/PinCode/PinCode";
import  Products  from "./Pages/Products";
import { ToolsHome } from "./components/Tools/ToolsHome";
import { Quotes } from "./Pages/Quotes";
import { HartronPracticeSet } from "./components/Tools/Hartron/HartronPracticeSet";
import { Login } from "./Pages/Login/Login";
import { AddProduct } from "./Pages/Products/AddProduct";
import { AllProduct } from "./components/Product/AllProduct";
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
         {/* {console.log(Location.pathname.includes("login"))} */}
          {/* <ScrollToTop /> */}
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/project" element={<Projects/>} />
            <Route path="/about" element={<About/>} />
            {/* <Route path="resume" element={<Resume/>} /> */}
            <Route path="/ageCalculator" element={<AgeCalculator/>} />
            <Route path="/InstagramVideoDownloader" element={<InstagramVideoDownloader/>} />
            <Route path="/PinCode" element={<PinCode/>} />
            <Route path="/Products" element={<Products/>} />
            <Route path="/Tools" element={<ToolsHome/>} />
            <Route path="/Quotes" element={<Quotes/>} />
            <Route path="/Hartron" element={<HartronPracticeSet/>} />
            <Route path="/add_product" element={<AddProduct/>} />

            {/* <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/project" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/ageCalculator" component={AgeCalculator} />
            <Route path="/InstagramVideoDownloader" component={InstagramVideoDownloader} />
            <Route path="/PinCode" component={PinCode} />
            <Route path="/Products" component={Products} />
            <Route path="/Tools" component={ToolsHome} />
            <Route path="/Quotes" component={Quotes} />
            <Route path="/Hartron" component={HartronPracticeSet} />
            <Route path="/add_product" component={AddProduct} />
            <Route path="/all_products" component={AllProduct} /> */}
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
