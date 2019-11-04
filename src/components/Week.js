import React, {Component} from 'react';

export default class Week extends Component{
  constructor(props) {
    super(props);
    this.state = {
      week: [
        {
          "day": "sat",
          "from": "10:00",
          "to": "23:00"
        },
        {
          "day": "mon",
          "from": "11:00",
          "to": "23:00"
        },
        {
          "day": "tue",
          "from": "11:00",
          "to": "23:00"
        },
        {
          "day": "wed",
          "from": "12:00",
          "to": "23:00"
        },
        {
          "day": "thu",
          "from": "12:00",
          "to": "23:00"
        },
        {
          "day": "fri",
          "from": "12:00",
          "to": "23:00"
        },
        {
          "day": "sun",
          "from": "10:00",
          "to": "23:00"
        }
      ]
    }
  };

  xyu = () => {
    console.log(this.state.week)
  };

  // Output should be like this:
  //   MON - TUE: 11:00 - 23:00
  // WED - FRI: 12:00 - 23:00
  // SAT-SUN: 10:00 - 23:00



  render() {
    return(
      <>
        {this.xyu()}
      </>
    )
  }
}
