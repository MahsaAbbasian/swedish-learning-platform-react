// src/Components/Home.js
import React from 'react';
import './Home.css'; // Optional: For any specific styles if separated

function Home() {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/reading">Reading</a></li>
                    <li><a href="/flashcard">Flashcard</a></li>
                    <li><a href="/quiz">Quiz</a></li>
                    <li><a href="/game">Game</a></li>
                </ul>
            </nav>
            
            <header className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to Your Swedish Journey!</h1>
                    <p>Let's practice with cool exercises focused on Vocabulary and more.</p>
                    <a href="/signup" className="cta-button">Get Started</a>
                    <a href="/login" className="cta-button secondary">I already have an account</a>
                </div>
            </header>

            <main>
                <div className="learning-container">
                    <div id="reading" className="learning-section">
                        <img src="img/readingCha.PNG" alt="Learn Swedish" className="learning-image" />
                        <h2>Reading</h2>
                        <p>Improve your comprehension with engaging texts.</p>
                        <a href="/reading" className="cta-button">Start Reading</a>
                    </div>
                    <div id="writing" className="learning-section">
                        <img src="img/writingcha.PNG" alt="Learn Swedish" className="learning-image" />
                        <h2>Writing</h2>
                        <p>Enhance your writing skills with various exercises.</p>
                        <a href="/writing" className="cta-button">Start Writing</a>
                    </div>
                    <div id="WordList" className="learning-section">
                        <img src="img/wordList.png" alt="Learn Swedish" className="learning-image" />
                        <h2>Word List</h2>
                        <p>Practice your vocabulary comprehension with these word lists.</p>
                        <a href="/listening" className="cta-button">Explore Word Lists</a>
                    </div>
                    <div id="speaking" className="learning-section">
                        <img src="img/speakingcha.PNG" alt="Learn Swedish" className="learning-image" />
                        <h2>Speaking</h2>
                        <p>Develop your speaking skills through conversation practice.</p>
                        <a href="/speaking" className="cta-button">Start Speaking</a>
                    </div>
                </div>
            </main>

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

export default Home;
