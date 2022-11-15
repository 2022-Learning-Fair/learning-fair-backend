import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import wordCloud from './WordCloud';
// import Header from './Header';
// import { Link } from 'react-router-dom';

function Main() {
    return (
        <div className="Main">
            <Router>
                <Routes>
                    <Route path="/main" element={<wordCloud />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Main;