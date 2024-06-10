import React from 'react'

import {images} from '../../constants'
import './header.css'

import { SubHeading } from '../../components'


const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id='home'>
        <div className="app__wrapper_info">
            <SubHeading title="Chase the new flavour"/>
            <h1 className="app__header-h1">The Key To Fine Dining</h1>
            <p className="p__opensans" style={{margin: '2rem 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tempore quaerat, eos aliquam expedita beatae incidunt vitae voluptatibus est animi recusandae quidem repellat voluptate assumenda!</p>
            <button className="custom__button" type='button'>Explore Menu</button>
        </div>
        
        <div className="app__header-img">
          <img src={images.welcome} alt="welcome img" />
        </div>
    </div>
  )
}

export default Header