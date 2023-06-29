import React, { Component } from 'react';
import PropTypes from "prop-types";
import css from './FeedbackChoice.module.css'

export default class FeedbackChoice extends Component {
    render() {
        const { onLeaveFeedback, variants } = this.props;
        return (
            <div>
                {variants.map(variant => (
                    <button type='button' className={css.button} key={variant} name={variant} onClick={onLeaveFeedback} />
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
  onLeaveFeedback: PropTypes.func.isRequired
}