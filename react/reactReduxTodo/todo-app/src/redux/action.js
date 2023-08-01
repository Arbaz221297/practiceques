export const addtodo=(data)=>{

    return{
        type:"ADD-TODO",
        payload:{
            id:new Date().getTime().toString(),
            data:data

        }
    }
    
}

export const deletetodo=(id)=>{

    return{
        type:"DELETE-TODO",
        id:id
    }
    
}


export const removetodo=()=>{

    return{
        type:"REMOVE-TODO"
    }
    
}