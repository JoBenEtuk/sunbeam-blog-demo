import React from 'react';
import image from '../../../assets/images/Photo01.jpg';

function HomeDetailsMain() {
    return (
        <main>
            <section className='HomeDetailsHead'>
                <div className="HomeDetailsHeadText">
                    <h2>The creative process behind Diana Etuk Design - A UX writing case study</h2>
                </div>
                <div className="HomeDetailsHeadImage">
                    <img src={image} alt='sample'/>
                </div>
                <span className="Aside">
                    <span className="AsideDate">14th June, 2020</span> &bull;
                    <span className="New">NEW</span> &bull;
                    <a href="/" className="MiniHighlight"> UX Writing</a>
                </span>
            </section>
            <section className='HomeDetailsMain'>
                <div>
                    I am highly organized, motivated and disciplined with great integrity and the ability to work under pressure. I put value into whatever I do but more than anything, I always look forward to challenging tasks that produce great results.
                </div>
            
                <div>
                    I feel lucky. Being one of the editors at the UX Collective allows me to read tons of great stories every week, submitted by designers from all over the world. People who have different backgrounds than my own, work at different companies, face different
                    challenges every day. People who simply dedicate their time to sharing their learnings with the broader community.
                </div>
            
                <div>
                    After reviewing and publishing more than a thousand articles this year, here are some of my personal favorites.
                </div>
            
                <div>In 2019 I learned that…</div>
            
                <div>
                    <span className="bold-text">white space can hurt a product experience</span>, and data density matters depending on what that product’s goals are
                    <div className="credit">
                        — thanks to Patrick Deuley and Christie Lenneville
                    </div>
                </div>
            
                <div>
                    <span className="bold-text">Respect is the one value (if we were all forced to pick one)</span> that designers should have: respect the user’s time, dignity, ability, and means.
                    <div className="credit">
                        — thanks to Cyd Harrell
                    </div>
                </div>
        
        
                <div>
                    <span className="bold-text">Too many chefs spoil the stew:</span> UX teams are becoming so inflated in larger companies that one’s workflow can easily become a game of telephone
                    <div className="credit">
                        — thanks to Michal Malewicz
                    </div>
                </div>
        
        
                <div>
                    <span className="bold-text">There are many different ways motion can add to the user experience,</span> and understanding what motion is trying to achieve can help designers be more assertive on the tools, techniques, and workflow they pick
                    <div className="credit">
                        — thanks to Yifan Ding
                    </div>
                </div>
        
        
                <div>
                    <span className="bold-text">We can’t tell women to fix sexist workplaces,</span> and articles like “How women should negotiate better” or “Tactics for women to be heard” end up hurting more than helping
                    <div className="credit">
                        — thanks to Kira Hodgson
                    </div>
                </div>
        
        
                <div>
                    <span className="bold-text">With the right framework,</span> we can fix any problem
                    <div className="credit">
                        — thanks to Lenny Rachitsky
                    </div>
                </div>
        
        
                <div>
                    <span className="bold-text">The future of branding relies on flexibility,</span> and the logo as we know it might die pretty soon
                    <div className="credit">
                        — thanks to Rory Macrae
                    </div>
                </div>
        
        
                <div>
                    <span className="bold-text">A lot of design tools are holding us back,</span> because they are still using methods, workflows, and features from graphic and visual design
                    <div className="credit">
                        — thanks to Tom Johnson
                    </div>
                </div>
                <div>
                    I am highly organized, motivated and disciplined with great integrity and the ability to work under pressure. I put value into whatever I do but more than anything, I always look forward to challenging tasks that produce great results
                </div>
            </section>
        </main>
    )
}

export default HomeDetailsMain
