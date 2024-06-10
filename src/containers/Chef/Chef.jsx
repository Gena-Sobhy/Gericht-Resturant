import React from 'react'

import {SubHeading} from '../../components'
import {images} from '../../constants'
import './Chef.css'

const Chef = () => {
  return (
    <div className=" app__bg  section__padding" id="chef">

        <div className="app__wrapper_info">
            <SubHeading title="Chef's Word"/>
            <h1 className="headtext__cormorant">What We Belive In</h1>
        </div>

        <div className="app__chef">
        <div className=" app__chef_img">
            <img src={images.chef} alt="chef" />
        </div>

        <div className="app__chef-allcontent">
        <div className="app__chef-content">
            <div className="app__chef-content_quote">
                <img src={images.quote} alt="quote" />
                <p className="p__opensans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, culpa dolorum at molestias doloribus veritatis!</p>
            </div>
            <p className="p__opensans">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur neque sit ratione sunt sapiente dignissimos nemo quisquam, eveniet iste sint odit tenetur ullam iure! Officia eveniet culpa nam voluptas temporibus.</p>
        </div>

        <div className="app__chef-sign">
            <p>Kevin Luo</p>
            <p className="p__opensans">Chef & Founder</p>
            <img src={images.sign} alt="sign" />
        </div>

        </div>
        </div>
    </div>
  )
}

export default Chef