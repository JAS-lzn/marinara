// enum for motion systems
export enum MotionSystem {
	bedSlinger = "Bed Slinger",
	coreXY = "Core XY",
	crossGantry = "Cross Gantry",
	delta = "Delta",
	other = "Other",
}

export function motionSystemSelector(argInput: string) {
	argInput = argInput.toLowerCase();
	if (argInput === "bedslinger") {
		return MotionSystem.bedSlinger;
	}
	if (argInput === "corexy") {
		return MotionSystem.coreXY;
	}
	if (argInput === "crossgantry") {
		return MotionSystem.crossGantry;
	}
	if (argInput === "delta") {
		return MotionSystem.delta;
	}

	return MotionSystem.other;
}
