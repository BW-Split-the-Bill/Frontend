import React, { useState } from 'react';


const Paid = () => {
    const [owed, setOwed] = useState();

    const Done = () => {
        setOwed(0);
    }
    return(
        <div className='owed'>
            <h3>Bill owes you: ${owed}</h3>
            <button className='owed' onClick={Done}>Paid Off</button>
        </div>
    )
}

export default Paid;