import { Printer } from "../sauce/printer.ts";
import { JSX } from "preact/jsx-runtime";

interface CounterProps {
	sauce: Printer;
}

export default function PrinterCard(props: CounterProps): JSX.Element {
	const currentPrinter = props.sauce;
	return (
		<div class="card">
			<p>Name: {currentPrinter.name}</p>
			<p>Developer: {currentPrinter.developer}</p>
			<p>Motion System: {currentPrinter.motionSystem}</p>
			{currentPrinter.family ? <p>Family of Printers: {currentPrinter.family}</p> : ""}
			<p>Link to Project: <a href={currentPrinter.source.toString()}>{currentPrinter.source.host.toString()}</a></p>
			<p>License: {currentPrinter.license}</p>
		</div>
	);
}
