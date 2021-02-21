import React from 'react';

class Experience extends React.Component{
	render(){
		return(
			<div className="SetMargin1">
				<h1>Experience</h1>
				<div>
					<div className="AcademicDetails">
						<h2 className="fas fa-graduation-cap FontAwesomeStyling">Academic Details</h2>
						<div> Passed out from St Marks Sr. Sec. School Meera Bagh with 94% marks in class 12th in 2011 </div>
						<h2 className ="headerTop fas fa-graduation-cap FontAwesomeStyling">Bachelors Degree</h2>
						<div> Graduated from Hans Raj College, University Of Delhi with 86%. 2014 - 2011 </div>
						<h2 className ="headerTop fas fa-graduation-cap FontAwesomeStyling">Honours Degree</h2>
						<div> Post Graduated from Delhi University with 83%. 2016 - 2014 </div> 
					</div>
					<div className="AcademicDetails">
						<h2 className="fas fa-briefcase FontAwesomeStyling">Web Designer</h2>
						<div> Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. 2017 - 2013 </div>
						<h2 className ="headerTop fas fa-briefcase FontAwesomeStyling">Frontend Developer</h2>
						<div> Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. 2017 - 2013 </div>
						<h2 className ="headerTop fas fa-briefcase FontAwesomeStyling">Software Developer</h2>
						<div> Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. 2017 - 2013 </div> 
					</div>
				</div>
			</div>
		)
	}
}
export default Experience;