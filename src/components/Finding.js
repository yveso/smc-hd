import React from "react";
import "./Finding.css";
import YouTubeVideo from "./YouTubeVideo";

function Finding({ youTubeId, from, title }) {
	return (
		<div className="container">
			<YouTubeVideo youTubeId={youTubeId} />
			<span>
				<span className="finder">{from}</span> hat sich an{" "}
				<span className="title">{title}</span> erinnert.
			</span>
		</div>
	);
}

export default Finding;
