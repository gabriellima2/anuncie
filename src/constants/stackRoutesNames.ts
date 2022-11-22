import { TStackNames } from "@globalTypes/TStack";

export const stackRoutesNames: Record<TStackNames, TStackNames> = {
	Home: "Home",
	Details: "Details",
	Cart: "Cart",
	Ads: "Ads",
	NewAd: "NewAd",
	Profile: "Profile",
	AdEdit: "AdEdit",
	SearchResult: "SearchResult",
};

export const stacksWithoutTabBar = [
	stackRoutesNames.Details,
	stackRoutesNames.NewAd,
	stackRoutesNames.AdEdit,
	stackRoutesNames.SearchResult,
];
