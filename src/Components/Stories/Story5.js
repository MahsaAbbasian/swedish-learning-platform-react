// src/Components/Stories/Story5.js
import React from 'react';
import '../Flashcards.css';

function Story5() {
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
                <h2>Mystery i Lägenhet 13: Säsong 1, Avsnitt 5</h2>
                <h3>Kapitel 5: Säsongens Final—Sanning eller Myt?</h3>
                <img src="/img/story5/storyImg.PNG" alt="Johan and Elias" className="story-image" />
                <p>
                    Johan och Elias satt i köket och stirrade på nyckeln. De hade hittat en ledtråd, 
                    men var inte säkra på vad de skulle göra härnäst.
                </p>
                {/* Add additional story content here */}

                <h2>Flashcards för Mystery i Lägenhet 13: Säsong 1, Kapitel 5</h2>
                <div className="flashcard-container">
                    <div className="flashcard" data-word="köket">
                        <div className="front">köket</div>
                        <div className="back">kitchen / آشپزخانه / مطبخ</div>
                    </div>
                    <div className="flashcard" data-word="ledtråd">
                        <div className="front">ledtråd</div>
                        <div className="back">clue / سرنخ / دليل</div>
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

export default Story5;
