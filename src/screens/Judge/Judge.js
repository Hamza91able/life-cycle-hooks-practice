import React, { Component } from 'react';


export default class Judge extends Component {
  constructor() {
    super();
    this.state = { stars: 0, available: false }
    this.applaud = this.applaud.bind(this)
  }

  applaud() {
    this.props.updateEmotion("Happy");
  }

  provideStars() {
    const { stars } = this.state;

    this.setState({ stars: stars + 1 })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.stars <= 5;
  }

  componentDidUpdate() {
    const { stars } = this.state;
    if (stars === 5) {
      this.props.updateQualification();
    }
  }

  render() {
    const { stars, available } = this.state;

    return (
      <div>
        <button type="button" onClick={this.applaud}>
          Appreciate performance
        </button>
        <button style={{marginLeft: "5px"}} type="button" onClick={this.provideStars.bind(this)}>
          Provide stars
        </button>

        Kid is available: {available}

        Stars gained: {stars}
      </div>
    );
  }
}
