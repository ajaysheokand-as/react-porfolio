import React, { useState, useRef  } from "react";
import { useForm,Controller } from "react-hook-form";
// import Add_product from "../../data/Forms/Add_product";
import Add_user from "../../data/Forms/Add_user";
import { FormFeedback, Label } from "reactstrap";
import ImageUploading from "react-images-uploading";
import axios from 'axios';
// import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { deleteProductImage } from "../../utils/Common";
import Select from "react-select";
import { ADMINS_TYPES } from "../../Constants";

export const AddUser = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [productData, setProductData] = useState({});
  const maxNumber = 5;
  const formRef = useRef(null);


  const uploadImage = (imageList) =>{
    let formData = new FormData();
    for (var i = 0; i < imageList.length; i++) {
      formData.append(`image`, imageList[i].file);
    }
    axios.post('http://localhost:4000/images/uploadImage',formData, {
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

  const deleteImage = () =>{
     const Image =  deleteProductImage(productData.image.filename);
     setProductData({"image": Image})
  }

  const onChange = ( imageList, addUpdateIndex) => {
    setImages(imageList);
    (imageList.length > 0) && uploadImage(imageList);

  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm();
  const onSubmit = (data) => {
    let finalData = {...productData, ...data};   
    console.log("This is finalData=>",finalData ) 
    if(finalData.password !== finalData.match_password){
        swal({
        title: "Error",
        text: "Password did't match",
        icon: "warning",
      });
    }
    axios.post('http://localhost:4000/users/register',{
      body: finalData,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
    .then(function (response) {
      console.log("User Added",response);
      formRef.current.reset();
      swal({
        title: "Good job!",
        text: "User Added successfully",
        icon: "success",
      });
      // setLaptops(response.data.Laptops);
    })
    .catch(function (error) {
      // console.log("User not Added error.response.data.message",error,error.response.data.message);
      swal({
        title: "Error",
        text: error.response.data.message,
        icon: "warning",
      });
    });
  }; // your form submit function which will invoke after successful validation
  return (
    <div>
      <>
        <div className="header-space">
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-row flex-wrap container m-3">
              <div className="col-12 d-flex justify-content-between">
                <div>
                  <h1>Add New User</h1>
                </div>
                <div>
                  {/* <Button variant="success" onClick={()=>{navigate("/products");}}>All Users</Button> */}
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mt-3">
                <Label className="mt-2">Admin Type</Label>
                <Controller
                  className="form-control"
                  name="adminType"
                  render={({ field }) => (
                    <Select {...field} options={ADMINS_TYPES} />
                  )}
                  control={control}
                  defaultValue=""
                />
                {/* <Controller
                    name="Checkbox"
                    control={control}
                    render={({ field }) => <Checkbox {...field} />}
                  /> */}
              </div>
              {Add_user.map((item, index) => {
                switch (item.type) {
                  case "text-area":
                    return (
                      <div className="col-sm-12 col-md-6 mt-3" key={item.name}>
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
                          <FormFeedback>
                            {errors[item.name].message}
                          </FormFeedback>
                        )}
                      </div>
                    );
                  default:
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
                          <FormFeedback>
                            {errors[item.name].message}
                          </FormFeedback>
                        )}
                      </div>
                    );
                }
              })}

              <div className="col-sm-12 col-md-6 mt-3">
                {images.length === 0 && (
                  <Label className="mt-2">Upload Profile Image</Label>
                )}
                <ImageUploading
                  multiple
                  value={images}
                  onChange={onChange}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                  acceptType={["jpg", "png", "jpeg"]}
                >
                  {({
                    imageList = [],
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                      {!(imageList.length > 0) && (
                        <button
                          className="fill m-1"
                          style={isDragging ? { color: "red" } : null}
                          onClick={(e) => {
                            e.preventDefault();
                            onImageUpload();
                          }}
                          {...dragProps}
                        >
                          Choose Image
                        </button>
                      )}
                      &nbsp;
                      {/* <button className="fill m-1" onClick={onImageRemoveAll}>Remove all images</button> */}
                      {Array.isArray(imageList) &&
                        imageList.length > 0 &&
                        imageList.map((image, index) => (
                          <div
                            key={index}
                            className="image-item d-flex m-1 p-1"
                          >
                            <img src={image.data_url} alt="" width="100" />
                            <div className="image-item__btn-wrapper">
                              {/* <button className="m-1 fill" onClick={() => onImageUpdate(index)}>
                          Update
                        </button> */}
                              <button
                                className="ml-3 fill"
                                onClick={() => {
                                  onImageRemove(index);
                                  deleteImage();
                                }}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        ))}
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
    </div>
  );
}
