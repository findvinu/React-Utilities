import CalculatorButtons from "./CalculatorButtons";
import Display from "./Display";
// import CalcContext from "../../context/CalcContext";
import CalcComponentProvider from "../../context/CalcContextProvider";
import { useOutletContext } from "react-router-dom";
function Calculators() {
  const context = useOutletContext();

  return (
    <>
    {/* <CalcContext.Provider value={{ num, res, btn, btnValues,btnClickHandler }}> */}
    <h2 style={{ marginBottom:'30px'}}>{context.component}</h2>
    <CalcComponentProvider>
     <Display />
      <div className="btnWrapper dFlex flexWrap">      
          <CalculatorButtons />       
      </div>
      </CalcComponentProvider>
       {/* </CalcContext.Provider> */} 
     </>
  );
}

export default Calculators;
