import React, { useState } from 'react';


const Paid = () => {
    const [owed, setOwed] = useState();

    const Done = () => {
        setOwed(0);
    }
// idea for some payment options might get rid of later
    const Paid1 = () => {
        setOwed(owed - 1)
    }

    const Paid5 = () => {
        setOwed(owed - 5)
    }
    
    const Paid10 = () => {
        setOwed(owed - 10)
    }
    
    const Paid20 = () => {
        setOwed(owed - 20)
    }
    
    const Paid50 = () => {
        setOwed(owed - 50)
    }

    const Paid100 = () => {
        setOwed(owed - 100)
    }
// end
    return(
        <div>
        <h3>Bill owes you:</h3>
        <br/>
        <h2>${owed}</h2>
{/*also part of the idea*/}
        <div className='owed'>
            <button onClick={Paid1}>Paid $1</button>
            <button onClick={Paid5}>Paid $5</button>
            <button onClick={Paid10}>Paid $10</button>
        </div>
        <div className='owed'>
            <button onClick={Paid20}>Paid $20</button>
            <button onClick={Paid50}>Paid $50</button>
            <button onClick={Paid100}>Paid $100</button>
         </div>
{/*end*/}
        <div className='owed'>
            <button className='owed' onClick={Done}>Paid Off</button>
        </div>
        </div>
    )
}

export default Paid;