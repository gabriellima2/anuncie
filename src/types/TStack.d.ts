export type TStackParams = {
	Home: undefined;
	Ads: undefined;
	NewAd: undefined;
	Cart: undefined;
	Profile: undefined;
	Details: { id: string };
	AdEdit: { id: string };
	SearchResult: { searchValue: string };
};

export type TStackNames = keyof TStackParams;
