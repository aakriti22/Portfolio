import React from 'react';
import ImageGirl from './Images/ImageGirl.png';
import icons from './Images/icons.png';
import { Link } from "react-router-dom";
import Background from './Images/background1.jpg';


class HomePage extends React.Component{
	render(){
		return(
			<div className="SetMarginHome" style={{backgroundImage: `url(${Background})`}}>
			<img src={ImageGirl} alt="Photo" height= "100px" width= "100px"/>
			<h1>
				Aakriti Rampal
			</h1>
			<p className="Profession">
				I'm a &nbsp;
			<span>
				Frontend Developer
			</span>
			</p>
			<img src={icons} alt="Social Media Icons" width="100px" height="100px" style={{marginTop: "25px"}}/>
			<div>
			<button type="button" className="buttonCss"> <Link to="/experience">Hire Me</Link> </button>
			</div>
			</div>
		)
	}
}
export default HomePage;