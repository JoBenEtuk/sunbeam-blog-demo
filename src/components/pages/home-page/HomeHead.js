import React from 'react'
import Logo from '../../../assets/images/Logo.png'
import { Link } from 'react-router-dom';

function HomeHead() {
    return (
        <div className='HomeHead'>
            <img src={Logo} alt="sunbeam logo" />
            <div className="HomeHeadText">
                <h2>Learn Outspoken Details about Programing Like you’ve never heard before</h2>
            </div>
            <Link to="/newarticle" className="Highlight">Add New<span>&#43;</span></Link>
        </div>
    )
}

export default HomeHead
