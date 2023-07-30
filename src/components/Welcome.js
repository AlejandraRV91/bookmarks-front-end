/** @format */

import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
	return (
		<div className="welcome-container">
			<h1>Welcome to the Frontend</h1>
			<p>Thank you for visiting us! We hope you enjoy the experience.</p>
			<Link to="/bookmarks" className="btn-continue">
				Continue
			</Link>
		</div>
	);
};

export default Welcome;
