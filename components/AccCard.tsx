import { JSX } from "preact/jsx-runtime";
import Accessory from "../sauce/accessory.ts";

interface CounterProps {
	acc: Accessory;
}

export default function AccessoryCard(props: CounterProps): JSX.Element {
	const currentAccessory = props.acc;
	// we have to explicitly cast this as a URL here because of ???????
	// Honestly no clue why, but we get crashes if we try to access `currentAccessory.source.host`
	const currentURL = new URL(currentAccessory.source);
	return (
		<div class="card">
			<p>Name: {currentAccessory.name}</p>
			<p>Developer: {currentAccessory.developer}</p>
			<p>Description: {currentAccessory.description}</p>
			<p>
				Link to Project: <a target="self" href={currentURL.toString()}>{currentURL.host?.toString()}</a>
			</p>
			<p>License: {currentAccessory.license}</p>
		</div>
	);
}
