// src/Components/Stories/Story1.js
import React from 'react';
import '../Flashcards.css';

function Story1() {
  return (
    <div>
      <h2>Mystery i Lägenhet 13: Säsong 1, Kapitel 1</h2>
      <h3>Kapitel 1: Sökandet och Upptäckten</h3>
      <img src="/img/story1/johan_and_elias.png" alt="Johan and Elias" className="story-image" />
      <p>Det hade tagit mer än tre år för Johan och Elias att hitta den perfekta lägenheten...</p>
      
      {/* Flashcards Section */}
      <h2>Flashcards</h2>
      <div className="flashcard-container">
        <div className="flashcard" data-word="tagit">
          <div className="front">tagit</div>
          <div className="back">taken / گرفته / أخذ</div>
        </div>
        {/* Add more flashcards similarly */}
      </div>
    </div>
  );
}

export default Story1;
