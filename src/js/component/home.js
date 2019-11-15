import React from "react";

//include images into your bundle
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<div>
			<Jumbotron />
			<div className="d-flex justify-content-around">
				<Card title={"Card title"} />
				<Card title={"Card title"} />
				<Card title={"Card title"} />
				<Card title={"Card title"} />
			</div>
			<Footer />
		</div>
	);
}
