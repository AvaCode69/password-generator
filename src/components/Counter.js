import React,{Component,useState,useEffect} from 'react'

function useCounter (){
    const[count,setCount] = useState(0);
    function increment(){
        setCount(count+1)
    }
    return[count,increment]
}
function Counter() {
    const[count,increment] = useCounter()
    useEffect(()=>{
        console.log('lifecycle')
    },[count])
    return(
        <div>
    <h1>{count}</h1>
    <button  onClick={increment}>Add</button>
    </div>

    )
}



export default Counter

/*


*/