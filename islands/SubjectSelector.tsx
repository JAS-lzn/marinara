import type { Signal } from "@preact/signals";
import { Subject } from "../components/Subject.tsx";

interface SubjectProps {
	accessories: Signal<boolean>;
	firmware: Signal<boolean>;
	printer: Signal<boolean>;
	slicer: Signal<boolean>;
	selecting: Signal<boolean>;
}

export default function SubjectSelector(props: SubjectProps) {
	const selecting = props.selecting.value;

	const accessories = props.accessories.value;
	const firmware = props.firmware.value;
	const printer = props.printer.value;
	const slicer = props.slicer.value;

	return (
		<div
			className={selecting ? "subject-selector visible" : "subject-selector"}
			tabindex={-1}
			aria-labelledby="drawer-label"
		>
			<Subject
				className={accessories ? "selected-selector" : ""}
				onClick={() => {
					toggleSelectors("accessories", props);
				}}
			>
				Accessories
			</Subject>
			<Subject
				className={firmware ? "selected-selector" : ""}
				onClick={() => {
					toggleSelectors("firmware", props);
				}}
			>
				Firmware
			</Subject>
			<Subject
				className={printer ? "selected-selector" : ""}
				onClick={() => {
					toggleSelectors("printer", props);
				}}
			>
				Printers
			</Subject>
			<Subject
				className={slicer ? "selected-selector" : ""}
				onClick={() => {
					toggleSelectors("slicer", props);
				}}
			>
				Slicers
			</Subject>
		</div>
	);
}

// this feels illegal, but I can't think of a better idea
function toggleSelectors(argSelector: string, argProps: SubjectProps) {
	argProps.accessories.value = argSelector === "accessories" ? true : false;
	argProps.firmware.value = argSelector === "firmware" ? true : false;
	argProps.printer.value = argSelector === "printer" ? true : false;
	argProps.slicer.value = argSelector === "slicer" ? true : false;
	argProps.selecting.value = false;
}
