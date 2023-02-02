import { Component, useEffect, useState } from "react";
import { json } from "react-router-dom";

const CustomApi = [
 1,2,3,4,5
]

export class WindowSizeListClass extends Component{
    constructor(props){
        super(props)
        this.state = { windowWidth : window.innerWidth, item: []}
        this.updateWindowWidth = this.updateWindowWidth.bind(this)
    }

    updateWindowWidth(){
        this.setState({windowWidth: window.innerWidth})
    }

    componentDidMount(){
        window.addEventListener('resize', this.updateWindowWidth)
       // this.setState({ item: CustomApi.getList(this.props.url) })
    }

    componentDidUpdate(prevProps){
      if(prevProps.url !== this.props.url) {
      //  this.setState( { item: CustomApi.getList(this.props.url) })
      }
    }

    componetWillUnmount(){
        window.removeEventListener('resize', this.updateWindowWidth)
    }

    render(){
        return(
            <>
                <div>Window Width: {this.state.windowWidth}</div>
                {
                    this.state.item.map(item => {
                        return <div key={item}>{item}</div>
                    }) 
                }
            </>
        )
    }
} 

export function WindowSizeListFunc({url}){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [items, setItems] = useState([])

    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(()=>{
     //   setItems(CustomApi.getList(url))
        // console.log('useeffect')

        return () => { // console.log('clear console') 
        }
    }, [url])

    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth)
        return () => {
          window.removeEventListener('resize', updateWindowWidth)
        }
      }, [])
    

    return(
        <>
        <div>Window Width : {windowWidth}</div>
        {items.map(item => {
            return <div key={item}>{item}</div>
        })}
        </>
    )
}

export default function UserList(){
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([])

   // console.log('render')

    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))

        return () => {/* console.log('unMount') */}
    }, [resourceType])

    return(
        <>
        <button onClick={() => setResourceType('posts')}>Post</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comment</button>
        <h1>{resourceType}</h1>
      {/*   {items.map(item => {
            return <pre>{JSON.stringify(item)}</pre>
        })} */}
        </>
    )
}