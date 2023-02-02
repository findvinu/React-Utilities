// import {useContext} from 'react';
import { Button } from "react-bootstrap";
// import CalcContext from "../../context/CalcContext";
// import {CalContext} from '../../context/CalcContextProvider';
import UseCalConsume from '../../custom-hooks/useCalConsume';

const CalculatorButtons = () => {
  const useCalConsume = {
    ...UseCalConsume()
  }
  return (
    <>
    {useCalConsume.btnValues.flat().map((btn, inx) => (
    <Button
      key={inx}
      size="lg"
      variant={(btn === "=" || btn === 'C') ? "primary" : "secondary"}
      className={btn === '=' ? 'equalBtn' : ''}
      onClick={useCalConsume.btnClickHandler}
      value={btn}
    >
      {btn}
    </Button>
     ))}
     </>
  );
};

export default CalculatorButtons;
