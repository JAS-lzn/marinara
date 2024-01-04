import { MotionSystem, motionSystemSelector } from "./motionSystem.ts";
import { sauces } from "./printerList.ts";

/**
 * Representation of a 3d printer
 * the Name, Developer, License, and Source fields are all mandatory to ensure that we're accuratly crediting the
 * authors of these projects, and that the source files are easy to find for users.
 * the motion system field is mandatory becuase, well, the printer has to move somehow.
 * I've included the most popular motion systems, but "other" is a totally valid option if it's ambiguous
 */
export class Printer {
	// name of the printer, eg: "Mulbot"
	name: string;
	// the developer of the printer, eg: "Voron Design"
	developer: string;
	// the family of printers this printer belongs to, eg: "Prusa i series"
	// may be undefined, not all printers are part of a larger line
	family: string | undefined;
	// the license the printer is licensed under, eg: "GPL"
	license: string;
	// the motion system used by the printer, eg: "Bed Slinger"
	motionSystem: MotionSystem;
	// Link to the printers project page, eg: https://reprap.org/wiki/Mulbot
	source: URL;

	constructor(
		inputs: {
			argName: string;
			argDeveloper: string;
			argLicense: string;
			argFamily: string | undefined;
			argMotionSystem: MotionSystem;
			argSource: URL;
		},
	) {
		const {
			argName,
			argDeveloper,
			argLicense,
			argFamily,
			argMotionSystem,
			argSource,
		} = inputs;

		this.name = argName;
		this.developer = argDeveloper;
		this.license = argLicense;
		this.family = argFamily;
		this.motionSystem = argMotionSystem;
		this.source = argSource;
	}
}

export function openSauce(): Array<Printer> {
	const sauceAccumulator: Array<Printer> = [];

	sauces.forEach((sauce) => {
		sauceAccumulator.push(
			new Printer({
				argName: sauce.name,
				argDeveloper: sauce.developer,
				argLicense: sauce.license,
				argFamily: sauce.family,
				argMotionSystem: motionSystemSelector(sauce.motionSystem),
				argSource: new URL(sauce.source),
			}),
		);
	});

	return sauceAccumulator;
}
