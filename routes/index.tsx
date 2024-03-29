import { useSignal } from "@preact/signals";
import { openSauce } from "../sauce/printer.ts";
import CardHolder from "../islands/CardHolder.tsx";
import Filter from "../islands/Filter.tsx";
import SubjectSelector from "../islands/SubjectSelector.tsx";
import SelectorToggle from "../islands/SelectorToggle.tsx";
import { openAccessories } from "../sauce/accessory.ts";
import { openSlicer } from "../sauce/slicer.ts";
import { openFirmware } from "../sauce/firmware.ts";

export default function Home() {
	const sauces = useSignal(openSauce());
	const accessoryList = useSignal(openAccessories());
	const firmList = useSignal(openFirmware());
	const sliceList = useSignal(openSlicer());

	const selecting = useSignal(false);

	const filterString = useSignal("");

	const nameFilter = useSignal(false);
	const devFilter = useSignal(false);
	const licFilter = useSignal(false);
	const famFilter = useSignal(false);
	const motionFilter = useSignal(false);

	const accessories = useSignal(false);
	const firmware = useSignal(false);
	const printer = useSignal(true);
	const slicer = useSignal(false);

	return (
		<div>
			<a target={"self"} href={"https://github.com/JAS-lzn/marinara"}>
				<img
					class="sauce"
					src="/sauce.png"
					width="128"
					height="128"
					alt="the Marinara logo: a stylized jar of marinara sauce with sauce and basil coming out the mouth of the jar"
				/>
			</a>
			<div class="text-left toggle-holder">
				<SelectorToggle selecting={selecting} />
			</div>
			<div id="banner" class="w-16 py-8 mx-auto bg-[#9B7676]">
				<div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
					<h1 class="text-4xl font-bold">Marinara</h1>
					<p class="my-4">
						Find some tasty open sauce 3D Printing projects today!
					</p>
				</div>
			</div>

			<SubjectSelector
				accessories={accessories}
				firmware={firmware}
				printer={printer}
				selecting={selecting}
				slicer={slicer}
			/>

			<div class="body-holder">
				<Filter
					devFilter={devFilter}
					famFilter={famFilter}
					licFilter={licFilter}
					motionFilter={motionFilter}
					nameFilter={nameFilter}
					printer={printer}
				/>
				<CardHolder
					sauce={sauces}
					accessoryList={accessoryList}
					firmList={firmList}
					slicerList={sliceList}
					devFilter={devFilter}
					filterString={filterString}
					famFilter={famFilter}
					licFilter={licFilter}
					motionFilter={motionFilter}
					nameFilter={nameFilter}
					accessories={accessories}
					firmware={firmware}
					printer={printer}
					selecting={selecting}
					slicer={slicer}
				/>
			</div>
		</div>
	);
}
