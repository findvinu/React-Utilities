import { Component } from "react";
import CalculatorButtons from "./CalculatorButtons";
import Display from "./Display";
import CalcContext from "../../context/CalcContext";

const btnValues = [
  ["C", "+-", "%", "/"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];
class Calculator extends Component {
  state = {
    sign:"",
    num: "",
    res: 0,
  };

  calcHandler = (e) => {
    e.preventDefault();
    let { num, res, sign } = this.state;
    const signValue = e.target.name;

    if (signValue === "C") {
      this.setState({
        num: "",
        sign: "",
        res: 0,
      });
    } else if (
      signValue === "+" ||
      signValue === "-" ||
      signValue === "x" ||
      signValue === "/" ||
      signValue === "%"
    ) {
      this.setState({
        res: num + signValue,
        num: "",
        sign: signValue,
      });
    } else if (signValue === "=") {
      let value = 0;
      switch (sign) {
        case "+":
            value = parseFloat(num) + parseFloat(res);
          break;
        case "-":
            value = parseFloat(num) - parseFloat(res);
          break;
        case "x":
            value = parseFloat(num) * parseFloat(res);
          break;
        case "/":
            value = parseFloat(num) / parseFloat(res);
          break;
        case "%":
            value = parseFloat(num) * parseFloat(res) / 100;
          console.log('percentage', value)
          break;
        case '+-':
            value = parseFloat(num) * parseFloat(res) - 1;
            break;
        default:
            value = signValue;
      }
      this.setState({
        res: value,
        num: "",
        sign: "",
      });
    } else {
      this.setState({
        num: num + signValue,
      });
    }
  };

  render() {
    return (
      <CalcContext.Provider value={{btnValues, calcHandler:this.calcHandler, num:this.state.num, res:this.state.res, sign:this.state.sign}}>
        <Display />
        <div className="btnWrapper dFlex flexWrap">        
            <CalculatorButtons />
        </div>
      </CalcContext.Provider>
    );
  }
}

export default Calculator;
