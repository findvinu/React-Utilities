import { Component } from "react";
import { Button } from "react-bootstrap";

class CounterButtons extends Component {
  render() {
    const {counterValue, counterHandler} = this.props;
    const decrementVariant = counterValue <=0 ? 'secondary' : 'danger';
    const incrementVariant = counterValue >=10  ? 'secondary' : 'success';
      
    return (
      <div className="dFlex">
        <Button
          className="counterBtn"
          size="lg"
          variant={incrementVariant}
          onClick={() => counterHandler('inc')}
          disabled={counterValue >=10}
        >
          + class
        </Button>
        <Button
          className="counterBtn"
          size="lg"
          variant={decrementVariant}
          onClick={()=>counterHandler('dec')}
          disabled={counterValue <=0}
        >
          -
        </Button>
      </div>
    );
  }
}

export default CounterButtons;
