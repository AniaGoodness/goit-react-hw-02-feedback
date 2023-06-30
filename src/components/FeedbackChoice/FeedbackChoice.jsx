import React, { Component } from 'react';
import PropTypes from "prop-types";
import css from './FeedbackChoice.module.css'


export class FeedbackChoice extends Component {
    render() {
        const { onLeaveFeedback, variants } = this.props;
        return (
            <div>
                {variants.map((variant => <li key={variant.id}>
                    <button type='button' className={css.button} name={variant} onClick={onLeaveFeedback}>{variant.name}</button>
                    </li>
                ))}
            </div>
        )
    }

}
FeedbackChoice.propTypes = {
    variants: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    })),
    onLeaveFeedback: PropTypes.func.isRequired,
};