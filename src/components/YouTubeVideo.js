import React from "react";

function YouTubeVideo({ youTubeId, width = 560, height = 315 }) {
	return (
		<iframe
			title={`YouTube Video ${youTubeId}`}
			style={{ display: "block", maxWidth: "100%", maxHeight: "auto" }}
			width={width}
			height={height}
			src={`https://www.youtube-nocookie.com/embed/${youTubeId}`}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		></iframe>
	);
}

export default YouTubeVideo;
