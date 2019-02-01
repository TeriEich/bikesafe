import React from 'react';
import { Button } from 'reactstrap';

export default class LandingPage extends React.Component {
	render() {
		return (
			<header className="masthead">
				<div className="landing-media">
					<video playsInline autoPlay muted loop className="video">
	          <source className="video" src={require("./media/bikesafeto.webm")} type="video/webm" />
	          <source className="video" src={require("./media/bikesafeto.mp4")} type="video/mp4" />
	          <source src="./media/landing-page-video-substitute.png" type="img/png" />
	        </video>
	        <div class="overlay">
	          <div className="intro-lead-in">bikesafeTO -- Mapping a Safer Future for Toronto's Cyclists</div>
	          <div className="intro-heading text-uppercase">An application to help cyclists and advocates visualize, process and update data to improve bike-related safety</div>
	          <Button onClick={this.props.toggle} className="landing-button" color="yellow" size="xl">SHOW ME</Button>
	        </div>
				</div>
			</header>
		)
	}
}

