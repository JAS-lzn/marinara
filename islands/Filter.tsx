import type { Signal } from "@preact/signals";
import { FilterButton } from "../components/FilterButton.tsx";

interface FilterProps {
	nameFilter: Signal<boolean>;
	devFilter: Signal<boolean>;
	licFilter: Signal<boolean>;
	famFilter: Signal<boolean>;
	motionFilter: Signal<boolean>;
}

export default function Filter(props: FilterProps) {
	const nameStatus = props.nameFilter.value;
	const devStatus = props.devFilter.value;
	const licStatus = props.licFilter.value;
	const famStatus = props.famFilter.value;
	const motionStatus = props.motionFilter.value;
	return (
		<menu class="filter-holder">
			<FilterButton
				class={nameStatus ? "filter-button filter-selected" : "filter-button"}
				onClick={() => props.nameFilter.value = !nameStatus}
			>
				Name
			</FilterButton>
			<FilterButton
				class={devStatus ? "filter-button filter-selected" : "filter-button"}
				onClick={() => props.devFilter.value = !devStatus}
			>
				Developer
			</FilterButton>
			<FilterButton
				class={licStatus ? "filter-button filter-selected" : "filter-button"}
				onClick={() => props.licFilter.value = !licStatus}
			>
				License
			</FilterButton>
			<FilterButton
				class={famStatus ? "filter-button filter-selected" : "filter-button"}
				onClick={() => props.famFilter.value = !famStatus}
			>
				Family
			</FilterButton>
			<FilterButton
				class={motionStatus ? "filter-button filter-selected" : "filter-button"}
				onClick={() => props.motionFilter.value = !motionStatus}
			>
				Motion System
			</FilterButton>
		</menu>
	);
}
