export const initialStats = (win, row) => {
	const stats = {
		gamesPlayed: 1,
		currentStreak: win ? 1 : 0,
		gamesWon: win ? 1 : 0,
		maxStreak: 0,
		guesses: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, fail: 0 },
	};
	stats.guesses[row] = stats.guesses[row] += 1;
	return stats;
};
