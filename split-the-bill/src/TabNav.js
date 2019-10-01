import React from 'react';
import { Link } from 'react-router-dom';

const TabNav = () => {
    return (
        <div className='tab'>
            <h1><Link className='tab' to='/'>Home</Link></h1>
            <h1><Link className='tab' to='/login'>Login</Link></h1>
            <h1><Link className='tab' to='/calculator'>Calculator</Link></h1>
            <h1><Link className='tab' to='/invite'>Invite Friends</Link></h1>
            <h1><Link className='tab' to='/paid'>Paid or Not</Link></h1>
        </div>
    );
};

export default TabNav;