import React from 'react';
import ImageGirl from './Images/ImageGirl.png';


const containerStyles = {
    height: 10,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 15
  }

  const fillerStyles = {
    height: '100%',
    width: "85%",
    backgroundColor: 'yellowgreen',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

class AboutMe extends React.Component{
	render(){
		return(
			<div className="SetMargin">
				<h1>About Me</h1>
				<div className="FullWidthHeight">
					<div className="AboutMeContainer">
					<img src={ImageGirl} alt="Photo" width="100px" height="100px" style={{float: "left"}}/>
					<div className="AboutMeContent">
						<p style={{width: "40%", float:"left", textAlign: "center", marginLeft: "80px"}}> I am Aakriti Rampal, web developer from India . I have rich experience in web site design and building and customization, also I am good at WordPress. </p>
						<div style={{width: "26%", float:"left", textAlign: "center"}}>
							<div> 
							<div>Development  &nbsp; &nbsp; &nbsp; &nbsp; 85%</div>
								<div style={containerStyles}>
      									<div style={fillerStyles}>
      									</div>
    								</div>
							</div>
							<div> 
							<div>UI/UX Design  &nbsp; &nbsp; &nbsp; &nbsp; 70%</div>
								<div style={containerStyles}>
      									<div style={fillerStyles}>
      									</div>
    								</div>
							</div>
							<div> 
							<div>Photography  &nbsp; &nbsp; &nbsp; &nbsp; 60%</div>
								<div style={containerStyles}>
      									<div style={fillerStyles}>
      									</div>
    								</div>
							</div>
						</div>
					</div>
					</div>
					<div className="SetMargin">
						<div className="Projects">
							<div className="ProjectsFont"> 198 </div>
							<div>Projects Completed</div>
						</div>
						<div className="Projects">
							<div className="ProjectsFont"> 5670 </div>
							<div>Cup of Coffee</div>
						</div>
						<div className="Projects">
							<div className="ProjectsFont"> 427 </div>
							<div>Satisfied clients</div>
						</div>
						<div className="Projects">
							<div className="ProjectsFont"> 35 </div>
							<div>Nominees winner</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default AboutMe;