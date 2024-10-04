// src/Components/Reading.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Flashcards.css';

function Reading() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/reading">Reading</Link></li>
                    <li><Link to="/flashcards">Flashcards</Link></li>
                    <li><Link to="/test">Test</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </nav>

            <div className="content">
                <h1>Reading</h1>
                <p>
                    In this section, there are lots of different level stories that you can
                    start one by one and practice the Swedish language in the form of a
                    story. Later, you can see and practice vocabulary as a next level.
                </p>

                <div className="story-container">
                    <a href="stories/story1.html" className="story-box">
                        <img src="../img/story1/frontImg.PNG" alt="Story 1" />
                        <h3>Mystery in Apartment 13<br />Kapitel 1</h3>
                        <h3>Sökandet och Upptäckten</h3>
                    </a>

                    <a href="stories/story2.html" className="story-box">
                        <img src="../img/story2/frontPage.PNG" alt="Story 2" />
                        <h3>Mystery in Apartment 13 <br />Kapitel 2</h3>
                        <h3>Märkliga Saker Börjar Hända</h3>
                    </a>

                    <a href="stories/story3.html" className="story-box">
                        <img src="../img/story3/frontImg.PNG" alt="Story 3" />
                        <h3>Mystery in Apartment 13<br />Kapitel 3</h3>
                        <h3>En Märklig Upptäckt</h3>
                    </a>

                    <a href="stories/story4.html" className="story-box">
                        <img src="../img/story4/frontImg.PNG" alt="Story 4" />
                        <h3>Mystery in Apartment 13 - Kapitel 4</h3>
                        <h3>Löser Mysteriet</h3>
                    </a>

                    <a href="stories/story5.html" className="story-box">
                        <img src="../img/story5/frontImg.PNG" alt="Story 5" />
                        <h3>Mystery in Apartment 13<br />Kapitel 5</h3>
                        <h3>Säsongens Final—Sanning eller Myt</h3>
                    </a>
                </div>
            </div>

            <footer>
                <p>Page created by Mahsa Abbasian. All rights reserved © 2024</p>
                <div className="footer-links">
                    <a href="mailto:mahsa.abbasian@outlook.com">Contact Email</a> |
                    <a href="https://www.linkedin.com/in/mahsa-abbasian-a893b44b/">LinkedIn Account</a> |
                    <a href="https://github.com/MahsaAbbasian">GitHub Account</a>
                </div>
                <div className="footer-links">
                    <a href="/privacy">Privacy Policy</a> |
                    <a href="/terms">Terms of Use</a>
                </div>
            </footer>
        </div>
    );
}

export default Reading;
