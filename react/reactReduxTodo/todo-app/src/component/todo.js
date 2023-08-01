

import {useState} from "react"
import {useSelector,useDispatch} from "react-redux"
import { addtodo ,deletetodo,removetodo} from "../redux/action"

const Todo=()=>{
    const dispatch=useDispatch();
    const list=useSelector((state)=>state.todoReducer.list)

    const [input,setInput]=useState("")
    return (
        <div>
        <div>
    <h1>todo app</h1>
    <input type="text" placeholder="add todo" value={input} onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={()=> dispatch(addtodo(input), setInput(''))
       }>add todo</button>
    </div>


 
<div >

        {list.map((ele)=>{
            return(
                <div style={{display:"flex"}} key={ele.id}>

                <h2>{ele.data}</h2><button onClick={()=>dispatch(deletetodo(ele.id))
                  
               }>DELETE todo</button>
                </div>
            )
              
            
        })}
        </div>

        <button onClick={()=> dispatch(removetodo())
       }>Remove</button>
        
        
        

        
        
        </div>
    )
}
export default Todo