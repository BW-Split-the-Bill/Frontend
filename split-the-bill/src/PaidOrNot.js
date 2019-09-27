import React, { useState } from 'react';
import axios from 'axios';


const Paid = () => {
    const [paid, setPaid] = useState();

    const Done = () => {
        setPaid(true);
    }

    const notDone = () => {
        setPaid(false);
    }

    if (paid === true) {
        return (
            <div className='owed'>
                <h3>Bill is paid up</h3>
                <button className='owed' onClick={Done}>Paid Off</button>
                <button className='owed' onClick={notDone}>Owes again</button>
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