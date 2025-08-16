export const BirdVisualTraitTypes = [
	"BeakShape",
	"PlumagePattern",
	"LegColor",
	"Size",
	"TailShape",
] as const;

export type BirdVisualTraitType = (typeof BirdVisualTraitTypes)[number];

export interface BirdVisualTrait {
	id: string;
	type: BirdVisualTraitType;
	description: string;
}
