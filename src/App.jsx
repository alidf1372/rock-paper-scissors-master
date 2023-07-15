import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Paper from './components/Paper';
import Scissor from './components/Scissor';
import Rock from './components/Rock';

function App() {
    const [score, setScore] = useState(0);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const savedScore = localStorage.getItem('score');
        if (savedScore) {
            setScore(parseInt(savedScore));
        }
    }, []);

    const handleScoreChange = (newScore) => {
        setScore(newScore);
        localStorage.setItem('score', newScore.toString());
    };

    return (
        <BrowserRouter>
            <main className="main">
                <section className="top_info">
                    <article className="logo"></article>
                    <article className="score">
                        <div className="score_title">SCORE</div>
                        <div className="score_count">{score}</div>
                    </article>
                </section>
                <Routes>
                    <Route path="/" element={<Home handleScoreChange={handleScoreChange} />} />
                    <Route path="/paper/:systemChoice" element={<Paper />} />
                    <Route path="/scissor/:systemChoice" element={<Scissor />} />
                    <Route path="/rock/:systemChoice" element={<Rock />} />
                </Routes>
                <div className="rules">
                    <button onClick={() => {setModal(true)}}>RULES</button>
                </div>
                {modal &&
                <div className="rules_contents">
                    <div className="desktop_rules">
                        <span className="rules_title">RULES</span>
                        <span className="close_icon" onClick={() => {setModal(false)}}>
                        <svg height="20px" viewBox="0 0 512 512" width="20px" xmlns="http://www.w3.org/2000/svg">
                            <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>
                        </svg>
                    </span>
                    </div>
                </div>
                    }
            </main>

            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="http://aliferdows.ir" target="_blank">Ali Doozandeh Ferdows</a>.
            </div>

        </BrowserRouter>
    );
}

export default App;
