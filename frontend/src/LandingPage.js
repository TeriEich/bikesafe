import React from 'react';
import { Button } from 'reactstrap';

const landingVideoWebm = require ("./media/bikesafeto.webm");
const landingVideoMp4 = require ("./media/bikesafeto.mp4");



export default class LandingPage extends React.Component {
	render() {
		return (
			<header className="masthead">
				<div className="landing-media">
					<video playsInline autoPlay muted loop className="video">
	          <source className="video" src={landingVideoWebm} type="video/webm" />
	          <source className="video" src={landingVideoMp4} type="video/mp4" />
	          <source src="./media/landing-page-video-substitute.png" type="img/png" />
	        </video>
	        <div className="overlay" onClick={this.props.clickAnywhere} >
	        	<div className="overlay-text">
		          <h2 className="intro-lead-in">Mapping a Safer Future for Toronto's Cyclists</h2>
		          <h3 className="intro-heading">An application to help cyclists and advocates visualize, process, and update data to improve bike-related safety</h3>
		          <h4 className="intro-click-anywhere">Click anywhere to begin</h4>
	          </div>
	        </div>
				</div>
			</header>
		)
	}
}



// class LandingPage extends Component {

//   render() {
//     return (
//       <div className="landing-media">
//         <button className="show-map-btn" type="button">
//           Go to map
//         </button>
//         <video className="video" playsInline autoPlay loop>
//           <source className="video" src={require("./media/bikesafeto.webm")} type="video/webm" />
//           <source className="video" src={require("./media/bikesafeto.mp4")} type="video/mp4" />
//           <source src="./media/landing-page-video-substitute.png" type="img/png" />
//         </video>
//       </div>
//       );
//   }
// }