import React from 'react';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";




export const Login = (props) => {
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
			props.setIsAdmin(true);
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
    <div className="login-container">
	<div className="login_box">
		<h1 className='login-header'>Welcome</h1>
		<div className="input_box">
			<input onChange={(e) => handleChange("mobileNumber", e.target.value)} type="number" required=""/>
			<label for="">Mobile Number</label>
			<ion-icon className="icon " name="mail-outline"></ion-icon>
		</div>
		<div className="input_box">
			<input onChange={(e) => handleChange("password", e.target.value)} type="password" required=""/>
			<label for="">password</label>
			<ion-icon className="icon" name="lock-closed-outline"></ion-icon>
		</div>
		<div className="rem">
			{/* <input id="chack" type="checkbox"/>
			<label for="chack">remember me</label> */}
			{/* <a href="#">forget password</a> */}
		</div>
		<div className="login">
			<button onClick={handleLogin}>Log in </button>
		</div>
	</div>
 </div>
 

	








  )
}
