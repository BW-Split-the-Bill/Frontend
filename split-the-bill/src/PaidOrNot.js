import React, { useState } from 'react';


const Paid = () => {
    const [paid, setPaid] = useState();

    const Done = () => {
        setPaid(true);
    }

    if (paid === true) {
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