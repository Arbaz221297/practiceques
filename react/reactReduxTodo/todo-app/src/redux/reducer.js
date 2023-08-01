import { addtodo,deletetodo, } from "./action"

const initialState={
    list:[]

}

const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD-TODO":

            const {id,data}=action.payload;
            return {...state,
                list:[...state.list,
                {
                    id:id,
                data:data
            }]}

            case "DELETE-TODO":

           const newList=state.list.filter((ele)=> ele.id !== action.id)
            return {...state,list:newList }


 


            case "REMOVE-TODO":

            // const newList=state.list.filter((ele)=> ele.id !== action.id)
             return {...state,list:[] }
        
        default : return state;
        
    }   
}

export default todoReducer;