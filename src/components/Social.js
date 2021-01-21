import React from 'react';
import './Social.css';

const Social = () => {
    return (
        <div className="container_social">

            <ul className="accordion">
                <li className="tab">
                    <div className="social youtube">
                        {/* use target so that link opens in new tab */}
            <a href="https://www.youtube.com" target="blanck">Youtube</a>
                    </div>
                    <div className="content">
                        <h1>Youtube</h1>
                        <p>Follow us on Youtube for tuttorials.</p>
                    </div>
                </li>
                <li className="tab">
                    <div className="social twitter">
                        <a href="https://twitter.com/traversymedia" target="_blank">Twitter</a>
                    </div>
                    <div className="content">
                        <h1>Twitter</h1>
                        <p>Follow me on Twitter for video and course updates, article & blogshares and more</p>
                    </div>
                </li>
                <li className="tab">
                    <div className="social facebook">
                        <a href="https://facebook.com/traversymedia" target="_blank">Facebook</a>
                    </div>
                    <div className="content">
                        <h1>Facebook</h1>
                        <p>
                            Follow me on Facebook to stay up to date with Traversy Media and
                            get notified of new videos, publications, etc</p>
                    </div>
                </li>
                <li className="tab">
                    <div className="social linkedin">
                        <a href="https://www.linkedin.com/in/bradtraversy" target="_blank"
                        >LinkedIn</a>
                    </div>
                    <div className="content">
                        <h1>LinkedIn</h1>
                        <p>Connect with me on a professional level on Linkedin</p>
                    </div>
                </li>
                <li className="tab">
                    <div className="social instagram">
                        <a href="http://instagram.com/traversymedia" target="_blank">Instagram</a>
                    </div>
                    <div className="content">
                        <h1>Instagram</h1>
                        <p>Follow me on Instragram for a more personal look into my life and work</p>
                    </div>
                </li>
                <li className="tab">
                    <div className="social github">
                        <a href="http://github.com/bradtraversy" target="_blank">Github</a>
                    </div>
                    <div className="content">
                        <h1>Github</h1>
                        <p>Check out my Github for tutorial code, my personal projects and more</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Social;