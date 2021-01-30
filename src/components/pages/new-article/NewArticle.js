import React from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import NewArticleForm from './NewArticleForm'

function NewArticle() {
    return (
        <div className='HomeDetails NewArticle'>
            <Header />
            <NewArticleForm />
            <Footer />
        </div>
    )
}

export default NewArticle
