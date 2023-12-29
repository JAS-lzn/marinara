import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import { openSauce } from "../sauce/printer.ts";

interface CounterProps {
	count: Signal<number>;
}

export default function Counter(props: CounterProps) {


	return (
		<div class="flex gap-8 py-6">
			<p>{JSON.stringify(sauces)}</p>
		</div>
	);
}
