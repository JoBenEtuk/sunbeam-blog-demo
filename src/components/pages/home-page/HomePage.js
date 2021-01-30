import React from 'react'
import HomeBody from './HomeBody'
import HomeHead from './HomeHead'
import Footer from '../../layout/Footer'

function HomePage() {
    return (
        <div className='HomePage'>
            <HomeHead />
            <HomeBody />
            <Footer />
        </div>
    )
}

export default HomePage
