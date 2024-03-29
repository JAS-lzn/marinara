import { Signal } from "@preact/signals";

interface ToggleProps {
	selecting: Signal<boolean>;
}

export default function SelectorToggle(props: ToggleProps) {
	const selecting = props.selecting.value;
	return (
		<button
			class="text-white hamburger  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mb-2 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
			type="button"
			onClick={() => {
				props.selecting.value = !selecting;
			}}
		>
			<img src="burger.svg" id="burger" height={"128px"} alt="MDN" role="img" />
		</button>
	);
}
