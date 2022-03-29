export const initialStats = (win) => {
	return {
		gamesPlayed: 1,
		winPercentage: 0,
		currentStreak: win ? 1 : 0,
		gamesWon: win ? 1 : 0,
		maxStreak: win ? 1 : 0,
	};
};
