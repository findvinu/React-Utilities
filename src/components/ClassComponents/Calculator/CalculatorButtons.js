import { Component } from "react";
import { Button } from "react-bootstrap";
import CalcContext from "../../context/CalcContext";

class CalculatorButtons extends Component {
  render() {
    return (
      <CalcContext.Consumer>
        {(context) =>
          context.btnValues.flat().map((btn, inx) => (
            <Button
              key={inx}
              size="lg"
              variant={btn === "=" || btn === "C" ? "primary" : "secondary"}
              className={btn === "=" ? "equalBtn" : ""}
              name={btn}
              onClick={context.calcHandler}
            >
              {btn}
            </Button>
          ))
        }
      </CalcContext.Consumer>
    );
  }
}

export default CalculatorButtons;
