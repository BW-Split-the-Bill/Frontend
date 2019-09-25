import React, { useState } from 'react';


const Paid = () => {
    const [owed, setOwed] = useState();

    const Done = () => {
        setOwed('Paid');
    }

    if (owed === 'Paid') {
        return (
            <div className='owed'>
                <h3>Bill is paid up</h3>
                <button className='owed' onClick={Done}>Paid Off</button>
            </div>
        )
    } else {
        return(
            <div className='owed'>
                <h3>Bill owes you</h3>
                <button className='owed' onClick={Done}>Paid Off</button>
            </div>

        )
    }

}

export default Paid;