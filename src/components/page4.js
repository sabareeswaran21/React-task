import { faCode, faDesktop, faDesktopAlt, faDisplay, faGamepad, faGear, faGears, faMobileAndroid, faPhone, faShower, faWorm } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCircleDot, faFileWord } from '@fortawesome/free-regular-svg-icons';

export default function Page4(){
    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 text-center mt-5'>
                    <h1>Our Services</h1>
                    <p>A Comment is a flexible format,  the scientific, commercial, ethical, legal, societal, or political issues surrounding research. Comment articles should be topical, readable, provocative and introduce new concepts/points of view, providing a personal perspective on a matter of public or scientific importance.</p>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-3 bg-success ml-3 p-1 d-flex'>
                <FontAwesomeIcon icon={faDisplay} fontSize={20} className='p-2'/>
                <h5 className='ml-3 mt-1'>WEB DESIGN</h5>
                </div>
                <div className='col-lg-1'></div>
                <div className=' ml-3 col-lg-3 bg-success p-1 d-flex'>
                <FontAwesomeIcon icon={faDesktop} fontSize={20} className='p-2'/>
                <h5 className='ml-3 mt-1'>WEB DEVELOPMENT</h5>
                </div>
                <div className='col-lg-1'></div>
                <div className=' ml-3 col-lg-3 bg-success p-1 d-flex'>
                <FontAwesomeIcon icon={faGear} fontSize={20} className='p-2'/>
                <h5 className='ml-3 mt-1'>THEME DEVELOPMENT</h5>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-lg-3 bg-success ml-3 p-1 d-flex'>
                <FontAwesomeIcon icon={faGamepad} fontSize={20} className='p-2'/>
                <h5 className='ml-3 mt-1'>GAME DEVELOPMENT</h5>
                </div>
                <div className='col-lg-1'></div>
                <div className=' ml-3 col-lg-3 bg-success p-1 d-flex'>
                <FontAwesomeIcon icon={faMobileAndroid} fontSize={20} className='p-2'/>
                <h5 className='ml-3 mt-1'>APPS DEVELOPMENT</h5>
                </div>
                <div className='col-lg-1'></div>
                <div className=' ml-3 col-lg-3 bg-success p-1 d-flex'>
                <FontAwesomeIcon icon={faDesktopAlt} fontSize={20} className='p-2'/>
                <h5 className='ml-3 mt-1'>DESKTOP APPLICATION</h5>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-lg-3 bg-success ml-3 p-1 d-flex'>
                <FontAwesomeIcon icon={faFileWord} fontSize={20} className='p-2'/>
                <h5 className='ml-3 mt-1'>WORDPRESS THEMES</h5>
                </div>
                <div className='col-lg-1'></div>
                <div className=' ml-3 col-lg-3 bg-success p-1 d-flex'>
                <FontAwesomeIcon icon={faWorm} fontSize={20} className='p-2'/>
                <h5 className='ml-3 mt-1'>WORDPRESS OLUGING</h5>
                </div>
                <div className='col-lg-1'></div>
                <div className=' ml-3 col-lg-3 bg-success p-1 d-flex'>
                <FontAwesomeIcon icon={faPhone} fontSize={20} className='p-2'/>
                <h5 className='ml-3 mt-1'>SUPPORT & IT</h5>
                </div>
            </div>
            <div className='col-lg-12 mt-5'></div>
        </div>
        </>
    )
}