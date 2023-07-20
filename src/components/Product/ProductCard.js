import React, { useEffect } from "react";
import "./ProductCard.css";
import "../Tools/ToolStyles.css";
import axios from 'axios';
import { useState } from "react";
import { Auth } from "../../hoc/Auth";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';


 const ProductCardComp = (props) => {
  const navigate = useNavigate();
  const [laptops, setLaptops] = useState([]);
  const [updateProducts, setUpdateProducts] = useState(false);
  const isAdmin = props.isAdmin;

  useEffect(()=>{
    axios.get('http://localhost:4000/laptop/laptops',{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
    .then(function (response) {
      console.log(response.data.Laptops,"this is response.data.Laptops")
      setLaptops(response.data.Laptops);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [updateProducts]);

  const handleRemoveProduct = (product) => {
    swal({
      title: "Are you sure you want to remove ?",
      text: "This item will be removed permanently.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`http://localhost:4000/laptop/${product}`,{
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
      .then(function (response) {
        console.log(response);
        setUpdateProducts(!updateProducts);
        swal("This item has been deleted!", {
          icon: "success",
        });
        // setLaptops(response.data.Laptops);
      })
      .catch(function (error) {
        console.log(error);
      });
      }else{
        swal("Hi, Your item is safe!");
      }

      
    });
  };

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
       <div className="d-flex justify-content-between header-space">
        <div>
          <h1>All Products</h1>
        </div>
        <div>
          {isAdmin && <Button variant="success" onClick={()=>{navigate("/add_product");}}>Add New</Button>}
        </div>
      </div>
     <div className="row mt-3 flex-row flex-wrap">
        {
            laptops.map( (value, index) =>{
                return <div key={index} className="product-card mb-5">
                <div className="product-img ">
                  {/* {getImage(value.image.filename)} */}
                <img className="product-img" src={process.env.REACT_APP_BASE_URL + `/getImages/${value.image.filename}`} alt="My Image" />
                </div>
                <div className="product-text">
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
                <div className="product-cart">
                  <a href={isAdmin ? "#" : "https://wa.me/+918570996916?text=Contact you back as soon as possible."} target={!isAdmin && "blank"}>

                 {isAdmin ? <button onClick={()=>{handleRemoveProduct(value._id)}}>Mark as Sold</button> :  <button>Send Inquiry</button>
}                  </a>
                </div>
              </div>
            })
        }
        </div>
    </>
  );
};

export const ProductCard = Auth(ProductCardComp);