import React,{useState} from 'react'
import "./style.css"

const App = ()=>{
    let [count,setCount]=useState(0)
    return(
        <div class="name">
        <h1>My counter Application</h1>
        <h3> The Value of Score Is  {count} </h3>
        <button onClick={()=>(count<25)? setCount(count+1):""}><b>+</b></button>
        <button onClick={()=>(count>0)? setCount(count-1):""}><b>-</b></button>
        <button onClick={()=> {setCount(0)}}><b>Reset</b></button>

        </div>

        )
}
export default App