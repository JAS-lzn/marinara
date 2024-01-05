

/**
 * representation of a firmware for 3d printing
 * 
 */
export default class Firmware{
	// name of the firmware, eg: "RepRap Firmware"
	name: string;
	// the developer of the firmware, eg: "Duet3D"
	developer: string;
	// the license the firmware is licensed under, eg: "GPL"
	license: string;
	// Link to the firmwares project page, eg: https://github.com/Duet3D/RepRapFirmware
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