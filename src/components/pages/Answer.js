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

