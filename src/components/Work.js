import React from 'react';
import photography from './Images/photography.jfif';
import uiux from './Images/uiux.png';
import webdevelopment from './Images/webdevelopment.png';

class Work extends React.Component{
	render(){
		return(
			<div className="SetMargin">
				<h1>Recent Works</h1>
				<div className="Services">
					<img src={photography} alt="Photography" width= "100px" height="100px"/>
				</div>
				<div className="Services">
					<img src={uiux} alt="uiux" width= "100px" height="100px" />
				</div>
				<div className="Services">
					<img src={webdevelopment} alt="web" width= "100px" height="100px" />
				</div>
			</div>
		)
	}
}
export default Work;