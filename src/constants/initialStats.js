export const initialStats = (win) => {
	return {
		gamesPlayed: 1,
		currentStreak: win ? 1 : 0,
		gamesWon: win ? 1 : 0,
		maxStreak: 0,
	};
};
