import React, { Fragment } from 'react';
import styled from 'styled-components';


function Answer(props) {
    let classes = ['answer'];

    if (props.selected) {
        classes.push('selected');
    }

    return (
        <button value={props.number} className={classes.join(' ')} onClick={props.handleClick}>
            <span className="number">{`${props.number}.) `} </span> {props.answer}
        </button>


    );
}

export default Answer;

const Button = styled.button`
padding : 1rem;
width: 80%;
background: var(--secondary-color);
color: var(--light);
font-size: 1.5rem;
text-align: left;
border: none;
border-radius: 5rem;
margin: 1rem;
&:hover{
background: var(--main-color);

}
`;