import { NavLink, Outlet } from "react-router-dom";

export const CalculatorsLayout = () => {
  return (
    <div style={{ maxWidth: "60%", margin: "0 auto", paddingTop: "30px" }}>
      <h1>Calculators Component</h1>
      <div
        className="dFlex innerTabLinks"
        style={{ margin: "0 auto", paddingTop: "30px" }}
      >
        <NavLink to="/calculator/counerClass" className={({ isActive }) => (isActive ? "activeLink" : "")}>Class Component</NavLink>
        <NavLink to="/calculator/counerFunc" className={({ isActive }) => ( isActive ? "red" : "black")}>Functional Component</NavLink>
      </div>
      <div className="dFlex " style={{ maxWidth: "100%", margin: "0 auto" }}>
        <div className="functionalComponentWrapper dFlex">
          <div className="calculatorWrapper">
          <Outlet context={{component : 'Calculator Component'}} />
          </div>
        </div>
      </div>
    </div>
  );
};
