import React from 'react';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";




export const Login = () => {
	const [loginData, setLoginData] = useState({});
	const navigate = useNavigate();
	const handleChange = (field, value) =>{
	setLoginData(prev => ({...prev, [field]: value}))
	}
	const handleLogin = () => {
		console.log("This is user",loginData)
		axios.post('http://localhost:4000/users/login',{
		mobileNumber: loginData.mobileNumber,
  		password : loginData.password
    })
    .then(function (response) {
		if(response.status === 200){
			console.log("response ", response);
			localStorage.setItem("UserAccessToken", JSON.stringify(response.data))
			navigate("/Products");
			return;
		}else{
			swal({
				title: "Unauthorized",
				text: "Mobile Number or Password is not valid",
				icon: "warning",
				dangerMode: true,
			  })
		}
     
    })
    .catch(function (error) {
      console.log("error",error);
	  swal({
		title: "Unauthorized",
		text: "Mobile Number or Password is not valid",
		icon: "warning",
		dangerMode: true,
	  })
    });
	}
  return (
    <div class="login-container">
	<div class="login_box">
		<h1>Welcome</h1>
		<div class="input_box">
			<input onChange={(e) => handleChange("mobileNumber", e.target.value)} type="number" required=""/>
			<label for="">Mobile Number</label>
			<ion-icon class="icon " name="mail-outline"></ion-icon>
		</div>
		<div class="input_box">
			<input onChange={(e) => handleChange("password", e.target.value)} type="password" required=""/>
			<label for="">password</label>
			<ion-icon class="icon" name="lock-closed-outline"></ion-icon>
		</div>
		<div class="rem">
			{/* <input id="chack" type="checkbox"/>
			<label for="chack">remember me</label> */}
			{/* <a href="#">forget password</a> */}
		</div>
		<div class="login">
			<button onClick={handleLogin}>Log in </button>
		</div>
	</div>
 </div>
 

	








  )
}
