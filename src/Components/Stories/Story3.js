// src/Components/Stories/Story3.js
import React from 'react';
import '../Flashcards.css';

function Story3() {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/reading">Reading</a></li>
                    <li><a href="/flashcards">Flashcards</a></li>
                    <li><a href="/quiz">Quiz</a></li>
                    <li><a href="/game">Game</a></li>
                </ul>
            </nav>

            <div className="story-content">
                <h2>Mystery i Lägenhet 13: Säsong 1, Avsnitt 3</h2>
                <h3>Kapitel 3: En Märklig Upptäckt</h3>
                <img src="/img/story3/storyImg.PNG" alt="Johan and Elias" className="story-image" />
                <p>
                    Senare den dagen, medan de <span className="tooltip">utforskade<span className="tooltiptext">explored / بررسی کردند / استكشاف</span></span> 
                    lägenheten, <span className="tooltip">hittade<span className="tooltiptext">found / وجدوا / پیدا کردند</span></span> de en dold dörr...
                </p>
                {/* Add additional story content here */}

                <h2>Flashcards för Mystery i Lägenhet 13: Säsong 1, Kapitel 3</h2>
                <div className="flashcard-container">
                    <div className="flashcard" data-word="utforskade">
                        <div className="front">utforskade</div>
                        <div className="back">explored / بررسی کردند / استكشاف</div>
                    </div>
                    <div className="flashcard" data-word="dörr">
                        <div className="front">dörr</div>
                        <div className="back">door / باب / در</div>
                    </div>
                    {/* Add additional flashcards here */}
                </div>
            </div>

            <footer>
                <p>Page created by Mahsa Abbasian. All rights reserved © 2024</p>
                <div className="footer-links">
                    <a href="mailto:mahsa.abbasian@outlook.com">Contact Email</a> |
                    <a href="https://www.linkedin.com/in/mahsa-abbasian-a893b44b/">LinkedIn Account</a> |
                    <a href="https://github.com/MahsaAbbasian">GitHub Account</a>
                </div>
            </footer>
        </div>
    );
}

export default Story3;
