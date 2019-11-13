import React from "react";

//include images into your bundle
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";

//create your first component
export function Home() {
	return (
		<div>
			<Jumbotron />
			<div className="d-flex justify-content-around">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}
