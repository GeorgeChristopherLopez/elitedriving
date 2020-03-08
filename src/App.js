import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Splash from './components/Splash';
import QuizSplash from './components/QuizSplash';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import QuizApp from './components/pages/QuizApp';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Route exact path="/" render={props => (
                    <Fragment>
                        <Splash />
                        <QuizSplash />
                        <Services />
                        <About />
                        <Testimonials />
                    </Fragment>              
                )} />
         <Route path="/quiz" component={QuizApp} />
                <Contact />
            </div>
        </Router>
        );
}

export default App;
