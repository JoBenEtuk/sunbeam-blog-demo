import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ItemContext } from '../../../App';

function HomeBody() {
    const data = useContext(ItemContext);
    return (
        <section className='HomeBody'>
            <div className='HomeBodyMain'>
                {
                    data.map((article, index) => (
                        <Link key={index} to={article.head && `/home/${((article.head).toLowerCase().trim().split(/\W+/).join('-').substring(0, 12))}`}>
                            <div className='Article'>
                                <img src={article.images} alt='ref' />
                                <h2 className='ArticleHead'>{article.head}</h2>
                                <div className="ArticleBody">{article.body && ((article.body).substring(0, 100) + '...')}</div>
                                <span className="Aside">
                                    <span className="AsideDate" >{article.date}</span> &bull;
                                    <span className="New">NEW</span> &bull;
                                    <span className="MiniHighlight">{article.highlight}</span>
                                </span>
                                <div className='ReadMore'>
                                    <span>Read More</span> <i className='icon-arrow-right-line'></i>
                                    <div className="More"></div>
                                </div>
                            </div>
                        </Link>
                    )
                    )
                }
            </div>
            <div className='LinkMore'>
                <a href='/'><span>Load More</span> <i className='icon-arrow-right-line'></i></a>
            </div>
        </section>
    )
}

export default HomeBody
