import { Component } from 'react';
import { FeedbackChoice } from './FeedbackChoice/FeedbackChoice';
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";

import variants from "data/ButtonVariants";


export default class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  }
  
  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

 clickHandler = (type) => {
    this.setState(
      prevState => ({
        [type]: prevState[type] + 1
      }),
    );
  
  }   

  render () {

    return (
      <>
        <Section title='Please leave feedback'>

          <FeedbackChoice 
            variants = {variants}
            onLeaveFeedback = {this.clickHandler}
          />
        
          <Statistics 
            good = {this.state.good}
            neutral = {this.state.neutral}
            bad = {this.state.bad}
          />

        </Section>
      </> 
      
    )
  }
}

