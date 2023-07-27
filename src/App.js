import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
// import Resume from "./components/Resume/ResumeNew";
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
import { AddUser } from "./Pages/User/AddUser";
import { Auth } from "./hoc/Auth";
// import { AllProduct } from "./components/Product/AllProduct";
function App(props) {
  const [load, upadateLoad] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    setIsAdmin(props.isAdmin);
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
          <Navbar checkIsAdmin={isAdmin} setCheckIsAdmin={setIsAdmin}/>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>} />
            <Route path="/project" element={<Projects/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/age_calculator" element={<AgeCalculator/>} />
            <Route path="/instagram_video_downloader" element={<InstagramVideoDownloader/>} />
            <Route path="/PinCode" element={<PinCode/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/tools" element={<ToolsHome/>} />
            <Route path="/quotes" element={<Quotes/>} />
            <Route path="/hartron" element={<HartronPracticeSet/>} />
            <Route path="/test_practice" element={<HartronPracticeSet isPracticeTest = {true}/>} />
            <Route path="/add_product" element={<AddProduct/>} />
            <Route path="/add_user" element={<AddUser/>} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default Auth(App);
