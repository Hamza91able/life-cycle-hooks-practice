import React, { Component } from 'react';

export default class Kid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emotion: 'nervous',
      danceSteps: [],
      currentStepIndex: 0,
      startedPerforming: false,
      qualified: false,
    };
  }

  componentDidMount() {
    this.setState({
      danceSteps: ["Step 1", "Step 2"],
    })
  }

  componentWillUnmount() {
    this.props.isKidGone();
  }

  static getDerivedStateFromProps(props, state) {
    const danceSteps = [...state.danceSteps, ...props.furtherSteps];

    return {
      danceSteps: state.danceSteps.length < 5 ? danceSteps : state.danceSteps,
      startedPerforming: danceSteps.length >= 5,
      emotion: props.emotion || 'Nervous'
    }
  }

  qualified() {
    this.setState({
      danceSteps: [],
      qualified: true,
      startedPerforming: false
    })
  }

  render() {
    const { dressColor } = this.props;
    const { danceSteps, emotion, startedPerforming, currentStepIndex, qualified } = this.state;

    return (
      <div>
        <div>dressColor: {dressColor}</div>
        <div style={{ backgroundColor: dressColor, width: 50, height: 50 }}></div>
        <div>Emotion: {emotion}</div>
        {startedPerforming &&
          <div>
            <div>Current Step: {danceSteps[currentStepIndex]}</div>
            <button disabled={currentStepIndex > 3} onClick={() => this.setState({ currentStepIndex: currentStepIndex + 1 })}>Perform Next Step</button>
          </div>}
        {qualified ? <div>Qualified</div> : <div>Not Qualified</div>}
      </div>
    );
  }
}

Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };
