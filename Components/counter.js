const { useReducer, useEffect } = require("react")


function reducer (state,action){
    switch (action.type) {
        case "inc":
            localStorage.setItem("count",state.count+1)    
            return{
            count:state.count+1
        }
         
        case "dec":
        localStorage.setItem("count",state.count-1)    
        return{
            count:state.count-1
        }
        case "persist":
                return{
            count:action.payload
        }
        default:
            break;
    }
    return state
}

let initialState={}





const Counter = () => {
    useEffect(() => {
        dispatch({
            type: "persist",
            payload: JSON.parse(localStorage.getItem("count")) || 0
          });
    
      }, []);
    
    
    const [state, dispatch] = useReducer(reducer,initialState)

    return (
        <div className="MyClass">
            <button onClick={()=>dispatch({type:"inc"})}>+</button>
            <h2>{state.count}</h2>
            <button onClick={()=>dispatch({type:"dec"})}>-</button>
        </div>
    )
}

export default Counter