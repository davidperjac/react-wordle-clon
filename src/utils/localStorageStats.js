import { initialStats } from '../constants/initialStats';

export const addGamePlayed = (setStatistics, statistics) => {
	const stats = {
		...statistics,
		gamesPlayed: (statistics.gamesPlayed += 1),
		maxStreak:
			statistics.maxStreak <= statistics.currentStreak
				? statistics.currentStreak
				: statistics.maxStreak,
	};
	setStatistics(stats);
};

export const addVictory = (setStatistics, statistics, row) => {
	const stats = {
		...statistics,
		gamesWon: (statistics.gamesWon += 1),
		currentStreak: (statistics.currentStreak += 1),
	};
	stats.guesses[row] = statistics.guesses[row] += 1;
	setStatistics(stats);
};

export const addDefeat = (setStatistics, statistics) => {
	const stats = {
		...statistics,
		currentStreak: 0,
	};
	stats.guesses.fail = statistics.guesses.fail += 1;
	setStatistics(stats);
};

export const hasNoStats = (setStatistics, win, row) => {
	setStatistics(initialStats(win, row));
};
