import React from 'react';
import { Route, Switch } from 'react-router';

class NavigationBar extends React.Component{
	render(){
		return(
			<div class="NavStyle">
				<div className="navCss">Home</div>
				<div className="navCss">About</div>
				<div className="navCss">Services</div>
				<div className="navCss">Experience</div>
				<div className="navCss">Works</div>
				<div className="navCss">Blog</div>
				<div className="navCss">Contact</div>
			</div>
		)
	}
}
export default NavigationBar;