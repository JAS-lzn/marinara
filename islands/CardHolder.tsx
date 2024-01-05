import type { Signal } from "@preact/signals";
import { Printer } from "../sauce/printer.ts";
import PrinterCard from "../components/PrinterCard.tsx";
import { JSX } from "preact/jsx-runtime";

interface DisplayProps {
	sauce: Signal<Array<Printer>>;
	nameFilter: Signal<boolean>;
	devFilter: Signal<boolean>;
	licFilter: Signal<boolean>;
	famFilter: Signal<boolean>;
	motionFilter: Signal<boolean>;
}

interface selectedFilters{
	nameFilter: boolean;
	devFilter: boolean;
	licFilter: boolean;
	famFilter: boolean;
	motionFilter: boolean;
}

export default function CardHolder(props: DisplayProps) {
	const setOfPrinters = props.sauce.value;

	const setOfCards: Array<JSX.Element> = [];
	const setOfFilters: selectedFilters = {
		nameFilter: props.nameFilter.valueOf(),
		devFilter: props.devFilter.valueOf(),
		licFilter: props.licFilter.valueOf(),
		famFilter: props.famFilter.valueOf(),
		motionFilter: props.motionFilter.valueOf()
	}
	const sortedPrinters = handleFilters(setOfPrinters, setOfFilters);

	sortedPrinters.forEach((printer) => {
		setOfCards.push(
			<PrinterCard sauce={printer} />,
		);
	});
	return (
		<div class="card-grid">
			{setOfCards}
		</div>
	);
}

function handleFilters(argPrinters: Array<Printer>, argFilters: selectedFilters): Array<Printer>{
	if(argFilters.nameFilter === true)
		return argPrinters.sort((a,b) => {
			if (a.name === b.name) {
				return 0;
			  }
			  return a.name < b.name ? -1 : 1;
		});
		else if(argFilters.devFilter === true)
		return argPrinters.sort((a,b) => {
			if (a.developer === b.developer) {
				return 0;
			  }
			  return a.developer < b.developer ? -1 : 1;
		});
		else if(argFilters.motionFilter === true)
		return argPrinters.sort((a,b) => {
			if (a.motionSystem === b.motionSystem) {
				return 0;
			  }
			  return a.motionSystem < b.motionSystem ? -1 : 1;
		});
		else if(argFilters.famFilter === true)
		return argPrinters.sort((a,b) => {
			if (a.family === b.family) {
				return 0;
			  }
			if (a.family === undefined)
				return -1
			if (b.family === undefined)
				return -1
			  return a.family < b.family ? -1 : 1;
		});
		else if(argFilters.licFilter === true)
		return argPrinters.sort((a,b) => {
			if (a.license === b.license) {
				return 0;
			  }
			  return a.license < b.license ? -1 : 1;
		});

	return argPrinters
}