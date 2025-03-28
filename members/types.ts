import type teamsData from './teams';

export type Website = `http${'s' | ''}://${string}`;

export type Account =
	| {
			type:
				| 'linkedin'
				| 'dev'
				| 'codenewbie'
				| 'twitter'
				| 'twitch'
				| 'polywork'
				| 'medium'
				| 'hashnode'
				| 'github';
			username: string;
	  }
	| {
			type: 'youtube';
			channelId: string;
	  }
	| {
			type: 'youtube';
			customUrl: Website;
	  }
	| {
			type: 'website';
			url: Website;
			title: string;
	  };

export type Badge = 'Hacktoberfest2022';
export type Flare = {
	profileMask?: string;
};

export type MemberObject = {
	github: string;
	name?: string;
	mainUrl?: Website;
	bio?: string;
	accounts?: Account[];
	badges?: Badge[];
	flare?: Flare;
};

export type GithubSearchUser = {
	login: string;
	id: string | number;
	url: Website;
	avatarUrl: string;
	name?: string;
	company?: string;
	location?: string;
	isHireable?: boolean;
	bio?: string;
	bioHTML?: string;
	twitterUsername?: string;
	websiteUrl?: Website;
};

export type GithubSearchUserLookup = Record<string, GithubSearchUser>;

export type TeamName = keyof typeof teamsData;
export type TeamsDict = Record<string, TeamName[]>;

export type FixedUpUserAccount = Account & {
	Icon: string;
	url: Website;
	title: string;
};

export type FixedUpUser = Omit<MemberObject, 'accounts'> & {
	avatarUrl?: GithubSearchUser['avatarUrl'];
	teams?: TeamName[];
	accounts: FixedUpUserAccount[];
};

export type MemberList = (FixedUpUser | null)[];
