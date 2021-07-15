import React, { useState, useEffect } from 'react'



const PokeMe = (props) => {
    const [state, setState] = useState(0);

    useEffect(() => {
        console.log("start")
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
            .then(response => {
                return response.json();
            }).then(response => {
                setState({yourVar:response.results});
            }).catch(err=>{
                console.log(err);
            });
    },[])

    return (
        <div>
            <button type ="submit" className= "btn btn-primary" onClick = {clickHandler}>Get Pokemon</button>
            {state.yourVar ? state.yourVar.map( (item, index) => {
                return(<div key={index}>{item.name}</div>)
                }):null}
        </div>
    )
}

export default PokeMe;