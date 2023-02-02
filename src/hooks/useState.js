import { Component, useState } from "react";

export class CounterClass extends Component { 
    constructor(props){
        super(props)
        this.state={
            count : 0,
            theme : 'blue'
        }
    }

    changeCount(amount){
        this.setState(prevState => {
            return {
                ...prevState, count: prevState.count + amount, 
            }
        })
    }

    changePreference = () => {
        this.setState({theme: 'red'})
    }

    resetCount(){
        this.setState({count:0})
    }

    render(){
        return(
            <>
           <span style={{marginRight:'5px'}}>{this.state.count}</span> <span style={{marginRight:'5px'}}>{this.state.theme}</span>
           <span style={{marginRight:'5px'}}><button onClick={()=> this.changeCount(1)}>+</button></span>
           <span style={{marginRight:'5px'}}><button onClick={()=> this.changePreference()}>-</button></span>
           <button onClick={()=> this.resetCount()}>Reset</button>
           </>

        )
    }   
}

export function CounterFunctional(){
    const [count, setCount] = useState(0);
    const [perference, setPerference] = useState('blue')

    const changeCount = (amount) => {
        setCount(prevState =>  prevState + amount);
        setPerference('red')
    }
    
    
    const resetCount = () => {
        return(
            setCount(0)
        )
    }
    
    return(
         <>
           <span style={{marginRight:'5px'}}>{count}</span><span style={{marginRight:'5px'}}>{perference}</span>
           <span style={{marginRight:'5px'}}><button onClick={()=> changeCount(1)}>+</button></span>
           <span style={{marginRight:'5px'}}><button onClick={()=> changeCount(1)}>-</button></span>
           <button onClick={()=> resetCount()}>Reset</button>
           </>

    )
} 