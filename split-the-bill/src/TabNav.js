import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import './App.css'
import TipCalculator from './tip-calculator/index';
import Invite from './Invite';
import Paid from './PaidOrNot';

export default function TabNav() {
    const panes =[
        {menuItem: 'Calculator', render:() => <Tab.Pane as={NavLink} to='/calculator'><TipCalculator/></Tab.Pane>},
        {menuItem: 'Invite Friends', render:() => <Tab.Pane as={NavLink} to='/invite'><Invite /></Tab.Pane>},
        {menuItem: 'Paid or Not', render:() => <Tab.Pane as={NavLink} to='/paid'><Paid/></Tab.Pane>},
    ]
        return  <Tab panes={panes}/>
};