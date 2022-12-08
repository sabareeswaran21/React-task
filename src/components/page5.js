import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faCheck, faHeartCircleBolt, faPeopleLine } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import './page.css';

export default function Page5(){
    return(
        <>
        <div className='container-fluid'>
            <div className='row bg-primary text-light p-3'>
                <div className='col-lg-3 text-center'>
                <FontAwesomeIcon icon={faBasketShopping} fontSize={60}/>
                <p className='word'>12+</p>
                <h5>YEAR OF EXPERIANCE</h5>
                </div>
                <div className='col-lg-3 text-center'>
                <FontAwesomeIcon icon={faCircleCheck} fontSize={60}/>
                <p className='word'>999+</p>
                <h5>COMPLETED PROJECTS</h5>
                </div>
                <div className='col-lg-3 text-center'>
                <FontAwesomeIcon icon={faPeopleLine} fontSize={60}/>
                <p className='word'>480+</p>
                <h5>TOTAL CLIENTS</h5>
                </div>
                <div className='col-lg-3 text-center'>
                <FontAwesomeIcon icon={faHeartCircleBolt} fontSize={60}/>
                <p className='word'>15+</p>
                <h5>AWARD WON</h5>
                <div className='col-lg-12 mb-4'></div>
                </div>
            </div>
        </div>
        </>
    )
}