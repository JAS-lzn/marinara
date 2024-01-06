/**
 * representation of a firmware for 3d printing
 */
export default class Slicer {
	// name of the slicer, eg: "Cura"
	name: string;
	// the developer of the slicer, eg: "Ultimaker"
	developer: string;
	// the license the slicer is licensed under, eg: "GPL"
	license: string;
	// Link to the slicers project page, eg: https://github.com/Ultimaker/Cura
	source: URL;

	constructor(
		inputs: {
			argName: string;
			argDeveloper: string;
			argLicense: string;
			argSource: URL;
		},
	) {
		const {
			argName,
			argDeveloper,
			argLicense,
			argSource,
		} = inputs;

		this.name = argName;
		this.developer = argDeveloper;
		this.license = argLicense;
		this.source = argSource;
	}
}
