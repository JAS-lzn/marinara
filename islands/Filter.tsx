import type { Signal } from "@preact/signals";
import { FilterButton } from "../components/FilterButton.tsx";

interface FilterProps {
	nameFilter: Signal<boolean>;
	devFilter: Signal<boolean>;
	licFilter: Signal<boolean>;
	famFilter: Signal<boolean>;
	motionFilter: Signal<boolean>;

	printer: Signal<boolean>;
}

export default function Filter(props: FilterProps) {
	const nameStatus = props.nameFilter.value;
	const devStatus = props.devFilter.value;
	const licStatus = props.licFilter.value;
	const famStatus = props.famFilter.value;
	const motionStatus = props.motionFilter.value;

	const printer = props.printer.value;
	return (
		<div id="filter-parent" class={printer ? "" : "hidden"}>
			<p>Sort By:</p>
			<menu class={"filter-holder"}>
				<FilterButton
					class={nameStatus ? "filter-button filter-selected" : "filter-button"}
					onClick={() => toggleFilters("name", props)}
				>
					Name
				</FilterButton>
				<FilterButton
					class={devStatus ? "filter-button filter-selected" : "filter-button"}
					onClick={() => toggleFilters("dev", props)}
				>
					Developer
				</FilterButton>
				<FilterButton
					class={licStatus ? "filter-button filter-selected" : "filter-button"}
					onClick={() => toggleFilters("lic", props)}
				>
					License
				</FilterButton>
				<FilterButton
					class={famStatus ? "filter-button filter-selected" : "filter-button"}
					onClick={() => toggleFilters("fam", props)}
				>
					Family
				</FilterButton>
				<FilterButton
					class={motionStatus ? "filter-button filter-selected" : "filter-button"}
					onClick={() => toggleFilters("motion", props)}
				>
					Motion System
				</FilterButton>
			</menu>
		</div>
	);
}

// this feels illegal, but I can't think of a better idea
function toggleFilters(argFilter: string, argProps: FilterProps) {
	argProps.devFilter.value = argFilter === "dev" ? true : false;
	argProps.famFilter.value = argFilter === "fam" ? true : false;
	argProps.licFilter.value = argFilter === "lic" ? true : false;
	argProps.nameFilter.value = argFilter === "name" ? true : false;
	argProps.motionFilter.value = argFilter === "motion" ? true : false;
}
