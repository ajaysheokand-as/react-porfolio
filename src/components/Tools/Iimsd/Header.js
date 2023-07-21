import React from 'react';
import iimsd_heading from "../../../Assets/Iimsd/iimsd_heading.png"
import iimsd_logo from "../../../Assets/Iimsd/iimsd_logo.png"

export const Header = () => {
  return (
    <div className='d-flex flex-wrap justify-content-between'>
    <img src={iimsd_logo} width={200} height={200} alt='iimsd'/>
    <img src={iimsd_heading} height={200}  alt='iimsd'/>
    </div>
  )
}
