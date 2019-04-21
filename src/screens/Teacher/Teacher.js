import React, { Component } from 'react';

export default class Teacher extends Component {

  sendDataToKid() {
    const furtherSteps = ["Step 3", "Step 4", "Step 5"]
    //Send this data to Kid.js
    this.props.updateSteps(furtherSteps);
  }


  render() {

    return (
      <button onClick={this.sendDataToKid.bind(this)}>Get Help From Teacher</button>
    );
  }
}
