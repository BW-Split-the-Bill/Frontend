import React, { useState } from 'react';


const Paid = () => {
    const [owed, setOwed] = useState();

    const Done = () => {
        setOwed(0);
    }

    return(
        <div className='owed'>
        <h4>Bill owes you ${owed}</h4>
        <button onClick={Done}>Paid</button>
        </div>
    )
}

export default Paid;