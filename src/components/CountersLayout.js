import { NavLink, Outlet } from "react-router-dom";

export const CountersLayout = () => {
  return (
    <div style={{ maxWidth: "60%", margin: "0 auto", paddingTop: "30px" }}>
    {/*   <h1>Counters Component</h1> */}
      <div
        className="dFlex innerTabLinks"
        style={{ margin: "0 auto", paddingTop: "30px" }}
      >
        <NavLink to="/counters/counerClass"  className={({ isActive }) => (isActive ? "activeLink" : "")}>Class Component</NavLink>
        <NavLink to="/counters/counerFunc"  className={({ isActive }) => (isActive ? "activeLink" : "")}>Functional Component</NavLink>
      </div>
      <div className="dFlex" style={{ maxWidth: "100%", margin: "0 auto" }}>
        <div className="functionalComponentWrapper dFlex">
          <Outlet  context={{component : 'Counter Component'}} />
        </div>
      </div>
    </div>
  );
};
