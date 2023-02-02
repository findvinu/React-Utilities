import { useState } from "react";
import CounterButtons from "./CounterButtons";
import { Alert } from "react-bootstrap";
import { useParams, useOutletContext } from 'react-router-dom'

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const { counerFunc } = useParams();
  const context = useOutletContext();

  const counterHandler = (type) => {
    setCounterValue(prevCount => type === "inc" ? prevCount + 1 : prevCount - 1);
    console.log('counterValue', counterValue)
  };

  const alertMsg = counterValue <=0 ? 'you have reach min value limit' : counterValue >=10 ? 'you have reach max value limit' : null;
  const alertVariant = counterValue === 0 ? 'danger' : 'success';



  return (
    <div className="counterWrapper">
      <h2 style={{ marginBottom:'30px'}}>{context.component}</h2>
      {counerFunc} 
      <p className="showCounterValue">{counterValue}</p>
      <CounterButtons
        counterValue={counterValue}
        counterHandler={counterHandler}
      />   
       {(counterValue <=0 || counterValue >=10) && 
       <AlertMsg 
         alertVariant={alertVariant} 
         alertMsg={alertMsg} 
         />}  
    </div>
  );
};

export default Counter;

const AlertMsg = ({alertVariant, alertMsg}) => {
  return(
    <div className="alertMsg">
          <Alert variant={alertVariant}>{alertMsg}</Alert>
    </div>
  )
}
