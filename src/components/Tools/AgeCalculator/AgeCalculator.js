import React, { useState } from 'react';
import './AgeCalculator.css';
import { ProductCard } from '../../Product/ProductCard';
export const AgeCalculator = () => {
  const [date1, setDate1] = useState(Date.now());
  const [date2, setDate2] = useState(Date.now());
  const [diffInDays, setDiffInDays] = useState('');
  const [age, setAge] = useState({years:"", months:"", days: ""});

  const handleDate1Change = (event) => {
    setDate1(event.target.value);
  };

  const handleDate2Change = (event) => {
    setDate2(event.target.value);
  };

  const handleCalculateClick = () => {
    const diffInMs = new Date(date2) - new Date(date1);
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const totalYear = Math.floor(diffInDays / 365);
    const totalMonths = Math.floor((diffInDays % 365) / 12);
    const totalDays = Math.floor((diffInDays % 365) % 12);
    setAge({years : totalYear, months: totalMonths, days: totalDays})
   
    setDiffInDays(diffInDays);
  };
  return (
    <>
    <div className='age-calculator'>
      <label className='m-1' htmlFor="date1">Enter Date</label><br/>
      <input className='m-1 p-1 date-input' type="date" id="date1" value={date1} onChange={handleDate1Change} />
      <br />
      {/* <label htmlFor="date2">Date 2:</label>
      <input type="date" id="date2" value={date2} onChange={handleDate2Change} />
      <br /> */}
      <button className='btn-check-difference' onClick={handleCalculateClick}>Calculate</button>
      <br />
      {/* {diffInDays !== '' && <p className='p-2 answer'>The difference between the dates is {diffInDays} days.</p>} */}
      {(age.years !== '' || age.months !== '' || age.days !== '' ) &&<p className='answer'> Hi, You are {age.years !== 0 && age.years} {age.years ? "years" : ""} {age.months !== 0 && age.months} {age.months ? "months" : ""} {age.days !== 0 && age.days} {age.days ? "days" : ""} old.</p>}
      {/* {diffInDays && <p className='answer'> Total {diffInDays} Days. </p>} */}

    </div>
    </>
  )
}
