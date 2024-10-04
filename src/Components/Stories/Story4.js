// src/Components/Stories/Story4.js
import React from 'react';
import '../Flashcards.css';

function Story4() {
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
                <h2>Mystery i Lägenhet 13: Säsong 1, Avsnitt 4</h2>
                <h3>Kapitel 4: Löser Mysteriet</h3>
                <img src="/img/story4/StoryImg.PNG" alt="Johan and Elias" className="story-image" />
                <p>
                    "Kanske var det det som <span className="tooltip">fru Ulla<span className="tooltiptext">Mrs. Ulla / خانم اوللا / السيدة أولا</span></span> pratade om," 
                    sade Elias. "Familjen måste ha <span className="tooltip">lämnat<span className="tooltiptext">left / ترک کردند / غادروا</span></span> hastigt."
                </p>
                {/* Add additional story content here */}

                <h2>Flashcards för Mystery i Lägenhet 13: Säsong 1, Kapitel 4</h2>
                <div className="flashcard-container">
                    <div className="flashcard" data-word="Ulla">
                        <div className="front">Ulla</div>
                        <div className="back">Proper Name / نام خاص / اسم علم</div>
                    </div>
                    <div className="flashcard" data-word="sade">
                        <div className="front">sade</div>
                        <div className="back">said / گفت / قال</div>
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

export default Story4;
