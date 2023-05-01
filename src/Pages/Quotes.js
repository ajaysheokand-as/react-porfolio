import React from 'react';
import { Quote } from '../components/Tools/Quote/Quote';


export const Quotes = () => {
  return (
    <>
     <div className='row m-2 d-flex flex-row header-space'>
        <div className='col-lg-4 mt-2 col-sm-12'>
            <Quote/>
        </div>
        <div className='col-lg-4 mt-2 col-sm-12'>
            <Quote/>
        </div>
        <div className='col-lg-4 mt-2 col-sm-12'>
            <Quote/>
        </div>
    </div>
    <div className='row m-2 d-flex flex-row'>
        <div className='col-lg-4 mt-2 col-sm-12 '>
            <Quote/>
        </div>
        <div className='col-lg-4 mt-2 col-sm-12'>
            <Quote/>
        </div>
        <div className='col-lg-4 mt-2 col-sm-12'>
            <Quote/>
        </div>
    </div>
    </>
  )
}
