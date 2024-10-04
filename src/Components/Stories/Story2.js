// src/Components/Stories/Story1.js
import React from 'react';
import '../Flashcards.css'; // Ensure path matches where your CSS file is located

function Story1() {
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
                <h2>Mystery i Lägenhet 13: Säsong 1, Kapitel 1</h2>
                <h3>Kapitel 1: Sökandet och Upptäckten</h3>
                <img src="/img/story1/johan_and_elias.png" alt="Johan and Elias" className="story-image" />
                <p>
                    Det hade tagit mer än
                    <span className="tooltip">tre år<span className="tooltiptext">three years / سه سال / ثلاث سنوات</span></span>
                    för Johan och Elias att hitta den perfekta lägenheten. De hade
                    letat genom många stadsdelar och tittat på otaliga platser...
                </p>
                {/* Continue with the rest of the story's content here, similar to the HTML file */}

                <h2>Flashcards för Mystery i Lägenhet 13: Säsong 1, Kapitel 1</h2>
                <div className="flashcard-container">
                    <div className="flashcard" data-word="tagit">
                        <div className="front">tagit</div>
                        <div className="back">taken / گرفته / أخذ</div>
                    </div>
                    <div className="flashcard" data-word="tre år">
                        <div className="front">tre år</div>
                        <div className="back">three years / سه سال / ثلاث سنوات</div>
                    </div>
                    {/* Add the remaining flashcards based on the `story1.html` structure */}
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

export default Story1;
