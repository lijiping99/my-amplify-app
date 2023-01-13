import { Outlet, Link } from "react-router-dom";
import {useState} from 'react';
import Amplify, { API } from 'aws-amplify'
import { useParams } from "react-router-dom"



const MarathonsRankings = () => {
     
   return (
        <div>
        <Link to="/marathons">Total Marathons Rankings</Link>&emsp;
        <Link to="/marathons/F">Female Marathons Rankings</Link>&emsp;
        <Link to="/marathons/M">Male Marathons Rankings</Link>
        </div>
    )
}

export default MarathonsRankings;