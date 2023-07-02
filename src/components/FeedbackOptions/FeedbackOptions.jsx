import React, { Component } from 'react';
import PropTypes from "prop-types";
import css from './FeedbackOptions.module.css'


export class FeedbackOptions extends Component {
    render() {
        const { onLeaveFeedback, options } = this.props;
      return (
        <div className = { css.feedback } >
            {options.map((option) => (
                <button
                    className={css.button}
                    name={option}
                    key={option}
                    type="button"
                    onClick={() => onLeaveFeedback(option)}
                >
                    {option}
                </button>
            ))}
        </div>
      )
    }

}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
