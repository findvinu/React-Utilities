import { Component } from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {

  render() {
    return (
      <div className="leftSidebar">
        <ul>
          <li><NavLink to="/" className={({isActive}) => (isActive ? 'activeLink' : '') }>Home</NavLink></li>
        <li><NavLink to="/counters" className={({ isActive }) => (isActive ? 'activeLink' : '')}>Counters</NavLink></li>
        <li><NavLink to="/calculator" className={({ isActive }) => (isActive ? 'activeLink' : '')}>Calculators</NavLink></li>
        <li><NavLink to="/renderList" className={({ isActive }) => (isActive ? 'activeLink' : '')}>RenderList</NavLink></li>
        <li><NavLink to="/formControlled" className={({ isActive }) => (isActive ? 'activeLink' : '')}>Form Controlled</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
