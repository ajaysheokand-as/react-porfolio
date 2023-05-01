import React from "react";
import "./ProductCard.css";
import "../Tools/ToolStyles.css";
export const ProductCard = () => {
    const products = [
        {
            title: "London",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis",
        },
        {
            title: "Paris",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis",
        },
        {
            title: "India",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis",
        },
        {
            title: "America",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis",
        },
        {
            title: "Nepal",
            description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis",
        },

];
  return (
    <>
     <div className=" container header-space flex-row flex-wrap">
        {
            products.map( (value, index) =>{
                return <div class="product-card mb-5">
                <div class="product-img img-one"></div>
                <div class="product-text">
                  <h3>{value.title}</h3>
                  <p>
                    {value.description}
                  </p>
                </div>
                <div class="product-cart">
                  <button type="submit">Buy Now</button>
                </div>
              </div>
            })
        }
        </div>
    </>
  );
};
