import { Routes, Route, useRoutes } from "react-router-dom";
import FormControlled from "./FunctionalComponents/form-controlled/FormControlled";
import RenderList from "./RenderList";
import FormControlledContextProvider from "./context/FormControlledContextProvider";
import Render from "./Render";
import Counters from "./ClassComponents/Counters/Counter";
import Counter from "./FunctionalComponents/counters/Counter";
import { CountersLayout } from "./CountersLayout";

import Calculators from "./FunctionalComponents/calculator/Calculators";
import Calculator from "./ClassComponents/Calculator/Calculator";
import { CalculatorsLayout } from "./CalculatorsLayout";
import { NotFound } from "./FunctionalComponents/not-found/NotFound";
import { Home } from "./Home";
import CookingLayout from './FunctionalComponents/cooking-food/CookingLayout';

const RouteLinks = () => {
 /*  const element = useRoutes([
    {
      path:'/counters',
     children:[
     {
      path:'/counters/counterClass',
      element: <Counters />
     },
     {
      path:'/counters/counterFunc',
      element: <Counter />
     }
     ]
    }
  ]) */
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/utilities" element={<CountersLayout />}>
        <Route path="counters" element={<CountersLayout />}>      
        <Route path="counerClass" element={<Counters />} /> 
          <Route path="counerFunc" element={ <div className="functionalComponentWrapper dFlex"><Counter /></div>} />      
        </Route>
        <Route exact path="calculator" element={<CalculatorsLayout />}>
        <Route path="counerClass" element={<Calculator />} /> 
          <Route path="counerFunc" element={<Calculators />} />      
        </Route>
        <Route exact path="renderList" element={<RenderList />} />
        <Route exact path="renderList/:id" element={<Render />} />
        <Route
          exact
          path="formControlled"
          element={
            <FormControlledContextProvider>
              <FormControlled />
            </FormControlledContextProvider>
          }
        />
       </Route>
      <Route path="/cookingFood" element={<CookingLayout />}>Cooking Food</Route>
       <Route path="*" element={<NotFound />} />
    </Routes>   
  ); 
 // return element;
};

export default RouteLinks;
