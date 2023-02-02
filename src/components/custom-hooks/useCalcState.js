import { useState } from "react";


const useCalcState = () => {
    const [num, setNum] = useState("");
    const [sign, setSign] = useState("");
    const [res, setRes] = useState(0);
    const btnValues = [
        ["C", "+-", "%", "/"],
        ["7", "8", "9", "x"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["0", ".", "="],
      ];
  
    const btnClickHandler = (e) => {
      e.preventDefault();
      console.log('btnClickHandler clicked')
      const value = e.target.value;
      if (value === "C") {
        setRes(0);
        setNum("");
        setSign("");
      //  console.log("C clicked");
      } else if (
        value === "%" ||
        value === "/" ||
        value === "x" ||
        value === "-" ||
        value === "+"
      ) {
      //  console.log(`sign ${value} clicked`);
        setRes(num + value);
        setNum("");
        setSign(value);
      } else if (value === "=") {
      //  console.log("= clicked");
        let val = 0;
        switch (sign) {
          case "+":
            val = parseFloat(res) + parseFloat(num);
          //  console.log("+ val", val);
            break;
          case "-":
            val = parseFloat(res) - parseFloat(num);
          //  console.log("- val", val);
            break;
          case "x":
            val = parseFloat(res) * parseFloat(num);
          //  console.log("* val", val);
            break;
          case "/":
            val = parseFloat(res) / parseFloat(num);
          //  console.log("/ val", val);
            break;
          case "%":
            val = (parseFloat(res) * parseFloat(num)) / 100;
          //  console.log("% val", val);
            break;
          default:
            val = value;
          //  console.log("default", val);
        }
        setRes(val);
        setNum("");
        setSign("");
      } else {
        setNum(num + value); 
      }
    };

    return {
        num,          
        res,
        btnClickHandler,
        btnValues
    }
}

export default useCalcState;