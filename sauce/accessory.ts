/**
 * representation of a add on, mod, etc for a 3d Printer
 * ex:https://github.com/Enraged-Rabbit-Community/ERCF_v2#enraged-rabbit-filametrix-erf
 */
export default class Accessory {
	// name of the mod, eg: "Enraged Rabbit"
	name: string;
	// the developer of the mod, eg: "Enraged Rabbit Community"
	developer: string;
	// a human-readable description of what the mod does, eg: "MMU", "Enclosure"
	description: string;
	// the license the mod is licensed under, eg: "GPL"
	license: string;
	// Link to the mods project page, eg: https://github.com/Enraged-Rabbit-Community/ERCF_v2
	source: URL;

	constructor(
		inputs: {
			argName: string;
			argDeveloper: string;
			argLicense: string;
			argDescription: string;
			argSource: URL;
		},
	) {
		const {
			argName,
			argDeveloper,
			argLicense,
			argDescription,
			argSource,
		} = inputs;

		this.name = argName;
		this.developer = argDeveloper;
		this.license = argLicense;
		this.description = argDescription;
		this.source = argSource;
	}
}
