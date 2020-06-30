const { useReducer,useEffect } = require("react")


function reducer (state,action){
    switch (action.type) {
        case "change":
        localStorage.setItem("name",action.payload)    
        return{
            name:action.payload
        }
        case "persist":return{
            name:action.payload
        }
            
        default:
            break;
    }
    return state
}


let initialState={
}

const Name = () => {
    useEffect(() => {
        dispatch({
            type: "persist",
            payload: localStorage.getItem("name") || ""
          });
    
      }, []);

    const [state, dispatch] = useReducer(reducer,initialState)



    return (
        <div className="MyClass">
            <input placeholder="your name" value={state.name} onChange={(e)=>dispatch({type:"change",payload:e.target.value})}/>
            <h2>{state.name}</h2> 
        </div>
    )
}

export default Name