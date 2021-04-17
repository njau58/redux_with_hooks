export const  increment = () =>{
    return {
        type:'INCREMENT',
     

    }

}
export const  decrement = () =>{
    return {
        type:'DECREMENT'
    } 
}
export const  addFive = () =>{
    return {
        type:'ADD5',
        payload:5
    }
}
export const  subtractFive = () =>{
    return {
        type:'SUBTRACT5',
        payload:5
    }

}