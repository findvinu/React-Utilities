import { useEffect, useRef, useState } from "react"

export default function UseRefComponent(){
    const [name, setName] = useState('');
    const renderCount = useRef(1);
    const inputRef = useRef()
    const prevName = useRef()

    useEffect(()=>{
       renderCount.current = renderCount.current + 1
    })

    useEffect(() => {
        prevName.current = name
    }, [name])

    const focus = () => {
       console.log(' inputRef.current',  inputRef.current)
       inputRef.current.focus();
       inputRef.current.value = 'some value'
    }

    return(
        <>
        <input ref={inputRef} value={name} onChange={e  => setName(e.target.value)} />
        <div>My name is {name}</div>
        <div>I renderd {renderCount.current} times</div>
        <button onClick={focus}>Focus</button>
        <div>My name is {name} and it used to be {prevName.current}</div>
        </>
    )
}