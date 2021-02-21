import React from 'react';
import photography from './Images/photography.jfif';
import uiux from './Images/uiux.png';
import webdevelopment from './Images/webdevelopment.png';

class Services extends React.Component{
	render(){
		return(
			<div className="SetMargin">
				<h1>Services</h1>
				<div className="Services">
					<img src={uiux} alt="UI/UX Designs" width="100px" height="100px" />
					<div className="ServiceHeader">UI/UX Design</div>
					<div className="ServiceText">Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.</div>
				</div>
				<div className="Services">
					<img src={webdevelopment} alt="webdevelopment" width="100px" height="100px" />
					<div className="ServiceHeader">Web Development</div>
					<div className="ServiceText">Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.</div>
				</div>
				<div className="Services">
					<img src={photography} alt="Photography" width="100px" height="100px" />
					<div className="ServiceHeader">Photography</div>
					<div className="ServiceText">Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.</div>
				</div>
			</div>
		)
	}
}

export default Services;