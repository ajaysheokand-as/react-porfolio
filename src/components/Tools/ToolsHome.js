import React from "react";
import "./ToolStyles.css";
import { Link } from "react-router-dom";
import { Banner } from "../Banner/Banner";
import { Quote } from "./Quote/Quote";

export const ToolsHome = () => {
  return (
    <>
    {/* className="project-heading" */}
      <div className="header-space m-4">
       
        
        <h1 className="project-heading text-center header-space">
          Available <code>Tools</code>
        </h1>
        <div class="d-flex flex-wrap justify-content-between tools p-4">
          <Link to={"/PinCode"}>
            <button class="fill">PIN Code Finder</button>
          </Link>
          <Link to={"/hartron"}>
          <button class="slide">Hartron</button>
          </Link>
          <Link to={"/products"}>
          <button class="raise"> Refurbished Laptop's</button>
          </Link>
          <Link to={"/quotes"}>
          <button class="up">Quotes</button>
          </Link>
          <Link to={"#"}>
          <button class="pulse">Available Soon</button>
          </Link>
          <button class="offset">Available Soon</button>
        </div>
        <div className="header-space">
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-2" >
          <Banner/>
          </div>
          <div className="col-sm-12 col-md-6 mb-2" >
          <Quote/>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
