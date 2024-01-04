import type { Signal } from "@preact/signals";
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
			<p>Link to Project: {currentPrinter.source.toString()}</p>
			<p>License: {currentPrinter.license}</p>
		</div>
	);
}
