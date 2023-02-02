import { Component } from "react";
import { Textfit } from "react-textfit";
import CalcContext from "../../context/CalcContext";

class Display extends Component {
   render() {
    // const {num, res} = this.props;
    return (
      <Textfit className="screen showCounterValue" mode="single" max={60}>
        <CalcContext.Consumer>
          {(context) => context.num ? context.num : context.res }
        </CalcContext.Consumer>
      </Textfit>
    );
  }
}

export default Display;
