import React, { Component } from 'react';
import PropTypes from "prop-types";
import css from './Section.module.css'

export default class Section extends Component {
  
    render() {

    const { title, children } = this.props;

    return (
        <div>
            <h3 className={css.section}>{title}</h3>
            {children}
        </div>
    )
  }
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}