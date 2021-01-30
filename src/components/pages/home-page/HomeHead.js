import React from 'react'
import Logo from '../../../assets/images/Logo.png'

function HomeHead() {
    return (
        <div className='HomeHead'>
            <img src={Logo} alt="sunbeam logo"/>
            <div className="HomeHeadText">
                <h2>Learn Outspoken Details about Programing Like you’ve never heard before</h2>
            </div>
            <a href="/newarticle" className="Highlight">Add New<span>&#43;</span></a>            
        </div>
    )
}

export default HomeHead
