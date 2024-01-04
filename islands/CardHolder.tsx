import type { Signal } from "@preact/signals";
import { Printer } from "../sauce/printer.ts";

interface CounterProps {
	sauce: Signal<Array<Printer>>;
}

export default function CardHolder(props: CounterProps) {

	return (
		<div class="flex gap-8 py-6">
			<p>{JSON.stringify(props.sauce)}</p>
		</div>
	);
}
