import React, { Component } from 'react';
import Kid from './screens/Kid/Kid';
import Judge from './screens/Judge/Judge';
import Teacher from './screens/Teacher/Teacher';

class App extends Component {
  constructor() {
    super();

    this.state = {
      volume: 0,
      furtherSteps: [],
      qualified: false,
      removeJudges: false,
    }
    this.isQualified = this.isQualified.bind(this);
  }

  isQualified() {
    this.setState({
      qualified: true,
    })
  }

  isKidGone() {
    this.setState({
      removeJudges: true,
    })
  }

  updateEmotion(emotion) {
    this.setState({
      emotion: emotion,
    })
  }

  updateQualification() {
    if (this.state.qualified === false) {
      this.child.qualified();
    }
  }

  updateSteps(furtherSteps) {
    this.setState({
      furtherSteps,
      startedPerforming: true,
    })
  }

  static getDerivedStateFromProps() {
    return { volume: 5 };
  }

  render() {
    const { volume, furtherSteps, emotion, startedPerforming, qualified, removeJudges } = this.state;

    return (
      <div>
        {!qualified && <Kid isKidGone={this.isKidGone.bind(this)} ref={instance => { this.child = instance; }} dressColor="yellow" emotion={emotion} furtherSteps={furtherSteps} startedPerforming={startedPerforming} />}
        <br /><br />
        {!removeJudges && <div>Volume: {volume}</div>}
        {!removeJudges && <Teacher updateSteps={this.updateSteps.bind(this)} />}
        <br /><br />
        {!removeJudges && <Judge updateQualification={this.updateQualification.bind(this)} updateEmotion={this.updateEmotion.bind(this)} />}
        <br /><br />
        <button disabled={removeJudges} onClick={this.isQualified}>Ask the kid to leave</button>
        <br /><br />
        {removeJudges && <div>Show Finished</div>}
      </div>
    );

  }
}

export default App;


  /*
  Life Cycle Hooks.
  
  Initialization
    -Constructor
      -state initilize.
      -this bind.
      -runs only once in component's life.
    -getDerivedStateFromProps
      -This will be used instead of all the will's.
      -Runs imediatly after Constructor.
      -We always use static with it.
      -'this' is not present in state.
    -EG: static getDerivedStateFromProps(props) {
        return (parentText: props.text);
      }
    -Runs of initializaiton as well as updation.
    -Render function doesn't run again because we use return.
  -render
      -jsx output.
  -componentDidMount
      -Only runs once in component's life.
      -Fethcing data from API.
      -Initially calling a function.

Updation
    -getDerivedStateFromProps
    -shouldComponentUpdate
      -Asking for permission.
      -if 'true' is returned => component will be updated.
      -if 'false' is returned => component will not update.
    -rnder
    -getSnapshotBeforeUpdate
      -???
    -componentDidUpdate
      -It recieves previous props.
      -It recieves previous state.
      -You can compare previous state and updated state in here.
      -It contains 3 parameters,
        -prevProps,
        -prevState,
        -snapshot.

Destroy/Unmount/Exit
      -componentWillUnmount
        -runs after component is destroyed.
*/