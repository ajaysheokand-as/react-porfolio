import React from 'react';
import './Banner.css';
import LaptopBanner from "../../Assets/Banner/Laptopbanner.jpg"

export const Banner = () => {
  return (
    <section class="ban_sec">
		<div class="container">
			<div class="ban_img">
	    <img src={LaptopBanner} alt="banner" border="0"/>
				<div class="ban_text">
					<strong>
						<span>We Provide</span><br/> Refurbished
					</strong>
					<p>Laptops, Desktop<br/>
						at very affordable price. </p>
					<a href="#">Know More</a>
				</div>
			</div>
		</div>
	</section>
  )
}
