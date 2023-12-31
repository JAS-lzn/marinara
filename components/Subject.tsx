import { JSX } from "preact";

export function Subject(props: JSX.HTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			type="button"
			class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
			{...props}
		/>
	);
}
