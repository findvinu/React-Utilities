import { Component } from "react";
import CounterButtons from "./CounterButtons";
import { Alert } from "react-bootstrap";

class Counters extends Component {
  state = {counterValue: 0};

  counterHandler = (type) => {
    this.setState({
      counterValues: type === 'inc' ? this.state.counterValue + 1 : this.state.counterValue - 1
    });
  };

  render() {
    const {counterValue} = this.state;

    return (
      <div className="counterWrapper">
        <p className="showCounterValue">{counterValue}</p>
        <CounterButtons
          counterValue={counterValue}
          counterHandler={this.counterHandler}
        />
        {(counterValue <= 0 || counterValue >= 10) && <AlertMsg
          variant={counterValue === 0 ? "danger" : "success"}
          msg={
            counterValue <= 0 
              ? "you have reach min value limit"
              : counterValue >= 10  ?
              "you have reach max value limit"
              : null
          }
        />}
      </div>
    );
  }
}

export default Counters;

class AlertMsg extends Component {
  render() {
    return (
      <div className="alertMsg">
        <Alert variant={this.props.variant}>{this.props.msg}</Alert>
      </div>
    );
  }
}
