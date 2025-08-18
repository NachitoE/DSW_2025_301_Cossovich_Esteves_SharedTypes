export interface BirdVisualTraitAssignment {
	birdVisualTraitId: string;
}

export interface Bird {
	name: string;
	scientificName: string;
	description: string;
	imageURL: string;
	id: string;
	visualTraits: BirdVisualTraitAssignment[];
}
