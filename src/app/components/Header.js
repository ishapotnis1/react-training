/*
* @Author: Isha Potnis
* @Date:   2017-07-05 01:59:17
* @Last Modified by:   Isha Potnis
* @Last Modified time: 2018-01-24 05:35:25
*/

import React from "react";
import {NavLink} from "react-router-dom";

class Header extends React.Component {
		render(){
			return(
			<div>
				<ul className = "header">
		            <li><NavLink exact to="/">Home</NavLink></li>
		            <li><NavLink to="/root">Projects</NavLink></li>
		            <li><NavLink to="/user">Contact</NavLink></li>
		        </ul>
		    </div>
		);
		}
}

export default Header