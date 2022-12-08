import 'bootstrap/dist/css/bootstrap.min.css';
import './page.css';
import React from 'react';
import { Nav} from 'react-router-dom';
import ReactBootstrapcarousel from'react-bootstrap-carousel'

export default function Page1(){
    return(
        <>
        <div className=' page container-fluid'>
            <div className='row'>
              
            <div className='col-lg-2'>
                <h1>1PAGE</h1>
            </div>
            <div className='col-lg-4'></div>
            <div className='col-lg-6'>
            <ul className="nav justify-content-around">
            <li className="nav-item">
              <a className="nav-link active text-light" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-light" href="#">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-light" href="#">our services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-light" href="#">our Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-light" href="#">contact us</a>
            </li>
          </ul>
            </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-4'></div>
                <div className='col-lg-4 mt-5 text-center'>
                  <h1>Game Development</h1>
                </div>
                <div className='col-lg-4'></div>
            </div>
            <div className='col-lg-12'></div>
            <div className='row'>
              <div className='col-lg-4'></div>
              <div className='col-lg-4 text-center mt-5'>
                <p>Lorem ipsum is simply dummy text of the printing and typesetting industry</p>
              </div>
            </div>
            <div className='row mt-5'>
              <div className='col-lg-5'></div>
              <div className='col-lg-2'>
                <button type='button' id='submit' name='submit' className='btn btn-danger col-lg-12'>GET START</button>
              </div>
              <div className='col-lg-5'></div>
            </div>
        </div>
        </>
    )
}