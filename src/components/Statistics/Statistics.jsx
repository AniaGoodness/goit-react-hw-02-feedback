import React, { Component } from 'react';
import PropTypes from "prop-types";
import Notification from '../Notification/Notification';
import css from './Statistics.module.css';


export default class Statistics extends Component {
  render() {

    const {
        good,
        neutral,
        bad,
        total,
        positivePercentage
    } = this.props;


    return (
      <div className={css.statistics}>
        {total ? (<>
        <div className={css.statisticsList}><p className={css.statisticsLabel}>Good: </p> <p className={css.statisticsValue}>{good}</p></div>
        <div className={css.statisticsList}> <p className={css.statisticsLabel}>Neutral: </p> <p className={css.statisticsValue}>{neutral}</p></div>
        <div className={css.statisticsList}> <p className={css.statisticsLabel}>Bad: </p> <p className={css.statisticsValue}>{bad}</p></div>
        <div className={css.statisticsList}> <p className={css.statisticsLabel}>Total: </p> <p className={css.statisticsValue}>{total}</p></div>
        <div className={css.statisticsList}> <p className={css.statisticsLabel}>Positive feedback: </p> <p className={css.statisticsValue}>{positivePercentage} %</p> </div>
        </>) : <Notification message='There is no feedback'/>}
      </div>
    )
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}
