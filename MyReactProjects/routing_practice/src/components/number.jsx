import React from 'react';
import { Link } from '@reach/router';

const Number = (props) => {

    return (
        <div>
            {isNaN(props.id)
            ? <h1>The word is:{props.id}</h1>
            : <h1>The number is:{props.id}</h1>
            }
        </div>
    )
}



export default Number;