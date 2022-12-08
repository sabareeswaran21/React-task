import { faEye, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft, faFaceTired, faRecordVinyl, faTimes } from '@fortawesome/free-solid-svg-icons';
export default function Page3(){
    return(
        <>
        <div className='container-fluid'>
            <div className='row'>
            <div className='col-lg-4 text-center mt-4 bg-primary text-light'>
            <FontAwesomeIcon icon={faClockRotateLeft} className='mt-3' fontSize={70}/>
                <h1 className='mt-3'>Our Story</h1>
                <p className='mt-3 p-5'>A Comment is a flexible format,  the scientific, commercial, ethical, legal, societal, or political issues surrounding research. Comment articles should be topical, readable, provocative and introduce new concepts/points of view, providing a personal perspective on a matter of public or scientific importance.</p>
            </div>
            <div className='col-lg-4 text-center mt-4 bg-dark text-light'>
            <FontAwesomeIcon icon={faRecordVinyl} className='mt-3' fontSize={70}/>
                <h1 className='mt-3'>Our Mission</h1>
                <p className='mt-3 p-5'>A Comment is a flexible format,  the scientific, commercial, ethical, legal, societal, or political issues surrounding research. Comment articles should be topical, readable, provocative and introduce new concepts/points of view, providing a personal perspective on a matter of public or scientific importance.</p>
            </div>
            <div className='col-lg-4 text-center mt-4 bg-primary text-light'>
            <FontAwesomeIcon icon={faEye} className='mt-3' fontSize={70}/>
                <h1 className='mt-3'>Our Mission</h1>
                <p className='mt-3 p-5'>A Comment is a flexible format,  the scientific, commercial, ethical, legal, societal, or political issues surrounding research. Comment articles should be topical, readable, provocative and introduce new concepts/points of view, providing a personal perspective on a matter of public or scientific importance.</p>
            </div>
            </div>
        </div>
        </>
    )
}