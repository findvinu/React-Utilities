import { Button } from "react-bootstrap";

const CounterButtons = ({
  counterHandler,
  counterValue
}) => {

  const incrementVariant = counterValue >=10 ? 'secondary' : 'success';
  const decrementVariant = counterValue <=0 ? 'secondary' : 'danger';
  
  return (
    <div className="dFlex">
      <Button
        className="counterBtn"
        size="lg"
        variant={incrementVariant}
        onClick={() => counterHandler('inc')}
        disabled={counterValue >=10}
      >
        + func
      </Button>
      <Button
        className="counterBtn"
        size="lg"
        variant={decrementVariant}
        onClick={() => counterHandler('dec')}
        disabled={counterValue <=0}
      >
        -
      </Button>
    </div>
  );
};

export default CounterButtons;
