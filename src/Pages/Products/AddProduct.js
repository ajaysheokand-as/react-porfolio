import React from "react";
import { useForm } from "react-hook-form";
import Add_product from "../../data/Forms/Add_product";
import { Button, Row } from "react-bootstrap";
import { FormFeedback, Label } from "reactstrap";

export const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("data",data);
  }; // your form submit function which will invoke after successful validation
  return (
    <div className="header-space">
      {/* <h1>Add Product</h1> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-row flex-wrap container m-3">
          {Add_product.map((item, index) => {
            return (
              <div className="col-sm-12 col-md-6" key={item.name}>
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
          })}

          <div className="col-sm-12 col-md-6">
            <button className="m-4 fill" type="reset">
              Reset
            </button>

            <button className="m-4 fill" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
