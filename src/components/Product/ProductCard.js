import React, { useEffect } from "react";
import "./ProductCard.css";
import "../Tools/ToolStyles.css";
import axios from 'axios';
import { useState } from "react";
import { Auth } from "../../hoc/Auth";

 const ProductCardComp = (props) => {
  const user = props.user;
  const [laptops, setLaptops] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:4000/laptop/laptops',{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
    .then(function (response) {
      setLaptops(response.data.Laptops);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

//     const products = [
//         {
//             brand: "Dell",
//             RAM: "4",
//             processor: "i5",
//             hdd: "500",
//             ssd: "128",
//             generation: "6",
//             condition: "A++",
//             price:"20000",
//             discount:"1000",
//             description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis",
//         },
//         {
//             brand: "HP",
//             RAM: "4",
//             processor: "i5",
//             hdd: "500",
//             ssd: "128",
//             generation: "6",
//             condition: "A++",
//             price:"20000",
//             discount:"1000",
//             description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis",
//         },
//         {
//             brand: "Dell",
//             RAM: "4",
//             processor: "i5",
//             hdd: "500",
//             ssd: "128",
//             generation: "6",
//             condition: "A++",
//             price:"20000",
//             discount:"1000",
//             description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis",
//         },
//         {
//             brand: "Apple",
//             RAM: "4",
//             processor: "i5",
//             hdd: "500",
//             ssd: "128",
//             generation: "6",
//             condition: "A++",
//             price:"20000",
//             discount:"1000",
//             description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis",
//         },
//         {
//             brand: "Acer",
//             RAM: "4",
//             processor: "i5",
//             hdd: "500",
//             ssd: "128",
//             generation: "6",
//             condition: "A++",
//             price:"20000",
//             discount:"1000",
//             description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis",
//         },


// ];
  return (
    <>
     <div className="row header-space flex-row flex-wrap">
        {
            laptops.map( (value, index) =>{
                return <div key={index} class="product-card mb-5">
                <div class="product-img img-one"></div>
                <div class="product-text">
                  <h3>{value?.brand && value.brand}</h3>
                 
                  {<p>
                    {value?.ram && ("RAM: " + value.ram)} {value.ssd && ("SSD: " + value.ssd)} {value?.hdd && ("HDD: " + value.hdd)}
                  </p>}
                  { <p>
                    { value?.processor && ("Processor: " + value.processor)} {value?.generation && ("Generation: " + value.generation)} {value?.condition && ("Condition: " + value.condition)}
                  </p>}
                  { value.price && <p>
                    {"Price: " + value?.price}
                  </p>}
                  { value.discount && <h3>
                    {"Discount: " + value?.discount}
                  </h3>}
                </div>
                <div class="product-cart">
                  <a href="https://wa.me/+918570996916?text=Contact you back as soon as possible." target="blank">

                  <button>Send Inquiry</button>
                  </a>
                </div>
              </div>
            })
        }
        </div>
    </>
  );
};

export const ProductCard = Auth(ProductCardComp);