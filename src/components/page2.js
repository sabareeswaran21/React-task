import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';

export default function Page2(){
    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 mt-5 text-center'>
                    <h1>Welcome To Our Website</h1>
                </div>
            </div>
            <div className='row mt-5'>
            <div className='col-lg-12 text-center'>
                <p>A Comment is a flexible format,  the scientific, commercial, ethical, legal, societal, or political issues surrounding research. Comment articles should be topical, readable, provocative and introduce new concepts/points of view, providing a personal perspective on a matter of public or scientific importance. The main criteria are that they should be of immediate interest to a broad readership and should be written in an accessible, non-technical style.</p>
            </div>
            </div>
            <div className='row'>
                <div className='col-lg-5'></div>
                <div className='col-lg-2 mt-5'>
                    <button type='button' id='submit' className='btn btn-primary col-lg-12'>Read More</button>
                </div>
            </div>
        </div>
        </>
    )
}