import React from "react";
import "./styles.css";
import YouTubeVideo from "./components/YouTubeVideo";
import Finding from "./components/Finding";
import database from "./database";

export default function App() {
	const [samples, setSamples] = React.useState([]);

	React.useEffect(() => {
		const samples = database.sort(() => Math.random() - 0.5).slice(0, 3);
		setSamples(samples);
	}, []);

	return (
		<div className="App">
			<h1>Return to Schwimmbad Musik Club</h1>

			<YouTubeVideo youTubeId="CWzrABouyeE" />
			<p>
				Du kennst das auch. Du hörst (zufällig) ein (älteres) Lied und bemerkst,
				dass dieses Lied früher immer im Schwimmbad Musik Club lief. Und du
				denkst zurück, an eine vergangene, irgendwie unbeschwertere Zeit und
				plötzlich hast du irgendwie gute Laune.{" "}
				<span role="img" aria-label="lachender Smiley">
					😀
				</span>
				<br />
				<br />
				Da wir momentan alle gute Laune gut gebrauchen können, sollten wir diese
				Lieder sammeln und diese miteinander teilen.
			</p>
			<p>
				Wenn dir ein solches Lied einfällt, dann kannst du es sehr gerne
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://docs.google.com/forms/d/e/1FAIpQLSe56oikB62FMbvwxE7Mth9E2Fl-oH0LJaS50hRk8INkrk5GpA/viewform?usp=sf_link"
				>
					➡ in diesem Formular ⬅
				</a>
				eintragen.
			</p>
			<p>
				Sobald Ergebnisse in größerer Menge vorliegen, werden sie hier
				veröffentlicht. Es lohnt sich also, diese Seite in die Bookmarks
				aufzunehmen.{" "}
				<span role="img" aria-label="Zwinkersmiley">
					😉
				</span>
			</p>
			<p>
				Bis es soweit ist, hier ein paar Beispiele zur Inspiration:
				{samples.map((sample) => (
					<Finding {...sample} key={sample.youTubeId} />
				))}
			</p>
		</div>
	);
}
