import React from 'react'

import {SubHeading} from '../../components';
import {images} from '../../constants';

import './findUs.css'

const FindUs = () => {
  return (
    <div className="app__bg app__findus section__padding" id="contact">

        <div className="app__wrapper-info">
            <SubHeading title='contact' />
            <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Find Us</h1>

            <div className="app__wrapper-content">
                <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, explicabo?</p>
                <p className="p__cormorant" style={{color: '#DCCA87' , margin: '2rem 0'}}>Opening Hours</p>
                <p className="p__opensans">Mon - Fei: 10:00 am - 2:00 am</p>
                <p className="p__opensans">Sat - Sun: 10:00 am - 3:00 am</p>
            </div>

        </div>

        <div className="app__wrapper-img">
            <img src={images.findus} alt="findus" />
        </div>

    </div>
  )
}

export default FindUs