import React from "react";
import "./ToolStyles.css";
import { Link } from "react-router-dom";

export const ToolsHome = () => {
  return (
    <>
      <div className="header-space m-4">
        <h1 className="text-center">
          Available <code>Tools</code>
        </h1>
        <div class="d-flex flex-wrap justify-content-between tools p-4">
          <Link to={"/PinCode"}>
            <button class="fill">PIN Code Finder</button>
          </Link>
          <Link to={"/ageCalculator"}>
          <button class="pulse">Let's Check your Age</button>
          </Link>
          {/* <button class="close">Close</button> */}
          <Link to={"/Products"}>
          <button class="raise"> Refurbished Laptop's</button>
          </Link>
          <Link to={"/Quotes"}>
          <button class="up">Quotes</button>
          </Link>
          <button class="slide">Available Soon</button>
          <button class="offset">Available Soon</button>
        </div>
      </div>
    </>
  );
};