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
    const [error, setError] = useState('');
    const [answers, setAnswers] = useState([]);
    const question = QuestionData[currentQuestion];
    const [showResults, setShowResults] = useState(false);
    const handleClick = e => {
        setError('');
        console.log(e.target);
        console.log(QuestionData);
        setCurrentAnswer(e.target.value);
    }
    const renderError = () => {
        if (!error) {
            return;
        }
        return <div style={{ textAlign: "center", color: "red", fontSize: "1.24rem" }} className="error">{error}</div>;
    }
    const next = () => {
      
        const answer = {
            questionId: question.id,
            answer: currentAnswer
        }
        if (!currentAnswer) {
            setError('Please select an option');
            return;
        }
        answers.push(answer);
        setAnswers(answers);
        setCurrentAnswer('');

        if (currentQuestion + 1 < QuestionData.length) {
            setCurrentQuestion(currentQuestion + 1);
            return;
        }
        setShowResults(true);
    }
    const renderResultsData = () => {
        return answers.map(
            answer => {
                const question = QuestionData.find(question => question.id === answer.questionId
                );

                return (
                   <tr>
                        <td key={question.id}>{question.question}</td>
                        <td>{answer.answer}</td>
                        {renderResultMark(question, answer)}
                   </tr>

                   
                );
        });
    };
     
       
        
    const restart = () => {
        setAnswers([]);
        setCurrentAnswer("");
        setCurrentQuestion(0);
        setShowResults(false);
    }
    const renderResultMark = (question, answer)=>{
        if (question.correct === answer.answer) {
            return <td style={{ color: "green" }}>Correct</td>
        } else {
            return <td style={{ color: "red" }}>Incorrect</td>
        }
    }
    if (showResults) {
        return (
            <QuizAppDiv className="QuizApp">
                <QuizCard>
           
                        <h2>Results</h2>

                  

                    <table 
                        cellspacing="15" style={{ width: "100%", textAlign:"left" }} >
                        <tr>
                            <th>Question</th>
                            <th>Answered</th>
                            <th>Mark</th>
                        </tr>
                       {renderResultsData()}
                
                    </table>              



                    <button style={{ textAlign: "center", cursor: "pointer", fontSize: "1.5rem", width: "15rem", background: "var(--light-blue)", padding: "1.4rem", border: "none" }} onClick={restart}> RESTART</button>
                </QuizCard>

                </QuizAppDiv>
            )
    } else {
        return (
            <QuizAppDiv className="QuizApp">

                <QuizCard>

                    <ProgressBar currentQ={currentQuestion + 1} totalQ={QuestionData.length} />
                    <Question question={`${question.question}`} />
                    {renderError()}
                    <Answers question={question} currentAnswer={currentAnswer} handleClick={handleClick} />
                    <br />
                    <button style={{ textAlign: "center", cursor: "pointer", fontSize: "1.5rem", width: "15rem", background: "var(--light-blue)", padding: "1.4rem", border: "none" }} onClick={next}> Submit</button>

                </QuizCard>

            </QuizAppDiv>
        );

    }
}

export default QuizApp;


const QuizAppDiv = styled.div`
    padding: 10rem 0rem;
    margin-top: auto;
    background: var(--main-color);
    text-align: center;

`


const QuizCard = styled.div`

    width:75%;
    max-width: 1260px;
    margin: 1rem auto;
    background: #eee;
    padding: 2rem;
    border-radius: 5rem;


`
const SubmitButton = styled.button`
padding : 1.4rem;
width: 12rem;
cursor: pointer;
background: var(--main-color);
color: var(--light);
font-size: 1.5rem;
text-align: center;
border: none;
border-radius: 5rem;
margin: 1rem;
&:hover{
background: var(--secondary-color);

}
`;