import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ItemContext } from '../../../App';

function HomeBody() {
    const items = useContext(ItemContext);
    const [newArticle, setNewArticle] = useState([]);
    useEffect(() => {
        setNewArticle(items)
    }, [items])
    return (
        <section className='HomeBody'>
            <div className='HomeBodyMain'>
                {
                    newArticle.map((article, index) => (
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
                <Link to='/'><span>Load More</span> <i className='icon-arrow-right-line'></i></Link>
            </div>
        </section>
    )
}
export default HomeBody;
