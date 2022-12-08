import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import img1 from './1.jpg';
import img2 from './2.jfif';
import img3 from './3.jpg';
import img4 from './11.jfif';
import img5 from './img 1.webp';
import img6 from './img2.webp';

export default function Page7(){
    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                    <img src={img1} className='img-fluid h-100'/>
                </div>
                <div className='col-lg-4'>
                    <img src={img2} className=' w-100 h-100'/>
                </div>
                <div className='col-lg-4'>
                    <img src={img3} className='img-fluid'/>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-4'>
                    <img src={img4} className='img-fluid h-100'/>
                </div>
                <div className='col-lg-4'>
                    <img src={img5} className=' w-100 h-100'/>
                </div>
                <div className='col-lg-4'>
                    <img src={img6} className='img-fluid'/>
                </div>
            </div>

        </div>
        </>
    )
}