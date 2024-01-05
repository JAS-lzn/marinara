import { JSX } from "preact";

export function FilterButton(props: JSX.HTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			{...props}
		/>
	);
}
