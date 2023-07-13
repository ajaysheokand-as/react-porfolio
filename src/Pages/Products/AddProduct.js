import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Add_product from "../../data/Forms/Add_product";
import { FormFeedback, Label } from "reactstrap";
import ImageUploading from "react-images-uploading";
import axios from 'axios';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';



export const AddProduct = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [productData, setProductData] = useState({});
  const maxNumber = 5;

  const uploadImage = (imageList) =>{
    let formData = new FormData();
    for (var i = 0; i < imageList.length; i++) {
      formData.append(`image`, imageList[i].file);
    }
    axios.post('http://localhost:4000/upload/uploadImage',formData, {
      headers:{
        'Access-Control-Allow-Origin': '*',
        "Content-Type": "multipart/form-data",
      }
    }).then((response) => {
      // handle the response
          console.log("Image Uploaded",response);
          // setImages(response.data.file);
          setProductData({"image": response.data.file})
        })
        .catch((error) => {
          // handle errors
          console.log("Image not Uploaded",error);
        });
  }

  const onChange = ( imageList, addUpdateIndex) => {
    setImages(imageList);
    imageList && uploadImage(imageList);

  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let finalProduct = {...productData, ...data};    
    axios.post('http://localhost:4000/laptop/laptops',{
      body: finalProduct,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
    .then(function (response) {
      console.log("Product Added",response);
      swal({
        title: "Good job!",
        text: "Item Added successfully",
        icon: "success",
      });
      // setLaptops(response.data.Laptops);
    })
    .catch(function (error) {
      console.log("Product not Added",error);
      swal({
        title: "Error",
        text: "Product not Added",
        icon: "warning",
      });
    });
  }; // your form submit function which will invoke after successful validation
  return (
    <>
    
    <div className="header-space">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-row flex-wrap container m-3">
        <div className="col-12 d-flex justify-content-between">
        <div>
          <h1>Add New</h1>
        </div>
        <div>
          <Button variant="success" onClick={()=>{navigate("/products");}}>All Products</Button>
        </div>
      </div>
          {Add_product.map((item, index) => {
            if (item.type == "text" || item.type == "number") {
              return (
                <div className="col-sm-12 col-md-6 mt-3" key={item.name}>
                  <Label className="mt-2">{item.lable}</Label>
                  <input
                    className={`form-control ${
                      errors[item.name] && "is-invalid"
                    }`}
                    {...register(`${item.name}`, { ...item.condition })}
                    placeholder={item.lable}
                    type={item.type}
                  />
                  {errors[item.name] && (
                    <FormFeedback>{errors[item.name].message}</FormFeedback>
                  )}
                </div>
              );
            } else if (item.type === "text-area") {
              return (
                <div className="col-sm-12 col-md-6" key={item.name}>
                  <Label className="mt-2">{item.lable}</Label>
                  <textarea
                    className={`form-control ${
                      errors[item.name] && "is-invalid"
                    }`}
                    {...register(`${item.name}`, { ...item.condition })}
                    placeholder={item.lable}
                    type={item.type}
                  />
                  {errors[item.name] && (
                    <FormFeedback>{errors[item.name].message}</FormFeedback>
                  )}
                </div>
              );
            }
          })}

          <div className="col-sm-12 col-md-6">
            <Label className="mt-2">Upload Image</Label>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              onClick={(e)=>{e.preventDefault();}}
              maxNumber={maxNumber}
              dataURLKey="data_url"
              acceptType={["jpg", "png","jpeg"]}
            >
              {
              ({
                imageList =[],
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <button 
                    className="fill m-1"
                    style={isDragging ? { color: "red" } : null}
                    onClick={(e)=>{e.preventDefault(); onImageUpload()}}
                    {...dragProps}
                  >
                    Choose Image
                  </button>
                  &nbsp;
                  {/* <button className="fill m-1" onClick={onImageRemoveAll}>Remove all images</button> */}
                  {Array.isArray(imageList) && imageList.map((image, index) => (
                    <div key={index} className="image-item d-flex m-1 p-1">
                      <img src={image.data_url} alt="" width="100" />
                      <div className="image-item__btn-wrapper">
                        {/* <button className="m-1 fill" onClick={() => onImageUpdate(index)}>
                          Update
                        </button> */}
                        <button className="m-1 fill" onClick={() => onImageRemove(index)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  ))
                }
                </div>
              )}
            </ImageUploading>
          </div>
          <div className="col-sm-12 col-md-6">
          <button className="m-sm-2 m-md-4 fill rounded" type="submit">
              Submit
            </button>

            <button className="m-sm-2 m-md-4 fill rounded" type="reset">
              Reset
            </button>

          </div>
        </div>
      </form>
    </div>
    </>
  );
};
