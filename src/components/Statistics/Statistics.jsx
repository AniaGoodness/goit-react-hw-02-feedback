import React, { Component } from 'react';
import PropTypes from "prop-types";
import css from './Statistics.module.css'

export default class Statistics extends Component {
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
Statistics.propTypes = {
  variants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })),
  onLeaveFeedback: PropTypes.func.isRequired
}