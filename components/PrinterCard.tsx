import { Printer } from "../sauce/printer.ts";
import { JSX } from "preact/jsx-runtime";

interface CounterProps {
	sauce: Printer;
}

export default function PrinterCard(props: CounterProps): JSX.Element {
	const currentPrinter = props.sauce;
	// we have to explicitly cast this as a URL here because of ???????
	// Honestly no clue why, but we get crashes if we try to access `currentPrinter.source.host`
	const currentURL = new URL(currentPrinter.source);
	return (
		<div class="card">
			<p>Name: {currentPrinter.name}</p>
			<p>Developer: {currentPrinter.developer}</p>
			<p>Motion System: {currentPrinter.motionSystem}</p>
			{currentPrinter.family ? <p>Family of Printers: {currentPrinter.family}</p> : ""}
			<p>
				Link to Project: <a target="self" href={currentURL.toString()}>{currentURL.host?.toString()}</a>
			</p>
			<p>License: {currentPrinter.license}</p>
		</div>
	);
}
