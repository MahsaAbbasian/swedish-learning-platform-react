import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Reading from './Components/Reading';
import Story1 from './Components/Stories/Story1';
import Story2 from './Components/Stories/Story2';
import Story3 from './Components/Stories/Story3';
import Story4 from './Components/Stories/Story4';
import Story5 from './Components/Stories/Story5';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reading" element={<Reading />} />
                <Route path="/story1" element={<Story1 />} />
                <Route path="/story2" element={<Story2 />} />
                <Route path="/story3" element={<Story3 />} />
                <Route path="/story4" element={<Story4 />} />
                <Route path="/story5" element={<Story5 />} />
            </Routes>
        </Router>
    );
}

export default App;
