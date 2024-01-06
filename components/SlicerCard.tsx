import { JSX } from "preact/jsx-runtime";
import Slicer from "../sauce/slicer.ts";

interface CounterProps {
	slice: Slicer;
}

export default function SlicerCard(props: CounterProps): JSX.Element {
	const currentSlicer = props.slice;
	// we have to explicitly cast this as a URL here because of ???????
	// Honestly no clue why, but we get crashes if we try to access `currentSlicer.source.host`
	const currentURL = new URL(currentSlicer.source);
	return (
		<div class="card">
			<p>Name: {currentSlicer.name}</p>
			<p>Developer: {currentSlicer.developer}</p>
			<p>
				Link to Project: <a target="self" href={currentURL.toString()}>{currentURL.host?.toString()}</a>
			</p>
			<p>License: {currentSlicer.license}</p>
		</div>
	);
}
