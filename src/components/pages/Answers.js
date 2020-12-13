import React, { Fragment } from 'react';

import Answer from './Answer';


function Answers(props) {
 
    return (
        <Fragment>
            <Answer
                number="1"
                answer={props.question.answer_1}
                selected={props.currentAnswer === "1"}
                handleClick={props.handleClick}
            />    
            <Answer
                number="2"
                answer={props.question.answer_2}
            
                selected={props.currentAnswer === "2"}
                handleClick={props.handleClick}
            />    
            <Answer
                number="3" 
                answer={props.question.answer_3}
                selected={props.currentAnswer === "3"}
                handleClick={props.handleClick}
            />    
            <Answer
                number="4"
                answer={props.question.answer_4}
                selected={props.currentAnswer === "4"}
                handleClick={props.handleClick}
            />    
        </Fragment>

    );
}

export default Answers;