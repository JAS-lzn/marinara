import { JSX } from "preact/jsx-runtime";
import Firmware from "../sauce/firmware.ts";

interface CounterProps {
	firm: Firmware;
}

export default function FirmwareCard(props: CounterProps): JSX.Element {
	const currentFirmware = props.firm;
	// we have to explicitly cast this as a URL here because of ???????
	// Honestly no clue why, but we get crashes if we try to access `currentFirmware.source.host`
	const currentURL = new URL(currentFirmware.source);
	return (
		<div class="card">
			<p>Name: {currentFirmware.name}</p>
			<p>Developer: {currentFirmware.developer}</p>
			<p>
				Link to Project: <a target="self" href={currentURL.toString()}>{currentURL.host?.toString()}</a>
			</p>

			<p>License: {currentFirmware.license}</p>
		</div>
	);
}
