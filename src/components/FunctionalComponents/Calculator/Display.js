// import {useContext} from 'react';
import { Textfit } from "react-textfit";
// import CalcContext from "../../context/CalcContext";
// import {CalContext} from '../../context/CalcContextProvider';
import UseCalConsume from '../../custom-hooks/useCalConsume';

const Display = () => {
   // const { res, num } = useContext(CalContext)
 const useCalConsume = {
    ...UseCalConsume()
 }
    return(
        <Textfit className="screen showCounterValue" mode="single" max={60}>
            {useCalConsume.num ? useCalConsume.num : useCalConsume.res}
        </Textfit>
    )
}

export default Display;