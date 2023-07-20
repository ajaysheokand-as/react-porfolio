import axios from 'axios';

export const deleteProductImage = (fileName) => {
    axios.delete(`http://localhost:4000/images/uploadImage/${fileName}`, {
        headers:{
          'Access-Control-Allow-Origin': '*',
          "Content-Type": "multipart/form-data",
        }
      }).then((response) => {
        // handle the response
            console.log("Image Deleted",response);
            return (response.status == 200) ?  response.data.file  : "Error";
            // setImages(response.data.file);
            // setProductData({"image": response.data.file})
          })
          .catch((error) => {
            // handle errors
            console.log("Image not Uploaded",error);
          });
}
