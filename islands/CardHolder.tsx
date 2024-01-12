import type { Signal } from "@preact/signals";
import { Printer } from "../sauce/printer.ts";
import PrinterCard from "../components/PrinterCard.tsx";
import { JSX } from "preact/jsx-runtime";
import Accessory from "../sauce/accessory.ts";
import AccessoryCard from "../components/AccCard.tsx";
import Firmware from "../sauce/firmware.ts";
import Slicer from "../sauce/slicer.ts";
import SlicerCard from "../components/SlicerCard.tsx";
import FirmwareCard from "../components/FirmCard.tsx";

interface DisplayProps {
	// content to display
	sauce: Signal<Array<Printer>>;
	accessoryList: Signal<Array<Accessory>>;
	firmList: Signal<Array<Firmware>>;
	slicerList: Signal<Array<Slicer>>;

	// filters for printers
	nameFilter: Signal<boolean>;
	devFilter: Signal<boolean>;
	licFilter: Signal<boolean>;
	famFilter: Signal<boolean>;
	motionFilter: Signal<boolean>;

	// which content to display
	accessories: Signal<boolean>;
	firmware: Signal<boolean>;
	printer: Signal<boolean>;
	slicer: Signal<boolean>;
	selecting: Signal<boolean>;
}

interface contentOptions {
	printers: Array<Printer>;
	accessories: Array<Accessory>;
	firmware: Array<Firmware>;
	slicers: Array<Slicer>;
}

interface selectedContent {
	accessories: boolean;
	firmware: boolean;
	printer: boolean;
	slicer: boolean;
}

interface selectedFilters {
	nameFilter: boolean;
	devFilter: boolean;
	licFilter: boolean;
	famFilter: boolean;
	motionFilter: boolean;
}

export default function CardHolder(props: DisplayProps) {
	const setOfPrinters = props.sauce.value;

	const setOfFilters: selectedFilters = {
		nameFilter: props.nameFilter.value,
		devFilter: props.devFilter.value,
		licFilter: props.licFilter.value,
		famFilter: props.famFilter.value,
		motionFilter: props.motionFilter.value,
	};
	const sortedPrinters = handleFilters(setOfPrinters, setOfFilters);

	const argContentSelector: selectedContent = {
		accessories: props.accessories.value,
		firmware: props.firmware.value,
		printer: props.printer.value,
		slicer: props.slicer.value,
	};
	const argContent: contentOptions = {
		printers: sortedPrinters,
		accessories: props.accessoryList.value,
		firmware: props.firmList.value,
		slicers: props.slicerList.value,
	};

	return (
		<div class="borneo">
			<div id="filter-box">
				<label for="text-filter" class="filter-label">Search</label>
				<input
					id="text-filter"
					class="text-filter px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
					type="text"
				>
				</input>
			</div>
			<div class="card-grid">
				{handleSelector(argContentSelector, argContent)}
			</div>
		</div>
	);
}

function handleSelector(argContentSelector: selectedContent, argContent: contentOptions) {
	const setOfCards: Array<JSX.Element> = [];

	if (argContentSelector.accessories) {
		argContent.accessories.forEach((acc) => {
			setOfCards.push(
				<AccessoryCard acc={acc} />,
			);
		});

		return setOfCards;
	}
	if (argContentSelector.slicer) {
		argContent.slicers.forEach((slice) => {
			setOfCards.push(
				<SlicerCard slice={slice} />,
			);
		});

		return setOfCards;
	}
	if (argContentSelector.firmware) {
		argContent.firmware.forEach((firm) => {
			setOfCards.push(
				<FirmwareCard firm={firm} />,
			);
		});

		return setOfCards;
	}

	argContent.printers.forEach((printer) => {
		setOfCards.push(
			<PrinterCard sauce={printer} />,
		);
	});
	return setOfCards;
}

function handleFilters(argPrinters: Array<Printer>, argFilters: selectedFilters): Array<Printer> {
	if (argFilters.nameFilter === true) {
		return argPrinters.sort((a, b) => {
			if (a.name === b.name) {
				return 0;
			}
			return a.name < b.name ? -1 : 1;
		});
	} else if (argFilters.devFilter === true) {
		return argPrinters.sort((a, b) => {
			if (a.developer === b.developer) {
				return 0;
			}
			return a.developer < b.developer ? -1 : 1;
		});
	} else if (argFilters.motionFilter === true) {
		return argPrinters.sort((a, b) => {
			if (a.motionSystem === b.motionSystem) {
				return 0;
			}
			return a.motionSystem < b.motionSystem ? -1 : 1;
		});
	} else if (argFilters.famFilter === true) {
		return argPrinters.sort((a, b) => {
			if (a.family === b.family) {
				return 0;
			}
			if (a.family === undefined) {
				return -1;
			}
			if (b.family === undefined) {
				return -1;
			}
			return a.family < b.family ? -1 : 1;
		});
	} else if (argFilters.licFilter === true) {
		return argPrinters.sort((a, b) => {
			if (a.license === b.license) {
				return 0;
			}
			return a.license < b.license ? -1 : 1;
		});
	}

	return argPrinters;
}
