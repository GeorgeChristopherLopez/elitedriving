import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';
import Question from './Question';
import Answers from './Answers';
import QuestionData from '../../data/questions.json';


function QuizApp(props) {
    // accessing JSON data
    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [answers, setAnswers] = useState([]);
    const question = QuestionData[currentQuestion];
    const handleClick = e => {

        console.log(e.target);
        setCurrentAnswer(e.target.value);
    }
    return (
        <QuizAppDiv className="QuizApp">
           
            <QuizCard>
          
                <ProgressBar currentQ="1" totalQ="20" />
                <Question question={`${question.question}`} />
                <Answers question={question} currentAnswer={currentAnswer} handleClick={handleClick} />
                <br />
                <button style={{ cursor: "pointer", fontSize:"1.5rem", width: "15rem", background: "var(--light-blue)", padding: "1.4rem", border: "none" }}>Submit</button>
            </QuizCard>
         
        </QuizAppDiv>
    );
}

export default QuizApp;


const QuizAppDiv = styled.div`
    padding: 10rem 2rem 3rem;
    background: var(--main-color);
    text-align: center;

`


const QuizCard = styled.div`

    width:80%;
    margin: 1rem auto;
    background: #bbb;
padding: 2rem;


`