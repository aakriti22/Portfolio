import React from 'react';

class Contact extends React.Component{
	render(){
		return(
			<div className="SetMargin">
				<h1>Get in touch</h1>
				<div>
					<div className="ContactClass">
						<h2>Lets Talk about everything!</h2>
					</div>
					<div className="ContactClass">
						<form>
							
							<input type="text" className="InputCss" placeholder="Name"/>
							<input type="text" placeholder="Email" className="InputCss MarginTop"></input>
							<input type="text" placeholder="Subject" className="InputCss MarginTop WidthFull"></input>
							<textarea type="text" placeholder="Message" className="InputCss MarginTop WidthFull"></textarea>
							<button type="submit" className="buttonCss">Send Message</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
export default Contact;