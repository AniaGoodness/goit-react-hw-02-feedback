import { Component } from 'react';
import { FeedbackChoice } from './FeedbackChoice/FeedbackChoice';
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    };
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
      <div>
        <Section title='Please leave feedback'>

          <FeedbackChoice 

            onLeaveFeedback = {this.clickHandler}
          />
        
          <Statistics 
            good = {this.state.good}
            neutral = {this.state.neutral}
            bad = {this.state.bad}
          />

        </Section>
      </div> 
      
    )
  }
}

