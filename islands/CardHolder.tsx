import type { Signal } from "@preact/signals";
import { Printer } from "../sauce/printer.ts";
import PrinterCard from "../components/PrinterCard.tsx";
import { JSX } from "preact/jsx-runtime";

interface DisplayProps {
	sauce: Signal<Array<Printer>>;
}

export default function CardHolder(props: DisplayProps) {
	const setOfPrinters = props.sauce.value;

	const setOfCards: Array<JSX.Element> = [];

	setOfPrinters.forEach((printer) => {
		setOfCards.push(
			<PrinterCard sauce={printer} />,
		);
	});
	return (
		<div class="flex gap-8 py-6">
			{setOfCards}
		</div>
	);
}
