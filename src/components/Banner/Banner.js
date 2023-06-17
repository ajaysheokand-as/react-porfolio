import React from 'react';
import './Banner.css';
import LaptopBanner from "../../Assets/Banner/Laptopbanner.jpg"
import { Link } from 'react-router-dom';

export const Banner = () => {
  return (
    <section className="ban_sec">
		<div className="h-100">
			<div className="ban_img">
	    <img src={LaptopBanner} alt="banner" border="0"/>
				<div className="ban_text">
					<strong>
						{/* <span>We Provide</span> */}
						 Refurbished
					</strong>
					<p >Laptops, Desktop<br/>
						at very affordable price. </p>
						<Link to={"/Products"} className='ban_button'>
							Know More
					</Link>
				</div>
			</div>
		</div>
	</section>
  )
}
